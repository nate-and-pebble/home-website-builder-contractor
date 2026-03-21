"use client";

import { useRef, type MouseEvent } from "react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onClick={() => onSelect(project)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden transition-[box-shadow] duration-300 hover:shadow-xl hover:shadow-[var(--color-accent)]/10"
      style={{ transition: "transform 0.15s ease-out, box-shadow 0.3s ease" }}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} case study`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      <div className="aspect-video bg-[var(--color-surface-hover)] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text-muted)] text-sm">
          {project.title}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          {project.clientType && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              {project.clientType}
            </span>
          )}
          {project.outcome && (
            <span className="text-xs text-[var(--color-text-muted)]">
              {project.outcome}
            </span>
          )}
        </div>
        <h3 className="text-lg font-display font-semibold mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techUsed.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded bg-[var(--color-surface-hover)] text-[var(--color-text-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
