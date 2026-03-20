const services = [
  {
    title: "Custom Website Design",
    description:
      "Unique, branded websites tailored to your business — no cookie-cutter templates.",
  },
  {
    title: "Website Development",
    description:
      "Fast, responsive, SEO-friendly sites built with modern technology that scales with you.",
  },
  {
    title: "Website Management",
    description:
      "Ongoing updates, hosting, security, and performance — so you can focus on your business.",
  },
  {
    title: "Landing Pages & Funnels",
    description:
      "High-converting pages designed to turn visitors into customers.",
  },
];

const portfolio = [
  { title: "Local Restaurant Rebrand", category: "Design & Development" },
  { title: "E-Commerce Storefront", category: "Development & Management" },
  { title: "Professional Services Firm", category: "Design & SEO" },
  { title: "Startup Landing Page", category: "Landing Page & Funnel" },
];

const testimonials = [
  {
    quote:
      "Nate built us a site that actually brings in customers. The whole process was smooth and professional.",
    author: "— Happy Client",
  },
  {
    quote:
      "We went from an outdated WordPress site to something modern and fast. Highly recommend.",
    author: "— Satisfied Business Owner",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center bg-[var(--color-brand)] px-6 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl">
          Websites That Work
          <br />
          <span className="text-[var(--color-accent)]">As Hard As You Do</span>
        </h1>
        <p className="mb-8 max-w-xl text-lg text-gray-300">
          I design, build, and manage modern websites for businesses that want
          to grow online. No fluff — just clean, fast sites that get results.
        </p>
        <a
          href="#contact"
          className="rounded-lg bg-[var(--color-accent)] px-8 py-3 text-lg font-semibold text-white transition hover:opacity-90"
        >
          Let&apos;s Talk
        </a>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">What I Do</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-gray-200 p-6 transition hover:shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="bg-[var(--color-light)] px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Recent Work
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {portfolio.map((p) => (
              <div
                key={p.title}
                className="flex h-48 flex-col items-center justify-center rounded-xl bg-gray-200 text-center"
              >
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{p.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">
          What Clients Say
        </h2>
        <div className="space-y-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-xl border-l-4 border-[var(--color-accent)] bg-gray-50 p-6"
            >
              <p className="mb-2 text-lg italic text-gray-700">
                &ldquo;{t.quote}&rdquo;
              </p>
              <cite className="text-sm font-medium text-gray-500">
                {t.author}
              </cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="flex flex-col items-center bg-[var(--color-brand)] px-6 py-24 text-center text-white"
      >
        <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mb-8 max-w-md text-gray-300">
          Drop me a line and let&apos;s talk about what you need. No pressure,
          no hard sell — just a conversation about your goals.
        </p>
        <a
          href="mailto:nate@itsmenate.com"
          className="rounded-lg bg-[var(--color-accent)] px-8 py-3 text-lg font-semibold text-white transition hover:opacity-90"
        >
          Email Me
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-6 py-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Nate. All rights reserved.</p>
        <nav className="mt-3 space-x-6">
          <a href="#services" className="hover:text-white">
            Services
          </a>
          <a href="#portfolio" className="hover:text-white">
            Portfolio
          </a>
          <a href="#testimonials" className="hover:text-white">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>
      </footer>
    </main>
  );
}
