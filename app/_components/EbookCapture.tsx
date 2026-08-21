"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

export default function EbookCapture() {
  const [data, setData] = useState({ firstName: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.firstName.trim() || !data.email.trim()) return;
    setStatus("loading");
    // Simulate endpoint
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <section
      id="ebook"
      className="py-12 md:py-16 lg:py-20 relative overflow-clip"
      style={{ background: "var(--shimmeur-navy-deep)", color: "#FFFFFF" }}
    >
      {/* Subtle radial tint to break the solid dark background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 80% 50%, rgba(149,165,141,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="shimmeur-container relative z-10">
        <FadeIn className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2
              className="font-display font-medium text-[2rem] md:text-[2.6rem] leading-[1.1] mb-5"
              style={{ color: "#FFFFFF" }}
            >
              Before You List: The Decisions That Actually Move the Needle
            </h2>
            <p
              className="text-[1.05rem] leading-[1.85]"
              style={{ color: "rgba(255,255,255,0.78)", maxWidth: "480px" }}
            >
              A complimentary Shimmeur guide — leave your details and we&rsquo;ll send it through.
            </p>
          </div>

          <div
            className="rounded-[6px] p-8 md:p-10"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {status === "success" ? (
              <div className="text-center py-6">
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full mb-4"
                  style={{ background: "rgba(149,165,141,0.15)", color: "var(--shimmeur-sage-light)" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h3 className="font-display text-[1.4rem] mb-2">Thank you</h3>
                <p style={{ color: "rgba(255,255,255,0.6)" }} className="text-[0.95rem]">
                  We&rsquo;ve registered your interest. We&rsquo;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="ebook-name" className="sr-only">First Name</label>
                    <input
                      id="ebook-name"
                      type="text"
                      value={data.firstName}
                      onChange={(e) => setData({ ...data, firstName: e.target.value })}
                      placeholder="First name"
                      required
                      disabled={status === "loading"}
                      className="w-full text-[0.92rem] py-3.5 px-[18px] rounded-[2px] outline-none transition-colors"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#FFFFFF",
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="ebook-email" className="sr-only">Email address</label>
                    <input
                      id="ebook-email"
                      type="email"
                      value={data.email}
                      onChange={(e) => setData({ ...data, email: e.target.value })}
                      placeholder="Email address"
                      required
                      disabled={status === "loading"}
                      className="w-full text-[0.92rem] py-3.5 px-[18px] rounded-[2px] outline-none transition-colors"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#FFFFFF",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 px-6 rounded-[2px] font-medium text-[0.8rem] tracking-[0.12em] uppercase transition-all duration-300 relative overflow-hidden"
                    style={{
                      background: "var(--shimmeur-sage)",
                      color: "#FFFFFF",
                    }}
                  >
                    <span className={`transition-opacity ${status === "loading" ? "opacity-0" : "opacity-100"}`}>
                      Notify me
                    </span>
                    {status === "loading" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="block h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      </div>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
