export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]">
        <p>&copy; {new Date().getFullYear()} Nate. All rights reserved.</p>
        <p>
          Built by Nate with Next.js &amp; Vercel
        </p>
      </div>
    </footer>
  );
}
