"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Sparkles, Terminal, Laptop, Cpu, Settings, Edit3 } from "lucide-react";

const CORE_SKILLS = [
  { name: "Prompt Engineering", percentage: 96, color: "#00f2fe", icon: Cpu },
  { name: "Academic Research & Writing", percentage: 98, color: "#7f00ff", icon: Edit3 },
  { name: "Video & Motion Editing", percentage: 92, color: "#e100ff", icon: Laptop },
  { name: "Frontend Development", percentage: 88, color: "#4facfe", icon: Terminal },
];

const SECONDARY_SKILLS = [
  { name: "AI Video Creation", level: "Expert" },
  { name: "Report Formatting & Design", level: "Expert" },
  { name: "Case Study Analysis", level: "Expert" },
  { name: "Presentation Design", level: "Expert" },
  { name: "Creative Direction", level: "Advanced" },
  { name: "Thumbnail Design", level: "Expert" },
  { name: "Content Creation", level: "Expert" },
  { name: "Data Science Fundamentals", level: "Intermediate" }
];

const TOOLS = [
  { name: "ChatGPT", category: "AI Tools", glow: "hover:shadow-[0_0_15px_rgba(16,163,127,0.3)] hover:border-[#10a37f]" },
  { name: "Gemini", category: "AI Tools", glow: "hover:shadow-[0_0_15px_rgba(74,144,226,0.3)] hover:border-[#4a90e2]" },
  { name: "Runway Gen-2", category: "AI Tools", glow: "hover:shadow-[0_0_15px_rgba(225,0,255,0.3)] hover:border-[#e100ff]" },
  { name: "Midjourney", category: "AI Tools", glow: "hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] hover:border-[#00f2fe]" },
  { name: "Sora", category: "AI Tools", glow: "hover:shadow-[0_0_15px_rgba(127,0,255,0.3)] hover:border-[#7f00ff]" },
  { name: "Figma", category: "Design Tools", glow: "hover:shadow-[0_0_15px_rgba(242,78,29,0.3)] hover:border-[#f24e1d]" },
  { name: "Canva Pro", category: "Design Tools", glow: "hover:shadow-[0_0_15px_rgba(0,196,204,0.3)] hover:border-[#00c4cc]" },
  { name: "Premiere Pro", category: "Editing Tools", glow: "hover:shadow-[0_0_15px_rgba(153,153,255,0.3)] hover:border-[#9999ff]" },
  { name: "After Effects", category: "Editing Tools", glow: "hover:shadow-[0_0_15px_rgba(204,102,255,0.3)] hover:border-[#cc66ff]" },
  { name: "CapCut Pro", category: "Editing Tools", glow: "hover:shadow-[0_0_15px_rgba(255,0,127,0.3)] hover:border-[#ff007f]" },
  { name: "Photoshop", category: "Design Tools", glow: "hover:shadow-[0_0_15px_rgba(49,163,243,0.3)] hover:border-[#31a3f3]" },
  { name: "React.js / Next.js", category: "Development", glow: "hover:shadow-[0_0_15px_rgba(0,216,255,0.3)] hover:border-[#00d8ff]" }
];

function SkillDial({ percentage, color, label, icon: Icon }: { percentage: number; color: string; label: string; icon: any }) {
  const [strokeOffset, setStrokeOffset] = useState(250);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const radius = 35;
  const circumference = 2 * Math.PI * radius; // ~219.9

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const offset = circumference - (percentage / 100) * circumference;
          setStrokeOffset(offset);
        }
      },
      { threshold: 0.1 }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, [percentage, circumference, hasAnimated]);

  return (
    <div ref={elementRef} className="flex flex-col items-center p-6 glass-card rounded-2xl border border-white/5 backdrop-blur-sm group hover:border-white/10 transition-colors duration-300">
      <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
        {/* Outer Circular Ring SVG */}
        <svg className="w-full h-full transform -rotate-90">
          {/* Base Circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            fill="transparent"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="6"
          />
          {/* Active Progress Circle */}
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeOffset}
            strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 6px ${color}80)` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        {/* Inner Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-6 h-6 text-gray-300 group-hover:scale-110 transition-transform duration-300" style={{ color }} />
        </div>
      </div>
      
      <span className="font-display font-extrabold text-white text-base text-center mb-1">
        {percentage}%
      </span>
      <span className="font-sans text-xs text-gray-400 text-center tracking-wide font-light">
        {label}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#030014]/60 overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(0,242,254,0.05)_0%,transparent_75%)] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#4facfe]" />
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#4facfe]">
              Competencies
            </span>
          </motion.div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Technical Stacks & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#e100ff]">Mastery</span>
          </h2>
          
          <p className="font-sans text-gray-400 text-sm sm:text-base max-w-xl font-light">
            A comprehensive mapping of core competencies, programming skillsets, and digital design toolkits optimized for immediate production.
          </p>
        </div>

        {/* Dials Grid (Core Skills) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {CORE_SKILLS.map((skill) => (
            <SkillDial
              key={skill.name}
              percentage={skill.percentage}
              color={skill.color}
              label={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>

        {/* Secondary Skills + Tools Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Secondary Skills (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                  <Settings className="w-5 h-5 text-[#00f2fe]" />
                  Secondary Capabilities
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SECONDARY_SKILLS.map((item) => (
                    <div key={item.name} className="p-3.5 rounded-xl bg-white/3 border border-white/5 flex flex-col justify-center">
                      <p className="font-sans text-xs font-semibold text-white tracking-wide">{item.name}</p>
                      <p className="font-sans text-[10px] text-neon-cyan uppercase tracking-wider font-semibold mt-1">{item.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tools Grid (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 rounded-3xl border border-white/5"
            >
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-[#e100ff]" />
                Software & Tool Ecosystem
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className={`p-4 rounded-xl bg-white/3 border border-white/5 flex flex-col transition-all duration-300 relative overflow-hidden group border-b-2 cursor-default ${tool.glow}`}
                  >
                    <span className="font-display font-bold text-sm text-white group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                    <span className="font-sans text-[9px] text-gray-500 uppercase tracking-widest mt-1">
                      {tool.category}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
