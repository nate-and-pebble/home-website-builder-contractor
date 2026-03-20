"use client";

import { motion } from "framer-motion";

const funFacts = [
  { emoji: "☕", label: "Coffee per day", value: "3+" },
  { emoji: "🏔️", label: "Based in", value: "Colorado" },
  { emoji: "👨‍👩‍👧‍👦", label: "Family size", value: "5" },
  { emoji: "🚀", label: "Sites launched", value: "50+" },
  { emoji: "⚡", label: "Avg. Lighthouse", value: "95+" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              About
            </p>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              The person behind the pixels.
            </h2>
            <div className="space-y-4 leading-relaxed text-[var(--color-text-muted)]">
              <p>
                I&apos;m Nate — a senior software engineer by day, website builder by passion.
                I work at a startup where I ship production code daily, which means your
                site gets the same engineering rigor that powers real businesses.
              </p>
              <p>
                I got into this because I kept seeing small businesses stuck with slow,
                ugly websites that were actively losing them money. I figured if I can build
                complex enterprise software, I can definitely build you a site that doesn&apos;t suck.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m chasing my three kids around Colorado,
                drinking too much coffee, or convincing my wife that yes, I do need another monitor.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Personality image placeholder */}
            <div className="aspect-square overflow-hidden rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-bg-alt)] to-[var(--color-surface)]">
              <div className="flex h-full w-full items-center justify-center text-[var(--color-text-muted)]">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fun facts strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
        >
          {funFacts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-center"
            >
              <span className="mb-2 text-2xl">{fact.emoji}</span>
              <span className="text-xl font-bold">{fact.value}</span>
              <span className="mt-1 text-xs text-[var(--color-text-muted)]">{fact.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
