"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Kind Words" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--nav-bg)] backdrop-blur-lg shadow-sm border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold tracking-tight" style={{ color: scrolled ? "var(--color-text)" : "#fff" }}>
            nate<span style={{ color: "var(--color-accent)" }}>.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors hover:text-[var(--color-accent)]"
                style={{ color: scrolled ? "var(--color-text-muted)" : "rgba(255,255,255,0.7)" }}
              >
                {l.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
              aria-label="Menu"
            >
              <span
                className="block h-0.5 w-5 rounded transition-all"
                style={{
                  backgroundColor: scrolled ? "var(--color-text)" : "#fff",
                  transform: mobileOpen ? "rotate(45deg) translateY(4px)" : "none",
                }}
              />
              <span
                className="block h-0.5 w-5 rounded transition-all"
                style={{
                  backgroundColor: scrolled ? "var(--color-text)" : "#fff",
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-0.5 w-5 rounded transition-all"
                style={{
                  backgroundColor: scrolled ? "var(--color-text)" : "#fff",
                  transform: mobileOpen ? "rotate(-45deg) translateY(-4px)" : "none",
                }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[var(--color-bg)] md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
