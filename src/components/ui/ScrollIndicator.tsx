"use client";

import { useEffect, useState } from "react";

export function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)]">
      <span className="text-xs uppercase tracking-[0.2em] font-sans">
        Scroll
      </span>
      <div className="animate-bounce-gentle">
        <svg
          width="20"
          height="30"
          viewBox="0 0 20 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="1" y="1" width="18" height="28" rx="9" />
          <circle cx="10" cy="10" r="2" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
