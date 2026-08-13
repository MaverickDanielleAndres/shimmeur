import FadeIn from "./FadeIn";

export default function Trust() {
  return (
    <section
      id="the-story"
      className="relative overflow-hidden section-pad"
      style={{ background: "var(--shimmeur-white)" }}
    >
      {/* Decorative S-mark Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] -bottom-[10%] opacity-[0.03] z-0 hidden md:block"
      >
        <img
          src="/ppt/image9.png"
          alt=""
          width={800}
          height={800}
        />
      </div>

      <div className="shimmeur-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn variant="reveal" as="div">
            <span className="eyebrow">The Story.....</span>
            <h2
              className="font-display font-medium text-[2.2rem] md:text-[2.7rem] lg:text-[3rem] leading-[1.1] mb-8"
              style={{ color: "var(--shimmeur-navy)" }}
            >
              Shimmeur turns potential into value.
            </h2>
            
            <div
              className="space-y-6 text-[1.1rem] leading-[1.8]"
              style={{ color: "var(--shimmeur-mid)" }}
            >
              <p>
                We define the vision, scope the project, and manage our trusted trade teams end-to-end.
              </p>
              <p>
                No friction, no guesswork, just sharp execution backed by experience.
              </p>
              <p>
                Together, we help to unlock your home’s best outcome.
              </p>
            </div>

            <div className="mt-10 pt-8" style={{ borderTop: "1px solid var(--shimmeur-stone)" }}>
              <span className="font-display italic text-[1.4rem]" style={{ color: "var(--shimmeur-sage)" }}>
                Beauty passion connection
              </span>
            </div>
          </FadeIn>

          <FadeIn variant="reveal" delay={2} as="div">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/ppt/image14.png"
                alt="Shimmeur Story"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
