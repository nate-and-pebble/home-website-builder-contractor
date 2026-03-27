import { domains } from "@/data/domains";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domains | Nate",
  robots: { index: false, follow: false },
};

export default function DomainsPage() {
  const categories = Array.from(new Set(domains.map((d) => d.category ?? "Other")));

  return (
    <main className="min-h-screen bg-[var(--color-bg,#FAF7F2)] text-[var(--color-text,#3D3733)]">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="text-sm text-[var(--color-text-muted,#8A8178)] hover:text-[var(--color-accent,#B8653A)] transition-colors"
        >
          &larr; Home
        </Link>

        <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl mt-6 mb-10">
          Domains
        </h1>

        {categories.map((cat) => (
          <section key={cat} className="mb-8">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted,#8A8178)] mb-3">
              {cat}
            </h2>
            <ul className="space-y-2">
              {domains
                .filter((d) => (d.category ?? "Other") === cat)
                .map((d) => (
                  <li key={d.url} className="flex items-baseline gap-3">
                    <a
                      href={d.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-accent,#B8653A)] hover:underline underline-offset-2 break-all"
                    >
                      {d.label}
                    </a>
                    {d.note && (
                      <span className="text-sm text-[var(--color-text-muted,#8A8178)]">
                        — {d.note}
                      </span>
                    )}
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
