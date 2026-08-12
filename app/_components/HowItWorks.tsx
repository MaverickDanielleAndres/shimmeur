import FadeIn from "./FadeIn";

const STEPS = [
  {
    no: "01",
    title: "Agree on current value",
    body: "Together we establish the property&rsquo;s honest current market value — the agreed baseline everything else is built on.",
  },
  {
    no: "02",
    title: "Design the vision",
    body: "Shimmeur creates the transformation — material selections, layout, colour, staging — built around the property, the buyers and the numbers.",
  },
  {
    no: "03",
    title: "Manage every detail",
    body: "From first meeting to final styling, our trusted team handles trades, timeline and budget. Your role is to approve the vision and watch it unfold.",
  },
  {
    no: "04",
    title: "Settle & share",
    body: "The property sells. Shimmeur recovers costs at settlement. The uplift is shared as agreed — clean, transparent, and on the agreed terms.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-shimmeur-white section-pad"
      style={{ background: "var(--shimmeur-white)" }}
    >
      <div className="shimmeur-container">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
          <FadeIn>
            <span className="eyebrow">How it works</span>
            <h2
              className="font-display font-medium text-[2.2rem] md:text-[2.7rem] lg:text-[3rem] leading-[1.1] mb-6"
              style={{ color: "var(--shimmeur-navy)" }}
            >
              A clear, four-step path to settlement.
            </h2>
            <p
              className="text-[1.05rem] leading-[1.85] max-w-[520px] mb-10"
              style={{ color: "var(--shimmeur-mid)" }}
            >
              Whether you engage Shimmeur for end-to-end project management or
              under our funded renovation partnership, the path is the same —
              agreed up front, executed with care, settled cleanly.
            </p>
            <p
              className="text-[0.85rem] leading-[1.7] max-w-[520px]"
              style={{ color: "rgba(74,74,74,0.85)" }}
            >
              Where the funded partnership model applies, Shimmeur funds the
              full renovation, recovers its cost at settlement, and the
              property&rsquo;s uplift is shared per the agreement.{" "}
              <span style={{ color: "var(--shimmeur-mid)" }}>
                Returns are illustrative and not guaranteed.
              </span>
            </p>
          </FadeIn>

          <ol className="flex flex-col">
            {STEPS.map((step, i) => (
              <FadeIn
                key={step.no}
                delay={(((i % 3) + 1) as 1 | 2 | 3)}
                as="li"
                className="relative grid grid-cols-[auto_1fr] gap-x-7 pb-10 last:pb-0"
              >
                {i !== STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[26px] top-[60px] bottom-0 w-px"
                    style={{ background: "var(--shimmeur-stone)" }}
                  />
                )}
                <span
                  className="w-[54px] h-[54px] rounded-full border flex items-center justify-center font-display text-[1rem] font-medium flex-shrink-0"
                  style={{
                    borderColor: "var(--shimmeur-stone)",
                    background: "var(--shimmeur-cream)",
                    color: "var(--shimmeur-sage)",
                  }}
                >
                  {step.no}
                </span>
                <div className="pt-2">
                  <h3
                    className="font-display font-medium text-[1.2rem] md:text-[1.3rem] mb-2.5"
                    style={{ color: "var(--shimmeur-navy)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[0.95rem] leading-[1.75]"
                    style={{ color: "var(--shimmeur-mid)" }}
                    dangerouslySetInnerHTML={{ __html: step.body }}
                  />
                </div>
              </FadeIn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
