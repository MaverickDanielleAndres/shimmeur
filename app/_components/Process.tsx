"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import FadeIn from "./FadeIn";

const STEPS = [
  {
    no: "1",
    title: "We agree on your property&rsquo;s value",
    body: "Together we establish the current market value of your property — the honest, agreed baseline everything else is built on.",
  },
  {
    no: "2",
    title: "We design the vision and fund the renovation",
    body: "Shimmeur funds the renovation entirely. We design the transformation, source the trades, and carry the cost — no outlay required from you.",
  },
  {
    no: "3",
    title: "We manage everything — you stay hands-free",
    body: "From first meeting to final styling, we handle every detail. Your role is to approve the vision and watch the transformation unfold.",
  },
  {
    no: "4",
    title: "At settlement, you receive your agreed share",
    body: "Once the property sells, Shimmeur recovers the renovation cost from the proceeds. The uplift is split per our agreement — you receive your share, clean and clear.",
  },
];

const EXAMPLE_ROWS = [
  { label: "Agreed current value", value: "$1,000,000", highlight: false, dividerBefore: false },
  { label: "Renovation investment (Shimmeur-funded)", value: "$100,000", highlight: false, dividerBefore: false },
  { label: "", value: "", highlight: false, dividerBefore: true },
  { label: "Sale price achieved", value: "$1,400,000", highlight: false, dividerBefore: false },
  { label: "Shimmeur cost recovery", value: "$100,000", highlight: false, dividerBefore: false },
  { label: "Uplift to share", value: "$300,000", highlight: false, dividerBefore: false },
  { label: "", value: "", highlight: false, dividerBefore: true },
  { label: "Your share (illustrative 50/50 split)", value: "$150,000", highlight: true, dividerBefore: false },
];

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stepEls = useRef<(HTMLDivElement | null)[]>([]);
  const numberEls = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const track = trackRef.current;
    if (!track) return;

    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      track.style.setProperty("--progress", "100%");
      // Activate all nodes
      stepEls.current.forEach((el) => el?.classList.add("is-active"));
      return;
    }

    // IntersectionObserver per step — activate node when step is in view
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLDivElement;
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            el.classList.add("is-active");
          }
        });
      },
      {
        threshold: [0, 0.3, 0.6],
        rootMargin: "-10% 0px -20% 0px",
      },
    );

    stepEls.current.forEach((el) => {
      if (el) stepObserver.observe(el);
    });

    // Scroll-driven line fill
    const onScroll = () => {
      const rect = track.getBoundingClientRect();
      const viewport = window.innerHeight;
      const trigger = viewport * 0.7;
      const progress = Math.max(
        0,
        Math.min(1, (trigger - rect.top) / (rect.height + viewport * 0.2)),
      );
      track.style.setProperty("--progress", `${(progress * 100).toFixed(1)}%`);

      const nodes = numberEls.current.filter(Boolean);
      if (nodes.length > 0) {
        const lastNode = nodes[nodes.length - 1];
        if (lastNode) {
          const lastNodeRect = lastNode.getBoundingClientRect();
          const trackHeight = lastNodeRect.bottom - rect.top;
          track.style.setProperty("--track-height", `${trackHeight}px`);
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      stepObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="what-we-do"
      className="section-pad relative overflow-clip overflow-hidden"
      style={{ background: "var(--shimmeur-navy)", color: "#FFFFFF" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 opacity-[0.06]"
      >
        <Image
          src="/ppt/image9.png"
          alt=""
          width={520}
          height={520}
          className="invert"
        />
      </div>

      
      {/* Decorative S-mark Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] -bottom-[10%] opacity-[0.03] z-0 hidden md:block"
      >
        <img
          src="/ppt/image9.png"
          alt=""
          width={800}
          height={800}
        />
      </div>

      <div className="shimmeur-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: scrolling steps */}
          <div className="min-w-0">
            <FadeIn variant="reveal" as="div">
              <span className="eyebrow eyebrow-light">The process</span>
              <h2
                className="font-display font-medium leading-[1.1] mb-5"
                style={{
                  color: "#FFFFFF",
                  fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                }}
              >
                Signature Spaces.
                <br />
                <em
                  className="italic font-normal"
                  style={{ color: "var(--shimmeur-sage-light)" }}
                >
                  Lasting Impressions.
                </em>
              </h2>
              <p
                className="text-[1.05rem] leading-[1.85] max-w-[520px] mb-14"
                style={{ color: "rgba(255, 255, 255, 0.72)" }}
              >
                Shimmeur provides a complete, end-to-end renovation management
                service. We design the vision, fund the project, manage the team,
                and deliver the transformation — so you can focus on what comes
                next.
              </p>
            </FadeIn>

            <div
              ref={trackRef}
              className="shimmeur-progress-track"
              style={{ "--progress": "0%" } as React.CSSProperties}
            >
              {STEPS.map((step, i) => (
                <div
                  key={step.no}
                  ref={(el) => { stepEls.current[i] = el; }}
                  className="shimmeur-progress-step"
                  data-step-index={i}
                >
                  <span
                    ref={(el) => { numberEls.current[i] = el; }}
                    className="shimmeur-progress-step__node"
                  >
                    {step.no}
                  </span>
                  <h3
                    className="text-[1.02rem] font-semibold mb-2 font-body mt-1 pr-4"
                    style={{ color: "#FFFFFF" }}
                  >
                    {step.title.replace(/&rsquo;/g, "'")}
                  </h3>
                  <p
                    className="text-[0.92rem] leading-[1.75]"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    dangerouslySetInnerHTML={{ __html: step.body }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: sticky illustrative example */}
          <div className="lg:sticky lg:top-28 min-w-0">
            <FadeIn variant="reveal-up" delay={1} as="div">
              <div
                className="rounded-[4px] p-8 lg:p-10"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div
                  className="font-medium tracking-[0.2em] uppercase text-[0.68rem] mb-2"
                  style={{ color: "var(--shimmeur-sage-light)" }}
                >
                  An illustrative example
                </div>
                <p
                  className="text-[0.82rem] leading-[1.65] mb-7"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  How a funded partnership could unfold.{" "}
                  <em
                    className="not-italic"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    Indicative only.
                  </em>
                </p>

                <ul className="text-[0.88rem]">
                  {EXAMPLE_ROWS.map((row, i) => {
                    if (row.dividerBefore) {
                      return (
                        <li
                          key={`divider-${i}`}
                          aria-hidden="true"
                          className="my-3 h-px"
                          style={{ background: "rgba(255,255,255,0.15)" }}
                        />
                      );
                    }
                    return (
                      <li
                        key={row.label}
                        className="flex justify-between items-baseline py-3.5 border-b border-white/10 last:border-b-0 gap-4"
                      >
                        <span
                          className={row.highlight ? "font-medium" : ""}
                          style={{
                            color: row.highlight
                              ? "var(--shimmeur-sage-light)"
                              : "rgba(255,255,255,0.6)",
                          }}
                        >
                          {row.label}
                        </span>
                        <span
                          className="font-display font-medium tabular-nums shrink-0"
                          style={{
                            color: row.highlight
                              ? "var(--shimmeur-sage-light)"
                              : "#FFFFFF",
                            fontSize: row.highlight ? "1.5rem" : "1.3rem",
                          }}
                        >
                          {row.value}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <p
                  className="text-[0.72rem] leading-[1.65] mt-6"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Split ratios vary by deal. This example is illustrative only
                  and does not represent a guarantee of return. Actual outcomes
                  depend on property, market, and agreed terms.
                </p>

                {/* Animated accent line at bottom */}
                <div
                  className="mt-6 h-px process-example-line"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(to right, var(--shimmeur-sage-light), transparent)",
                    transformOrigin: "left",
                  }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
