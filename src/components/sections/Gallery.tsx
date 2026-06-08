"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Maximize2, X, ArrowLeft, Download } from "lucide-react";
import Image from "next/image";

interface GalleryItem {
  title: string;
  category: string;
  src: string;
  gridClass: string;
  objectClass?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: "Muzammil Tanveer - Portrait",
    category: "Professional Photo",
    src: "/assets/portrait.jpg",
    gridClass:
      "md:col-start-1 md:row-start-1 md:row-span-2 lg:col-start-1 lg:row-start-1 lg:row-span-2",
  },
  {
    title: "AI Voiceover & Media Generation Gig",
    category: "Creative AI Voiceover",
    src: "/assets/ai_generative_content.jpg",
    gridClass:
      "md:col-start-2 md:row-start-1 lg:col-start-2 lg:col-span-2 lg:row-start-1",
    objectClass: "object-top",
  },
  {
    title: "Certificate of Excellence in Team HR",
    category: "Erudite Coaching Centre — Internship Recognition",
    src: "/assets/cert_erudite_hr.png",
    gridClass:
      "md:col-start-1 md:row-start-3 lg:col-start-2 lg:row-start-2",
  },
  {
    title: "Certificate of Assessment of Fundamental Competencies",
    category: "The Institute of Chartered Accountants of Pakistan (ICAP)",
    src: "/assets/cert_icap_afc.jpg",
    gridClass:
      "md:col-start-2 md:row-start-2 md:row-span-2 lg:col-start-3 lg:row-start-2 lg:row-span-2",
  },
  {
    title: "Curriculum Vitae",
    category: "Resume & Credentials",
    src: "/assets/resume.jpg",
    gridClass:
      "md:col-start-1 md:row-start-4 lg:col-start-1 lg:row-start-3",
    objectClass: "object-top",
  },
  {
    title: "Certificate of Tailwind CSS Workshop",
    category: "YoungDev Interns — 3-Day Training Completion",
    src: "/assets/cert_tailwind_workshop.png",
    gridClass:
      "md:col-start-2 md:row-start-4 lg:col-start-2 lg:row-start-3",
  },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImg]);

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
            A visual gallery presenting professional credentials, certificates, and portfolio images.
          </p>
        </div>

        {/* Bento Grid Layout — no wasted space */}
        <div className="grid grid-cols-1 auto-rows-[280px] md:grid-cols-2 md:auto-rows-[220px] lg:grid-cols-3 lg:auto-rows-[230px] gap-4">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
              key={item.title}
              onClick={() => setSelectedImg(item)}
              className={`relative group glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-white/12 cursor-pointer shadow-lg ${item.gridClass}`}
            >
              {/* Full-bleed image */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`object-cover ${item.objectClass || "object-center"} group-hover:scale-[1.03] transition-transform duration-500`}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* Hover Maximize indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[5]">
                <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Maximize2 className="w-4.5 h-4.5 text-[#00f2fe]" />
                </div>
              </div>

              {/* Title card overlay (shows on card bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
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

      </div>

      {/* Lightbox full-size pop-up */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            {/* Header inside Lightbox - stop propagation so clicks inside don't close the modal */}
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="flex items-center justify-between w-full max-w-3xl mb-4 z-10 px-2"
            >
              <button
                onClick={() => setSelectedImg(null)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white hover:border-[#00f2fe]/30 transition-all duration-300 cursor-pointer text-xs font-sans font-semibold"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#00f2fe]" />
                Back to Portfolio
              </button>

              <div className="flex items-center gap-3">
                {/* Download button for Resume / Credentials */}
                {selectedImg.category.toLowerCase().includes("resume") && (
                  <a
                    href="/assets/resume.pdf"
                    download="Muzammil_Tanveer_Resume.pdf"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#7f00ff] to-[#e100ff] hover:shadow-[0_0_12px_rgba(225,0,255,0.3)] text-white text-xs font-sans font-semibold transition-all duration-300 border border-white/5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download CV
                  </a>
                )}
                <button
                  onClick={() => setSelectedImg(null)}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center text-white hover:text-[#00f2fe] transition-colors cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Image Frame - stop propagation so clicks here don't close the modal */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl h-[65vh] md:h-[75vh] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 flex items-center justify-center p-3 shadow-2xl"
            >
              <Image
                src={selectedImg.src}
                alt={selectedImg.title}
                fill
                className="object-contain p-2"
              />
            </motion.div>

            {/* Info text under photo - stop propagation */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="mt-4 text-center max-w-xl z-10"
            >
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
    </section>
  );
}
