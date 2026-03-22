"use client";

import { useState, type FormEvent } from "react";

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check honeypot
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
      <div className="text-center py-12">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-display font-semibold mb-2">
          Thanks for reaching out!
        </h3>
        <p className="text-[var(--color-text-muted)]">
          I&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

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

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          Name <span className="text-[var(--color-accent)]">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 transition-colors focus:border-[var(--color-accent)]"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email <span className="text-[var(--color-accent)]">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 transition-colors focus:border-[var(--color-accent)]"
          placeholder="you@example.com"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="projectType"
            className="block text-sm font-medium mb-1.5"
          >
            Project Type
          </label>
          <select
            id="projectType"
            value={formData.projectType}
            onChange={(e) =>
              setFormData({ ...formData, projectType: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] transition-colors focus:border-[var(--color-accent)]"
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
            className="block text-sm font-medium mb-1.5"
          >
            Budget Range
          </label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) =>
              setFormData({ ...formData, budget: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] transition-colors focus:border-[var(--color-accent)]"
          >
            <option value="">Select one...</option>
            <option value="2500-5000">$2,500 – $5,000</option>
            <option value="5000-10000">$5,000 – $10,000</option>
            <option value="10000+">$10,000+</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
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
          className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 transition-colors focus:border-[var(--color-accent)] resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3 px-6 rounded-lg bg-[var(--color-accent)] text-white font-semibold text-sm transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(184,101,58,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please try again or email directly.
        </p>
      )}

      <p className="text-xs text-[var(--color-text-muted)] text-center">
        I typically respond within 24 hours.
      </p>
    </form>
  );
}
