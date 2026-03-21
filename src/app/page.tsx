"use client";

import { useState, useEffect } from "react";
import { IntroSequence } from "@/components/intro/IntroSequence";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    if (!introComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [introComplete]);

  return (
    <ThemeProvider>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <IntroSequence onComplete={() => setIntroComplete(true)} />
      <Header visible={introComplete} />
      <main id="main-content">
        <Hero visible={introComplete} />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
        <TechStack />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
