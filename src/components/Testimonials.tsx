"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Nate built us a site that actually brings in customers. The whole process was smooth and professional — he made it feel effortless.",
    author: "Sarah K.",
    role: "Owner, Ember & Oak Restaurant",
  },
  {
    quote: "We went from an outdated WordPress site to something modern and lightning fast. Our bounce rate dropped by half within the first week.",
    author: "Mike R.",
    role: "Founder, Summit Gear Co.",
  },
  {
    quote: "I've worked with agencies that charged 5x more and delivered less. Nate just gets it — no hand-holding required.",
    author: "Jessica T.",
    role: "Managing Partner, Blackridge Law",
  },
  {
    quote: "The landing page Nate built converted at 12% out of the gate. Our investors were genuinely impressed.",
    author: "David L.",
    role: "CEO, Launchpad",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="bg-[var(--color-bg-alt)] px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">Kind words from kind people.</h2>
        </motion.div>

        <div className="relative overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.blockquote
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-center"
            >
              <svg className="mx-auto mb-6 text-[var(--color-accent)]" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 7.05C8.76 7.56 7 9.79 7 12.29V17h5V12H9c0-2.09 1.53-3.79 3.52-3.95L11 7.05zM20 7.05C17.76 7.56 16 9.79 16 12.29V17h5V12h-3c0-2.09 1.53-3.79 3.52-3.95L20 7.05z" />
              </svg>
              <p className="mb-8 text-xl leading-relaxed sm:text-2xl">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold">{testimonials[current].author}</p>
                <p className="text-sm text-[var(--color-text-muted)]">{testimonials[current].role}</p>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => paginate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="Previous testimonial"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-8 bg-[var(--color-accent)]" : "w-2 bg-[var(--color-border)]"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="Next testimonial"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
