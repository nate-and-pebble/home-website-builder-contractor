"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <SectionWrapper id="testimonials" labelledBy="testimonials-heading">
      <h2
        id="testimonials-heading"
        className="text-3xl md:text-4xl font-display font-bold mb-12 text-center"
      >
        What Clients Say
      </h2>
      <div className="max-w-2xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <p className="text-lg md:text-xl leading-relaxed mb-6 italic text-[var(--color-text-muted)]">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <footer>
              <div className="font-semibold">
                {testimonials[current].author}
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">
                {testimonials[current].role}
                {testimonials[current].company &&
                  `, ${testimonials[current].company}`}
              </div>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="flex justify-center gap-3 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="Previous testimonial"
          >
            &#8592;
          </button>
          <div className="flex items-center gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current
                    ? "bg-[var(--color-accent)]"
                    : "bg-[var(--color-border)]"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="Next testimonial"
          >
            &#8594;
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
