"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import Image from "next/image";

const ROLES = [
  "AI Video Creator",
  "Academic Writer",
  "Research Specialist",
  "Case Study Expert",
  "Report Designer",
  "Creative Freelancer",
  "Digital Creator"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Visual Ambient Glows */}
      <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] bg-[#00f2fe]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[350px] h-[350px] bg-[#7f00ff]/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Background Interactive Radial Overlay */}
      <div className="absolute inset-0 grid-overlay z-0 opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Content (Text) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Availability Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm select-none"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Open for Internships & Projects
            </span>
          </motion.div>

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#00f2fe] mb-2"
          >
            Software Engineer & Content Specialist
          </motion.p>

          {/* Cinematic Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-4 leading-none"
          >
            Muzammil <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#7f00ff] text-glow-cyan">
              Tanveer
            </span>
          </motion.h1>

          {/* Dynamic Role Rotator */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-10 sm:h-12 flex items-center mb-6 overflow-hidden"
          >
            <span className="font-sans text-lg sm:text-2xl text-gray-400 font-medium mr-2">
              I am a
            </span>
            <div className="relative h-full flex-1 min-w-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center font-display text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e100ff] to-[#7f00ff] tracking-wide"
                >
                  {ROLES[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Professional Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-sans text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mb-10 leading-relaxed font-light"
          >
            Bridging organizational operations and digital excellence. I craft world-class front-end layouts, conduct deep academic research, and synthesize cinematic AI content that solves real-world communication challenges.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10"
          >
            <button
              onClick={() => handleScrollTo("#contact")}
              className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#7f00ff] text-black font-sans text-sm font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Hire Me
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo("#projects")}
              className="flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-sans text-sm font-semibold uppercase tracking-wider rounded-xl transition-all duration-300 cursor-pointer"
            >
              View Projects
            </button>

            <a
              href="/assets/resume.png"
              download="Muzammil_Tanveer_Resume.png"
              className="flex items-center gap-2 px-6 py-3.5 bg-transparent border border-[#7f00ff]/30 hover:border-[#7f00ff] hover:bg-[#7f00ff]/10 text-white font-sans text-sm font-semibold uppercase tracking-wider rounded-xl transition-all duration-300"
            >
              <Download className="w-4 h-4 text-[#e100ff]" />
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-5"
          >
            <span className="font-sans text-xs uppercase tracking-widest text-gray-500">
              Connect:
            </span>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-[#00f2fe]/20 hover:border-[#00f2fe] hover:text-[#00f2fe] text-gray-300 transition-all duration-300"
              >
                <GithubIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/muzammil-tanveer-814083254"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-[#4facfe]/20 hover:border-[#4facfe] hover:text-[#4facfe] text-gray-300 transition-all duration-300"
              >
                <LinkedinIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="mailto:tanveermuzammil03@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-[#7f00ff]/20 hover:border-[#7f00ff] hover:text-[#7f00ff] text-gray-300 transition-all duration-300"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://wa.me/923096820353"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500 hover:text-emerald-400 text-gray-300 transition-all duration-300"
              >
                <MessageSquare className="w-4.5 h-4.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Content (Profile Photo + Glass Cards) */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0">
          {/* Neon Circular Orbit Ring */}
          <div className="absolute w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] border border-dashed border-white/10 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none" />
          <div className="absolute w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] border border-[#00f2fe]/20 rounded-full animate-[spin_20s_linear_reverse_infinite] pointer-events-none" />

          {/* Profile Card Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="relative w-[280px] sm:w-[340px] aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-white/10 p-3 shadow-2xl group cursor-none"
          >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 via-transparent to-transparent z-10" />

            {/* Profile Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
              <Image
                src="/assets/portrait.jpg"
                alt="Muzammil Tanveer"
                fill
                sizes="(max-width: 640px) 280px, 340px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Glowing Highlights */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7f00ff]/20 via-transparent to-[#00f2fe]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
          </motion.div>

          {/* Floating Achievements/Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute top-10 -left-6 sm:-left-12 glass-card px-5 py-3 rounded-2xl border border-white/10 shadow-lg flex items-center gap-3 backdrop-blur-md z-20 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-[#00f2fe]/20 flex items-center justify-center font-display font-extrabold text-[#00f2fe] text-sm">
              3.89
            </div>
            <div>
              <p className="font-display font-bold text-xs text-white">CGPA</p>
              <p className="font-sans text-[10px] text-gray-400">Academic Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute bottom-10 -right-6 sm:-right-12 glass-card px-5 py-3 rounded-2xl border border-white/10 shadow-lg flex items-center gap-3 backdrop-blur-md z-20 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-[#7f00ff]/20 flex items-center justify-center font-display font-extrabold text-[#e100ff] text-sm">
              6th
            </div>
            <div>
              <p className="font-display font-bold text-xs text-white">Semester</p>
              <p className="font-sans text-[10px] text-gray-400">Software Eng. (BS SE)</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Mouse indicator to scroll down */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-500 hover:text-white cursor-pointer transition-colors z-10 select-none" onClick={() => handleScrollTo("#about")}>
        <span className="font-sans text-[9px] uppercase tracking-[0.25em]">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 border border-gray-600 rounded-full flex justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
