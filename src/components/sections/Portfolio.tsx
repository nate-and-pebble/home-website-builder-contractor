"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { projects, type Project } from "@/data/projects";

export function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <SectionWrapper id="work" labelledBy="work-heading">
      <div className="text-center mb-12">
        <h2
          id="work-heading"
          className="text-3xl md:text-4xl font-display font-bold mb-3"
        >
          Selected Work
        </h2>
        <p className="text-[var(--color-text-muted)] max-w-md mx-auto">
          Real projects. Measurable results.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelected}
            />
          ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="#contact"
          className="inline-block px-8 py-3.5 rounded-xl border-2 border-[var(--color-accent)] text-[var(--color-accent)] text-sm font-bold tracking-wide transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-white hover:-translate-y-0.5"
        >
          Want results like these? Let&apos;s talk &rarr;
        </a>
      </div>
      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
