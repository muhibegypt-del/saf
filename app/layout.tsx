import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mustafa Briggs — Best-Selling Author & Historian",
  description: "Mustafa Briggs is a best-selling author, historian, and lecturer specialising in Islam, Black history, and global civilisations. Explore his books, speaking engagements, and more.",
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
