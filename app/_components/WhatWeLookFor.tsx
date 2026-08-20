"use client";

import FadeIn from "./FadeIn";

export default function WhatWeLookFor() {
  return (
    <section
      id="what-we-look-for"
      className="section-pad relative overflow-clip"
      style={{ background: "var(--shimmeur-white)" }}
    >
      <div className="shimmeur-container relative z-10">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <FadeIn variant="reveal" as="div" className="max-w-[700px]">
            <span className="eyebrow mb-6">What Shimmeur Looks For</span>

            <h2
              className="font-display font-medium leading-[1.4] mb-6"
              style={{
                color: "var(--shimmeur-navy)",
                fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)",
              }}
            >
              <strong>
                The goal isn&rsquo;t to renovate more. It&rsquo;s to make
                the right changes that bring a property to life.
              </strong>{" "}
              We look at what makes the home special and the lifestyle it can
              offer, while also considering how buyers are likely to respond,
              what the suburb expects, how the property compares with others on
              the market, and where presentation may be quietly working against
              its value.
            </h2>

            <p
              className="text-[1.05rem] leading-[1.85] mb-12"
              style={{ color: "var(--shimmeur-mid)" }}
            >
              From there, we focus the budget where it matters most, creating a
              clear hero for the property and a home people can genuinely see
              themselves living in.{" "}
              <strong>
                It&rsquo;s not renovation for renovation&rsquo;s sake. It&rsquo;s
                about creating the right feeling, for the right market, in the
                right places.
              </strong>
            </p>

            <div
              className="pt-8"
              style={{ borderTop: "1px solid var(--shimmeur-stone)" }}
            >
              <p
                className="font-display italic text-[1.2rem] md:text-[1.4rem] leading-[1.6]"
                style={{ color: "var(--shimmeur-sage)" }}
              >
                &ldquo;Strong property results come from disciplined decisions,
                careful design and surrounding ourselves with a great team
                united by a commitment to excellence.&rdquo;
              </p>
            </div>
          </FadeIn>

          {/* Subtle Image Support */}
          <FadeIn
            variant="reveal"
            delay={1}
            as="div"
            className="relative hidden lg:block h-full min-h-[500px] w-full rounded-[4px] overflow-hidden"
          >
            <img
              src="/What Shimmeur Looks For image.png"
              alt="What Shimmeur Looks For"
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
