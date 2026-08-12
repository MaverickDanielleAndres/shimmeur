import Image from "next/image";
import FadeIn from "./FadeIn";

const SERVICES = [
  {
    title: "Rental refresh & rejuvenation",
    body: "Updating a long-held rental so it presents cleanly — protecting yield and preparing for sale without losing tenants or income.",
  },
  {
    title: "House & apartment turnovers",
    body: "Targeted, design-led improvements between tenancies or ahead of listing — quick, calm, on-brief.",
  },
  {
    title: "Styling for sale",
    body: "Furniture, art, and finishing choices that help buyers feel the property — not just measure it.",
  },
  {
    title: "Full vision & project management",
    body: "From first walk-through to final styling, one person owns the brief, the team and the result.",
  },
  {
    title: "Design-led renovations",
    body: "Structural and cosmetic works designed to maximise sale positioning — never decoration for its own sake.",
  },
  {
    title: "End-to-end renovation management",
    body: "Trades, timeline, budget, council, defects — managed from start to finish so owners do not have to.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="bg-shimmeur-navy section-pad relative overflow-hidden"
      style={{
        background: "var(--shimmeur-navy)",
        color: "#FFFFFF",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 opacity-[0.06]"
      >
        <Image
          src="/img/shimmeur-smark.png"
          alt=""
          width={520}
          height={520}
          className="invert"
        />
      </div>

      <div className="shimmeur-container relative z-10">
        <FadeIn className="max-w-[760px] mb-16">
          <span className="eyebrow eyebrow-light">What we do</span>
          <h2
            className="font-display font-medium text-[2.2rem] md:text-[2.9rem] lg:text-[3.4rem] leading-[1.1] mb-6"
            style={{ color: "#FFFFFF" }}
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
            className="text-[1.05rem] leading-[1.85] max-w-[640px]"
            style={{ color: "rgba(255, 255, 255, 0.75)" }}
          >
            Shimmeur is design-led renovation management for property owners
            preparing to sell. We design the vision, scope the project, manage
            the team and deliver the transformation — so the property commands
            more at settlement and the process never becomes the owner&rsquo;s
            problem.
          </p>
        </FadeIn>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 lg:gap-y-14">
          {SERVICES.map((service, i) => (
            <FadeIn
              key={service.title}
              delay={(((i % 3) + 1) as 1 | 2 | 3)}
              as="li"
            >
              <div
                className="pt-7 h-full flex flex-col"
                style={{ borderTop: "1px solid rgba(255,255,255,0.18)" }}
              >
                <div
                  className="font-display italic font-normal text-[1.6rem] leading-none mb-4"
                  style={{ color: "var(--shimmeur-sage-light)" }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="font-display font-medium text-[1.2rem] md:text-[1.3rem] leading-[1.25] mb-3"
                  style={{ color: "#FFFFFF" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[0.92rem] leading-[1.75]"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  {service.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
