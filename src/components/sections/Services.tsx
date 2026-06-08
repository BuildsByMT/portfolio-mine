"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Video, Film, Mic, GraduationCap, FileText, 
  BarChart, BookOpen, Presentation, Sparkles, 
  Image as ImageIcon, Edit, Share2, X, ArrowLeft, ArrowRight, ArrowUpRight
} from "lucide-react";

const SERVICE_GROUPS = [
  {
    id: "ai-media",
    title: "AI Video & Voiceover Production",
    shortDescription: "Sleek generative video pipelines, high-fidelity cinematic animations, and professional neural voiceovers.",
    icon: Video,
    color: "group-hover:text-[#00f2fe]",
    glow: "hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:border-[#00f2fe]/40",
    services: [
      {
        title: "AI Video Creation",
        description: "Creating highly engaging short and long-form videos using state-of-the-art generative video AI networks.",
        features: ["Runway Gen-2 & Sora pipelines", "Text-to-Video Synthesis", "AI Script Alignment"],
        benefits: "High-quality video production at a fraction of standard timelines."
      },
      {
        title: "AI Cinematic Animation",
        description: "Synthesizing cinematic footage, motion narratives, and concept visuals tailored for brand campaigns.",
        features: ["Cinematic Camera Controls", "Multi-prompt consistency", "Ultra-high resolution scaling"],
        benefits: "Stunning cinematic trailers and backgrounds ready for marketing campaigns."
      },
      {
        title: "Voiceover Production",
        description: "Meticulous audio synthesis using premium voice generation AI models, with customizable accents and emotional depth.",
        features: ["Realistic Voice Cloning", "Multi-lingual translation", "Intonation & Pitch Modulation"],
        benefits: "Crystal-clear narrations matching video sequences seamlessly."
      },
      {
        title: "AI Content Creation",
        description: "Generating highly optimized blog copy, LinkedIn articles, and marketing copy utilizing advanced prompt engineering.",
        features: ["Persona-based prompt engineering", "SEO optimization targeting keywords", "Brand voice alignment"],
        benefits: "Scalable high-quality content output written with human-like flow."
      }
    ]
  },
  {
    id: "academic-writing",
    title: "Academic Research & Case Studies",
    shortDescription: "Authoritative academic drafts, literature surveys, SWOT analysis, and custom technical reports.",
    icon: GraduationCap,
    color: "group-hover:text-[#7f00ff]",
    glow: "hover:shadow-[0_0_20px_rgba(127,0,255,0.3)] hover:border-[#7f00ff]/40",
    services: [
      {
        title: "Academic Writing",
        description: "Authoritative academic drafts, essays, and critiques compiled under strict citation standards (APA, Harvard, IEEE).",
        features: ["Grammar & Plagiarism Cleansed", "Structured Bibliographies", "Cohesive Thesis Layouts"],
        benefits: "A grade standard structure showcasing high academic depth."
      },
      {
        title: "Research Papers",
        description: "Deep literature surveys, methodology drafting, and technical analysis on computer science, engineering, and business themes.",
        features: ["In-depth Literature Review", "Quantitative & Qualitative Analysis", "Citation Index Compliance"],
        benefits: "Rigorous academic synthesis aligned with peer-review standards."
      },
      {
        title: "Case Study Analysis",
        description: "Synthesizing comprehensive reviews of real-world business bottlenecks and technical architectural resolutions.",
        features: ["Swot & PESTEL frameworks", "Root Cause Appraisals", "Data-driven Interventions"],
        benefits: "Strategic actionable roadmaps detailing implementation paths."
      },
      {
        title: "Reports & Assignments",
        description: "Meticulous documentation detailing software requirements, functional systems, database schemas, and source code behaviors.",
        features: ["System Specification Reports", "Database Model Diagrams", "Structured Code Explanations"],
        benefits: "Clear technical breakdowns ready for developers and evaluators."
      },
      {
        title: "Creative Editing",
        description: "Polishing drafts, formatting styles, and refining layout structures to match high-end corporate standards.",
        features: ["Proofreading & Content Refining", "Formatting Styles (APA, MLA, IEEE)", "Visual Layout Polishing"],
        benefits: "Highly polished documentation ready for executive reviews."
      }
    ]
  },
  {
    id: "creative-design",
    title: "Creative Design & Media Assets",
    shortDescription: "High-end keynote presentations, clicks-boosting thumbnails, and conversion-focused social media packages.",
    icon: ImageIcon,
    color: "group-hover:text-[#e100ff]",
    glow: "hover:shadow-[0_0_20px_rgba(225,0,255,0.3)] hover:border-[#e100ff]/40",
    services: [
      {
        title: "Presentation Design",
        description: "Designing high-end custom keynote and slide presentations styled with premium animations and layouts.",
        features: ["Figma & Canva Pro Templates", "Dynamic Slide Flow Layouts", "Interactive Pitch Deck Assets"],
        benefits: "Visual presentations that easily hook and persuade stakeholders."
      },
      {
        title: "Thumbnail Design",
        description: "Creating highly clickable, high-contrast, and aesthetic custom thumbnails that boost CTR and conversions.",
        features: ["Aesthetic Glassmorphism Styles", "Vibrant Color Correction", "Clean Bold Typography Layouts"],
        benefits: "Enhanced click-through rates that multiply traffic instantly."
      },
      {
        title: "Social Media Content",
        description: "Synthesizing engaging copy, visual posts, and video briefs built for platforms like LinkedIn, Twitter, and TikTok.",
        features: ["Engaging hooks & storytelling", "Multi-format platform templates", "Trending content blueprints"],
        benefits: "Accelerated online engagement and authority building."
      }
    ]
  }
];

export default function Services() {
  const [selectedGroup, setSelectedGroup] = useState<typeof SERVICE_GROUPS[0] | null>(null);

  useEffect(() => {
    if (selectedGroup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedGroup]);

  const handleScrollToContact = (serviceName: string) => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      // Pre-fill service selector and message field in contact form
      const serviceSelect = document.querySelector("#contact-service") as HTMLSelectElement;
      if (serviceSelect) {
        // Look for matching service option
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].text.toLowerCase().includes(serviceName.substring(0, 10).toLowerCase())) {
            serviceSelect.selectedIndex = i;
            // Dispatch change event to react state
            const event = new Event('change', { bubbles: true });
            serviceSelect.dispatchEvent(event);
            break;
          }
        }
      }

      const messageInput = document.querySelector("#contact-message") as HTMLTextAreaElement;
      if (messageInput) {
        messageInput.value = `Hi Muzammil, I would like to inquire about your "${serviceName}" service. Let's discuss further!`;
        const event = new Event('input', { bubbles: true });
        messageInput.dispatchEvent(event);
      }
      
      const navHeight = 70;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#030014]/60 overflow-hidden">
      {/* Visual glowing decorations */}
      <div className="absolute top-10 left-10 w-[250px] h-[250px] bg-[#00f2fe]/5 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#7f00ff]/5 blur-[95px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#e100ff]" />
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#e100ff]">
              Solutions
            </span>
          </motion.div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#e100ff]">Capabilities</span>
          </h2>
          
          <p className="font-sans text-gray-400 text-sm sm:text-base max-w-xl font-light">
            An organized suite of digital media tools and writing solutions. Click on a category to explore full details and key capabilities.
          </p>
        </div>

        {/* Category Containers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_GROUPS.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                key={group.id}
                onClick={() => setSelectedGroup(group)}
                className={`group relative glass-panel p-8 rounded-3xl border border-white/5 cursor-pointer transition-all duration-500 flex flex-col justify-between h-full ${group.glow}`}
              >
                <div>
                  {/* Glowing Icon Header */}
                  <div className="mb-6 relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:border-transparent transition-colors overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00f2fe]/20 to-[#7f00ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Icon className={`w-7 h-7 text-gray-300 transition-colors duration-300 ${group.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-[#00f2fe] transition-colors duration-300">
                    {group.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-gray-400 text-sm font-light leading-relaxed mb-6">
                    {group.shortDescription}
                  </p>

                  {/* Sub services quick tag preview */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {group.services.map((s) => (
                      <span key={s.title} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 font-sans text-[10px] text-gray-400">
                        {s.title}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View details button */}
                <button
                  className="w-full py-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-[#7f00ff] group-hover:to-[#e100ff] text-white font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  Explore Capabilities
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Services Detail Blow-up Modal */}
      <AnimatePresence>
        {selectedGroup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGroup(null)}
            className="fixed inset-0 z-[100] overflow-y-auto p-4 bg-black/90 backdrop-blur-md flex justify-center items-start"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-[#07051a]/95 shadow-2xl p-6 sm:p-8 my-4 sm:my-8"
            >
              {/* Header Back Pill and Close Button Row */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <button
                  onClick={() => setSelectedGroup(null)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white hover:border-[#00f2fe]/30 transition-all duration-300 cursor-pointer text-xs font-sans font-semibold"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-[#00f2fe]" />
                  Back to Portfolio
                </button>

                <h3 className="font-display text-lg sm:text-xl font-bold text-white hidden sm:block">
                  {selectedGroup.title}
                </h3>

                <button
                  onClick={() => setSelectedGroup(null)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center text-white hover:text-[#00f2fe] transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Sub-services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedGroup.services.map((service) => (
                  <div 
                    key={service.title} 
                    className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between"
                  >
                    <div>
                      {/* Title */}
                      <h4 className="font-display text-base sm:text-lg font-bold text-white mb-2 text-[#00f2fe]">
                        {service.title}
                      </h4>

                      {/* Description */}
                      <p className="font-sans text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4">
                        <p className="font-sans text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-2">Key Features:</p>
                        <ul className="flex flex-col gap-1.5 font-sans text-xs text-gray-300 font-light">
                          {service.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-[#00f2fe]" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6 pt-3 border-t border-white/5">
                        <p className="font-sans text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1">Impact Benefit:</p>
                        <p className="font-sans text-xs text-[#4facfe] font-medium italic">
                          “{service.benefits}”
                        </p>
                      </div>
                    </div>

                    {/* CTA Buttons Row */}
                    <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                      <button
                        onClick={() => {
                          setSelectedGroup(null);
                          handleScrollToContact(service.title);
                        }}
                        className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center"
                      >
                        Book Service
                      </button>
                      
                      <a
                        href="https://www.fiverr.com/muzammil787?public_mode=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 hover:from-emerald-500 hover:to-emerald-600 border border-emerald-500/30 hover:border-transparent text-emerald-400 hover:text-white font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 text-center flex items-center justify-center gap-1.5"
                      >
                        Order on Fiverr
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
