"use client";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { LogoBar } from "@/components/LogoBar";
import { Services } from "@/components/Services";
import { Statement } from "@/components/Statement";
import { Testimonials } from "@/components/Testimonials";
import { Press } from "@/components/Press";
import { Signup } from "@/components/Signup";
import { Footer } from "@/components/Footer";
import { T } from "@/components/tokens";

export default function Home() {
  return (
    <main
      style={{
        background: T.bg,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Nav />
      <Hero />
      <LogoBar />
      <Services />
      <Statement />
      <Testimonials />
      <Press />
      <Signup />
      <Footer />
    </main>
  );
}
