"use client";

import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";

export default function Contact() {
  const handleCapitalPartner = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window === "undefined") return;
    // Update hash so the form pre-selects the Capital Partner option
    history.replaceState(null, "", "#connect?situation=capital-partner");
    window.dispatchEvent(
      new CustomEvent("shimmeur-preselect", { detail: "Capital Partner" })
    );
    const connect = document.querySelector("#connect");
    if (connect) {
      const top = connect.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="connect"
      className="section-pad relative overflow-clip"
      style={{ background: "#FFFFFF" }}
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
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <FadeIn>
              <span className="eyebrow">Get in touch</span>
              <h2
                className="font-display font-medium text-[2rem] md:text-[2.5rem] lg:text-[2.9rem] leading-[1.08] mb-5"
                style={{ color: "var(--shimmeur-navy)" }}
              >
                Let&rsquo;s talk about your property.
              </h2>
              <p
                className="text-[1rem] leading-[1.8] mb-11"
                style={{ color: "var(--shimmeur-mid)" }}
              >
                Every property and every situation is different. A conversation
                costs nothing — and it&rsquo;s often where the most valuable
                insight begins. We&rsquo;re here to listen, not to sell.
              </p>

              <dl className="space-y-5">
                <ContactDetail
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      aria-hidden="true"
                    >
                      <path d="M10 11a3 3 0 100-6 3 3 0 000 6z" />
                      <path d="M17 10c0 5-7 9-7 9s-7-4-7-9a7 7 0 0114 0z" />
                    </svg>
                  }
                  label="Location"
                  value="Sydney-based, working across the Inner West, Northwest and regional areas. We will travel for the right relationship."
                />
                <ContactDetail
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      aria-hidden="true"
                    >
                      <path d="M2 4h16v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" />
                      <path d="M2 4l8 8 8-8" />
                    </svg>
                  }
                  label="Email"
                  value={
                    <a
                      href="mailto:natalie@shimmeur.co"
                      className="link-underline"
                      style={{ color: "var(--shimmeur-navy)" }}
                    >
                      natalie@shimmeur.co
                    </a>
                  }
                />
                <ContactDetail
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      aria-hidden="true"
                    >
                      <path d="M3 4h14a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" />
                      <path d="M7 9l3 2 3-2" strokeLinecap="round" />
                    </svg>
                  }
                  label="Website"
                  value={
                    <a
                      href="https://www.shimmeur.co"
                      className="link-underline"
                      style={{ color: "var(--shimmeur-navy)" }}
                    >
                      shimmeur.co
                    </a>
                  }
                />
                <ContactDetail
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      aria-hidden="true"
                    >
                      <path d="M3 4h14a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" />
                      <path d="M7 9l3 2 3-2" strokeLinecap="round" />
                    </svg>
                  }
                  label="Property managers"
                  value={
                    <span>
                      For referral partnerships, write to{" "}
                      <a
                        href="mailto:letstalk@shimmeur.co"
                        className="link-underline"
                        style={{ color: "var(--shimmeur-navy)" }}
                      >
                        letstalk@shimmeur.co
                      </a>
                      .
                    </span>
                  }
                />
              </dl>
            </FadeIn>
          </div>

          <FadeIn delay={1}>
            <ContactForm />
          </FadeIn>
        </div>

        {/* Capital Partners — below and separate from the main contact form */}
        <div
          id="capital-partners"
          className="mt-24 lg:mt-32 pt-20 lg:pt-24"
          style={{ borderTop: "1px solid var(--shimmeur-stone)" }}
        >
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            <div>
              <span className="eyebrow">Capital Partner</span>
              <h3
                className="font-display font-medium leading-[1.1] mb-6"
                style={{
                  color: "var(--shimmeur-navy)",
                  fontSize: "clamp(1.85rem, 3vw, 2.5rem)",
                }}
              >
                Partner with Shimmeur.
              </h3>
              <p
                className="font-display italic text-[1.2rem] md:text-[1.4rem] leading-[1.55] mb-8 max-w-[420px]"
                style={{ color: "var(--shimmeur-sage)" }}
              >
                Come and play the long game with us.
              </p>
              <a
                href="#connect?situation=capital-partner"
                onClick={handleCapitalPartner}
                className="btn btn-navy"
              >
                Get in touch
              </a>

              <div className="mt-12 max-w-[420px]">
                <p
                  className="font-display italic text-[1.1rem] leading-[1.55] mb-5"
                  style={{ color: "var(--shimmeur-navy)" }}
                >
                  If that sounds like the kind of partnership you&rsquo;d like
                  to explore, let&rsquo;s have a confidential conversation.
                </p>
                <p
                  className="text-[0.78rem] leading-[1.65] pt-5"
                  style={{
                    color: "var(--shimmeur-mid)",
                    borderTop: "1px solid var(--shimmeur-stone)",
                  }}
                >
                  Any return modelling shared is illustrative and non-guaranteed.
                  We&rsquo;ll talk through it properly in a first conversation.
                </p>
              </div>
            </div>

            <div
              className="space-y-6 text-[1rem] leading-[1.85]"
              style={{ color: "var(--shimmeur-mid)" }}
            >
              <p>
                <strong style={{ color: "var(--shimmeur-navy)" }}>
                  Shimmeur builds
                </strong>{" "}
                relationships with people who see the opportunity in property
                beyond the next transaction. From shorter-term projects through
                to longer-term opportunities, we&rsquo;re open to partnering
                with people who want to be part of creating something with
                genuine potential.
              </p>
              <p>
                Every opportunity is different. Some are about unlocking value
                through a thoughtful transformation. Others are about holding a
                great property and allowing its potential to build over time.
              </p>
              <p>
                We bring the property thinking, project leadership and team.
                Our partners bring capital, perspective and the appetite to
                build something together.
              </p>
              <p>
                We&rsquo;re not looking for a long list of investors. We&rsquo;re
                looking for the right people to grow with. In many cases, that
                means working together across more than one opportunity as the
                relationship develops.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <span
        className="mt-[3px] flex-shrink-0 w-5 h-5"
        style={{ color: "var(--shimmeur-sage)" }}
      >
        {icon}
      </span>
      <div
        className="text-[0.92rem] leading-[1.65]"
        style={{ color: "var(--shimmeur-mid)" }}
      >
        <strong
          className="block text-[0.72rem] tracking-[0.12em] uppercase mb-[3px] font-semibold"
          style={{ color: "var(--shimmeur-navy)" }}
        >
          {label}
        </strong>
        {value}
      </div>
    </div>
  );
}
