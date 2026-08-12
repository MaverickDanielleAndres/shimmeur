import Image from "next/image";
import FadeIn from "./FadeIn";

const PROJECTS = [
  {
    location: "The Entrance, NSW",
    title: "Coastal contemporary refresh",
    outcome:
      "Documented rental uplift following a staged renovation completed in two phases.",
    scope:
      "Internal reconfiguration, kitchen island, master bedroom and walk-in robe refresh, new flooring, exterior upgrade, new front fencing, landscaping and outdoor shower.",
    cover: "/img/project/entrance-streetscape-2.jpg",
    gallery: [
      "/img/project/entrance-kitchen-1.jpg",
      "/img/project/entrance-living-2.png",
      "/img/project/entrance-master-2.jpg",
    ],
  },
  {
    location: "Baulkham Hills, NSW",
    title: "Contemporary Hamptons repositioning",
    outcome:
      "Multi-generational living achieved through purposeful layout changes and an enduring Hamptons-inspired interior.",
    scope:
      "Two-stage structural renovation. New main bedroom with ensuite and walk-in robe, kitchen conversion to a fourth bedroom, second lounge area, refreshed stairwell, downstairs bathroom, calmer flow throughout.",
    cover: "/img/project/image38.png",
    gallery: [
      "/img/project/image41.JPG",
      "/img/project/image39.png",
    ],
  },
];

export default function OurWork() {
  return (
    <section
      id="our-work"
      className="bg-shimmeur-cream section-pad"
      style={{ background: "var(--shimmeur-cream)" }}
    >
      <div className="shimmeur-container">
        <FadeIn className="max-w-[720px] mb-16">
          <span className="eyebrow">Our work</span>
          <h2
            className="font-display font-medium text-[2.2rem] md:text-[2.7rem] lg:text-[3rem] leading-[1.1] mb-6"
            style={{ color: "var(--shimmeur-navy)" }}
          >
            Our work.
          </h2>
          <p
            className="text-[1.05rem] leading-[1.85] max-w-[600px]"
            style={{ color: "var(--shimmeur-mid)" }}
          >
            Every project tells the same story — a property&rsquo;s hidden
            potential, unlocked through design-led renovation and careful
            delivery.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-20 lg:gap-28">
          {PROJECTS.map((project, i) => (
            <FadeIn
              key={project.title}
              delay={(((i % 3) + 1) as 1 | 2 | 3)}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start"
            >
              <div
                className={`relative lg:col-span-7 ${
                  i === 1 ? "lg:order-2" : ""
                }`}
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-[3px]"
                  style={{ background: "var(--shimmeur-stone)" }}
                >
                  <Image
                    src={project.cover}
                    alt={`${project.title} — ${project.location}`}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              </div>

              <div
                className={`lg:col-span-5 ${i === 1 ? "lg:order-1" : ""}`}
              >
                <div
                  className="font-medium tracking-[0.18em] uppercase text-[0.7rem] mb-3"
                  style={{ color: "var(--shimmeur-sage)" }}
                >
                  {project.location}
                </div>
                <h3
                  className="font-display font-medium text-[1.6rem] md:text-[1.85rem] leading-[1.2] mb-5"
                  style={{ color: "var(--shimmeur-navy)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-[0.95rem] leading-[1.85] mb-6"
                  style={{ color: "var(--shimmeur-mid)" }}
                >
                  {project.outcome}
                </p>

                <div
                  className="pt-5"
                  style={{ borderTop: "1px solid var(--shimmeur-stone)" }}
                >
                  <div
                    className="font-medium tracking-[0.16em] uppercase text-[0.7rem] mb-3"
                    style={{ color: "var(--shimmeur-navy)" }}
                  >
                    Scope
                  </div>
                  <p
                    className="text-[0.9rem] leading-[1.75]"
                    style={{ color: "var(--shimmeur-mid)" }}
                  >
                    {project.scope}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-6">
                  {project.gallery.map((img, idx) => (
                    <div
                      key={img}
                      className="relative aspect-square overflow-hidden rounded-[3px]"
                      style={{ background: "var(--shimmeur-stone)" }}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} — detail ${idx + 1}`}
                        fill
                        sizes="(min-width: 1024px) 12vw, 30vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-20 max-w-[720px]">
          <hr className="divider mb-12" />
          <figure>
            <blockquote
              className="font-display italic text-[1.4rem] md:text-[1.65rem] leading-[1.5] mb-5"
              style={{ color: "var(--shimmeur-navy)" }}
            >
              &ldquo;You&rsquo;ve thought about everything! We love our home.
              You&rsquo;ve helped us fulfill our dream to have our whole family
              together in a beautiful home. Thank you!&rdquo;
            </blockquote>
            <figcaption
              className="text-[0.82rem] tracking-[0.12em] uppercase"
              style={{ color: "var(--shimmeur-mid)" }}
            >
              The new owners, Baulkham Hills
            </figcaption>
          </figure>
        </FadeIn>
      </div>
    </section>
  );
}
