"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
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
    location: "Lower North Shore",
    title: "Pre-sale Preparation",
    outcome:
      "Pre-sale property preparation including styling, painting, and minor repairs.",
    beforeImg: "/img/project/entrance-master-1.jpg",
    afterImg: "/img/project/entrance-master-2.jpg",
    isFeatured: false,
  },
];

const DETAILED_PROJECTS = [
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
      "/img/project/image37.png",
    ],
  },
  {
    location: "Baulkham Hills, NSW",
    title: "Main bedroom & Stairwell refresh",
    outcome:
      "Creating a luxurious main bedroom suite and refreshing the stairwell.",
    scope:
      "Main bedroom addition with ensuite and walk-in robe. Complete stairwell and bedroom refresh.",
    cover: "/ppt/image42.png",
    gallery: [
      "/ppt/image44.png",
      "/ppt/image43.png",
      "/ppt/image45.png",
    ],
  },
  {
    location: "Baulkham Hills, NSW",
    title: "Kitchen & Multi-generational living",
    outcome:
      "A complete kitchen transformation and conversion to support multi-generational living.",
    scope:
      "New contemporary kitchen, and conversion of the old kitchen into a 4th bedroom.",
    cover: "/ppt/image49.PNG",
    gallery: [
      "/ppt/image51.png",
      "/ppt/image50.png",
      "/ppt/image52.png",
    ],
  },
  {
    location: "Baulkham Hills, NSW",
    title: "Downstairs bathroom & 2nd Lounge",
    outcome:
      "Upgrading the downstairs amenities and creating a secondary living space.",
    scope:
      "Complete renovation of the downstairs bathroom and styling of the 2nd lounge area.",
    cover: "/ppt/image47.png",
    gallery: [
      "/ppt/image48.png",
      "/ppt/image54.png",
      "/ppt/image55.png",
    ],
  },
];

export default function OurWork() {
  const coverRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onScroll = () => {
      coverRefs.current.forEach((node) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const viewport = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (viewport - rect.top) / (viewport + rect.height)));
        const translate = (progress - 0.5) * 30;
        const img = node.querySelector("img") as HTMLImageElement | null;
        if (img) {
          img.style.transform = `translateY(${translate.toFixed(1)}px) scale(1.04)`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      

      <section
        id="our-work"
        className="section-pad"
        style={{ background: "#ffffff" }}
      >
        <div className="shimmeur-container relative z-10">
          <FadeIn variant="reveal" className="max-w-[720px] mb-16 lg:mb-20" as="div">
            <span className="eyebrow">Our Portfolio</span>
            <h2
              className="font-display font-medium text-[2.2rem] md:text-[2.7rem] lg:text-[3rem] leading-[1.1] mb-6"
              style={{ color: "var(--shimmeur-navy)" }}
            >
              Our Work.
            </h2>
            <p
              className="text-[1.05rem] leading-[1.85] max-w-[600px]"
              style={{ color: "var(--shimmeur-mid)" }}
            >
              See how we uncover a property&rsquo;s true value through thoughtful preparation and design-led updates.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-24 lg:gap-32 mt-16 lg:mt-24">
            {DETAILED_PROJECTS.map((project, i) => (
              <FadeIn
                key={project.title}
                delay={(((i % 3) + 1) as 1 | 2 | 3)}
                as="div"
                variant="reveal"
                className="grid lg:grid-cols-12 gap-10 lg:gap-16"
              >
                <div className={`relative lg:col-span-7 ${i === 1 || i === 4 ? "lg:order-2" : ""}`}>
                  <div
                    ref={(el) => {
                      coverRefs.current[i] = el;
                    }}
                    className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden rounded-[4px]"
                    style={{ background: "var(--shimmeur-stone)" }}
                  >
                    <Image
                      src={project.cover}
                      alt={`${project.title} — ${project.location}`}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover will-change-transform transition-transform duration-300"
                      style={{ transform: "translateY(0) scale(1.04)" }}
                      priority={i === 0}
                    />
                  </div>
                </div>

                <div className={`flex flex-col justify-between h-full lg:col-span-5 ${i === 1 || i === 4 ? "lg:order-1" : ""}`}>
                  <div>
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

                    <div className="pt-5" style={{ borderTop: "1px solid var(--shimmeur-stone)" }}>
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
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-6 lg:pt-8 mt-auto">
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
        </div>
      </section>

      <section
        id="before-after"
        className="section-pad !pt-0 relative overflow-hidden"
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
          <FadeIn variant="reveal" className="max-w-[720px] mb-16 lg:mb-20" as="div">
            <span className="eyebrow">Our work</span>
            <h2
              className="font-display font-medium text-[2.2rem] md:text-[2.7rem] lg:text-[3rem] leading-[1.1] mb-6"
              style={{ color: "var(--shimmeur-navy)" }}
            >
              Before & After.
            </h2>
            <p
              className="text-[1.05rem] leading-[1.85] max-w-[600px]"
              style={{ color: "var(--shimmeur-mid)" }}
            >
              Every project tells the same story — a property&rsquo;s hidden
              potential, unlocked.
            </p>
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
                {/* Images Container */}
                <div
                  className={`flex w-full relative ${
                    project.isFeatured ? "h-64 md:h-80 lg:h-[420px]" : "h-56 md:h-64 lg:h-[260px]"
                  }`}
                >
                  {/* Before Side */}
                  <div className="w-1/2 relative bg-[#c4c2bf] flex items-center justify-center overflow-hidden">
                    {project.beforeImg && (
                      <Image
                        src={project.beforeImg}
                        alt={`${project.location} Before`}
                        fill
                        className="object-cover"
                      />
                    )}
                    <span className="absolute top-5 left-0 w-full text-center font-bold text-white/50 tracking-[0.2em] text-[0.65rem] uppercase z-10">
                      Before
                    </span>
                    <span className="absolute bottom-5 left-5 bg-black/40 text-white/90 text-[0.6rem] font-bold px-2.5 py-1 rounded-[3px] tracking-widest uppercase z-10 backdrop-blur-sm">
                      Before
                    </span>
                  </div>

                  {/* After Side */}
                  <div className="w-1/2 relative bg-[#7c928b] flex items-center justify-center overflow-hidden">
                    {project.afterImg && (
                      <Image
                        src={project.afterImg}
                        alt={`${project.location} After`}
                        fill
                        className="object-cover"
                      />
                    )}
                    <span className="absolute top-5 left-0 w-full text-center font-bold text-white/50 tracking-[0.2em] text-[0.65rem] uppercase z-10">
                      After
                    </span>
                    <span className="absolute bottom-5 left-5 bg-black/40 text-white/90 text-[0.6rem] font-bold px-2.5 py-1 rounded-[3px] tracking-widest uppercase z-10 backdrop-blur-sm">
                      After
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className={`flex flex-col flex-1 ${project.isFeatured ? 'p-8 md:p-10' : 'p-6 md:p-8'}`}>
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
    </>
  );
}
