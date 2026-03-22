"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/data/faq";

interface FAQItemProps {
  item: FAQ;
}

export function FAQItem({ item }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--color-border)] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-1 text-left gap-4 group transition-colors hover:text-[var(--color-accent)]"
        aria-expanded={open}
      >
        <span className="text-base font-semibold">{item.question}</span>
        <span
          className="shrink-0 w-8 h-8 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)] transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s cubic-bezier(.22,1,.36,1), background-color 0.3s, color 0.3s" }}
          aria-hidden="true"
        >
          <ChevronDown size={16} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 px-1">
              <div className="bg-[var(--color-accent-light)]/50 rounded-xl p-4">
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
