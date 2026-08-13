import FadeIn from "./FadeIn";

const PILLARS = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Driven by serving people",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Design quality, fit-for-purpose results",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Background in business management, resort, change & project management, colour & design",
  },
];

export default function OurExperience() {
  return (
    <section
      id="our-experience"
      className="relative overflow-hidden"
      style={{ background: "var(--shimmeur-cream)" }}
    >
      <div className="grid lg:grid-cols-2 min-h-[420px]">
        {/* Left — image */}
        <FadeIn variant="reveal" as="div" className="relative min-h-[260px] lg:min-h-0 order-1 lg:order-2">
          <img
            src="/img/natalie-headshot.jpeg"
            alt="Natalie Phillips — Founder of Shimmeur, Property Lifestyle Consultant"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
          />
          {/* Gradient blend right edge into content */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(to left, transparent 55%, var(--shimmeur-cream) 100%)",
            }}
          />
          {/* Bottom gradient for mobile */}
          <div
            className="absolute inset-0 block lg:hidden"
            style={{
              background:
                "linear-gradient(to bottom, transparent 55%, var(--shimmeur-cream) 100%)",
            }}
          />
        </FadeIn>

        {/* Right — content */}
        <FadeIn
          variant="reveal"
          as="div"
          className="flex flex-col justify-center px-8 py-10 lg:px-12 lg:py-12 order-2 lg:order-1"
        >
          <span className="eyebrow mb-5">Our experience</span>

          {/* Name + role */}
          <h2
            className="font-display font-medium text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] leading-[1.15] mb-1"
            style={{ color: "var(--shimmeur-navy)" }}
          >
            Natalie Phillips
          </h2>
          <p
            className="font-body text-[0.85rem] tracking-[0.08em] uppercase mb-5"
            style={{ color: "var(--shimmeur-sage)" }}
          >
            Shimmeur Founder &nbsp;·&nbsp; Property Lifestyle Consultant
          </p>

          {/* Tagline */}
          <p
            className="font-display italic text-[1.1rem] md:text-[1.2rem] leading-[1.6] mb-4 max-w-[420px]"
            style={{ color: "var(--shimmeur-navy)" }}
          >
            Beauty. Passion. Connection.
          </p>

          {/* Glimpse of story */}
          <p
            className="text-[0.95rem] leading-[1.7] mb-7 max-w-[480px]"
            style={{ color: "var(--shimmeur-charcoal)" }}
          >
            Led by someone who&rsquo;s done it before — many times. Nat Phillips brings an exceptional combination of design sensibility, project leadership, and commercial acumen to every property she touches, spanning some of Australia&rsquo;s finest resorts.
          </p>

          {/* Pillars */}
          <ul className="space-y-4 mb-8">
            {PILLARS.map((p) => (
              <li key={p.text} className="flex items-start gap-3.5">
                <span
                  className="mt-0.5 flex-shrink-0 rounded-full p-1.5"
                  style={{
                    background: "rgba(93,119,114,0.12)",
                    color: "var(--shimmeur-sage)",
                  }}
                >
                  {p.icon}
                </span>
                <span
                  className="text-[0.88rem] leading-[1.65]"
                  style={{ color: "var(--shimmeur-charcoal)" }}
                >
                  {p.text}
                </span>
              </li>
            ))}
          </ul>

          {/* School / credential block */}
          <div
            className="rounded-[6px] px-5 py-5"
            style={{
              background: "rgba(12,65,96,0.04)",
              border: "1px solid var(--shimmeur-stone)",
            }}
          >
            <p
              className="text-[0.65rem] font-medium tracking-[0.2em] uppercase mb-3"
              style={{ color: "var(--shimmeur-sage)" }}
            >
              Education &amp; training
            </p>
            <p
              className="font-body font-semibold text-[0.9rem] mb-0.5"
              style={{ color: "var(--shimmeur-navy)" }}
            >
              School of Colour &amp; Design
            </p>
            <p
              className="text-[0.82rem]"
              style={{ color: "var(--shimmeur-mid)" }}
            >
              The Rocks, Sydney
            </p>
          </div>

          {/* Button */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <a href="#contact" className="btn btn-navy inline-flex">
              Get in touch with Nat
            </a>
            <a 
              href="tel:+61416254020" 
              className="font-display font-medium text-[1.1rem] tracking-wide whitespace-nowrap"
              style={{ color: "var(--shimmeur-navy)" }}
            >
              +61 416 254 020
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
