"use client";

import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[var(--color-surface-hover)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          aria-label="Close modal"
        >
          &#10005;
        </button>

        <div className="aspect-video bg-[var(--color-surface-hover)] rounded-t-2xl flex items-center justify-center text-[var(--color-text-muted)]">
          {project.title}
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            {project.clientType && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                {project.clientType}
              </span>
            )}
            {project.outcome && (
              <span className="text-xs text-[var(--color-accent)] font-medium">
                {project.outcome}
              </span>
            )}
          </div>

          <h2 className="text-2xl font-display font-bold mb-3">
            {project.title}
          </h2>

          <p className="text-[var(--color-text-muted)] leading-relaxed mb-5">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.techUsed.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-lg bg-[var(--color-surface-hover)] text-[var(--color-text-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.testimonial && (
            <blockquote className="border-l-2 border-[var(--color-accent)] pl-4 italic text-sm text-[var(--color-text-muted)] mb-5">
              &ldquo;{project.testimonial.quote}&rdquo;
              <footer className="mt-1 not-italic font-medium text-[var(--color-text)]">
                — {project.testimonial.author}
                {project.testimonial.role && (
                  <span className="text-[var(--color-text-muted)] font-normal">
                    , {project.testimonial.role}
                  </span>
                )}
              </footer>
            </blockquote>
          )}

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:underline"
            >
              Visit Project &rarr;
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
