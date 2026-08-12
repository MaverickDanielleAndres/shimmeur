"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "shimmeur_cookie_consent";

type ConsentState = "accepted" | "rejected" | "dismissed" | null;

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: ConsentState | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY) as ConsentState | null;
    } catch {
      stored = null;
    }
    if (stored) return;

    const timer = window.setTimeout(() => setVisible(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const persist = (state: Exclude<ConsentState, null>) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, state);
    } catch {
      /* ignore storage errors */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-4 bottom-4 z-[60] shimmeur-cookie-enter md:left-auto md:right-6 md:bottom-6 md:max-w-[460px]"
    >
      <div
        className="rounded-[3px] shadow-[0_18px_50px_rgba(8,46,71,0.18)] p-6 md:p-7"
        style={{
          background: "#FFFFFF",
          border: "1px solid var(--shimmeur-stone)",
        }}
      >
        <div className="flex items-start gap-3 mb-4">
          <span
            aria-hidden="true"
            className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full"
            style={{
              background: "var(--shimmeur-cream)",
              color: "var(--shimmeur-sage)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="9" cy="9" r="0.6" fill="currentColor" />
              <circle cx="14" cy="11" r="0.6" fill="currentColor" />
              <circle cx="11" cy="15" r="0.6" fill="currentColor" />
              <circle cx="16" cy="15" r="0.6" fill="currentColor" />
            </svg>
          </span>
          <div>
            <p
              className="font-display text-[1.05rem] leading-[1.3] mb-1.5"
              style={{ color: "var(--shimmeur-navy)" }}
            >
              A small note about cookies.
            </p>
            <p
              className="text-[0.82rem] leading-[1.55]"
              style={{ color: "var(--shimmeur-mid)" }}
            >
              We use a handful of cookies to keep the site running smoothly and
              to understand how it&rsquo;s used. You&rsquo;re in control — no
              tracking is enabled until you say so.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => persist("accepted")}
            className="btn btn-navy text-[0.68rem] py-3 px-5"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={() => persist("rejected")}
            className="btn btn-ghost-dark text-[0.68rem] py-3 px-5"
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            onClick={() => persist("dismissed")}
            className="text-[0.72rem] tracking-[0.12em] uppercase font-medium ml-auto"
            style={{ color: "var(--shimmeur-mid)" }}
          >
            Manage
          </button>
        </div>
      </div>
    </div>
  );
}
