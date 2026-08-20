"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#property", label: "Property" },
  { href: "#lifestyle", label: "Lifestyle" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#connect", label: "Connect" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    const offset = 80;
    const top =
      target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      id="nav"
      className={`nav fixed inset-x-0 top-0 z-50 border-b border-transparent ${
        scrolled ? "scrolled" : ""
      }`}
      aria-label="Primary"
    >
      <div className="shimmeur-container flex items-center justify-between gap-4 lg:gap-6 xl:gap-10 py-5 md:py-6">
        <a
          href="#home"
          onClick={(e) => handleAnchorClick(e, "#home")}
          className="transition-colors"
          style={{ color: scrolled ? "var(--shimmeur-navy)" : "#FFFFFF" }}
        >
          {/* Mobile Logo */}
          <div className="md:hidden relative w-8 h-10 flex items-center justify-center">
            <Image
              src="/logonobg.png"
              alt="Shimmeur"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Wordmark */}
          <div className="hidden md:flex items-center">
            <span className="font-display font-medium text-[1.2rem] xl:text-[1.5rem] uppercase tracking-[0.05em] leading-none">
              Shimmeur
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-3 xl:gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="link-underline whitespace-nowrap text-[0.55rem] xl:text-[0.65rem] font-medium tracking-[0.08em] xl:tracking-[0.12em] uppercase transition-colors"
                style={{
                  color: scrolled
                    ? "var(--shimmeur-mid)"
                    : "rgba(255, 255, 255, 0.85)",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center">
          <a
            href="#connect"
            onClick={(e) => handleAnchorClick(e, "#connect")}
            className={`btn text-[0.6rem] xl:text-[0.65rem] tracking-[0.1em] py-2 px-4 xl:py-3 xl:px-5 ${
              scrolled ? "btn-navy" : "btn-primary"
            }`}
          >
            Start a Conversation
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex flex-col gap-[5px] p-2"
          style={{ color: scrolled ? "var(--shimmeur-navy)" : "#FFFFFF" }}
        >
          <span
            className={`block h-[1.5px] w-6 transition-transform ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
            style={{
              backgroundColor: scrolled ? "var(--shimmeur-navy)" : "#FFFFFF",
            }}
          />
          <span
            className={`block h-[1.5px] w-6 transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
            style={{
              backgroundColor: scrolled ? "var(--shimmeur-navy)" : "#FFFFFF",
            }}
          />
          <span
            className={`block h-[1.5px] w-6 transition-transform ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
            style={{
              backgroundColor: scrolled ? "var(--shimmeur-navy)" : "#FFFFFF",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-[64px] bottom-0 origin-top transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0"
          style={{ background: "var(--shimmeur-cream)" }}
          aria-hidden="true"
        />
        <div className="relative h-full overflow-y-auto px-8 pt-4 pb-6">
          <ul className="flex flex-col gap-0">
            {NAV_LINKS.map((link) => (
              <li
                key={link.href}
                className="border-b border-shimmeur-stone last:border-b-0"
                style={{ borderBottomColor: "var(--shimmeur-stone)" }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="block py-[0.85rem] font-display text-[1.35rem]"
                  style={{ color: "var(--shimmeur-navy)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#connect"
            onClick={(e) => handleAnchorClick(e, "#connect")}
            className="btn btn-navy mt-6 w-full"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </nav>
  );
}
