"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Kind Words" },
  { href: "#contact", label: "Contact" },
];

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

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-[var(--color-border)] pt-8 text-center">
          <p className="text-sm text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} Nate. All rights reserved.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-[var(--color-text-muted)]"
          >
            Made with coffee, code, and questionable amounts of ambition. 😉
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
