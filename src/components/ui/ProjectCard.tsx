"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
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
    card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale(1.02)`;
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
      className="group cursor-pointer rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden transition-[box-shadow,transform] duration-400 hover:shadow-[0_12px_32px_rgba(44,40,37,0.14)] hover:-translate-y-1"
      style={{ transition: "transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease" }}
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
      {/* Project image */}
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        {project.clientType && (
          <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-accent)] mb-2 block">
            {project.clientType}
          </span>
        )}
        <h3 className="text-base font-display font-semibold mb-1.5 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] mb-3 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techUsed.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-hover)] text-[var(--color-text-muted)] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
