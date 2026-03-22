import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nate | Website Builder & Contractor",
  description:
    "I build fast, polished websites that turn visitors into customers. Full-stack web development using Next.js, React, and TypeScript — shipped in weeks, not months.",
  metadataBase: new URL("https://itsmenate.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nate | Website Builder & Contractor",
    description:
      "I build fast, polished websites that turn visitors into customers. Full-stack web development — shipped in weeks, not months.",
    url: "https://itsmenate.com",
    siteName: "itsmenate.com",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "itsmenate.com" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nate | Website Builder & Contractor",
    description:
      "I build fast, polished websites that turn visitors into customers.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.svg" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "itsmenate.com",
        url: "https://itsmenate.com",
      },
      {
        "@type": "Person",
        name: "Nate",
        url: "https://itsmenate.com",
        jobTitle: "Website Builder & Contractor",
        sameAs: ["https://github.com", "https://linkedin.com"],
      },
    ],
  };

  return (
    <html
      lang="en"
      data-theme="light"
      className={`${inter.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
