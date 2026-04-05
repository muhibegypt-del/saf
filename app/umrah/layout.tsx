import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umrah with Shaykh Mustafa Briggs — November 2026",
  description: "An intimate, transformative Umrah journey through Makkah and Madinah with Shaykh Mustafa Briggs. Deep Seerah scholarship meets profound spiritual awakening. November 20-29, 2026.",
};

export default function UmrahLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
