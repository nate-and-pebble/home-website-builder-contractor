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
      <h2
        id="work-heading"
        className="text-3xl md:text-4xl font-display font-bold mb-4 text-center"
      >
        Selected Work
      </h2>
      <p className="text-[var(--color-text-muted)] text-center max-w-xl mx-auto mb-12">
        Real projects, real results. Click any project for the full case study.
      </p>
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
      <div className="text-center mt-12">
        <a
          href="#contact"
          className="inline-block px-6 py-3 rounded-xl border border-[var(--color-border)] text-sm font-semibold transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
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
