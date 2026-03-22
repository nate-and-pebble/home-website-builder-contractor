"use client";

import { Monitor, Wrench, ShoppingCart, Cog } from "lucide-react";
import type { Service } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  monitor: Monitor,
  wrench: Wrench,
  "shopping-cart": ShoppingCart,
  cog: Cog,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Monitor;

  return (
    <div
      className="group rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] p-6 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(44,40,37,0.14)]"
      style={{ transition: "transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease", animationDelay: `${index * 80}ms` }}
    >
      <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary-light)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-colors duration-300 text-[var(--color-secondary)]" aria-hidden="true">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-display font-semibold mb-1.5">
        {service.title}
      </h3>
      <p className="text-[var(--color-text-muted)] text-sm mb-4 leading-relaxed">
        {service.description}
      </p>
      <ul className="space-y-1.5">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="text-sm text-[var(--color-text-muted)] flex items-start gap-2"
          >
            <span className="text-[var(--color-accent)] mt-0.5 shrink-0 text-xs">
              &#10003;
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
