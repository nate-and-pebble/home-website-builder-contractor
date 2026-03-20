import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "itsmenate.com",
  description: "Nate's personal site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
