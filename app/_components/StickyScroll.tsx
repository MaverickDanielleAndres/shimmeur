"use client";

import { useEffect, useRef } from "react";

type StickyScrollProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * StickyScroll — a scroll-driven storytelling wrapper.
 *
 * - The first child stays pinned to the top of the viewport while the
 *   remaining children scroll past it.
 * - Each non-sticky child is observed and gets the `is-active` class
 *   while it is the most-visible item, enabling per-step micro-animations
 *   inside the scrolling column.
 *
 * Layout contract:
 *   <StickyScroll>
 *     <div>{sticky column}</div>
 *     <div>{step 1}</div>
 *     <div>{step 2}</div>
 *     ...
 *   </StickyScroll>
 */
export default function StickyScroll({
  children,
  className = "",
}: StickyScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isCoarse = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    if (isCoarse) return;

    const container = containerRef.current;
    if (!container) return;

    // Collect all step elements (everything after the first child)
    const allChildren = Array.from(container.children) as HTMLElement[];
    const stepEls = allChildren.slice(1);
    stepsRef.current = stepEls;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          el.classList.toggle("is-visible", entry.isIntersecting);
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            stepEls.forEach((s) => s.classList.remove("is-active"));
            el.classList.add("is-active");
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-25% 0px -25% 0px",
      },
    );

    stepEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`shimmeur-sticky-scroll ${className}`}>
      {children}
    </div>
  );
}
