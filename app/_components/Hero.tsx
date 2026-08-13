"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const MODEL_STATS = [
  {
    value: "$0",
    label: "Out of pocket for the owner.",
    sub: "We fund the renovation.",
  },
  {
    value: "End‑to‑end",
    label: "We design, manage, and deliver.",
    sub: "You stay hands-free.",
  },
  {
    value: "At settlement",
    label: "You receive your agreed share",
    sub: "of the uplift value.",
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const linesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    // Stagger the hero text lines
    const delays = [0, 80, 160, 240, 360, 500];
    linesRef.current.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => {
        el.classList.add("hero-line-visible");
      }, delays[i] || i * 100);
    });

    // Card entrance
    if (cardRef.current) {
      setTimeout(() => {
        cardRef.current!.classList.add("hero-card-visible");
      }, 600);
    }

    // Stats stagger
    statsRef.current.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => {
        el.classList.add("hero-stat-visible");
      }, 700 + i * 140);
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-bg relative isolate overflow-hidden"
      style={{ minHeight: "100svh", display: "flex", alignItems: "center" }}
    >
      {/* Ambient grain overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hero-grain"
      />

      <div
        className="shimmeur-container relative z-10 w-full grid lg:grid-cols-[1.5fr_1fr] gap-10 xl:gap-16 items-center"
        style={{ paddingTop: "80px", paddingBottom: "40px" }}
      >
        {/* Left: headline + CTA */}
        <div>
          <span
            ref={(el) => { linesRef.current[0] = el; }}
            className="eyebrow eyebrow-light hero-line"
            style={{ display: "inline-block" }}
          >
            Property Lifestyle Consulting
          </span>

          <h1
            className="font-display font-bold leading-[1.04] mb-5 md:mb-6"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            }}
          >
            <span
              ref={(el) => { linesRef.current[1] = el; }}
              className="block hero-line"
            >
              Your property deserves
            </span>
            <span
              ref={(el) => { linesRef.current[2] = el; }}
              className="block hero-line"
              style={{ transitionDelay: "80ms" }}
            >
              more than it&rsquo;s been
            </span>
            <span
              ref={(el) => { linesRef.current[3] = el; }}
              className="block hero-line"
              style={{ transitionDelay: "160ms" }}
            >
              <em
                className="italic"
                style={{ color: "var(--shimmeur-sage-light)" }}
              >
                given.
              </em>
            </span>
          </h1>

          <p
            ref={(el) => { linesRef.current[4] = el; }}
            className="hero-line text-[0.98rem] md:text-[1.05rem] leading-[1.85] mb-8 md:mb-10"
            style={{
              color: "rgba(255, 255, 255, 0.78)",
              maxWidth: "520px",
              transitionDelay: "240ms",
            }}
          >
            Most properties sell without unlocking their full potential.
          </p>

          <div
            ref={(el) => { linesRef.current[5] = el; }}
            className="hero-line flex flex-wrap items-center gap-4"
            style={{ transitionDelay: "360ms" }}
          >
            <a href="#what-we-do" className="btn btn-primary">
              See how it works
            </a>
            <a href="#contact" className="btn btn-ghost-light">
              Get in touch
            </a>
          </div>
        </div>

        {/* Right: model card */}
        <div
          ref={cardRef}
          className="hidden lg:block hero-card rounded-[4px] p-9 xl:p-11"
          style={{
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <div
            className="font-medium tracking-[0.18em] uppercase text-[0.68rem] mb-7"
            style={{ color: "var(--shimmeur-sage-light)" }}
          >
            The Shimmeur model
          </div>

          <ul>
            {MODEL_STATS.map((stat, i) => (
              <li
                key={stat.value}
                ref={(el) => { statsRef.current[i] = el; }}
                className={`hero-stat${
                  i !== MODEL_STATS.length - 1 ? " mb-6 pb-6" : ""
                }`}
                style={
                  i !== MODEL_STATS.length - 1
                    ? { borderBottom: "1px solid rgba(255,255,255,0.1)" }
                    : {}
                }
              >
                <div
                  className="font-display text-[2rem] xl:text-[2.2rem] font-medium leading-[1.1] mb-1.5"
                  style={{ color: "#FFFFFF" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[0.82rem] leading-[1.5]"
                  style={{ color: "rgba(255, 255, 255, 0.6)" }}
                >
                  {stat.label}
                  <br />
                  {stat.sub}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Decorative S-mark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -bottom-32 opacity-[0.06] hidden md:block"
      >
        <Image
          src="/img/shimmeur-smark.png"
          alt=""
          width={520}
          height={520}
          className="invert"
          priority
        />
      </div>

      {/* Scroll affordance */}
      <a
        href="#opportunity"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 text-[0.62rem] tracking-[0.22em] uppercase z-10 scroll-cue"
        style={{ color: "rgba(255, 255, 255, 0.5)" }}
        aria-label="Scroll to content"
      >
        <span>Scroll</span>
        <span
          aria-hidden="true"
          className="block w-px h-10 scroll-cue-line"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
          }}
        />
      </a>
    </section>
  );
}
