import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#2C2825] py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>&copy; {new Date().getFullYear()} Nate. All rights reserved.</p>
        <Link href="/domains" className="hover:text-white/50 transition-colors">
          Built by Nate with Next.js &amp; Vercel
        </Link>
      </div>
    </footer>
  );
}
