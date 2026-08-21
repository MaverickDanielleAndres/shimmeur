"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PopupCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the popup every 30 seconds
    const interval = setInterval(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-500">
      <div className="bg-white text-[#051220] rounded-xl shadow-2xl p-5 flex items-start gap-4 max-w-sm relative border border-gray-100">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex-shrink-0 relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--shimmeur-sage)]">
          <Image
            src="/img/pete.png"
            alt="Pete"
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col pt-1">
          <h4 className="font-display font-medium text-lg mb-1 leading-tight">
            Want to learn more?
          </h4>
          <p className="text-sm text-gray-600 mb-3 leading-snug">
            Talk to Pete and discover how the Shimmeur model works for your property.
          </p>
          <a
            href="#contact"
            onClick={() => setIsVisible(false)}
            className="text-[var(--shimmeur-sage)] font-semibold text-sm hover:underline self-start"
          >
            Get in touch &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
