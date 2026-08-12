import FadeIn from "./FadeIn";

const PILLARS = [
  {
    title: "Trusted trades",
    body: "A hand-picked team of insured, licensed professional trades — chosen for quality, reliability and the way they treat the people behind the property.",
  },
  {
    title: "Professional partners",
    body: "When a property needs styling, real-estate photography, agent support or marketing polish, we coordinate the right partners to bring it all together.",
  },
  {
    title: "End-to-end delivery",
    body: "One person owns the brief, the budget and the timeline from start to finish. Owners stay informed and hands-free.",
  },
  {
    title: "Fit-for-purpose design",
    body: "Every decision is made for the property, the buyers and the numbers — never decoration for its own sake.",
  },
];

export default function Trust() {
  return (
    <section
      className="bg-shimmeur-white section-pad"
      style={{ background: "var(--shimmeur-white)" }}
    >
      <div className="shimmeur-container">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start">
          <FadeIn>
            <span className="eyebrow">Delivery &amp; trust</span>
            <h2
              className="font-display font-medium text-[2.2rem] md:text-[2.7rem] lg:text-[3rem] leading-[1.1] mb-6"
              style={{ color: "var(--shimmeur-navy)" }}
            >
              Sharp execution, backed by experience.
            </h2>
            <p
              className="text-[1.02rem] leading-[1.85] mb-8 max-w-[460px]"
              style={{ color: "var(--shimmeur-mid)" }}
            >
              Shimmeur is supported by an experienced builder and a trusted
              tribe of trades. The work is delivered to a professional standard,
              with the licences and insurance owners need in place from day one.
            </p>

            <dl
              className="pt-6 space-y-3 text-[0.85rem]"
              style={{ borderTop: "1px solid var(--shimmeur-stone)" }}
            >
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <dt
                  className="font-medium tracking-[0.14em] uppercase text-[0.7rem] sm:w-[180px]"
                  style={{ color: "var(--shimmeur-navy)" }}
                >
                  Builders Licence
                </dt>
                <dd style={{ color: "var(--shimmeur-mid)" }}>468960</dd>
              </div>
              <div
                className="flex flex-col sm:flex-row sm:gap-6 pt-3"
                style={{ borderTop: "1px solid var(--shimmeur-stone)" }}
              >
                <dt
                  className="font-medium tracking-[0.14em] uppercase text-[0.7rem] sm:w-[180px]"
                  style={{ color: "var(--shimmeur-navy)" }}
                >
                  Builder entity
                </dt>
                <dd style={{ color: "var(--shimmeur-mid)" }}>
                  Monistar Building Pty Ltd
                </dd>
              </div>
              <div
                className="flex flex-col sm:flex-row sm:gap-6 pt-3"
                style={{ borderTop: "1px solid var(--shimmeur-stone)" }}
              >
                <dt
                  className="font-medium tracking-[0.14em] uppercase text-[0.7rem] sm:w-[180px]"
                  style={{ color: "var(--shimmeur-navy)" }}
                >
                  Company Licence
                </dt>
                <dd style={{ color: "var(--shimmeur-mid)" }}>478414C</dd>
              </div>
            </dl>
            <p
              className="text-[0.78rem] leading-[1.7] mt-5 max-w-[460px]"
              style={{ color: "rgba(74,74,74,0.75)" }}
            >
              Licence references are shown for context and surety. They are not
              held by Natalie Phillips personally.
            </p>
          </FadeIn>

          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {PILLARS.map((pillar, i) => (
              <FadeIn
                key={pillar.title}
                delay={(((i % 3) + 1) as 1 | 2 | 3)}
                as="li"
              >
                <div
                  className="pt-5"
                  style={{ borderTop: "2px solid var(--shimmeur-sage)" }}
                >
                  <div
                    className="font-display italic text-[1.3rem] mb-2.5"
                    style={{ color: "var(--shimmeur-sage)" }}
                  >
                    0{i + 1}
                  </div>
                  <h3
                    className="font-display font-medium text-[1.2rem] mb-2"
                    style={{ color: "var(--shimmeur-navy)" }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-[0.92rem] leading-[1.75]"
                    style={{ color: "var(--shimmeur-mid)" }}
                  >
                    {pillar.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
