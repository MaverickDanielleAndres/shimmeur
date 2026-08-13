"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const MODEL_STATS = [
  {
    value: "$0",
    label: "Out of pocket for the owner.",
    sub: "We fund the renovation.",
  },
  {
    value: "End\u2011to\u2011end",
    label: "We design, manage, and deliver.",
    sub: "You stay hands-free.",
  },
  {
    value: "At settlement",
    label: "You receive your agreed share",
    sub: "of the uplift value.",
  },
];

const SLIDESHOW_IMAGES = [
  "/ppt/image37.png",
  "/ppt/image38.png",
  "/ppt/image41.JPG",
  "/ppt/image42.png",
  "/ppt/image43.png",
  "/ppt/image44.png",
  "/ppt/image50.png",
  "/ppt/image51.png",
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const linesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLLIElement | null)[]>([]);

  const [activeSlide, setActiveSlide] = useState(0);

  // Entrance animations
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const delays = [0, 80, 160, 240, 360, 500];
    linesRef.current.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => {
        el.classList.add("hero-line-visible");
      }, delays[i] || i * 100);
    });

    if (cardRef.current) {
      setTimeout(() => {
        cardRef.current!.classList.add("hero-card-visible");
      }, 600);
    }

    statsRef.current.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => {
        el.classList.add("hero-stat-visible");
      }, 700 + i * 140);
    });
  }, []);

  // Slideshow timer — advance every 4 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 4000);
    return () => clearInterval(id);
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
            className="font-display font-medium leading-[1.04] mb-5 md:mb-6"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            }}
          >
            <span
              ref={(el) => { linesRef.current[1] = el; }}
              className="block hero-line"
            >
              Your property
            </span>
            <span
              ref={(el) => { linesRef.current[2] = el; }}
              className="block hero-line"
              style={{ transitionDelay: "80ms" }}
            >
              deserves more than
            </span>
            <span
              ref={(el) => { linesRef.current[3] = el; }}
              className="block hero-line italic"
              style={{ transitionDelay: "160ms", color: "var(--shimmeur-sage-light)" }}
            >
              it&rsquo;s been given.
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
            style={{ transitionDelay: "320ms" }}
          >
            <a href="#what-we-do" className="btn btn-primary">
              See how it works
            </a>
            <a href="#contact" className="btn btn-ghost-light">
              Get in touch
            </a>
          </div>
        </div>

        {/* Right: model card — crossfade slideshow, text bottom-left */}
        <div
          ref={cardRef}
          className="hidden lg:flex hero-card rounded-[6px] relative overflow-hidden flex-col justify-end"
          style={{
            minHeight: "500px",
            border: "1px solid rgba(255, 255, 255, 0.10)",
          }}
        >
          {/* Crossfade slides — Next.js Image for full quality */}
          {SLIDESHOW_IMAGES.map((src, i) => (
            <div
              key={src}
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                zIndex: 0,
                opacity: i === activeSlide ? 1 : 0,
                transition: "opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 1024px) 38vw, 0px"
                className="object-cover object-center"
                quality={90}
                priority={i === 0}
              />
            </div>
          ))}

          {/* Bottom-only gradient so text is readable */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 z-[1]"
            style={{
              height: "60%",
              background:
                "linear-gradient(to top, rgba(5,18,32,0.90) 0%, rgba(5,18,32,0.52) 55%, transparent 100%)",
            }}
          />

          {/* Text — very small, bottom-left */}
          <div className="relative z-[2] p-7 xl:p-9">
            <div
              className="uppercase tracking-[0.22em] text-[0.45rem] font-semibold mb-4"
              style={{ color: "#FFFFFF" }}
            >
              The Shimmeur Model
            </div>

            <ul>
              {MODEL_STATS.map((stat, i) => (
                <li
                  key={stat.value}
                  ref={(el) => { statsRef.current[i] = el; }}
                  className={`hero-stat${
                    i !== MODEL_STATS.length - 1 ? " mb-3 pb-3" : ""
                  }`}
                  style={
                    i !== MODEL_STATS.length - 1
                      ? { borderBottom: "1px solid rgba(255,255,255,0.13)" }
                      : {}
                  }
                >
                  <div
                    className="font-display text-[0.85rem] xl:text-[0.9rem] font-medium leading-[1.1] mb-0.5"
                    style={{ color: "#FFFFFF" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[0.55rem] leading-[1.5]"
                    style={{ color: "rgba(255, 255, 255, 0.55)" }}
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
      </div>

      {/* Decorative S-mark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -bottom-32 opacity-[0.06] hidden md:block"
      >
        <Image
          src="/ppt/image9.png"
          alt=""
          width={520}
          height={520}
          className="invert"
          priority
        />
      </div>

      {/* Scroll affordance */}
      <a
        href="#why-shimmeur"
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

