"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
        className="text-3xl md:text-4xl font-display font-bold mb-10 text-center"
      >
        Client Voices
      </h2>
      <div className="max-w-2xl mx-auto bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 md:p-12 relative">
        <div className="absolute top-6 left-8 text-5xl text-[var(--color-accent)] opacity-20 font-serif leading-none">
          &ldquo;
        </div>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="text-center relative z-10"
          >
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <footer>
              <div className="font-display font-semibold">
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
            className="w-11 h-11 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex items-center gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="relative flex items-center justify-center w-11 h-11"
                aria-label={`Go to testimonial ${i + 1}`}
              >
                <span
                  className={`block rounded-full transition-all duration-200 ${
                    i === current
                      ? "bg-[var(--color-accent)] w-5 h-2"
                      : "bg-[var(--color-border)] w-2 h-2"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
