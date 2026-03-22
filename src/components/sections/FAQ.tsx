"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FAQItem } from "@/components/ui/FAQItem";
import { faqs } from "@/data/faq";

export function FAQ() {
  return (
    <SectionWrapper id="faq" labelledBy="faq-heading">
      <div className="text-center mb-10">
        <h2
          id="faq-heading"
          className="text-3xl md:text-4xl font-display font-bold mb-3"
        >
          Working With Me
        </h2>
        <p className="text-[var(--color-text-muted)] max-w-md mx-auto">
          Common questions, answered.
        </p>
      </div>
      <div className="max-w-2xl mx-auto bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl px-6 md:px-8">
        {faqs.map((item, i) => (
          <FAQItem key={i} item={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
