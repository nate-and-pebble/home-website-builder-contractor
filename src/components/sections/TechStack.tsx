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
    <div className="py-10 bg-[#2C2825]">
      <p className="text-xs uppercase tracking-[0.2em] text-white/50 text-center mb-4 font-medium">
        Built with
      </p>
      <Marquee items={techItems} speed={25} />
    </div>
  );
}
