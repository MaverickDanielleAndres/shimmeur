import Image from "next/image";
import FadeIn from "./FadeIn";

const STEPS = [
  {
    no: "1",
    title: "We agree on your property&rsquo;s value",
    body: "Together we establish the current market value of your property — the honest, agreed baseline everything else is built on.",
  },
  {
    no: "2",
    title: "We design the vision and fund the renovation",
    body: "Shimmeur funds the renovation entirely. We design the transformation, source the trades, and carry the cost — no outlay required from you.",
  },
  {
    no: "3",
    title: "We manage everything — you stay hands-free",
    body: "From first meeting to final styling, we handle every detail. Your role is to approve the vision and watch the transformation unfold.",
  },
  {
    no: "4",
    title: "At settlement, you receive your agreed share",
    body: "Once the property sells, Shimmeur recovers the renovation cost from the proceeds. The uplift is split per our agreement — you receive your share, clean and clear.",
  },
];

const EXAMPLE_ROWS = [
  { label: "Agreed current value", val: "$1,000,000" },
  {
    label: "Renovation investment (Shimmeur-funded)",
    val: "$100,000",
  },
];

const HIGHLIGHT_ROWS = [
  { label: "Your share (illustrative 50/50 split)", val: "$150,000" },
];

export default function Process() {
  return (
    <section
      id="what-we-do"
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--shimmeur-navy)", color: "#FFFFFF" }}
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <FadeIn>
            <span className="eyebrow eyebrow-light">The process</span>
            <h2
              className="font-display font-medium text-[2.2rem] md:text-[2.9rem] lg:text-[3.2rem] leading-[1.1] mb-5"
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
              className="text-[1.05rem] leading-[1.85] max-w-[560px] mb-14"
              style={{ color: "rgba(255, 255, 255, 0.72)" }}
            >
              Shimmeur provides a complete, end-to-end renovation management
              service. We design the vision, fund the project, manage the team,
              and deliver the transformation — so you can focus on what comes
              next.
            </p>

            <ol className="flex flex-col gap-0">
              {STEPS.map((step, i) => (
                <li
                  key={step.no}
                  className="grid grid-cols-[56px_1fr] gap-x-6 pb-10 relative"
                >
                  {i !== STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[27px] top-[60px] bottom-0 w-px"
                      style={{ background: "rgba(255,255,255,0.1)" }}
                    />
                  )}
                  <span
                    className="w-14 h-14 rounded-full flex items-center justify-center font-display text-[1.2rem] font-medium flex-shrink-0"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "var(--shimmeur-sage-light)",
                    }}
                  >
                    {step.no}
                  </span>
                  <div className="pt-3">
                    <h3
                      className="text-[1rem] font-semibold mb-2 font-body"
                      style={{ color: "#FFFFFF" }}
                    >
                      {step.title.replace(/&rsquo;/g, "’")}
                    </h3>
                    <p
                      className="text-[0.9rem] leading-[1.75]"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                      dangerouslySetInnerHTML={{ __html: step.body }}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </FadeIn>

          <FadeIn delay={1}>
            <div
              className="rounded-[4px] p-11 lg:sticky lg:top-28"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="font-medium tracking-[0.2em] uppercase text-[0.68rem] mb-8"
                style={{ color: "var(--shimmeur-sage-light)" }}
              >
                An illustrative example
              </div>

              <ul>
                {EXAMPLE_ROWS.map((row) => (
                  <li
                    key={row.label}
                    className="flex justify-between items-baseline py-4"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span
                      className="text-[0.82rem]"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {row.label}
                    </span>
                    <span
                      className="font-display text-[1.35rem] font-medium"
                      style={{ color: "#FFFFFF" }}
                    >
                      {row.val}
                    </span>
                  </li>
                ))}

                <li
                  className="my-3 h-px"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                  aria-hidden="true"
                />

                <li
                  className="flex justify-between items-baseline py-4"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span
                    className="text-[0.82rem]"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    Sale price achieved
                  </span>
                  <span
                    className="font-display text-[1.35rem] font-medium"
                    style={{ color: "#FFFFFF" }}
                  >
                    $1,400,000
                  </span>
                </li>
                <li
                  className="flex justify-between items-baseline py-4"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span
                    className="text-[0.82rem]"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    Shimmeur cost recovery
                  </span>
                  <span
                    className="font-display text-[1.35rem] font-medium"
                    style={{ color: "#FFFFFF" }}
                  >
                    $100,000
                  </span>
                </li>
                <li
                  className="flex justify-between items-baseline py-4"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span
                    className="text-[0.82rem]"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    Uplift to share
                  </span>
                  <span
                    className="font-display text-[1.35rem] font-medium"
                    style={{ color: "#FFFFFF" }}
                  >
                    $300,000
                  </span>
                </li>

                <li
                  className="my-3 h-px"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                  aria-hidden="true"
                />

                {HIGHLIGHT_ROWS.map((row) => (
                  <li
                    key={row.label}
                    className="flex justify-between items-baseline py-4"
                  >
                    <span
                      className="text-[0.82rem] font-medium"
                      style={{ color: "var(--shimmeur-sage-light)" }}
                    >
                      {row.label}
                    </span>
                    <span
                      className="font-display text-[1.6rem] font-medium"
                      style={{ color: "var(--shimmeur-sage-light)" }}
                    >
                      {row.val}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className="text-[0.72rem] leading-[1.6] mt-6"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Split ratios vary by deal. This example is illustrative only
                and does not represent a guarantee of return. Actual outcomes
                depend on property, market, and agreed terms.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
