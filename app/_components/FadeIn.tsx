"use client";

import { useEffect, useRef } from "react";

type FadeInProps = {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  as?: React.ElementType;
  variant?: "fade" | "reveal" | "reveal-up";
};

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  variant = "fade",
}: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      node.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as React.ElementType;
  const baseClass =
    variant === "reveal-up"
      ? "reveal-up"
      : variant === "reveal"
      ? "reveal"
      : "fade-in";
  const delayClass = variant === "fade" && delay ? `fade-in-delay-${delay}` : "";

  return (
    <Component
      ref={ref as React.RefObject<HTMLElement>}
      className={`${baseClass} ${delayClass} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
