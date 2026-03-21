"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function About() {
  return (
    <SectionWrapper id="about" labelledBy="about-heading">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            About Me
          </h2>
          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
            <p>
              I&apos;m Nate — a full-stack web developer and contractor based in
              Colorado. I specialize in building high-performance websites and
              web applications using modern tools like Next.js, React, and
              TypeScript.
            </p>
            <p>
              With experience as a senior engineer at a fast-moving startup, I
              bring the same rigor and speed to every freelance project. I don&apos;t
              just write code — I build products that solve real business
              problems.
            </p>
            <p>
              My workflow is AI-augmented, which means I ship faster without
              cutting corners. You get enterprise-quality code at freelancer
              speed.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center overflow-hidden">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">&#128075;</div>
              <p className="text-[var(--color-text-muted)] text-sm">
                Colorado-based developer
              </p>
            </div>
          </div>
          {/* Fun facts */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              { label: "Projects shipped", value: "30+" },
              { label: "Years experience", value: "8+" },
              { label: "Cups of coffee", value: "∞" },
              { label: "Happy clients", value: "100%" },
            ].map((fact) => (
              <div
                key={fact.label}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-3 text-center"
              >
                <div className="text-xl font-display font-bold text-[var(--color-accent)]">
                  {fact.value}
                </div>
                <div className="text-xs text-[var(--color-text-muted)]">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
