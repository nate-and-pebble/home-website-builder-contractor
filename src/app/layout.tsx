import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nate | Web Designer & Developer",
  description:
    "I design, build, and manage modern websites for businesses that want to grow online. Clean, fast, and built to convert.",
  openGraph: {
    title: "Nate | Web Designer & Developer",
    description: "Clean, fast websites that actually get results.",
    url: "https://itsmenate.com",
    siteName: "Nate",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <SmoothScroll />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
