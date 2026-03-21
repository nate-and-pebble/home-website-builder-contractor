"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FAQItem } from "@/components/ui/FAQItem";
import { faqs } from "@/data/faq";

export function FAQ() {
  return (
    <SectionWrapper id="faq" labelledBy="faq-heading">
      <h2
        id="faq-heading"
        className="text-3xl md:text-4xl font-display font-bold mb-4 text-center"
      >
        Working With Me
      </h2>
      <p className="text-[var(--color-text-muted)] text-center max-w-xl mx-auto mb-12">
        Common questions about how I work and what to expect.
      </p>
      <div className="max-w-2xl mx-auto">
        {faqs.map((item, i) => (
          <FAQItem key={i} item={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
