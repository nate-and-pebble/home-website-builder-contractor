"use client";

import { useRef, type MouseEvent } from "react";
import type { Project } from "@/data/projects";

// Generate a deterministic gradient from project id
function gradientFromId(id: string): string {
  const gradients = [
    "from-[#F5EBE3] to-[#FAF7F2]",
    "from-[#E8F0EB] to-[#F5FAF7]",
    "from-[#E8DDD3] to-[#FAF7F2]",
    "from-[#F0E6DA] to-[#FFFDF9]",
    "from-[#E5EDE8] to-[#F5FAF7]",
  ];
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) | 0;
  return gradients[Math.abs(hash) % gradients.length];
}

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const gradient = gradientFromId(project.id);

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
      {/* Screenshot placeholder with gradient */}
      <div className={`aspect-video bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-[var(--color-text-muted)] opacity-30"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          <span className="text-xs text-[var(--color-text-muted)] opacity-50 font-medium">
            {project.title.split(" — ")[0]}
          </span>
        </div>
        {/* Outcome badge */}
        {project.outcome && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-stone-800 px-2.5 py-1 rounded-full shadow-sm">
            {project.outcome.split(".")[0]}
          </div>
        )}
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
              className="text-[11px] px-2 py-0.5 rounded-md bg-[var(--color-surface-hover)] text-[var(--color-text-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
