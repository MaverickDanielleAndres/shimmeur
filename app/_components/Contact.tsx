import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      
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
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
          <FadeIn>
            <span className="eyebrow">Get in touch</span>
            <h2
              className="font-display font-medium text-[2rem] md:text-[2.5rem] lg:text-[2.9rem] leading-[1.1] mb-5"
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
                value="Sydney-based. We work across Inner West, Northwest Sydney, and beyond — and travel for the right relationship."
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
                  <span>
                    <a
                      href="https://www.shimmeur.co"
                      className="link-underline"
                      style={{ color: "var(--shimmeur-navy)" }}
                    >
                      shimmeur.co
                    </a>{" "}
                    — full site coming soon
                  </span>
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

          <FadeIn delay={1}>
            <ContactForm />
          </FadeIn>
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
