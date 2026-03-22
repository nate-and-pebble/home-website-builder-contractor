"use client";

import { Check } from "lucide-react";
import type { PricingTier } from "@/data/pricing";

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl border p-8 flex flex-col hover:-translate-y-1 ${
        tier.highlighted
          ? "bg-[var(--color-accent-light)] border-[var(--color-accent)]/40 shadow-[0_4px_20px_rgba(44,40,37,0.1)]"
          : "bg-[var(--color-surface)] border-[var(--color-border)]"
      }`}
      style={{ transition: "transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease" }}
    >
      {tier.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full bg-[var(--color-accent)] text-white tracking-wide">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-display font-semibold mb-2">{tier.name}</h3>
      <p className="text-2xl font-display font-bold mb-2 text-[var(--color-accent)]">
        {tier.price}
      </p>
      <p className="text-sm text-[var(--color-text-muted)] mb-6 leading-relaxed">
        {tier.description}
      </p>
      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="text-sm flex items-start gap-2.5"
          >
            <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center">
              <Check size={10} className="text-[var(--color-accent)]" />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`block text-center py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
          tier.highlighted
            ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(184,101,58,0.35)]"
            : "border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white hover:-translate-y-0.5"
        }`}
      >
        {tier.cta}
      </a>
    </div>
  );
}
