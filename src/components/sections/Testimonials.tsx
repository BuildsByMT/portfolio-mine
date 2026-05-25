"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Muzammil was an exceptional asset for our report formatting project. He combined technical software details with a modern visual layout that instantly impressed our executive board. Highly recommended!",
    author: "Dr. Sarah Jenkins",
    role: "Research Director, BioTech Institute",
    rating: 5
  },
  {
    quote: "The React UI components Muzammil delivered for our platform were clean, modular, and optimized. Our user layout efficiency increased by 20% just as he promised. Excellent communication skills throughout the sprint.",
    author: "Alex Rivera",
    role: "Senior Project Manager, Daybie Client Network",
    rating: 5
  },
  {
    quote: "We needed a cinematic trailer showcase for our AI concept launch. Muzammil used Runway Gen-2 to synthesize stunning visuals that perfectly captured our brand vision. A top-tier digital creator.",
    author: "Elena Rostov",
    role: "Creative Director, Velo Media Agency",
    rating: 5
  },
  {
    quote: "The academic literature review and case study analysis Muzammil drafted was thorough, highly structured, and perfectly formatted under IEEE standards. His academic background shines through his research quality.",
    author: "Marcus Vance",
    role: "Academic Coordinator & Scholar",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="relative py-24 bg-[#030014]/60 overflow-hidden">
      {/* Visual glowing backgrounds */}
      <div className="absolute top-1/2 left-10 w-[250px] h-[250px] bg-[#00f2fe]/5 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-[#7f00ff]/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00f2fe]" />
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#00f2fe]">
              Feedback
            </span>
          </motion.div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#7f00ff]">Testimonials</span>
          </h2>
          
          <p className="font-sans text-gray-400 text-sm sm:text-base max-w-md font-light">
            Real feedback from academic collaborators, software directors, and creative project leads.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 relative flex flex-col justify-between"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-8 text-white/3 select-none pointer-events-none">
                <Quote className="w-24 h-24 stroke-[1px]" />
              </div>

              {/* Stars Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: TESTIMONIALS[currentIdx].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-sans text-gray-200 text-base sm:text-lg font-light leading-relaxed mb-8 relative z-10">
                “{TESTIMONIALS[currentIdx].quote}”
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="font-display text-base font-bold text-white">
                    {TESTIMONIALS[currentIdx].author}
                  </h4>
                  <p className="font-sans text-xs text-gray-400 mt-0.5">
                    {TESTIMONIALS[currentIdx].role}
                  </p>
                </div>

                {/* Slider Controls */}
                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white transition-colors cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white transition-colors cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
