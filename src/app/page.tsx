"use client";

import { useState } from "react";
import Preloader from "@/components/ui/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";
import ParticleBackground from "@/components/ui/ParticleBackground";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Resume from "@/components/sections/Resume";
import Skills from "@/components/sections/Skills";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Cinematic Loading Preloader */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      {isLoaded && (
        <div className="relative min-h-screen flex flex-col w-full z-10 overflow-x-hidden">
          {/* Custom Cursor System */}
          <CustomCursor />

          {/* Interactive Particle Network Background */}
          <ParticleBackground />

          {/* Sticky glassmorphic navbar navigation */}
          <Navbar />

          {/* Page Sections Compilation */}
          <main className="flex-1 w-full flex flex-col">
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Resume />
            <Skills />
            <Gallery />
            <Contact />
          </main>

          {/* Premium Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}
