"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Work = dynamic(() => import("@/components/Work"));
const Process = dynamic(() => import("@/components/Process"));
const About = dynamic(() => import("@/components/About"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
