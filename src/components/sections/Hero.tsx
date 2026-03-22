"use client";

import { motion } from "framer-motion";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Hero({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-24">
        {/* Left — text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] text-xs font-semibold tracking-wide mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            Available for new projects
          </motion.div>
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1] mb-5"
          >
            Websites that
            <br />
            <span className="text-[var(--color-accent)]">drive revenue.</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="text-lg text-[var(--color-text-muted)] max-w-md mb-8 leading-relaxed"
          >
            I design and build high-performance websites that turn visitors into
            customers — shipped in weeks, not months.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="px-7 py-3 rounded-lg bg-[var(--color-accent)] text-white font-semibold text-sm transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(184,101,58,0.3)]"
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="px-7 py-3 rounded-lg border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-semibold text-sm transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-white hover:-translate-y-0.5"
            >
              See My Work
            </a>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            variants={item}
            className="flex items-center gap-6 mt-10 pt-8 border-t border-[var(--color-border)]"
          >
            {[
              { value: "30+", label: "Projects shipped" },
              { value: "8+", label: "Years experience" },
              { value: "100%", label: "Client satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-display font-bold">
                  {stat.value}
                </div>
                <div className="text-xs text-[var(--color-text-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — portrait placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="aspect-[4/5] rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden relative">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[var(--color-text-muted)]">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="opacity-40"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
              </svg>
              <span className="text-sm font-medium">Nate</span>
              <span className="text-xs">Colorado</span>
            </div>
          </div>
          {/* Floating accent card */}
          <div className="absolute -bottom-4 -left-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-4 shadow-lg">
            <div className="text-xs text-[var(--color-text-muted)] mb-1">
              Latest project
            </div>
            <div className="text-sm font-semibold">Clay & Kiln</div>
            <div className="text-xs text-[var(--color-accent)]">+340% revenue</div>
          </div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
