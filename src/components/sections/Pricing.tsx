"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PricingCard } from "@/components/ui/PricingCard";
import { pricingTiers } from "@/data/pricing";

export function Pricing() {
  return (
    <SectionWrapper id="pricing" labelledBy="pricing-heading">
      <div className="text-center mb-12">
        <h2
          id="pricing-heading"
          className="text-3xl md:text-4xl font-display font-bold mb-3"
        >
          Packages
        </h2>
        <p className="text-[var(--color-text-muted)] max-w-md mx-auto">
          Transparent monthly plans. No contracts, no surprises — just
          consistent, expert-level web work.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start pt-4">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </div>
    </SectionWrapper>
  );
}
