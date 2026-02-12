import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saffana — Comms Strategy + Writing Workshops",
  description: "An elevated, production-ready website for Saffana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
