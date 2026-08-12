import FadeIn from "./FadeIn";

const SITUATIONS = [
  {
    title: "Deceased Estates",
    body: "When a family home needs to transition with care and dignity, Shimmeur removes the burden of preparation so families can focus on what matters.",
  },
  {
    title: "Divorce &amp; Separation",
    body: "When joint assets need to be realised fairly and efficiently, we handle the property preparation so both parties can move forward with confidence.",
  },
  {
    title: "Downsizers",
    body: "You&rsquo;ve lived well in this home. Shimmeur ensures it&rsquo;s presented to the market in a way that reflects its true worth and your standards.",
  },
  {
    title: "Long-Term Rental Owners",
    body: "Years of tenancy can quietly erode a property&rsquo;s presentation. We transform it before it hits the market, maximising the return on your long-term investment.",
  },
];

const ICONS = [
  <svg
    key="home"
    width="36"
    height="36"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <rect x="8" y="20" width="32" height="22" rx="1" />
    <path d="M4 22L24 6L44 22" strokeLinecap="round" />
    <rect x="20" y="30" width="8" height="12" rx="1" />
  </svg>,
  <svg
    key="people"
    width="36"
    height="36"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <circle cx="16" cy="18" r="7" />
    <circle cx="32" cy="18" r="7" />
    <path d="M6 40C6 33.373 10.477 28 16 28" strokeLinecap="round" />
    <path d="M42 40C42 33.373 37.523 28 32 28" strokeLinecap="round" />
    <path d="M22 40H26" strokeLinecap="round" />
  </svg>,
  <svg
    key="downsize"
    width="36"
    height="36"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <path d="M8 36L24 12L40 36H8Z" strokeLinejoin="round" />
    <path d="M16 36V28H32V36" />
    <path d="M24 28V22" strokeLinecap="round" />
  </svg>,
  <svg
    key="rental"
    width="36"
    height="36"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <rect x="8" y="16" width="32" height="26" rx="1" />
    <path d="M16 16V10a4 4 0 018 0v6" strokeLinecap="round" />
    <path d="M28 16V10a4 4 0 014 4v2" strokeLinecap="round" />
    <path d="M16 28h16M16 34h10" strokeLinecap="round" />
  </svg>,
];

export default function WhoWeHelp() {
  return (
    <section
      id="who-we-help"
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--shimmeur-white)" }}
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
        <FadeIn className="max-w-[680px] mb-16">
          <span className="eyebrow">Our clients</span>
          <h2
            className="font-display font-medium text-[2.2rem] md:text-[2.7rem] lg:text-[3rem] leading-[1.1] mb-6"
            style={{ color: "var(--shimmeur-navy)" }}
          >
            People at a turning point.
          </h2>
          <p
            className="text-[1.05rem] leading-[1.85] max-w-[600px] mb-0"
            style={{ color: "var(--shimmeur-mid)" }}
          >
            Shimmeur works best when the timing feels complex — when life is
            moving and a property deserves a thoughtful, capable hand to guide
            it to its best outcome.
          </p>
        </FadeIn>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {SITUATIONS.map((sit, i) => (
            <FadeIn
              key={sit.title}
              delay={(((i % 4) + 1) as 1 | 2 | 3)}
              as="li"
            >
              <article
                className="shimmeur-who-card rounded-[4px] p-11 h-full flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                style={{
                  background: "#FFFFFF",
                }}
              >
                <div
                  className="mb-6 opacity-100"
                  style={{ color: "var(--shimmeur-navy)" }}
                >
                  {ICONS[i]}
                </div>
                <h3
                  className="font-display font-medium text-[1.05rem] mb-3"
                  style={{ color: "var(--shimmeur-navy)" }}
                  dangerouslySetInnerHTML={{ __html: sit.title }}
                />
                <p
                  className="text-[0.88rem] leading-[1.75]"
                  style={{ color: "var(--shimmeur-mid)" }}
                  dangerouslySetInnerHTML={{ __html: sit.body }}
                />
              </article>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
