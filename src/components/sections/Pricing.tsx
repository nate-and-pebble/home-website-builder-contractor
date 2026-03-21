"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PricingCard } from "@/components/ui/PricingCard";
import { pricingTiers } from "@/data/pricing";

export function Pricing() {
  return (
    <SectionWrapper id="pricing" labelledBy="pricing-heading">
      <h2
        id="pricing-heading"
        className="text-3xl md:text-4xl font-display font-bold mb-4 text-center"
      >
        Packages
      </h2>
      <p className="text-[var(--color-text-muted)] text-center max-w-xl mx-auto mb-12">
        Transparent pricing to fit your project. Every package includes
        responsive design and performance optimization.
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </div>
    </SectionWrapper>
  );
}
