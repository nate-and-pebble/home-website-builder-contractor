"use client";

import type { PricingTier } from "@/data/pricing";

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl border p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        tier.highlighted
          ? "bg-[var(--color-accent)]/5 border-[var(--color-accent)]/40 shadow-lg shadow-[var(--color-accent)]/10"
          : "bg-[var(--color-surface)] border-[var(--color-border)]"
      }`}
    >
      {tier.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-accent)] text-white">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-display font-semibold mb-1">{tier.name}</h3>
      <p className="text-2xl font-display font-bold mb-1 text-[var(--color-accent)]">
        {tier.price}
      </p>
      <p className="text-sm text-[var(--color-text-muted)] mb-5">
        {tier.description}
      </p>
      <ul className="space-y-2 mb-6 flex-1">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="text-sm flex items-start gap-2"
          >
            <span className="text-[var(--color-accent)] mt-0.5 shrink-0">
              &#10003;
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
          tier.highlighted
            ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] hover:scale-105 hover:shadow-lg"
            : "border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        }`}
      >
        {tier.cta}
      </a>
    </div>
  );
}
