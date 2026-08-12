import Image from "next/image";

const FOOTER_LINKS = [
  { href: "#what-we-do", label: "What We Do" },
  { href: "#who-we-help", label: "Who We Help" },
  { href: "#our-work", label: "Our Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Get in Touch" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="text-shimmeur-white"
      style={{ background: "var(--shimmeur-navy-deep)", color: "#FFFFFF" }}
    >
      <div className="shimmeur-container py-20 md:py-24">
        <div
          className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-16 pb-14"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
        >
          <div>
            <Image
              src="/img/shimmeur-smark.png"
              alt="Shimmeur"
              width={88}
              height={88}
              className="mb-7 opacity-90 invert"
            />
            <div
              className="font-display text-[1.45rem] tracking-[0.18em] uppercase mb-2"
              style={{ color: "#FFFFFF" }}
            >
              Shimmeur
            </div>
            <p
              className="font-display italic text-[1.05rem] mb-5"
              style={{ color: "var(--shimmeur-sage-light)" }}
            >
              Signature Spaces, Lasting Impressions
            </p>
            <p
              className="text-[0.85rem] leading-[1.7] max-w-[320px]"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Property lifestyle consulting and end-to-end renovation
              management — for owners who want a premium result, without the
              friction.
            </p>
          </div>

          <div>
            <div
              className="font-medium tracking-[0.18em] uppercase text-[0.68rem] mb-5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Navigate
            </div>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-[0.9rem]"
                    style={{ color: "rgba(255,255,255,0.78)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              className="font-medium tracking-[0.18em] uppercase text-[0.68rem] mb-5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Contact
            </div>
            <ul className="flex flex-col gap-3 text-[0.9rem]">
              <li>
                <a
                  href="mailto:natalie@shimmeur.co"
                  className="link-underline"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  natalie@shimmeur.co
                </a>
              </li>
              <li>
                <a
                  href="tel:+61416254020"
                  className="link-underline"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  +61 416 254 020
                </a>
              </li>
              <li>
                <a
                  href="https://www.shimmeur.co"
                  className="link-underline"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  www.shimmeur.co
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div
              className="font-medium tracking-[0.18em] uppercase text-[0.68rem] mb-5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Principles
            </div>
            <p
              className="font-display italic text-[0.95rem] leading-[1.7]"
              style={{ color: "var(--shimmeur-sage-light)" }}
            >
              Beauty&nbsp;&nbsp;·&nbsp;&nbsp;Passion&nbsp;&nbsp;·&nbsp;&nbsp;Connection
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 pt-10">
          <p
            className="text-[0.78rem]"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            © {year} Shimmeur · Natalie Phillips. All rights reserved.
          </p>
          <p
            className="font-display italic text-[0.85rem]"
            style={{ color: "rgba(149,165,141,0.7)" }}
          >
            Sydney, Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
