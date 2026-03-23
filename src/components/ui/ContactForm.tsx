"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("_gotcha") as HTMLInputElement)
      ?.value;
    if (honeypot) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 rounded-full bg-[var(--color-secondary-light)] flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-[var(--color-secondary)]" />
        </div>
        <h3 className="text-xl font-display font-semibold mb-2">
          Message sent!
        </h3>
        <p className="text-[var(--color-text-muted)]">
          I&apos;ll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  const inputBase =
    "w-full px-4 rounded-xl bg-[var(--color-bg)] border-2 text-[var(--color-text)] transition-all duration-200 outline-none";
  const inputFocus = "border-[var(--color-accent)] shadow-[0_0_0_3px_rgba(184,101,58,0.1)]";
  const inputIdle = "border-[var(--color-border)] hover:border-[var(--color-text-muted)]/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
      {/* Honeypot */}
      <input
        type="text"
        name="_gotcha"
        aria-hidden="true"
        tabIndex={-1}
        style={{ position: "absolute", left: "-9999px" }}
        autoComplete="off"
      />

      <div className="relative">
        <label
          htmlFor="name"
          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
            focused === "name" || formData.name
              ? "top-1.5 text-[10px] font-semibold text-[var(--color-accent)]"
              : "top-3.5 text-sm text-[var(--color-text-muted)]"
          }`}
        >
          Name <span className="text-[var(--color-accent)]">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          onFocus={() => setFocused("name")}
          onBlur={() => setFocused(null)}
          className={`${inputBase} pt-5 pb-2 ${focused === "name" ? inputFocus : inputIdle}`}
        />
      </div>

      <div className="relative">
        <label
          htmlFor="email"
          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
            focused === "email" || formData.email
              ? "top-1.5 text-[10px] font-semibold text-[var(--color-accent)]"
              : "top-3.5 text-sm text-[var(--color-text-muted)]"
          }`}
        >
          Email <span className="text-[var(--color-accent)]">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
          className={`${inputBase} pt-5 pb-2 ${focused === "email" ? inputFocus : inputIdle}`}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="projectType"
            className="block text-xs font-semibold text-[var(--color-text-muted)] mb-2 uppercase tracking-wider"
          >
            Project Type
          </label>
          <select
            id="projectType"
            value={formData.projectType}
            onChange={(e) =>
              setFormData({ ...formData, projectType: e.target.value })
            }
            onFocus={() => setFocused("projectType")}
            onBlur={() => setFocused(null)}
            className={`${inputBase} min-h-[44px] py-3 pr-10 appearance-none ${focused === "projectType" ? inputFocus : inputIdle}`}
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237A7067' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
          >
            <option value="">Select one...</option>
            <option value="new">New Website</option>
            <option value="redesign">Redesign</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="budget"
            className="block text-xs font-semibold text-[var(--color-text-muted)] mb-2 uppercase tracking-wider"
          >
            Budget Range
          </label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) =>
              setFormData({ ...formData, budget: e.target.value })
            }
            onFocus={() => setFocused("budget")}
            onBlur={() => setFocused(null)}
            className={`${inputBase} min-h-[44px] py-3 pr-10 appearance-none ${focused === "budget" ? inputFocus : inputIdle}`}
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237A7067' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
          >
            <option value="">Select one...</option>
            <option value="starter">Starter — $179/mo</option>
            <option value="growth">Growth — $397/mo</option>
            <option value="full-presence">Full Presence — $997/mo</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="relative">
        <label
          htmlFor="message"
          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
            focused === "message" || formData.message
              ? "top-1.5 text-[10px] font-semibold text-[var(--color-accent)]"
              : "top-3.5 text-sm text-[var(--color-text-muted)]"
          }`}
        >
          Message <span className="text-[var(--color-accent)]">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          className={`${inputBase} pt-5 pb-2 resize-none ${focused === "message" ? inputFocus : inputIdle}`}
        />
        <span className="absolute bottom-3 right-4 text-[10px] text-[var(--color-text-muted)]/40">
          {formData.message.length}/2000
        </span>
      </div>

      <motion.button
        type="submit"
        disabled={status === "sending"}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 px-6 rounded-xl bg-[var(--color-accent)] text-white font-bold text-sm tracking-wide transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:shadow-[0_8px_24px_rgba(184,101,58,0.35)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={14} />
          </>
        )}
      </motion.button>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please try again or email directly.
        </p>
      )}

      <p className="text-[11px] text-[var(--color-text-muted)] text-center">
        I typically respond within 24 hours.
      </p>
    </form>
  );
}
