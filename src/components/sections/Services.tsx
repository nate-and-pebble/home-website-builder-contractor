"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export function Services() {
  return (
    <SectionWrapper id="services" labelledBy="services-heading">
      <div className="text-center mb-12">
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-display font-bold mb-3"
        >
          What I Build
        </h2>
        <p className="text-[var(--color-text-muted)] max-w-md mx-auto">
          Concept to launch. Every aspect of your web presence, handled.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="#contact"
          className="inline-block px-6 py-3 rounded-lg border-2 border-[var(--color-accent)] text-[var(--color-accent)] text-sm font-semibold transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-white hover:-translate-y-0.5"
        >
          Ready to build? Let&apos;s talk &rarr;
        </a>
      </div>
    </SectionWrapper>
  );
}
