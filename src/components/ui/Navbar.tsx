"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Skills", href: "#skills" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background styling trigger
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Progress Indicator
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Active Section Tracking using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    NAV_LINKS.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#030014]/65 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent py-5"
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group select-none"
          >
            <span className="font-display font-extrabold text-2xl tracking-tighter text-white group-hover:text-neon-cyan transition-colors">
              M<span className="text-neon-cyan group-hover:text-white transition-colors">T</span>
            </span>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="font-sans font-medium text-xs uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors hidden sm:block">
              Portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 font-sans text-sm font-medium tracking-wide transition-colors ${
                    isActive ? "text-neon-cyan" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-neon-cyan shadow-[0_0_10px_rgba(0,242,254,0.8)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Hire Me CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-neon-purple to-neon-pink text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-full shadow-[0_0_15px_rgba(127,0,255,0.3)] hover:shadow-[0_0_25px_rgba(225,0,255,0.5)] hover:scale-105 transition-all duration-300 border border-white/10"
            >
              Hire Me
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-neon-cyan p-1 bg-white/5 border border-white/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#030014]/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-8 pb-10"
          >
            {/* Background elements */}
            <div className="absolute top-1/4 right-1/10 w-64 h-64 bg-neon-purple/5 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/10 w-64 h-64 bg-neon-cyan/5 blur-[80px] pointer-events-none" />

            <div className="flex flex-col gap-6 my-auto">
              {NAV_LINKS.map((link, idx) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-display text-3xl font-bold tracking-tight py-2 transition-colors ${
                      isActive 
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue" 
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto"
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-pink text-white font-sans text-sm font-semibold uppercase tracking-widest rounded-xl"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
