"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Ember & Oak Restaurant",
    category: "Branding & Web Design",
    description: "Complete rebrand and website for a farm-to-table restaurant. Reservations increased 40% in the first month.",
    details: "Built a custom reservation system, designed a seasonal menu page that updates automatically, and created a visual identity that captures the warmth of their dining experience. Mobile-first design with stunning food photography integration.",
    color: "from-orange-500/10 to-amber-600/10",
    span: "md:col-span-2 md:row-span-2",
    tags: ["Next.js", "Supabase", "Branding"],
  },
  {
    id: 2,
    title: "Summit Gear Co.",
    category: "E-Commerce",
    description: "High-performance storefront that handles 10K+ monthly visitors without breaking a sweat.",
    details: "Migrated from Shopify to a custom headless setup. Integrated inventory management, real-time stock updates, and a blazing-fast checkout flow. Page load time dropped from 4.2s to 0.8s.",
    color: "from-emerald-500/10 to-teal-600/10",
    span: "md:col-span-1 md:row-span-1",
    tags: ["React", "Stripe", "CMS"],
  },
  {
    id: 3,
    title: "Blackridge Law",
    category: "Professional Services",
    description: "A site that conveys trust and expertise. Lead gen up 65%.",
    details: "Designed with accessibility as a priority. Clean typography, thoughtful whitespace, and a contact flow that makes it easy for potential clients to reach out. Integrated with their CRM for seamless lead tracking.",
    color: "from-slate-500/10 to-gray-600/10",
    span: "md:col-span-1 md:row-span-1",
    tags: ["Design", "SEO", "CRM"],
  },
  {
    id: 4,
    title: "Launchpad SaaS",
    category: "Landing Page & Funnel",
    description: "A startup landing page that converts at 12%. Their investors noticed.",
    details: "Rapid iteration on messaging, A/B tested three hero variants, built a waitlist system with referral tracking. The page loads in under 1 second and scores 98 on Lighthouse.",
    color: "from-violet-500/10 to-purple-600/10",
    span: "md:col-span-2 md:row-span-1",
    tags: ["Next.js", "Analytics", "A/B Testing"],
  },
];

export default function Work() {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedProject = projects.find((p) => p.id === selected);

  return (
    <section id="work" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">Selected Work</h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-[var(--color-border)] bg-gradient-to-br ${project.color} p-8 transition-all hover:border-[var(--color-accent)]/30 hover:shadow-lg ${project.span}`}
              onClick={() => setSelected(project.id)}
            >
              <div className="relative z-10">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                  {project.category}
                </p>
                <h3 className="mb-3 text-xl font-bold sm:text-2xl">{project.title}</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-text)]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-semibold text-white">
                  View Case Study
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case study modal */}
      <AnimatePresence>
        {selected && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl overflow-hidden rounded-2xl bg-[var(--color-surface)] p-8 shadow-2xl sm:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                    {selectedProject.category}
                  </p>
                  <h3 className="text-2xl font-bold sm:text-3xl">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[var(--color-bg-alt)]"
                  aria-label="Close"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="mb-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
                {selectedProject.description}
              </p>
              <p className="mb-6 leading-relaxed text-[var(--color-text)]">
                {selectedProject.details}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--color-accent)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
