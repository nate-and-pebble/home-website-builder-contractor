"use client";

import { useEffect, useState } from "react";

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export function Marquee({ items, speed = 30 }: MarqueeProps) {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    setPrefersReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  if (prefersReduced) {
    return (
      <div className="flex flex-wrap justify-center gap-6 py-4">
        {items.map((item) => (
          <span
            key={item}
            className="text-sm text-white/60 font-mono"
          >
            {item}
          </span>
        ))}
      </div>
    );
  }

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden relative" aria-hidden="true">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-sm text-white/60 font-mono shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
