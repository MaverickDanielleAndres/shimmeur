"use client";

import { useEffect, useRef } from "react";
import FadeIn from "./FadeIn";
import StickyScroll from "./StickyScroll";

// Sourced from Shimmeur client preso — Slide 3: "Why Shimmeur?"
const POINTS = [
  {
    no: "01",
    title: "We understand our clients&rsquo; needs",
    body: "Every property and every owner is different. We take time to listen, understand the situation, and tailor our approach accordingly — never one-size-fits-all.",
  },
  {
    no: "02",
    title: "We love win-win deals",
    body: "Our partnership model is built on shared outcomes. When your property performs, so does the relationship. That alignment drives everything we do.",
  },
  {
    no: "03",
    title: "We design the vision",
    body: "Before a single tradesperson is briefed, we establish a clear picture of where the property is going — grounded in design, market reality, and your goals.",
  },
  {
    no: "04",
    title: "We collaborate",
    body: "Owners, agents, builders and stylists all pulling in the same direction. Great results come from great coordination, and we&rsquo;re the ones holding it together.",
  },
  {
    no: "05",
    title: "We take the hassle out of renovation",
    body: "From approvals to styling, the complexity stays off your plate. You stay informed — not overwhelmed. The project stress stays with us.",
  },
  {
    no: "06",
    title: "We bring property vision to life",
    body: "On time, on brief, and with the care the home — and the owner — deserve. We don&rsquo;t just project-manage; we champion the outcome.",
  },
  {
    no: "07",
    title: "We realise untapped value",
    body: "The difference between a property sold as-is and one properly prepared is where the Shimmeur opportunity lives. We close that gap, together.",
  },
];

export default function Opportunity() {
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
      {/* Thin animated accent line at top removed per request */}

      
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
              We understand what<br />
              <span className="inline-block">our clients need.</span>
            </h2>
            <p
              className="text-[1.05rem] leading-[1.85] max-w-[480px] mb-10"
              style={{ color: "var(--shimmeur-mid)" }}
            >
              Seven principles shape every project, every conversation, and
              every hand we extend to the people behind the property.
            </p>
            <a
              href="#what-we-do"
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

          {/* Scrolling right column — seven reason cards */}
          {POINTS.map((point, idx) => (
            <article
              key={point.no}
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
                  {point.no}
                </div>
              </div>
              <h3
                className="font-body font-semibold text-[1.05rem] tracking-[0.01em] mb-3"
                style={{ color: "var(--shimmeur-navy)" }}
                dangerouslySetInnerHTML={{ __html: point.title }}
              />
              <p
                className="text-[0.95rem] leading-[1.75]"
                style={{ color: "var(--shimmeur-mid)" }}
                dangerouslySetInnerHTML={{ __html: point.body }}
              />
            </article>
          ))}
        </StickyScroll>
      </div>
    </section>
  );
}
