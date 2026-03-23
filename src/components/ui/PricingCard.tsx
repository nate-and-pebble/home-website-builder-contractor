"use client";

import { Check } from "lucide-react";
import type { PricingTier } from "@/data/pricing";
import type { BillingPeriod } from "@/components/sections/Pricing";

interface PricingCardProps {
  tier: PricingTier;
  billing: BillingPeriod;
}

export function PricingCard({ tier, billing }: PricingCardProps) {
  const isAnnual = billing === "annual";
  const monthlyEquivalent = tier.monthlyPrice * 12;
  const savings = monthlyEquivalent - tier.annualPrice;
  const yearOneTotal = tier.annualPrice + tier.setupFee;

  return (
    <div
      className={`relative rounded-2xl border p-8 flex flex-col hover:-translate-y-1 ${
        tier.highlighted
          ? "bg-[var(--color-accent-light)] border-[var(--color-accent)]/40 shadow-[0_4px_20px_rgba(44,40,37,0.1)]"
          : "bg-[var(--color-surface)] border-[var(--color-border)]"
      }`}
      style={{
        transition:
          "transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease",
      }}
    >
      {tier.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full bg-[var(--color-accent)] text-white tracking-wide">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-display font-semibold mb-2">{tier.name}</h3>

      {/* Price display */}
      <div className="mb-2">
        {isAnnual ? (
          <>
            <p className="text-2xl font-display font-bold text-[var(--color-accent)]">
              ${tier.annualPrice.toLocaleString()}
              <span className="text-sm font-normal text-[var(--color-text-muted)]">
                /yr
              </span>
            </p>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Renews yearly
            </p>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              One-time setup fee: {tier.setupFeeDisplay}
            </p>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Year 1 total: ${yearOneTotal.toLocaleString()} incl. setup
            </p>
            <p className="mt-1">
              <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                Save ${savings.toLocaleString()}/yr vs monthly
              </span>
            </p>
          </>
        ) : (
          <p className="text-2xl font-display font-bold text-[var(--color-accent)]">
            ${tier.monthlyPrice}
            <span className="text-sm font-normal text-[var(--color-text-muted)]">
              /mo
            </span>
          </p>
        )}
      </div>

      {/* Setup fee (monthly only — annual shows it inline above) */}
      {!isAnnual && (
        <div className="mb-6">
          <p className="text-sm font-medium text-[var(--color-text-muted)]">
            Setup fee: {tier.setupFeeDisplay}
          </p>
        </div>
      )}
      {isAnnual && <div className="mb-4" />}

      <p className="text-sm text-[var(--color-text-muted)] mb-6 leading-relaxed">
        {tier.description}
      </p>
      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="text-sm flex items-start gap-2.5">
            <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center">
              <Check size={10} className="text-[var(--color-accent)]" />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`block text-center py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 min-h-[44px] flex items-center justify-center ${
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
