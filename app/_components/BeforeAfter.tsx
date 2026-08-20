"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const BENTO_PROJECTS = [
  {
    location: "Inner West Sydney",
    title: "Family Home Transformation",
    outcome:
      "A long-term family home transformed ahead of sale. Full internal refresh, kitchen and bathroom updates, landscape staging.",
    beforeImg: "/img/project/entrance-living-1.jpg",
    afterImg: "/img/project/entrance-living-2.png",
    isFeatured: true,
  },
  {
    location: "Northwest Sydney",
    title: "Rental Yield Optimization",
    outcome:
      "Rental property refresh and full styling for market presentation.",
    beforeImg: "/img/project/image41.JPG",
    afterImg: "/img/project/image38.png",
    isFeatured: false,
  },
  {
    location: "Sydney",
    title: "Downsizer Refresh",
    outcome:
      "Downsizer property — full interior transformation from brief to settlement.",
    beforeImg: "/img/project/image39.png",
    afterImg: "/img/project/image37.png",
    isFeatured: false,
  },
  {
    location: "Eastern Suburbs",
    title: "Cosmetic Uplift",
    outcome:
      "Complete cosmetic update for an investment property to maximize rental yield.",
    beforeImg: "/img/project/entrance-kitchen-1.jpg",
    afterImg: "/img/project/entrance-kitchen-4.jpg",
    isFeatured: false,
  },
  {
    location: "The Entrance, NSW",
    title: "Coastal Contemporary Refresh",
    outcome:
      "Modernise and upgrade to align with coastal lifestyle experience, reflecting fresh ease of convenient living.",
    beforeImg: "/img/project/entrance-streetscape-1.jpg",
    afterImg: "/img/project/entrance-streetscape-2.jpg",
    isFeatured: false,
  },
];

export default function BeforeAfter() {
  return (
    <section
      id="before-after"
      className="section-pad relative overflow-hidden"
      style={{ background: "#ffffff" }}
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
        <FadeIn
          variant="reveal"
          className="max-w-[720px] mb-16 lg:mb-20"
          as="div"
        >
          <span className="eyebrow">Before & After</span>
          <h2
            className="font-display font-medium text-[2.2rem] md:text-[2.7rem] lg:text-[3rem] leading-[1.08] mb-6"
            style={{ color: "var(--shimmeur-navy)" }}
          >
            Every project tells the same story —{" "}
            <span className="italic" style={{ color: "var(--shimmeur-sage)" }}>
              a property&rsquo;s hidden potential, unlocked.
            </span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BENTO_PROJECTS.map((project, i) => (
            <FadeIn
              key={project.location}
              delay={(((i % 3) + 1) as 1 | 2 | 3)}
              as="div"
              variant="reveal"
              className={`bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col h-full ${
                project.isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
              }`}
            >
              <div
                className={`flex w-full relative ${
                  project.isFeatured
                    ? "h-64 md:h-80 lg:h-[420px]"
                    : "h-56 md:h-64 lg:h-[260px]"
                }`}
              >
                {/* Before side */}
                <div className="w-1/2 relative bg-[#c4c2bf] flex items-center justify-center overflow-hidden">
                  {project.beforeImg && (
                    <Image
                      src={project.beforeImg}
                      alt={`${project.location} Before`}
                      fill
                      className="object-cover"
                    />
                  )}
                  <span
                    className="absolute top-4 left-4 inline-flex items-center px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.18em] uppercase rounded-[1px] backdrop-blur-sm"
                    style={{
                      background: "rgba(0,0,0,0.55)",
                      color: "#FFFFFF",
                    }}
                  >
                    Before
                  </span>
                </div>

                {/* After side */}
                <div className="w-1/2 relative bg-[#7c928b] flex items-center justify-center overflow-hidden">
                  {project.afterImg && (
                    <Image
                      src={project.afterImg}
                      alt={`${project.location} After`}
                      fill
                      className="object-cover"
                    />
                  )}
                  <span
                    className="absolute top-4 right-4 inline-flex items-center px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.18em] uppercase rounded-[1px] backdrop-blur-sm"
                    style={{
                      background: "rgba(149,165,141,0.85)",
                      color: "#FFFFFF",
                    }}
                  >
                    After
                  </span>
                </div>
              </div>

              <div
                className={`flex flex-col flex-1 ${
                  project.isFeatured ? "p-8 md:p-10" : "p-6 md:p-8"
                }`}
              >
                <div
                  className="font-medium tracking-[0.18em] uppercase text-[0.7rem] mb-3"
                  style={{ color: "var(--shimmeur-sage)" }}
                >
                  {project.location}
                </div>
                <h3
                  className="font-display font-medium text-[1.4rem] md:text-[1.6rem] leading-[1.2] mb-4"
                  style={{ color: "var(--shimmeur-navy)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-[0.95rem] leading-[1.7]"
                  style={{ color: "var(--shimmeur-mid)" }}
                >
                  {project.outcome}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
