import FadeIn from "./FadeIn";

const POINTS = [
  {
    no: "01",
    title: "Overwhelm at the worst time",
    body: "Preparing a home for sale during a life transition — estate, separation, downsizing — is exhausting. Most owners don&rsquo;t have the bandwidth to do it well.",
  },
  {
    no: "02",
    title: "Guesswork that&rsquo;s expensive",
    body: "Without design expertise and renovation experience, most improvements either miss the mark or don&rsquo;t generate a meaningful return at auction.",
  },
  {
    no: "03",
    title: "Money left on the table",
    body: "The gap between a property sold as-is and one properly prepared can be significant — sometimes hundreds of thousands. That gap is the Shimmeur opportunity.",
  },
];

export default function Opportunity() {
  return (
    <section
      id="opportunity"
      className="section-pad relative"
      style={{ background: "var(--shimmeur-cream)" }}
    >
      <div className="shimmeur-container">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <FadeIn>
            <span className="eyebrow">The reality</span>
            <h2
              className="font-display font-medium text-[2.2rem] md:text-[2.7rem] lg:text-[3rem] leading-[1.1] mb-6"
              style={{ color: "var(--shimmeur-navy)" }}
            >
              Most properties sell for less
              <br /> than they should.
            </h2>
            <p
              className="text-[1.05rem] leading-[1.85] max-w-[560px]"
              style={{ color: "var(--shimmeur-mid)" }}
            >
              The stress of preparing a home for sale leads most owners to take
              shortcuts — or none at all. They sell as-is, buyers discount
              heavily for perceived work, and the gap between what a property
              could achieve and what it does is rarely recovered.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-5">
            {POINTS.map((point, i) => (
              <FadeIn key={point.no} delay={((i + 1) as 1 | 2 | 3)}>
                <article
                  className="rounded-[4px] px-9 py-8"
                  style={{
                    background: "var(--shimmeur-white)",
                    borderLeft: "3px solid var(--shimmeur-navy)",
                    boxShadow: "0 2px 20px rgba(12,65,96,0.04)",
                  }}
                >
                  <div
                    className="font-display italic font-normal text-[2.2rem] leading-none mb-2"
                    style={{ color: "var(--shimmeur-stone)" }}
                  >
                    {point.no}
                  </div>
                  <h3
                    className="font-body font-semibold text-[0.95rem] tracking-[0.01em] mb-2"
                    style={{ color: "var(--shimmeur-navy)" }}
                  >
                    {point.title.replace(/&rsquo;/g, "’")}
                  </h3>
                  <p
                    className="text-[0.88rem] leading-[1.7]"
                    style={{ color: "var(--shimmeur-mid)" }}
                    dangerouslySetInnerHTML={{ __html: point.body }}
                  />
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
