"use client";

import Image from "next/image";
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
      className="relative min-h-[calc(100svh-2rem)] md:min-h-screen flex items-center px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 md:py-24">
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
            High-performance sites shipped in weeks, not months.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 rounded-xl bg-[var(--color-accent)] text-white font-bold text-sm tracking-wide transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(184,101,58,0.35)]"
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="inline-flex items-center px-8 py-3.5 rounded-xl border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-bold text-sm tracking-wide transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-white hover:-translate-y-0.5"
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
          <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=750&fit=crop&q=80"
              alt="Developer workspace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 0vw, 40vw"
              priority
            />
          </div>
          {/* Floating accent card */}
          <div className="absolute -bottom-4 -left-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-4 shadow-lg">
            <div className="text-xs text-[var(--color-text-muted)] mb-1">
              Latest project
            </div>
            <div className="text-sm font-semibold">BrightSpark Creative</div>
            <div className="text-xs text-[var(--color-accent)]">+65% inbound leads</div>
          </div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
