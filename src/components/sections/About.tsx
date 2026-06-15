"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Clock, Heart, Star, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const STATS = [
  { value: 3.90, label: "Academic CGPA", suffix: "", decimals: 2 },
  { value: 6, label: "Semesters Completed", suffix: "", decimals: 0 },
  { value: 20, label: "Freelance Projects", suffix: "+", decimals: 0 },
  { value: 6, label: "Services Offered", suffix: "", decimals: 0 },
];

const SKILL_ATTRIBUTES = [
  { name: "Creative Direction", percentage: 95, color: "from-[#00f2fe] to-[#4facfe]" },
  { name: "Academic Research & Reports", percentage: 98, color: "from-[#7f00ff] to-[#e100ff]" },
  { name: "Front-End Web Development", percentage: 88, color: "from-[#4facfe] to-[#7f00ff]" },
  { name: "AI Prompt Engineering", percentage: 96, color: "from-[#e100ff] to-[#00f2fe]" },
];

function Counter({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const duration = 1500; // 1.5 seconds animation
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = (end - start) / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(start);
            }
          }, stepTime);
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
  }, [value, hasAnimated]);

  return (
    <span ref={elementRef} className="font-display text-3xl sm:text-4xl font-extrabold text-white">
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#030014]/40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(127,0,255,0.05)_0%,transparent_70%)] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00f2fe]" />
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#00f2fe]">
              My Story
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white"
          >
            Synthesizing Technology & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#7f00ff]">
              Creative Content
            </span>
          </motion.h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#7f00ff]/10 to-transparent rounded-bl-3xl pointer-events-none" />
              
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-[#00f2fe]" />
                Academic Roots & Professional Vision
              </h3>

              <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                Having completed my <strong className="text-white font-medium">6th Semester of Bachelor of Software Engineering</strong> at PMAS Arid Agriculture University, Rawalpindi, with an academic excellence benchmark of <strong className="text-[#00f2fe] font-bold">CGPA of 3.90</strong>, I have cultivated a deep scientific approach to problem-solving.
              </p>

              <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                But my execution doesn’t stop at code. Parallel to my studies, I run a thriving freelancing ecosystem. I bridge the gap between complex analytical systems and high-fidelity client content—offering world-class research papers, report design, AI cinematic animation, and UI components.
              </p>

              <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                Whether deploying responsive frontend systems or architecting detailed academic case studies, my standard remains consistent: deliver pixel-perfect, highly persuasive, and meticulously structured assets that make clients stand out.
              </p>
            </motion.div>

            {/* Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((stat, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  key={stat.label}
                  className="glass-card p-5 rounded-2xl border border-white/5 text-center flex flex-col justify-center items-center backdrop-blur-sm"
                >
                  <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  <span className="font-sans text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mt-2 block font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills Progress & Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Core Capability Pillars */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col gap-6"
            >
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-[#e100ff]" />
                Execution Pillars
              </h3>

              <div className="flex flex-col gap-5">
                {SKILL_ATTRIBUTES.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center font-sans text-xs sm:text-sm font-semibold tracking-wide">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-[#00f2fe]">{skill.percentage}%</span>
                    </div>
                    {/* Progress Track */}
                    <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Timeline Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-panel p-6 rounded-3xl border border-white/5 flex flex-col gap-4"
            >
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                My Core Mindset
              </h4>
              
              <ul className="flex flex-col gap-3 font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] mt-2 flex-shrink-0" />
                  <span><strong className="text-white font-medium">Self-motivated:</strong> Consistently learning and incorporating cutting-edge AI technologies and styling techniques.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7f00ff] mt-2 flex-shrink-0" />
                  <span><strong className="text-white font-medium">Adaptive Problem Solver:</strong> Translating operational organizational constraints into digital solutions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e100ff] mt-2 flex-shrink-0" />
                  <span><strong className="text-white font-medium">Clear Communication:</strong> Aligning meticulously with clients to deliver optimal conversion impact.</span>
                </li>
              </ul>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
