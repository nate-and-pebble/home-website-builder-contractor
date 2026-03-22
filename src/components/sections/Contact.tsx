"use client";

import { Mail } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactForm } from "@/components/ui/ContactForm";

export function Contact() {
  return (
    <SectionWrapper id="contact" labelledBy="contact-heading">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-display font-bold mb-3"
          >
            Let&apos;s Build Something
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-md mx-auto">
            Tell me about your project. Response within 24 hours.
          </p>
        </div>
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-10">
          <ContactForm />
        </div>
        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-sm text-[var(--color-text-muted)] flex items-center gap-2">
            <Mail size={14} className="text-[var(--color-accent)]" />
            Prefer email?{" "}
            <a
              href="mailto:hello@itsmenate.com"
              className="text-[var(--color-accent)] hover:underline font-medium"
            >
              hello@itsmenate.com
            </a>
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
