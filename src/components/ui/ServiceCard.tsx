"use client";

import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div
      className="group rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--color-accent)]/5 hover:border-[var(--color-accent)]/30"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <span className="text-3xl mb-4 block" aria-hidden="true">
        {service.icon}
      </span>
      <h3 className="text-xl font-display font-semibold mb-2">
        {service.title}
      </h3>
      <p className="text-[var(--color-text-muted)] text-sm mb-4">
        {service.description}
      </p>
      <ul className="space-y-1.5">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="text-sm text-[var(--color-text-muted)] flex items-start gap-2"
          >
            <span className="text-[var(--color-accent)] mt-0.5 shrink-0">
              &#10003;
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
