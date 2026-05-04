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
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
      />
      {children}
    </>
  );
}
