"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function FloatingInput({
  label,
  name,
  error,
  textarea = false,
  registration,
  value,
}: {
  label: string;
  name: string;
  error?: string;
  textarea?: boolean;
  registration: object;
  value: string;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const inputId = `contact-${name}`;

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={inputId}
          {...registration}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            (registration as { onBlur: (e: unknown) => void }).onBlur(e);
          }}
          className={`form-input peer min-h-[140px] resize-y ${error ? "!border-red-400" : ""}`}
          rows={5}
        />
      ) : (
        <input
          id={inputId}
          {...registration}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            (registration as { onBlur: (e: unknown) => void }).onBlur(e);
          }}
          className={`form-input peer ${error ? "!border-red-400" : ""}`}
        />
      )}
      <label
        htmlFor={inputId}
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${
          active
            ? "top-1 text-xs font-medium text-[var(--color-accent)]"
            : "top-4 text-base text-[var(--color-text-muted)]"
        }`}
      >
        {label}
      </label>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-sm text-red-400"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ mode: "onBlur" });

  const watchedValues = watch();

  const onSubmit = async (_data: FormData) => {
    // Simulate submission — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1500));
  };

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            Get In Touch
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Let&apos;s build something great.</h2>
          <p className="text-[var(--color-text-muted)]">
            Have a project in mind? Drop me a message and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {isSubmitSuccessful ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.1 }}
              className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </motion.div>
            <h3 className="mb-2 text-2xl font-bold">Message sent!</h3>
            <p className="text-[var(--color-text-muted)]">
              I&apos;ll be in touch soon. In the meantime, go grab a coffee — you&apos;ve earned it.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <FloatingInput
                label="Your name"
                name="name"
                error={errors.name?.message}
                value={watchedValues.name || ""}
                registration={register("name", { required: "What should I call you?" })}
              />
              <FloatingInput
                label="Email address"
                name="email"
                error={errors.email?.message}
                value={watchedValues.email || ""}
                registration={register("email", {
                  required: "I'll need your email to get back to you.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "That doesn't look like a valid email.",
                  },
                })}
              />
            </div>
            <FloatingInput
              label="Tell me about your project"
              name="message"
              error={errors.message?.message}
              value={watchedValues.message || ""}
              registration={register("message", { required: "Don't be shy — tell me about your project!" })}
              textarea
            />

            <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row sm:justify-between">
              <MagneticButton
                type="submit"
                className={`inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-white transition-all ${
                  isSubmitting
                    ? "bg-[var(--color-accent)]/70 cursor-wait"
                    : "bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </MagneticButton>

              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--color-text-muted)] underline decoration-[var(--color-border)] underline-offset-4 transition-colors hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
              >
                Or book a call instead →
              </a>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
