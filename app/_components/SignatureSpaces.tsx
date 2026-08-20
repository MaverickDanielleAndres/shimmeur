import FadeIn from "./FadeIn";

export default function SignatureSpaces() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--shimmeur-navy-deep)" }}
    >
      <FadeIn
        variant="reveal"
        as="div"
        className="shimmeur-container py-24 lg:py-36 text-center"
      >
        <p
          className="font-display italic leading-[1.12] mb-7"
          style={{
            color: "var(--shimmeur-sage-light)",
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
          }}
        >
          Signature Spaces,
          <br />
          <span style={{ color: "#FFFFFF" }}>Lasting Impressions.</span>
        </p>
        <div
          aria-hidden="true"
          className="mx-auto"
          style={{
            width: "60px",
            height: "1px",
            background: "var(--shimmeur-sage-light)",
          }}
        />
        <p
          className="font-medium tracking-[0.32em] uppercase text-[0.7rem] mt-7"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          The Shimmeur promise
        </p>
      </FadeIn>
    </section>
  );
}
