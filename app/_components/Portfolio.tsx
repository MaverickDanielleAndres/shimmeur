"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import FadeIn from "./FadeIn";

const HERO_STORIES = [
  {
    location: "Baulkham Hills, NSW",
    title: "Contemporary Hamptons Repositioning",
    theme: "Transformed multigenerational living",
    scope:
      "A complete two-stage repositioning of a long-held family home. Main bedroom addition with ensuite and walk-in robe, kitchen transformation, new home entry, fourth bedroom conversion, downstairs bathroom, second lounge, stairwell refresh, new carport and decking — over 100 sqm of considered additional living.",
    result:
      "A home that finally flexes with the family — and presents as one coherent, designed property when it meets the market.",
    images: [
      {
        src: "/img/project/image38.png",
        alt: "Contemporary Hamptons exterior — Shimmeur renovation",
      },
      {
        src: "/img/project/image41.JPG",
        alt: "Hamptons-inspired interior detail after renovation",
      },
      {
        src: "/img/project/image39.png",
        alt: "Living space post-renovation",
      },
      {
        src: "/img/project/image37.png",
        alt: "Kitchen and dining after transformation",
      },
    ],
    isFeatured: true,
  },
  {
    location: "The Entrance, NSW",
    title: "Coastal Lifestyle Refresh",
    theme: "Uplift value, repurposed spaces, fresh look and feel",
    scope:
      "Internal reconfiguration to create a new entry, master suite with new walk-in robe, contemporary living spaces combining a new kitchen island, fresh flooring, exterior upgrade and considered landscaping.",
    result: "$180/week rental uplift — alongside a home that looks and feels like a different property.",
    images: [
      {
        src: "/img/project/entrance-streetscape-2.jpg",
        alt: "The Entrance coastal streetscape — Shimmeur project",
      },
      {
        src: "/ppt/image22.JPG",
        alt: "Coastal kitchen with new island",
      },
      {
        src: "/img/project/entrance-living-2.png",
        alt: "Refurbished coastal living area",
      },
      {
        src: "/img/project/entrance-master-2.jpg",
        alt: "Master suite refresh",
      },
    ],
    isFeatured: false,
  },
];

export default function Portfolio() {
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
    <section
      id="portfolio"
      className="section-pad !pt-12 lg:!pt-16 relative overflow-clip"
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
          className="max-w-[720px] mb-16 lg:mb-20 mx-auto text-center flex flex-col items-center"
          as="div"
        >
          <span className="eyebrow">Portfolio</span>
          <h2
            className="font-display font-medium text-[2.2rem] md:text-[2.7rem] lg:text-[3rem] leading-[1.08] mb-6"
            style={{ color: "var(--shimmeur-navy)" }}
          >
            Two projects.{" "}
            <span
              className="italic"
              style={{ color: "var(--shimmeur-sage)" }}
            >
              Two stories.
            </span>
          </h2>
          <p
            className="text-[1.05rem] leading-[1.85] max-w-[600px]"
            style={{ color: "var(--shimmeur-mid)" }}
          >
            See how we uncover a property&rsquo;s true value through thoughtful
            preparation and design-led updates.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-28 lg:gap-40 mt-16 lg:mt-24">
          {HERO_STORIES.map((project, i) => (
            <FadeIn
              key={project.title}
              delay={(((i % 3) + 1) as 1 | 2 | 3)}
              as="div"
              variant="reveal"
              className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 w-full"
            >
              {/* Story A (flagship) — image spans 8 cols, story spans 4 cols, larger text */}
              {/* Story B — standard 7/5 split */}
              <div
                className={`relative w-full min-w-0 ${
                  project.isFeatured ? "lg:col-span-8" : "lg:col-span-7"
                } ${i === 1 ? "lg:order-2" : ""}`}
              >
                <div
                  ref={(el) => {
                    coverRefs.current[i] = el;
                  }}
                  className={`relative w-full overflow-hidden rounded-[4px] ${
                    project.isFeatured
                      ? "aspect-[4/3] lg:aspect-[16/11] lg:h-[560px]"
                      : "aspect-[4/3]"
                  }`}
                  style={{ background: "var(--shimmeur-stone)" }}
                >
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    sizes={
                      project.isFeatured
                        ? "(min-width: 1024px) 66vw, 100vw"
                        : "(min-width: 1024px) 58vw, 100vw"
                    }
                    className="object-cover will-change-transform transition-transform duration-300"
                    style={{ transform: "translateY(0) scale(1.04)" }}
                    priority={i === 0}
                  />
                </div>
                <div
                  className={`grid gap-3 pt-6 lg:pt-8 w-full ${
                    project.isFeatured ? "grid-cols-3" : "grid-cols-3"
                  }`}
                >
                  {project.images.slice(1).map((img, idx) => (
                    <div
                      key={img.src}
                      className="relative overflow-hidden rounded-[3px] w-full"
                      style={{ 
                        background: "var(--shimmeur-stone)",
                        paddingBottom: "100%", // Forces a perfect square
                        minHeight: "100px" // Absolute fallback to prevent zero-height collapse
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(min-width: 1024px) 12vw, 30vw"
                        className="object-cover absolute inset-0"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Story */}
              <div
                className={`flex flex-col w-full min-w-0 lg:sticky lg:top-32 lg:self-start lg:h-auto h-full justify-between ${
                  project.isFeatured ? "lg:col-span-4" : "lg:col-span-5"
                } ${i === 1 ? "lg:order-1" : ""}`}
              >
                <div>
                  <div
                    className="font-medium tracking-[0.18em] uppercase text-[0.7rem] mb-3"
                    style={{ color: "var(--shimmeur-sage)" }}
                  >
                    {project.location}
                  </div>
                  <h3
                    className={`font-display font-medium leading-[1.18] mb-4 break-words ${
                      project.isFeatured
                        ? "text-[2rem] md:text-[2.4rem] lg:text-[2.7rem]"
                        : "text-[1.6rem] md:text-[1.85rem]"
                    }`}
                    style={{ color: "var(--shimmeur-navy)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`font-display italic mb-6 break-words ${
                      project.isFeatured
                        ? "text-[1.15rem] md:text-[1.25rem] leading-[1.55]"
                        : "text-[1.05rem] leading-[1.45]"
                    }`}
                    style={{ color: "var(--shimmeur-sage)" }}
                  >
                    {project.theme}
                  </p>
                  <p
                    className={`leading-[1.85] mb-6 break-words ${
                      project.isFeatured
                        ? "text-[1.02rem]"
                        : "text-[0.95rem]"
                    }`}
                    style={{ color: "var(--shimmeur-mid)" }}
                  >
                    {project.scope}
                  </p>

                  <div
                    className="pt-5"
                    style={{ borderTop: "1px solid var(--shimmeur-stone)" }}
                  >
                    <div
                      className="font-medium tracking-[0.16em] uppercase text-[0.7rem] mb-3"
                      style={{ color: "var(--shimmeur-navy)" }}
                    >
                      The result
                    </div>
                    <p
                      className={`leading-[1.75] break-words ${
                        project.isFeatured
                          ? "text-[1rem] font-display italic"
                          : "text-[0.9rem]"
                      }`}
                      style={{
                        color: project.isFeatured
                          ? "var(--shimmeur-navy)"
                          : "var(--shimmeur-mid)",
                      }}
                    >
                      {project.result}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
