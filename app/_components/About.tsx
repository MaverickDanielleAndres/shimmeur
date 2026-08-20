import Image from "next/image";
import FadeIn from "./FadeIn";

const TAGS = [
  "25+ Years Project Leadership",
  "Property Lifestyle Consultant",
  "Designer & Founder",
  "School of Colour & Design",
  "Project & Change Leadership",
  "Styling & Vision",
  "Commercial Decision-Making",
];

export default function About() {
  return (
    <>
      <section
        id="about"
        className="relative overflow-clip"
      style={{ background: "var(--shimmeur-navy-deep)", color: "#FFFFFF" }}
    >
      <div className="shimmeur-container pt-12 lg:pt-16 pb-20 lg:pb-28">
        <FadeIn
          variant="reveal"
          className="max-w-[820px] mb-16 lg:mb-20 mx-auto text-center"
          as="div"
        >
          <span className="eyebrow eyebrow-light">About</span>
          <h2
            className="font-display font-medium text-[2.2rem] md:text-[2.9rem] lg:text-[3.4rem] leading-[1.06] mb-8"
            style={{ color: "#FFFFFF" }}
          >
            The woman behind
            <br />
            <span className="italic" style={{ color: "var(--shimmeur-sage-light)" }}>
              every project.
            </span>
          </h2>
          <p
            className="text-[1.05rem] leading-[1.85] max-w-[640px] mx-auto"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            Shimmeur is Natalie. She brings the creative eye, commercial
            thinking, and twenty-five years of project and change leadership to
            every property she touches.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-20 items-start">
          {/* Portrait */}
          <FadeIn className="lg:sticky lg:top-28" as="div">
            <div
              className="relative aspect-[3/4] max-w-[440px] mx-auto lg:mx-0 overflow-hidden rounded-[4px]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Image
                src="/img/natalie-portrait.jpg"
                alt="Natalie Phillips, Founder of Shimmeur"
                fill
                sizes="(min-width: 1024px) 34vw, 80vw"
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>

          {/* Bio */}
          <FadeIn delay={1} as="div">
            <div
              className="font-medium tracking-[0.18em] uppercase text-[0.7rem] mb-3"
              style={{ color: "var(--shimmeur-sage-light)" }}
            >
              Natalie Phillips
            </div>
            <h3
              className="font-display font-medium text-[1.6rem] md:text-[1.9rem] leading-[1.15] mb-3"
              style={{ color: "#FFFFFF" }}
            >
              Founder &nbsp;·&nbsp; Property Lifestyle Consultant
            </h3>
            <p
              className="font-display italic text-[1.15rem] md:text-[1.3rem] mb-8"
              style={{ color: "var(--shimmeur-sage-light)" }}
            >
              Beauty. Passion. Connection.
            </p>

            <div
              className="space-y-7 text-[1.02rem] leading-[1.85]"
              style={{ color: "rgba(255,255,255,0.82)" }}
            >
              <p>
                Led by someone who&rsquo;s done it before, Natalie brings
                together a creative eye, commercial thinking and 25+ years of
                project and change leadership to help people unlock the
                potential in their property.
              </p>
              <p>
                She doesn&rsquo;t design the project. She sees what it could
                become. Natalie shapes the vision, influences the direction,
                leads the project and brings together the right specialists to
                make it happen.
              </p>
              <p>
                Shimmeur is a team effort. A trusted tribe of builders,
                designers, trades and property specialists — bringing the right
                expertise to each project and making sure everyone is working
                towards the same outcome.
              </p>
              <p>
                Having led projects ranging from $60K renovations to a $2.5M
                resort refurbishment, she brings a strong commercial lens to
                the decisions that matter: where to invest, where to hold back
                and how to keep the project moving without losing sight of the
                bigger picture.
              </p>
              <p>
                The goal is more than a beautifully presented home. It&rsquo;s
                about understanding the lifestyle a property can offer, bringing
                that to life and creating a home that makes the next owner
                fall in love with it.
              </p>
            </div>

            <ul className="flex flex-wrap gap-2.5 mt-10 mb-12">
              {TAGS.map((tag) => (
                <li
                  key={tag}
                  className="font-medium text-[0.72rem] tracking-[0.06em] rounded-full px-4 py-2"
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    background: "rgba(255,255,255,0.06)",
                  }}
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <a
                href="mailto:natalie@shimmeur.co"
                className="btn"
                style={{
                  background: "#FFFFFF",
                  color: "var(--shimmeur-navy-deep)",
                }}
              >
                Get in touch with Nat
              </a>
              <span
                className="font-display italic text-[0.95rem]"
                style={{ color: "var(--shimmeur-sage-light)" }}
              >
                natalie@shimmeur.co
              </span>
            </div>

            {/* Licensed / insured reassurance — per brief Section 7 */}
            <p
              className="mt-10 pt-6 text-[0.95rem] leading-[1.7] max-w-[640px]"
              style={{
                color: "rgba(255,255,255,0.7)",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              All works are carried out through our fully licensed and insured
              entity, with a hand-picked network of tradespeople and
              professional stylists.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>

      {/* Brand promise — directly beneath Natalie's intro per brief */}
      <section className="py-12 lg:py-20" style={{ background: "#FFFFFF" }}>
        <div className="shimmeur-container text-center">
          <FadeIn variant="reveal" as="div">
            <p
              className="font-display italic leading-[1.12] mb-6"
              style={{
                color: "var(--shimmeur-sage)",
                fontSize: "clamp(2rem, 6vw, 4.5rem)",
              }}
            >
              Signature Spaces,
              <br />
              <span style={{ color: "var(--shimmeur-navy-deep)" }}>Lasting Impressions.</span>
            </p>
            <div
              aria-hidden="true"
              className="mx-auto mb-6"
              style={{
                width: "60px",
                height: "1px",
                background: "var(--shimmeur-sage)",
              }}
            />
            <p
              className="font-display italic text-[1.05rem] md:text-[1.2rem] leading-[1.55] mb-6 max-w-[640px] mx-auto"
              style={{ color: "var(--shimmeur-charcoal)" }}
            >
              See the potential. Create the lifestyle. Unlock the value.
            </p>
            <p
              className="font-medium tracking-[0.32em] uppercase text-[0.7rem]"
              style={{ color: "var(--shimmeur-sage)" }}
            >
              The Shimmeur promise
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
