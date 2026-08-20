import FadeIn from "./FadeIn";

export default function OurTeam() {
  return (
    <section
      id="our-team"
      className="relative overflow-hidden"
      style={{ background: "var(--shimmeur-navy-deep)", color: "#fff" }}
    >
      <div className="grid lg:grid-cols-2 min-h-[420px]">
        {/* Left — image */}
        <FadeIn variant="reveal" as="div" className="relative min-h-[260px] lg:min-h-0">
          <img
            src="/ppt/image12.jpeg"
            alt="A sculptural garden feature — an example of the lifestyle vision Shimmeur brings to life"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, transparent 55%, var(--shimmeur-navy-deep) 100%)",
            }}
          />
          <div
            className="absolute inset-0 block lg:hidden"
            style={{
              background:
                "linear-gradient(to bottom, transparent 55%, var(--shimmeur-navy-deep) 100%)",
            }}
          />
        </FadeIn>

        {/* Right — content */}
        <FadeIn
          variant="reveal"
          as="div"
          className="flex flex-col justify-center px-8 py-10 lg:px-12 lg:py-12"
        >
          <span className="eyebrow eyebrow-light mb-5">The Team</span>
          <h2
            className="font-display font-medium text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] leading-[1.15] mb-4"
            style={{ color: "#fff" }}
          >
            A multi-skilled team,
            <br />
            <span style={{ color: "var(--shimmeur-sage-light)" }}>
              behind every project.
            </span>
          </h2>
          <p
            className="text-[0.9rem] leading-[1.75] mb-7 max-w-[480px]"
            style={{ color: "#fff" }}
          >
            We don&rsquo;t work alone. Every Shimmeur project is supported by a
            hand-picked team of purpose-chosen professionals — licensed,
            insured, and the right specialists for the work.
          </p>

          <ul className="space-y-4 mb-8">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                text: "Purpose-chosen professionals — licensed, insured, and appropriate to each project.",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                text: "Professional stylists who prepare the property to meet the market at its best.",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                text: "A trade network united by the same standard — quality, on time, on brief.",
              },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-4">
                <span
                  className="mt-0.5 flex-shrink-0 rounded-full p-1.5"
                  style={{
                    background: "rgba(149,165,141,0.18)",
                    color: "var(--shimmeur-sage-light)",
                  }}
                >
                  {item.icon}
                </span>
                <span
                  className="text-[0.88rem] leading-[1.65]"
                  style={{ color: "#fff" }}
                >
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          <div
            className="rounded-[6px] px-5 py-5"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <p
              className="font-display italic text-[1.05rem] leading-[1.7]"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              All works are carried out through our fully licensed and insured
              entity, with a hand-picked network of tradespeople and
              professional stylists.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
