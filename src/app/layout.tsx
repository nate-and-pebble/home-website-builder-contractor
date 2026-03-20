import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nate | Website Builder & Contractor",
  description:
    "Professional website design, development, and management. Clean, fast, modern sites built to grow your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
