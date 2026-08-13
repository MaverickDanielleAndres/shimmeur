"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";

const HERO_TESTIMONIALS = [
  {
    quote:
      "&ldquo;You&rsquo;ve thought about everything! We love our home. You&rsquo;ve helped us fulfill our dream to have our whole family together in a beautiful home. Thank you!&rdquo;",
    attribution: "The new owners",
    project: "Baulkham Hills, NSW",
  },
  {
    quote:
      "&ldquo;The transformation was beyond our expectations. Shimmeur's attention to detail and impeccable taste brought our vision to life seamlessly.&rdquo;",
    attribution: "Happy Clients",
    project: "Sydney, NSW",
  },
  {
    quote:
      "&ldquo;Trusted, design-led, and flawlessly delivered. We are thrilled with the results and the hassle-free experience from start to finish.&rdquo;",
    attribution: "Property Investors",
    project: "Central Coast, NSW",
  }
];


// Marquee testimonial snippets — short pull-quotes for the strip
const MARQUEE_SNIPPETS = [
  "You&rsquo;ve thought about everything",
  "Modern coastal upgrade — $180/wk rental uplift",
  "We love our home",
  "Hands-free renovation, maximum return",
  "Dream fulfilled",
  "Trusted. Design-led. Delivered.",
  "Helping families move forward",
  "The gap between as-is and prepared — recovered",
];

export default function Testimonials() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animState, setAnimState] = useState<'idle' | 'exiting' | 'entering'>('idle');

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const el = marqueeRef.current;
    if (el) {
      el.classList.add("marquee-running");
    }

    const interval = setInterval(() => {
      setAnimState('exiting');
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % HERO_TESTIMONIALS.length);
        setAnimState('entering');
        setTimeout(() => {
          setAnimState('idle');
        }, 50);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden section-pad"
      style={{ background: "var(--shimmeur-white)", paddingTop: "24px" }}
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

      <div className="shimmeur-container">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Hero testimonial */}
          <FadeIn variant="reveal" as="div" className="flex flex-col items-center w-full">
            <span className="eyebrow mb-4">In their words</span>
            
            <div
              className={`transition-all duration-500 ease-in-out w-full ${
                animState === 'exiting'
                  ? 'opacity-0 -translate-x-4'
                  : animState === 'entering'
                  ? 'opacity-0 translate-x-4'
                  : 'opacity-100 translate-x-0'
              }`}
            >
              <blockquote
                className="font-display italic leading-[1.4] mb-7 mt-2"
                style={{
                  color: "var(--shimmeur-navy)",
                  fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                }}
                dangerouslySetInnerHTML={{ __html: HERO_TESTIMONIALS[currentIndex].quote }}
              />
              <figcaption
                className="text-[0.78rem] tracking-[0.14em] uppercase mb-10 flex flex-col sm:flex-row items-center justify-center gap-2"
                style={{ color: "var(--shimmeur-sage)" }}
              >
                <span
                  className="font-medium"
                  style={{ color: "var(--shimmeur-navy)" }}
                >
                  — {HERO_TESTIMONIALS[currentIndex].attribution}
                </span>
                <span className="hidden sm:inline" style={{ color: "var(--shimmeur-mid)" }}>·</span>
                <span style={{ color: "var(--shimmeur-mid)" }}>
                  {HERO_TESTIMONIALS[currentIndex].project}
                </span>
              </figcaption>
            </div>

            {/* Decorative signature treatment */}
            <div className="flex items-center justify-center gap-4">
              <span
                aria-hidden="true"
                className="block h-px w-12 sm:w-20"
                style={{ background: "var(--shimmeur-sage-light)" }}
              />
              <span
                className="font-display italic text-[1.1rem]"
                style={{ color: "var(--shimmeur-sage)" }}
              >
                Beauty · Passion · Connection
              </span>
              <span
                aria-hidden="true"
                className="block h-px w-12 sm:w-20"
                style={{ background: "var(--shimmeur-sage-light)" }}
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Marquee strip */}
      <div
        className="mt-20 overflow-hidden relative"
        style={{ borderTop: "1px solid var(--shimmeur-stone)", borderBottom: "1px solid var(--shimmeur-stone)" }}
      >
        <div
          ref={marqueeRef}
          className="marquee-track py-4 flex gap-0 whitespace-nowrap"
          aria-hidden="true"
        >
          {/* Double the list for seamless loop */}
          {[...MARQUEE_SNIPPETS, ...MARQUEE_SNIPPETS].map((snippet, i) => (
            <span
              key={i}
              className="marquee-item inline-flex items-center gap-6"
            >
              <span
                className="font-display italic text-[1rem]"
                style={{ color: "var(--shimmeur-navy)" }}
                dangerouslySetInnerHTML={{ __html: snippet }}
              />
              <span
                aria-hidden="true"
                className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "var(--shimmeur-sage-light)" }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
