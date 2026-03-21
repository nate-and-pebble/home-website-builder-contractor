"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export function Services() {
  return (
    <SectionWrapper id="services" labelledBy="services-heading">
      <h2
        id="services-heading"
        className="text-3xl md:text-4xl font-display font-bold mb-4 text-center"
      >
        What I Do
      </h2>
      <p className="text-[var(--color-text-muted)] text-center max-w-xl mx-auto mb-12">
        From concept to launch, I handle every aspect of your web presence.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href="#contact"
          className="inline-block px-6 py-3 rounded-xl border border-[var(--color-border)] text-sm font-semibold transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          Ready to build? Let&apos;s talk &rarr;
        </a>
      </div>
    </SectionWrapper>
  );
}
