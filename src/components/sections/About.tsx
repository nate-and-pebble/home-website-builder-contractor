"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function About() {
  return (
    <SectionWrapper id="about" labelledBy="about-heading">
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 flex flex-col justify-center">
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-display font-bold mb-5 leading-tight"
          >
            Senior engineer by day.
            <br />
            <span className="text-[var(--color-accent)]">Your builder by night.</span>
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed max-w-lg">
            Colorado-based full-stack dev, 8+ years shipping production software. AI-augmented workflow means enterprise quality at freelancer speed.
          </p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          <div className="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=450&fit=crop&q=80"
              alt="Collaborative workspace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {[
            { value: "30+", label: "Projects shipped" },
            { value: "8+", label: "Years building" },
            { value: "100%", label: "Satisfaction rate" },
            { value: "<2s", label: "Avg load time" },
          ].map((fact) => (
            <div
              key={fact.label}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-4 text-center"
            >
              <div className="text-xl font-display font-bold text-[var(--color-accent)]">
                {fact.value}
              </div>
              <div className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                {fact.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
