import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shaykh Mustafa Briggs — Islamic Scholar & Author",
  description: "Shaykh Mustafa Briggs is a classically trained Islamic scholar, best-selling author, and international lecturer. Explore his books, scholarship, and lectures delivered at over 50 universities worldwide.",
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
