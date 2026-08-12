import Image from "next/image";
import FadeIn from "./FadeIn";

const MODEL_STATS = [
  {
    value: "$0",
    label: "Out of pocket for the owner.",
    sub: "We fund the renovation.",
  },
  {
    value: "End‑to‑end",
    label: "We design, manage, and deliver.",
    sub: "You stay hands-free.",
  },
  {
    value: "At settlement",
    label: "You receive your agreed share",
    sub: "of the uplift value.",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg relative isolate overflow-hidden min-h-[100svh] flex items-center"
    >
      <div className="shimmeur-container relative z-10 grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center pt-36 pb-28 md:pt-40 md:pb-36">
        <FadeIn className="text-shimmeur-white">
          <span className="eyebrow eyebrow-light">
            Property Lifestyle Consulting
          </span>
          <h1
            className="font-display font-medium text-[2.6rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[4.6rem] leading-[1.05] mb-7"
            style={{ color: "#FFFFFF" }}
          >
            Your property deserves more than{" "}
            <em
              className="italic"
              style={{ color: "var(--shimmeur-sage-light)" }}
            >
              it&rsquo;s been given.
            </em>
          </h1>
          <p
            className="text-[1.05rem] md:text-[1.1rem] leading-[1.85] max-w-[560px] mb-10"
            style={{ color: "rgba(255, 255, 255, 0.78)" }}
          >
            Most properties sell without unlocking their full potential.
            Shimmeur changes that — funding, designing, and managing the
            transformation so you receive more at settlement, without the
            stress.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#what-we-do" className="btn btn-primary">
              See how it works
            </a>
            <a href="#contact" className="btn btn-ghost-light">
              Get in touch
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={1} className="hidden lg:block">
          <div
            className="rounded-[4px] p-11"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <div
              className="font-medium tracking-[0.18em] uppercase text-[0.68rem] mb-8"
              style={{ color: "var(--shimmeur-sage-light)" }}
            >
              The Shimmeur model
            </div>

            <ul>
              {MODEL_STATS.map((stat, i) => (
                <li
                  key={stat.value}
                  className={`${
                    i !== MODEL_STATS.length - 1
                      ? "mb-7 pb-7"
                      : ""
                  }`}
                  style={
                    i !== MODEL_STATS.length - 1
                      ? { borderBottom: "1px solid rgba(255,255,255,0.1)" }
                      : {}
                  }
                >
                  <div
                    className="font-display text-[2.2rem] font-medium leading-[1.1] mb-1.5"
                    style={{ color: "#FFFFFF" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[0.82rem] leading-[1.5]"
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                  >
                    {stat.label}
                    <br />
                    {stat.sub}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>

      {/* Decorative S-mark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -bottom-32 opacity-[0.06] hidden md:block"
      >
        <Image
          src="/img/shimmeur-smark.png"
          alt=""
          width={520}
          height={520}
          className="invert"
          priority
        />
      </div>

      {/* Scroll affordance */}
      <a
        href="#opportunity"
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3 text-[0.62rem] tracking-[0.22em] uppercase z-10"
        style={{ color: "rgba(255, 255, 255, 0.5)" }}
        aria-label="Scroll to content"
      >
        <span>Scroll</span>
        <span
          aria-hidden="true"
          className="block w-px h-12"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
          }}
        />
      </a>
    </section>
  );
}
