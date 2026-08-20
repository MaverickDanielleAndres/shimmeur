"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

const PILLARS = [
  {
    no: "01",
    title: "Design-led renovations",
    body: "Considered design that lifts a property's value before it goes to market — never generic cosmetic fixes.",
    img: "/ppt/image12.jpeg",
    imgAlt: "Sculptural garden feature with succulents — a Shimmeur design detail",
    reverse: false,
  },
  {
    no: "02",
    title: "Lifestyle properties",
    body: "We design for the way a home is meant to be lived in. Buyers pay a premium for a property they fall in love with.",
    img: "/ppt/image50.png",
    imgAlt: "Bright white kitchen renovation — lifestyle design by Shimmeur",
    reverse: true,
  },
  {
    no: "03",
    title: "Fast, focused flips",
    body: "Disciplined, high-impact. We know exactly where to invest effort and, importantly, where to stop.",
    img: "/ppt/image58.png",
    imgAlt: "Light-filled open-plan dining and living space after renovation",
    reverse: false,
  },
  {
    no: "04",
    title: "End-to-end management",
    body: "We step in fully — vision, trades, staging — so the owner stays completely hands-free.",
    img: "/ppt/image38.png",
    imgAlt: "Renovated home exterior at dusk — complete property transformation by Shimmeur",
    reverse: true,
  },
];

export default function WhatWeDo() {
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const els = rowsRef.current.filter(Boolean) as HTMLElement[];

    if (reduced) {
      els.forEach((el) => el.classList.add("wwd-row-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("wwd-row-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="property"
      className="relative overflow-clip"
      style={{ background: "var(--shimmeur-cream)" }}
    >
      {/* Subtle sage radial tint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 80% 0%, rgba(93,119,114,0.06) 0%, transparent 60%)",
        }}
      />

      {/* ── Section header ── */}
      <div className="shimmeur-container relative z-10 pt-20 md:pt-28 pb-16 md:pb-20">
        <FadeIn variant="reveal" as="div">
          <span
            className="eyebrow"
            style={{ display: "inline-block", marginBottom: "1.5rem" }}
          >
            Property
          </span>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-20 items-end">
            <h2
              className="font-display font-medium leading-[1.06]"
              style={{
                color: "var(--shimmeur-navy)",
                fontSize: "clamp(2rem, 3.4vw, 3.2rem)",
              }}
            >
              We help owners unlock{" "}
              <span
                className="italic"
                style={{ color: "var(--shimmeur-sage)" }}
              >
                property value
              </span>{" "}
              before sale.
            </h2>

            <p
              className="text-[1.02rem] leading-[1.88]"
              style={{ color: "var(--shimmeur-mid)", maxWidth: "460px" }}
            >
              Whether it&rsquo;s an off-market opportunity, a fast flip or a
              property that needs repositioning, we focus on unlocking the best
              version of the asset — providing professional end-to-end renovation
              management when you are selling.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* ── Alternating rows ── */}
      <div className="relative z-10">
        {PILLARS.map((p, i) => (
          <div
            key={p.no}
            ref={(el) => {
              rowsRef.current[i] = el;
            }}
            className={`wwd-row grid lg:grid-cols-2 lg:min-h-[340px]`}
            style={{
              borderTop: "1px solid var(--shimmeur-stone)",
              flexDirection: p.reverse ? "row-reverse" : "row",
            }}
          >
            {/* Text side */}
            <div
              className={`wwd-text-side flex flex-col justify-center px-8 py-14 md:px-14 md:py-20 lg:px-16 xl:px-20${
                p.reverse ? " lg:order-2" : " lg:order-1"
              }`}
            >
              <div
                className="font-display italic font-normal leading-none mb-5"
                style={{
                  fontSize: "3.2rem",
                  color: "var(--shimmeur-sage)",
                  opacity: 0.35,
                }}
              >
                {p.no}
              </div>
              <h3
                className="font-display font-medium leading-[1.15] mb-4"
                style={{
                  color: "var(--shimmeur-navy)",
                  fontSize: "clamp(1.4rem, 2vw, 1.85rem)",
                }}
              >
                {p.title}
              </h3>
              <p
                className="text-[0.97rem] leading-[1.82]"
                style={{ color: "var(--shimmeur-mid)", maxWidth: "380px" }}
              >
                {p.body}
              </p>

              {/* Thin sage accent line */}
              <div
                className="mt-10 h-px"
                style={{
                  width: "48px",
                  background: "var(--shimmeur-sage)",
                  opacity: 0.5,
                }}
              />
            </div>

            {/* Image side */}
            <div
              className={`wwd-img-side relative overflow-hidden min-h-[240px] lg:min-h-0${
                p.reverse ? " lg:order-1" : " lg:order-2"
              }`}
            >
              <Image
                src={p.img}
                alt={p.imgAlt}
                fill
                className="object-cover wwd-img"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Cream-edge gradient so image blends into the light bg */}
              <div
                aria-hidden="true"
                className="absolute inset-0 z-10"
                style={{
                  background: p.reverse
                    ? "linear-gradient(to right, rgba(247,244,239,0.28) 0%, transparent 60%)"
                    : "linear-gradient(to left, rgba(247,244,239,0.28) 0%, transparent 60%)",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom border */}
      <div style={{ height: "1px", background: "var(--shimmeur-stone)" }} />
    </section>
  );
}
