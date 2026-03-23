"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PricingCard } from "@/components/ui/PricingCard";
import { pricingTiers } from "@/data/pricing";

export type BillingPeriod = "monthly" | "annual";

export function Pricing() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  return (
    <SectionWrapper id="pricing" labelledBy="pricing-heading">
      <div className="text-center mb-12">
        <h2
          id="pricing-heading"
          className="text-3xl md:text-4xl font-display font-bold mb-3"
        >
          Packages
        </h2>
        <p className="text-[var(--color-text-muted)] max-w-md mx-auto mb-8">
          Transparent plans. No contracts, no surprises — just consistent,
          expert-level web work.
        </p>

        {/* Billing toggle */}
        <div
          className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-1"
          role="radiogroup"
          aria-label="Billing period"
        >
          <button
            role="radio"
            aria-checked={billing === "monthly"}
            onClick={() => setBilling("monthly")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 min-h-[44px] ${
              billing === "monthly"
                ? "bg-[var(--color-accent)] text-white shadow-sm"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            }`}
          >
            Monthly
          </button>
          <button
            role="radio"
            aria-checked={billing === "annual"}
            onClick={() => setBilling("annual")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 min-h-[44px] ${
              billing === "annual"
                ? "bg-[var(--color-accent)] text-white shadow-sm"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            }`}
          >
            Annual
            <span className="ml-1.5 inline-block text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-green-100 text-green-700">
              15% off
            </span>
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start pt-4">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} billing={billing} />
        ))}
      </div>
    </SectionWrapper>
  );
}
