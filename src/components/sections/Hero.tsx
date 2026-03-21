"use client";

import { motion } from "framer-motion";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl"
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-4"
        >
          Nate
        </motion.h1>
        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-[var(--color-text-muted)] font-light mb-3"
        >
          Website Builder &amp; Contractor
        </motion.p>
        <motion.p
          variants={item}
          className="text-base md:text-lg text-[var(--color-text-muted)] max-w-xl mx-auto mb-10"
        >
          I build fast, polished websites that turn visitors into customers —
          shipped in weeks, not months.
        </motion.p>
        <motion.div variants={item} className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl bg-[var(--color-accent)] text-white font-semibold text-sm transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-accent)]/25"
          >
            Let&apos;s Talk
          </a>
          <a
            href="#work"
            className="px-8 py-3.5 rounded-xl border border-[var(--color-border)] font-semibold text-sm transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            See My Work
          </a>
        </motion.div>
      </motion.div>
      <ScrollIndicator />
    </section>
  );
}
