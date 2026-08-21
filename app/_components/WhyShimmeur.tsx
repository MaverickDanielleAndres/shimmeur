"use client";

import { useEffect, useRef } from "react";
import FadeIn from "./FadeIn";
import StickyScroll from "./StickyScroll";

const PILLARS = [
  {
    no: "01",
    title: "We see what your property could become — before a single trade is booked.",
    body: "We design the vision first, then we make the right changes to bring the property to life. Every recommendation is grounded in considered design, market reality, and the story the home is meant to tell.",
    detail: "Vision before trade.",
  },
  {
    no: "02",
    title: "We manage everything — design, trades, staging — so you don't have to.",
    body: "We hold the entire project together. Design, approvals, trades, styling, and the unforeseen moments in between. Owners stay informed and removed from the noise — the project stress stays with us.",
    detail: "Fuss-free, end-to-end.",
  },
  {
    no: "03",
    title: "We close the gap between what your property is and what it could sell for.",
    body: "The difference between a property sold as-is and one properly prepared is where the Shimmeur opportunity lives. We focus the budget where it matters most, so the result is felt on the sale sheet — not just in the brochure.",
    detail: "Value, realised.",
  },
];

export default function WhyShimmeur() {
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const bar = barRef.current;
    if (!bar) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bar.classList.add("opp-bar-animate");
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-shimmeur"
      className="section-pad relative overflow-clip"
      style={{ background: "var(--shimmeur-cream)" }}
    >
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
        <StickyScroll>
          {/* Sticky left column */}
          <FadeIn variant="reveal" as="div">
            <span className="eyebrow">Why Shimmeur</span>
            <h2
              className="font-display font-medium leading-[1.05] mb-6"
              style={{
                color: "var(--shimmeur-navy)",
                fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
              }}
            >
              Three convictions <br />
              <span>that shape every project.</span>
            </h2>
            <p
              className="text-[1.05rem] leading-[1.85] max-w-[480px] mb-10"
              style={{ color: "var(--shimmeur-mid)" }}
            >
              The work happens in the details — but it begins in the way we
              think about your property, your time, and the outcome you&rsquo;re
              working toward.
            </p>
            <a
              href="#property"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#property");
                if (target) {
                  const top = target.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.16em] uppercase"
              style={{ color: "var(--shimmeur-navy)" }}
            >
              <span className="link-underline">See how we work</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </FadeIn>

          {/* Scrolling right column — three conviction cards */}
          {PILLARS.map((pillar, idx) => (
            <article
              key={pillar.no}
              className="opp-card rounded-[4px] px-9 py-10"
              style={{
                background: "var(--shimmeur-white)",
                boxShadow: "0 4px 24px rgba(12,65,96,0.06)",
                transitionDelay: `${idx * 60}ms`,
              }}
            >
              {/* Number */}
              <div className="mb-3">
                <div
                  className="font-display italic font-normal text-[2.4rem] leading-none"
                  style={{ color: "var(--shimmeur-stone)" }}
                >
                  {pillar.no}
                </div>
              </div>
              <h3
                className="font-display font-medium mb-5"
                style={{
                  color: "var(--shimmeur-navy)",
                  fontSize: "clamp(1.25rem, 1.75vw, 1.55rem)",
                  lineHeight: "1.25",
                }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-[0.95rem] leading-[1.75]"
                style={{ color: "var(--shimmeur-mid)" }}
              >
                {pillar.body}
              </p>
              <div
                className="mt-7 pt-5"
                style={{ borderTop: "1px solid var(--shimmeur-stone)" }}
              >
                <span
                  className="font-display italic text-[0.95rem]"
                  style={{ color: "var(--shimmeur-sage)" }}
                >
                  {pillar.detail}
                </span>
              </div>
            </article>
          ))}
        </StickyScroll>
      </div>
    </section>
  );
}
