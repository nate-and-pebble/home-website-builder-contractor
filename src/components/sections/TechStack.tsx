"use client";

import { Marquee } from "@/components/ui/Marquee";

const techItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Vercel",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "GSAP",
  "Framer Motion",
  "Figma",
];

export function TechStack() {
  return (
    <div className="py-12 border-t border-b border-[var(--color-border)]">
      <Marquee items={techItems} speed={25} />
    </div>
  );
}
