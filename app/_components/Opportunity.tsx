"use client";

import { useEffect, useRef } from "react";
import FadeIn from "./FadeIn";
import StickyScroll from "./StickyScroll";

const POINTS = [
  {
    no: "01",
    title: "Overwhelm at the worst time",
    body: "Preparing a home for sale during a life transition — estate, separation, downsizing — is exhausting. Most owners don&rsquo;t have the bandwidth to do it well.",
  },
  {
    no: "02",
    title: "Guesswork that&rsquo;s expensive",
    body: "Without design expertise and renovation experience, most improvements either miss the mark or don&rsquo;t generate a meaningful return at auction.",
  },
  {
    no: "03",
    title: "Money left on the table",
    body: "The gap between a property sold as-is and one properly prepared can be significant — sometimes hundreds of thousands. That gap is the Shimmeur opportunity.",
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
      id="opportunity"
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
          src="/img/shimmeur-smark.png"
          alt=""
          width={800}
          height={800}
        />
      </div>

      <div className="shimmeur-container relative z-10">
        <StickyScroll>
          {/* Sticky left column */}
          <FadeIn variant="reveal" as="div">
            <span className="eyebrow">The reality</span>
            <h2
              className="font-display font-medium leading-[1.05] mb-6"
              style={{
                color: "var(--shimmeur-navy)",
                fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
              }}
            >
              Most properties sell for<br />
              <span className="whitespace-nowrap">less than they should.</span>
            </h2>
            <p
              className="text-[1.05rem] leading-[1.85] max-w-[480px] mb-10"
              style={{ color: "var(--shimmeur-mid)" }}
            >
              The stress of preparing a home for sale leads most owners to take
              shortcuts — or none at all. They sell as-is, buyers discount
              heavily for perceived work, and the gap between what a property
              could achieve and what it does is rarely recovered.
            </p>
            <a
              href="#what-we-do"
              className="inline-flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.16em] uppercase"
              style={{ color: "var(--shimmeur-navy)" }}
            >
              <span className="link-underline">See how we close the gap</span>
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

          {/* Scrolling right column — three problem cards */}
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
              >
                {point.title.replace(/&rsquo;/g, "'")}
              </h3>
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
