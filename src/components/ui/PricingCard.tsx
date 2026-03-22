"use client";

import type { PricingTier } from "@/data/pricing";

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl border p-7 flex flex-col hover:-translate-y-1 ${
        tier.highlighted
          ? "bg-[var(--color-accent-light)] border-[var(--color-accent)]/40 shadow-[0_4px_20px_rgba(44,40,37,0.1)]"
          : "bg-[var(--color-surface)] border-[var(--color-border)]"
      }`}
      style={{ transition: "transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease" }}
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
        className={`block text-center py-3 px-6 rounded-lg font-semibold text-sm transition-all duration-300 ${
          tier.highlighted
            ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(184,101,58,0.3)]"
            : "border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white hover:-translate-y-0.5"
        }`}
      >
        {tier.cta}
      </a>
    </div>
  );
}
