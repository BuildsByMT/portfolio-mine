"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Maximize2, X } from "lucide-react";
import Image from "next/image";

const GALLERY_ITEMS = [
  {
    title: "Muzammil Tanveer - Portrait",
    category: "Professional Photo",
    src: "/assets/portrait.jpg",
    aspect: "aspect-[3/4]"
  },
  {
    title: "Coffee Beans procurement web GUI",
    category: "E-Commerce Design",
    src: "/assets/coffee_beans.png",
    aspect: "aspect-[16/10]"
  },
  {
    title: "LMS Analytics Dashboard design",
    category: "Software UI/UX",
    src: "/assets/library_system.png",
    aspect: "aspect-[16/10]"
  },
  {
    title: "Curriculum Vitae",
    category: "Resume & Credentials",
    src: "/assets/resume.png",
    aspect: "aspect-[1/1.4]"
  },
  {
    title: "AI generated cinematic sci-fi metropolis",
    category: "Creative AI Video",
    src: "/assets/ai_cinematic.png",
    aspect: "aspect-[16/10]"
  },
  {
    title: "Traffic lights simulation controller layout",
    category: "Hardware Logic",
    src: "/assets/traffic_lights.png",
    aspect: "aspect-[16/10]"
  }
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  return (
    <section id="gallery" className="relative py-24 bg-[#030014]/40 overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 w-[550px] h-[550px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(127,0,255,0.04)_0%,transparent_70%)] blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
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
              Gallery
            </span>
          </motion.div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#7f00ff]">Artifacts</span>
          </h2>
          
          <p className="font-sans text-gray-400 text-sm sm:text-base max-w-xl font-light">
            A visual gallery presenting structural designs, micro-controller interfaces, and portfolio images.
          </p>
        </div>

        {/* Masonry Layout Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
              key={item.title}
              onClick={() => setSelectedImg(item)}
              className="break-inside-avoid relative group glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-white/12 cursor-pointer shadow-lg"
            >
              {/* Image box */}
              <div className={`relative w-full ${item.aspect} bg-slate-950`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                {/* Hover Maximize indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15">
                  <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-4.5 h-4.5 text-[#00f2fe]" />
                  </div>
                </div>
              </div>

              {/* Title card overlay (shows on card bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                <span className="font-sans text-[8px] font-semibold uppercase tracking-wider text-[#4facfe] block mb-1">
                  {item.category}
                </span>
                <h3 className="font-display text-sm font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox full-size pop-up */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            >
              {/* Close Button overlay */}
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center text-white hover:text-[#00f2fe] transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Frame */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative w-full max-w-4xl max-h-[80vh] aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-white/10"
              >
                <Image
                  src={selectedImg.src}
                  alt={selectedImg.title}
                  fill
                  className="object-contain p-2"
                />
              </motion.div>

              {/* Info text under photo */}
              <div className="mt-4 text-center max-w-xl">
                <span className="font-sans text-[9px] font-semibold uppercase tracking-widest text-[#00f2fe]">
                  {selectedImg.category}
                </span>
                <h4 className="font-display text-lg font-bold text-white mt-1">
                  {selectedImg.title}
                </h4>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
