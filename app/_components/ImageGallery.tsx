"use client";

import { ExpandingCards, CardItem } from "@/components/ui/expanding-cards";
import FadeIn from "./FadeIn";
import Link from "next/link";
import styles from "./ImageGallery.module.css";

const galleryItems: CardItem[] = [
  { id: "img1", title: "", description: "", imgSrc: "/ppt/image37.png" },
  { id: "img2", title: "", description: "", imgSrc: "/ppt/image38.png" },
  { id: "img3", title: "", description: "", imgSrc: "/ppt/image41.JPG" },
  { id: "img4", title: "", description: "", imgSrc: "/ppt/image42.png" },
  { id: "img5", title: "", description: "", imgSrc: "/ppt/image43.png" },
  { id: "img6", title: "", description: "", imgSrc: "/ppt/image44.png" },
  { id: "img7", title: "", description: "", imgSrc: "/ppt/image50.png" },
  { id: "img8", title: "", description: "", imgSrc: "/ppt/image51.png" },
];

export default function ImageGallery() {
  return (
    <section
      id="our-portfolio"
      className={`${styles.section} section-pad !pb-0 lg:!pb-0`}
      style={{ background: "#ffffff", marginTop: "0" }}
    >
      <div className="shimmeur-container relative z-10">
        <FadeIn className="max-w-[680px] mb-16 mx-auto text-center flex flex-col items-center">
          <span className="eyebrow">Our Portfolio</span>
          <h2
            className="font-display font-medium text-[2.2rem] md:text-[2.7rem] lg:text-[3rem] leading-[1.1] mb-6"
            style={{ color: "var(--shimmeur-navy)" }}
          >
            Featured Styles.
          </h2>
          <p
            className="text-[1.05rem] leading-[1.85] max-w-[600px] mb-0"
            style={{ color: "var(--shimmeur-mid)" }}
          >
            Explore how we transform properties into captivating spaces that inspire connection and maximize value.
          </p>
        </FadeIn>

        <FadeIn variant="fade" delay={2} className="w-full">
          <ExpandingCards
            items={galleryItems}
            defaultActiveIndex={0}
          />
        </FadeIn>
      </div>
    </section>
  );
}
