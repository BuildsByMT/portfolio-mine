"use client";

import { Mail, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      const navHeight = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="relative bg-[#030014] border-t border-white/5 py-12 overflow-hidden">
      {/* Decorative top neon border lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f2fe]/40 to-transparent" />
      <div className="absolute top-[1px] left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#7f00ff]/20 to-transparent" />

      {/* Decorative ambient background glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-[#7f00ff]/5 blur-[60px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Top brand rows */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 mb-10 pb-10 border-b border-white/5">
          
          {/* Logo & Brief slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <a href="#home" onClick={handleScrollToTop} className="font-display font-extrabold text-2xl tracking-tighter text-white hover:text-[#00f2fe] transition-colors select-none">
              M<span className="text-[#00f2fe]">T</span>
            </a>
            <p className="font-sans text-xs text-gray-500 font-light max-w-xs">
              Translating complex systems into world-class digital experiences.
            </p>
          </div>

          {/* Quick links list */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors">
              Services
            </a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, "#projects")} className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#resume" onClick={(e) => handleLinkClick(e, "#resume")} className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors">
              Resume
            </a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Social connections */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/3 border border-white/5 hover:border-[#00f2fe] hover:text-[#00f2fe] text-gray-400 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/muzammil-tanveer-814083254"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/3 border border-white/5 hover:border-[#4facfe] hover:text-[#4facfe] text-gray-400 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:tanveermuzammil03@gmail.com"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/3 border border-white/5 hover:border-[#7f00ff] hover:text-[#7f00ff] text-gray-400 transition-all duration-300"
              aria-label="Email Shortcut"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/923096820353"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/3 border border-white/5 hover:border-emerald-500 hover:text-emerald-400 text-gray-400 transition-all duration-300"
              aria-label="WhatsApp Shortcut"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright information */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 font-sans text-[11px] text-gray-500 font-light">
          <p>© {new Date().getFullYear()} Muzammil Tanveer. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-default">Built with Next.js & Tailwind CSS v4</span>
            <span className="text-gray-700">|</span>
            <a href="#home" onClick={handleScrollToTop} className="hover:text-white transition-colors">
              Back to Top
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
