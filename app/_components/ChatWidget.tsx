"use client";

import { useEffect, useRef, useState } from "react";

type Msg = {
  role: "bot" | "user";
  text: string;
  time: string;
};

const INITIAL_SCRIPT: Msg[] = [
  {
    role: "bot",
    text: "Hi, I&rsquo;m Shimmy — every property has a story. What&rsquo;s yours right now?",
    time: "",
  },
];

const OPENING_PROMPTS = [
  "It needs a refresh before I sell",
  "A life change means it&rsquo;s time to move",
  "I want to maximise value before I list",
  "I want to explore a capital partnership",
  "I&rsquo;m just looking for now",
];

const INTRO_QUESTION =
  "Tell me a little about the property — type, suburb, and roughly where things are at. Then I&rsquo;ll point you in the right direction.";

const PARTNERSHIP_RESPONSE =
  "Capital partnership is one of the ways we work. Send your details via the Connect form and select &lsquo;Capital Partner&rsquo; — Natalie will reply personally. In the meantime, I can keep you company.";

function stamp() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function classifyAndReply(input: string): { reply: string; next?: string } {
  const lower = input.toLowerCase();

  if (lower.includes("capital") || lower.includes("partner")) {
    return {
      reply: PARTNERSHIP_RESPONSE,
      next: "scroll-to-connect-capital",
    };
  }

  if (lower.includes("just looking") || lower.includes("for now") || lower.includes("browsing")) {
    return {
      reply:
        "No rush. When you&rsquo;re ready, the Shimmeur guide &lsquo;Before You List&rsquo; is a useful starting point — leave your details in the Ebook section above and we&rsquo;ll send it through.",
    };
  }

  return {
    reply: INTRO_QUESTION,
    next: "follow-up",
  };
}

function followUpResponse(): string {
  return "Thanks for that. The cleanest next step is a quiet conversation with Natalie — leave your details in the Connect form above and select the situation that fits. Or, if you&rsquo;d like the Shimmeur guide first, you can request it from the Ebook section.";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [messages, setMessages] = useState<Msg[]>(INITIAL_SCRIPT);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const node = scrollRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [open, messages, typing]);

  // Populate timestamps client-side after mount to avoid hydration mismatch
  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      const now = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setMessages((m) =>
        m.map((msg) => (msg.time ? msg : { ...msg, time: now })),
      );
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Msg = { role: "user", text: trimmed, time: stamp() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      const { reply, next } = classifyAndReply(trimmed);
      const replyMsg: Msg = {
        role: "bot",
        text: reply,
        time: stamp(),
      };
      setMessages((m) => [...m, replyMsg]);
      setTyping(false);

      if (next === "scroll-to-connect-capital" && typeof window !== "undefined") {
        window.setTimeout(() => {
          history.replaceState(null, "", "#connect?situation=capital-partner");
          const select = document.querySelector("#situation");
          if (select instanceof HTMLSelectElement) {
            select.value = "Capital Partner";
            select.dispatchEvent(new Event("change", { bubbles: true }));
          }
          const connect = document.querySelector("#connect");
          if (connect) {
            const top = connect.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }, 400);
        setStep(2);
      } else if (next === "follow-up") {
        setStep(1);
      } else {
        setStep(2);
      }
    }, 700);
  };

  const handleFollowUp = () => {
    setStep(2);
    const userMsg: Msg = {
      role: "user",
      text: "(Tell Shimmy a bit about the property.)",
      time: stamp(),
    };
    setMessages((m) => [...m, userMsg]);
    setTyping(true);
    window.setTimeout(() => {
      const replyMsg: Msg = {
        role: "bot",
        text: followUpResponse(),
        time: stamp(),
      };
      setMessages((m) => [...m, replyMsg]);
      setTyping(false);
    }, 700);
  };

  const reset = () => {
    setStep(0);
    setMessages([INITIAL_SCRIPT[0]]);
    setInput("");
  };

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        aria-label={open ? "Close Shimmy" : "Open Shimmy"}
        aria-expanded={open}
        aria-controls="shimmeur-chat-panel"
        onClick={() => setOpen((v) => !v)}
        className={`fixed z-[55] bottom-6 right-6 md:bottom-8 md:right-8 flex h-[60px] w-[60px] items-center justify-center rounded-full transition-transform ${
          !open ? "shimmeur-chat-pulse" : ""
        }`}
        style={{
          background: "var(--shimmeur-navy)",
          color: "#FFFFFF",
          boxShadow: "0 12px 32px rgba(12,65,96,0.32)",
        }}
      >
        {open ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 12a8 8 0 01-11.6 7.1L4 21l1.9-5.4A8 8 0 1121 12z" />
            <circle cx="9" cy="12" r="0.9" fill="currentColor" />
            <circle cx="12" cy="12" r="0.9" fill="currentColor" />
            <circle cx="15" cy="12" r="0.9" fill="currentColor" />
          </svg>
        )}
      </button>

      {/* Panel */}
      <div
        id="shimmeur-chat-panel"
        role="dialog"
        aria-label="Shimmy chat"
        aria-hidden={!open}
        className={`fixed z-[55] inset-x-4 bottom-[88px] md:inset-x-auto md:right-8 md:bottom-[100px] md:w-[380px] transition-all duration-300 origin-bottom-right ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <div
          className="rounded-2xl overflow-hidden flex flex-col shadow-[0_24px_60px_rgba(8,46,71,0.25)]"
          style={{
            background: "#FFFFFF",
            border: "1px solid var(--shimmeur-stone)",
            maxHeight: "min(80vh, 620px)",
          }}
        >
          {/* Header */}
          <div
            className="px-5 py-3"
            style={{
              background: "var(--shimmeur-navy)",
              color: "#FFFFFF",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "var(--shimmeur-sage-light)",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 12a8 8 0 01-11.6 7.1L4 21l1.9-5.4A8 8 0 1121 12z" />
                </svg>
              </span>
              <div>
                <p className="font-display text-[0.95rem] leading-tight">
                  Shimmy
                </p>
                <p
                  className="text-[0.65rem] tracking-[0.1em] uppercase"
                  style={{ color: "var(--shimmeur-sage-light)" }}
                >
                  A quiet first conversation
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto chat-scroll"
            style={{ background: "var(--shimmeur-cream)" }}
          >
            <div className="px-5 py-5 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[85%] rounded-[16px] px-3.5 py-2.5 text-[0.75rem] leading-[1.55] shadow-sm"
                    style={
                      m.role === "user"
                        ? {
                            background: "var(--shimmeur-navy)",
                            color: "#FFFFFF",
                            borderBottomRightRadius: "4px",
                          }
                        : {
                            background: "#FFFFFF",
                            color: "var(--shimmeur-charcoal)",
                            border: "1px solid var(--shimmeur-stone)",
                            borderBottomLeftRadius: "4px",
                          }
                    }
                  >
                    <span dangerouslySetInnerHTML={{ __html: m.text }} />
                    <div
                      className="text-[0.6rem] mt-0.5 tracking-[0.06em] uppercase"
                      style={{
                        color:
                          m.role === "user"
                            ? "rgba(255,255,255,0.6)"
                            : "var(--shimmeur-mid)",
                      }}
                    >
                      {m.role === "bot" ? "Shimmy" : "You"} · {m.time}
                    </div>
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div
                    className="rounded-[12px] px-4 py-3 flex items-center gap-1"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid var(--shimmeur-stone)",
                      borderBottomLeftRadius: "4px",
                    }}
                  >
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="block h-[6px] w-[6px] rounded-full"
                        style={{
                          background: "var(--shimmeur-sage)",
                          animation: `shimmeur-typing 1s ${d * 0.15}s infinite ease-in-out`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Opening prompts — only on step 0 */}
              {step === 0 && messages.length <= 1 && (
                <div className="pt-2">
                  <div
                    className="text-[0.6rem] tracking-[0.14em] uppercase mb-2"
                    style={{ color: "var(--shimmeur-sage)" }}
                  >
                    Suggested
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {OPENING_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => send(prompt)}
                        className="text-[0.68rem] px-3 py-1.5 rounded-full transition-all hover:-translate-y-[1px] shadow-sm"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid var(--shimmeur-stone)",
                          color: "var(--shimmeur-navy)",
                        }}
                      >
                        <span dangerouslySetInnerHTML={{ __html: prompt }} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 1 — follow-up prompt */}
              {step === 1 && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleFollowUp}
                    className="text-[0.68rem] px-3 py-1.5 rounded-full transition-all hover:-translate-y-[1px] shadow-sm"
                    style={{
                      background: "var(--shimmeur-navy)",
                      color: "#FFFFFF",
                    }}
                  >
                    Share a bit about the property
                  </button>
                </div>
              )}

              {/* Step 2 — done; offer reset */}
              {step === 2 && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={reset}
                    className="text-[0.68rem] tracking-[0.08em] uppercase"
                    style={{ color: "var(--shimmeur-sage)" }}
                  >
                    Start over
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="px-4 py-3"
            style={{
              borderTop: "1px solid var(--shimmeur-stone)",
              background: "#FFFFFF",
            }}
          >
            <div className="relative flex items-center">
              <label htmlFor="shimmeur-chat-input" className="sr-only">
                Message
              </label>
              <input
                id="shimmeur-chat-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={step >= 2 ? "Conversation closed" : "Type a message…"}
                disabled={step >= 2}
                className="w-full text-[0.75rem] py-2 pl-4 pr-12 rounded-full outline-none transition-all focus:ring-2 focus:ring-[var(--shimmeur-sage)] disabled:opacity-50"
                style={{
                  background: "var(--shimmeur-cream)",
                  border: "1px solid var(--shimmeur-stone)",
                  color: "var(--shimmeur-charcoal)",
                }}
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={step >= 2}
                className="absolute right-1.5 h-[30px] w-[30px] rounded-full flex items-center justify-center transition-transform hover:scale-105 disabled:opacity-50"
                style={{
                  background: "var(--shimmeur-navy)",
                  color: "#FFFFFF",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmeur-typing {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-3px);
            opacity: 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          span {
            animation: none !important;
          }
        }
        .chat-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .chat-scroll::-webkit-scrollbar-track {
          background: transparent;
          margin-top: 4px;
          margin-bottom: 4px;
        }
        .chat-scroll::-webkit-scrollbar-thumb {
          background: var(--shimmeur-stone);
          border-radius: 10px;
        }
        .chat-scroll::-webkit-scrollbar-thumb:hover {
          background: var(--shimmeur-mid);
        }
      `}</style>
    </>
  );
}
