import Image from "next/image";
import FadeIn from "./FadeIn";

const TAGS = [
  "Resort & Hospitality Leadership",
  "$2.5M Resort Refurbishment",
  "UX & Experience Design",
  "Project Management",
  "School of Colour & Design",
  "Change Management",
  "NLP Practitioner",
  "Myers Briggs Practitioner",
];

export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: "var(--shimmeur-sage)", color: "#FFFFFF" }}
    >
      <div className="shimmeur-container">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-center">
          <FadeIn>
            <div
              className="relative aspect-[3/4] max-w-[440px] mx-auto lg:mx-0 overflow-hidden rounded-[4px] flex items-end justify-center"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
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

          <FadeIn delay={1}>
            <span className="eyebrow eyebrow-light">About Nat</span>
            <h2
              className="font-display font-medium text-[1.9rem] md:text-[2.4rem] lg:text-[2.7rem] leading-[1.15] mb-6"
              style={{ color: "#FFFFFF" }}
            >
              Led by someone who&rsquo;s done it before — many times.
            </h2>
            <p
              className="text-[1rem] leading-[1.85] mb-9"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Nat Phillips brings an exceptional combination of design
              sensibility, project leadership, and commercial acumen to every
              property she touches. Her career spans some of Australia&rsquo;s
              finest resorts — including leading a $2.5M full island
              refurbishment at Bedarra Island — alongside roles in digital,
              risk, wellness, and education.
            </p>
            <p
              className="text-[1rem] leading-[1.85] mb-9"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              What sets Nat apart is the rare ability to see a property&rsquo;s
              potential before it exists, and the capability to bring that
              vision to life on time and on budget. She brings a design eye
              informed by colour theory, a project manager&rsquo;s discipline,
              and a genuine passion for the people behind every property.
            </p>
            <ul className="flex flex-wrap gap-2.5 mb-11">
              {TAGS.map((tag) => (
                <li
                  key={tag}
                  className="font-medium text-[0.72rem] tracking-[0.08em] rounded-full px-4 py-2"
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="btn"
              style={{
                background: "#FFFFFF",
                color: "var(--shimmeur-sage)",
              }}
            >
              Get in touch with Nat
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
