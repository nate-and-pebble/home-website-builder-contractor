"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="hero-gradient relative flex min-h-screen items-center overflow-hidden" data-no-theme-transition>
      {/* Subtle grain overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-32 md:flex-row md:gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-400"
          >
            Designer &middot; Developer &middot; Builder
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            I build websites that
            <br />
            <span className="text-amber-400">actually work.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-10 max-w-lg text-lg leading-relaxed text-gray-300"
          >
            Clean design, fast performance, zero fluff. I help businesses go from
            &ldquo;we need a website&rdquo; to &ldquo;holy crap, we&rsquo;re getting leads.&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-4 sm:flex-row md:justify-start"
          >
            <MagneticButton
              href="#contact"
              className="inline-block rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent-hover)]"
            >
              Let&apos;s Talk
            </MagneticButton>
            <MagneticButton
              href="#work"
              className="inline-block rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              See My Work
            </MagneticButton>
          </motion.div>
        </div>

        {/* Portrait area — swap /portrait.jpg to change */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex-shrink-0"
        >
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl border-2 border-white/10 bg-gradient-to-br from-amber-500/20 to-amber-700/10 shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            {/* Replace this div with an <Image /> pointing to /portrait.jpg */}
            <div className="flex h-full w-full items-center justify-center text-6xl text-white/20">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
          {/* Decorative accent blob */}
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-amber-500/20 blur-2xl" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
