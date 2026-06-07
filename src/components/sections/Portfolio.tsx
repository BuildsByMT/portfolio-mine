"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, X, ArrowUpRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Image from "next/image";

const CATEGORIES = [
  "All",
  "AI Videos",
  "Academic Work",
  "Case Studies",
  "Motion Graphics",
  "Research Projects",
  "UI/UX Concepts"
];

const PROJECTS: {
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  results: string;
  year: string;
  link: string;
  video?: string;
}[] = [
  {
    title: "Coffee Beans Procurement Website",
    category: "UI/UX Concepts",
    tagline: "E-Commerce portal designed with premium glassmorphism interfaces and fluid JS animations.",
    description: "An elegant procurement portal crafted for premium coffee distributors. Integrates high-end custom styling, robust animations, product filtering mechanisms, and cart state structures using vanilla JS, HTML, and CSS.",
    image: "/assets/coffee_beans.png",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    results: "35% increase in mock user engagement metrics and award-worthy visual feedback.",
    year: "2025",
    link: "https://beanforge-pink.vercel.app/"
  },
  {
    title: "8086 Traffic Lights Controller",
    category: "Academic Work",
    tagline: "Hardware simulation system matching logic gates with assembly directives.",
    description: "Hardware micro-controller system designed using an 8086 microprocessor simulation with C++ and Arduino code. Implemented complex cross-route timing sequences, hazard modes, and hardware interrupt callbacks.",
    image: "/assets/traffic_lights.png",
    tech: ["Arduino", "C++", "8086 Assembly", "Microprocessor Simulation"],
    results: "Successfully modeled a real-world multi-lane intersection with zero race conditions.",
    year: "2024",
    link: "#"
  },
  {
    title: "Library Management System",
    category: "Research Projects",
    tagline: "C# desktop dashboard with SQL queries and responsive analytics tables.",
    description: "A comprehensive Windows desktop system built on the .NET framework using C# and MS SQL database structures. Features transactional check-ins/check-outs, user authorization tiers, and clean modern styling with custom controls.",
    image: "/assets/library_system.png",
    tech: ["C#", ".NET Framework", "MS SQL", "Desktop GUI"],
    results: "Replaced legacy paper catalogs, reducing database lookup operations down to less than 100ms.",
    year: "2024",
    link: "https://github.com/BuildsByMT/LibraryManagementSystem",
    video: "https://drive.google.com/file/d/1lT2sGXBZ-jPx5cM446-PXhZrRtybgT7w/view?ts=686aaa6b"
  },
  {
    title: "AI Voiceover & Media Generation",
    category: "AI Videos",
    tagline: "Premium AI-driven voice synthesis, narration, and creative prompt engineering.",
    description: "High-quality, professional AI voiceover production pipelines utilizing advanced neural synthesis, custom script formatting, and voice alignment. Services tailored for content creators and businesses on Fiverr.",
    image: "/assets/ai_generative_content.jpg",
    tech: ["ElevenLabs", "AI Voice Synthesis", "Audio Post-Production", "Fiverr Services"],
    results: "Generated over 50+ hours of custom voiceovers with clear tones and professional pacing.",
    year: "2025",
    link: "https://www.fiverr.com/muzammil787?public_mode=true"
  },
  {
    title: "Professional Case Studies & Assignments",
    category: "Case Studies",
    tagline: "Meticulous academic research papers, reports, summaries, and case study analysis.",
    description: "High-quality research writing, academic assignments, summaries, and deep management case study analyses designed to meet rigorous standards. Projects are delivered globally through active Fiverr gigs.",
    image: "/assets/case_study.jpg",
    tech: ["Academic Research", "Case Study Analysis", "Technical Writing", "SWOT & PESTEL"],
    results: "Successfully delivered 20+ freelance reports and summaries with outstanding customer reviews.",
    year: "2024",
    link: "https://www.fiverr.com/muzammil787?public_mode=true"
  },
  {
    title: "Interactive UI/UX Dashboard Concept",
    category: "UI/UX Concepts",
    tagline: "Next-gen glassmorphism interface highlighting dark-mode data analytics.",
    description: "A dark theme interactive analytics panel featuring responsive grid items, chart visualizations, custom neon glow buttons, and sidebar transition systems. Explores extreme high-end digital agency layout visuals.",
    image: "/assets/library_system.png", // fallback
    tech: ["React.js", "Figma", "Tailwind CSS", "Framer Motion"],
    results: "Awarded high ratings on design critique forums for its smooth micro-animations and accessibility.",
    year: "2025",
    link: "#"
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 bg-[#030014]/40 overflow-hidden">
      {/* Visual Ambient Glow */}
      <div className="absolute top-1/3 right-1/10 w-[350px] h-[350px] bg-[#00f2fe]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/10 w-[350px] h-[350px] bg-[#7f00ff]/5 blur-[120px] rounded-full pointer-events-none" />

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
              Portfolio
            </span>
          </motion.div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#7f00ff]">Projects</span>
          </h2>
          
          <p className="font-sans text-gray-400 text-sm sm:text-base max-w-xl font-light">
            An intersection of robust software development and visual AI artistry. Explore my latest work across engineering, research, and design.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#00f2fe] to-[#4facfe] border-transparent text-black shadow-[0_0_15px_rgba(0,242,254,0.3)] scale-105"
                    : "bg-white/5 border-white/5 text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="group relative glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 cursor-pointer shadow-xl"
              >
                {/* Image Container with Hover reveal */}
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />
                  
                  {/* Eye Icon Hover Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15">
                    <div className="w-12 h-12 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Eye className="w-5 h-5 text-[#00f2fe]" />
                    </div>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6">
                  <span className="font-sans text-[9px] font-semibold uppercase tracking-wider text-[#4facfe] mb-2 block">
                    {project.category}
                  </span>
                  
                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#00f2fe] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-4 line-clamp-2">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 font-sans text-[10px] text-gray-300">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 font-sans text-[10px] text-gray-400">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Detailed Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#07051a]/95 shadow-2xl p-6 sm:p-8"
            >
              {/* Header Back Pill and Close Button Row */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white hover:border-[#00f2fe]/30 transition-all duration-300 cursor-pointer text-xs font-sans font-semibold"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-[#00f2fe]" />
                  Back to Portfolio
                </button>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center text-white hover:text-[#00f2fe] transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Project Title and Category Heading Block */}
              <div className="mb-6">
                <span className="px-2.5 py-1 rounded bg-[#00f2fe]/10 text-[#00f2fe] font-sans text-[10px] font-bold uppercase tracking-widest border border-[#00f2fe]/20">
                  {selectedProject.category}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white mt-3 tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Video Player / Hero Image Banner */}
              {selectedProject.video && selectedProject.video !== "#" ? (
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/10 mb-8 shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
                  {selectedProject.video.includes("drive.google.com") ? (
                    <iframe
                      src={selectedProject.video.replace("/view", "/preview").replace("/edit", "/preview").split("?")[0] + "?autoplay=0"}
                      className="w-full h-full border-0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : selectedProject.video.includes("youtube.com") || selectedProject.video.includes("youtu.be") ? (
                    <iframe
                      src={selectedProject.video.includes("youtube.com/watch") 
                        ? selectedProject.video.replace("watch?v=", "embed/") 
                        : selectedProject.video.replace("youtu.be/", "youtube.com/embed/")}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={selectedProject.video}
                      controls
                      className="w-full h-full object-contain"
                      poster={selectedProject.image}
                    />
                  )}
                </div>
              ) : (
                <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden bg-slate-900 mb-8 border border-white/5 shadow-xl">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/60 to-transparent" />
                </div>
              )}

              {/* Details grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Left (Long description) */}
                <div className="md:col-span-2">
                  <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-2">
                    Project Description
                  </h4>
                  <p className="font-sans text-gray-300 text-sm font-light leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-2">
                    Key Impact / Results
                  </h4>
                  <div className="flex items-start gap-2.5 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="font-sans text-emerald-400 text-xs sm:text-sm font-medium italic">
                      {selectedProject.results}
                    </p>
                  </div>
                </div>

                {/* Right (Metadata / Stack) */}
                <div className="flex flex-col gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 h-fit justify-between">
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="font-sans text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Completed:</p>
                      <p className="font-sans text-sm text-white font-medium">{selectedProject.year}</p>
                    </div>

                    <div>
                      <p className="font-sans text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-2">Technologies Used:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-white/10 font-sans text-[11px] text-gray-200">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {selectedProject.link !== "#" && (
                    (() => {
                      const isGithub = selectedProject.link.includes("github.com");
                      const isFiverr = selectedProject.link.includes("fiverr.com");
                      
                      let btnClasses = "mt-4 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-display text-xs font-black uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] whitespace-nowrap ";
                      
                      if (isGithub) {
                        btnClasses += "bg-[#1f1d2e] border border-white/10 hover:border-[#00f2fe]/40 text-white shadow-[0_0_15px_rgba(0,242,254,0.08)] hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] cursor-pointer";
                      } else if (isFiverr) {
                        btnClasses += "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.45)] cursor-pointer";
                      } else {
                        btnClasses += "bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-black hover:from-[#4facfe] hover:to-[#7f00ff] hover:text-white shadow-[0_0_15px_rgba(0,242,254,0.2)] hover:shadow-[0_0_25px_rgba(0,242,254,0.45)] cursor-pointer";
                      }

                      return (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={btnClasses}
                        >
                          {isGithub ? (
                            <>
                              <GithubIcon className="w-4 h-4 text-[#00f2fe] flex-shrink-0" />
                              <span>View GitHub Repo</span>
                            </>
                          ) : isFiverr ? (
                            <>
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
                              <span>Order on Fiverr</span>
                            </>
                          ) : (
                            <>
                              <span>Launch Website</span>
                              <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
                            </>
                          )}
                        </a>
                      );
                    })()
                  )}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
