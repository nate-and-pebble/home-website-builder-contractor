"use client";

import { motion } from "framer-motion";
import scores from "@/data/lighthouse-scores.json";

const links = [
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Kind Words" },
  { href: "#contact", label: "Contact" },
];

const categories = [
  { key: "performance" as const, label: "Performance" },
  { key: "accessibility" as const, label: "Accessibility" },
  { key: "bestPractices" as const, label: "Best Practices" },
  { key: "seo" as const, label: "SEO" },
];

function ScoreRing({ score, label }: { score: number; label: string }) {
  const circumference = 2 * Math.PI * 18;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 90 ? "#22c55e" : score >= 50 ? "#f59e0b" : "#ef4444";

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative h-12 w-12">
        <svg viewBox="0 0 40 40" className="h-full w-full -rotate-90">
          <circle cx="20" cy="20" r="18" fill="none" stroke="var(--color-border)" strokeWidth="3" />
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold" style={{ color }}>
          {score}
        </span>
      </div>
      <span className="text-[10px] text-[var(--color-text-muted)]">{label}</span>
    </div>
  );
}

type ScoreKey = "performance" | "accessibility" | "bestPractices" | "seo";
const typedScores = scores as Record<ScoreKey, number | null>;
const hasScores = categories.every((c) => typedScores[c.key] != null);

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              nate<span className="text-[var(--color-accent)]">.</span>
            </a>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Building websites that don&apos;t suck since forever.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 border-t border-[var(--color-border)] pt-8">
          {hasScores && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              {categories.map((c) => (
                <ScoreRing key={c.key} score={typedScores[c.key]!} label={c.label} />
              ))}
            </motion.div>
          )}

          <p className="text-sm text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} Nate. All rights reserved.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-[var(--color-text-muted)]"
          >
            Made with coffee, code, and questionable amounts of ambition.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
