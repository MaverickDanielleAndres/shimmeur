import FadeIn from "./FadeIn";

// Sourced from Shimmeur client preso, slide 3 — "Why Shimmeur?"
const PRINCIPLES = [
  {
    title: "We understand our client&rsquo;s needs",
    body: "Every property and every owner is different. We listen first, design second.",
  },
  {
    title: "We love win-win deals",
    body: "Outcomes that work for both sides are the only ones that last.",
  },
  {
    title: "We design the vision",
    body: "A clear picture of where the property is going — before a tradesperson is briefed.",
  },
  {
    title: "We collaborate",
    body: "Owners, agents, builders and stylists all pulling in the same direction.",
  },
  {
    title: "We take the hassle out of renovation",
    body: "From approvals to styling, the project stress stays off the owner&rsquo;s plate.",
  },
  {
    title: "We bring property vision to life",
    body: "On time, on brief, and with the care the home — and the owner — deserve.",
  },
  {
    title: "We realise untapped value",
    body: "The difference between &lsquo;as-is&rsquo; and properly prepared is where the opportunity lives.",
  },
  {
    title: "We deliver exceptional results",
    body: "A property that stands out in the market, commanding the attention and value it truly deserves.",
  },
];

export default function WhyShimmeur() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--shimmeur-navy-deep)", color: "#FFFFFF" }}
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
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <FadeIn variant="reveal" as="div" className="lg:sticky lg:top-[120px]">
            <span className="eyebrow eyebrow-light">Why Shimmeur</span>
            <h2
              className="font-display font-medium text-[2.2rem] md:text-[2.7rem] lg:text-[3.1rem] leading-[1.1] mb-6"
              style={{ color: "#FFFFFF" }}
            >
              The way we work.
            </h2>
            <p
              className="text-[1.02rem] leading-[1.85] max-w-[420px] mb-10"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              A renovation is a relationship. These are the principles that
              shape every project, every conversation, and every hand we extend
              to the people behind the property.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.16em] uppercase"
              style={{ color: "var(--shimmeur-sage-light)" }}
            >
              <span className="link-underline">Start a quiet conversation</span>
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

          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
            {PRINCIPLES.map((p, i) => (
              <FadeIn
                key={p.title}
                delay={(((i % 4) + 1) as 1 | 2 | 3)}
                as="li"
                className="relative pl-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 text-[0.78rem] font-display italic"
                  style={{ color: "var(--shimmeur-sage-light)" }}
                >
                  0{i + 1}
                </span>
                <h3
                  className="font-display font-medium text-[1.05rem] md:text-[1.1rem] leading-[1.35] mb-2.5"
                  style={{ color: "#FFFFFF" }}
                  dangerouslySetInnerHTML={{ __html: p.title }}
                />
                <p
                  className="text-[0.88rem] leading-[1.7]"
                  style={{ color: "rgba(255,255,255,0.62)" }}
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
