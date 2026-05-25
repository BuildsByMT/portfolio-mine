"use client";

import { motion } from "framer-motion";
import { 
  Video, Film, Mic, GraduationCap, FileText, 
  BarChart, BookOpen, Presentation, Sparkles, 
  Image as ImageIcon, Edit, Share2 
} from "lucide-react";

const SERVICES = [
  {
    title: "AI Video Creation",
    description: "Creating highly engaging short and long-form videos using state-of-the-art generative video AI networks.",
    features: ["Runway Gen-2 & Sora pipelines", "Text-to-Video Synthesis", "AI Script Alignment"],
    benefits: "High-quality video production at a fraction of standard timelines.",
    icon: Video,
    color: "group-hover:text-[#00f2fe]"
  },
  {
    title: "AI Cinematic Animation",
    description: "Synthesizing cinematic footage, motion narratives, and concept visuals tailored for brand campaigns.",
    features: ["Cinematic Camera Controls", "Multi-prompt consistency", "Ultra-high resolution scaling"],
    benefits: "Stunning cinematic trailers and backgrounds ready for marketing campaigns.",
    icon: Film,
    color: "group-hover:text-[#4facfe]"
  },
  {
    title: "Voiceover Production",
    description: "Meticulous audio synthesis using premium voice generation AI models, with customizable accents and emotional depth.",
    features: ["Realistic Voice Cloning", "Multi-lingual translation", "Intonation & Pitch Modulation"],
    benefits: "Crystal-clear narrations matching video sequences seamlessly.",
    icon: Mic,
    color: "group-hover:text-[#7f00ff]"
  },
  {
    title: "Academic Writing",
    description: "Authoritative academic drafts, essays, and critiques compiled under strict citation standards (APA, Harvard, IEEE).",
    features: ["Grammar & Plagiarism Cleansed", "Structured Bibliographies", "Cohesive Thesis Layouts"],
    benefits: "A grade standard structure showcasing high academic depth.",
    icon: GraduationCap,
    color: "group-hover:text-[#e100ff]"
  },
  {
    title: "Research Papers",
    description: "Deep literature surveys, methodology drafting, and technical analysis on computer science, engineering, and business themes.",
    features: ["In-depth Literature Review", "Quantitative & Qualitative Analysis", "Citation Index Compliance"],
    benefits: "Rigorous academic synthesis aligned with peer-review standards.",
    icon: FileText,
    color: "group-hover:text-[#00f2fe]"
  },
  {
    title: "Case Study Analysis",
    description: "Synthesizing comprehensive reviews of real-world business bottlenecks and technical architectural resolutions.",
    features: ["Swot & PESTEL frameworks", "Root Cause Appraisals", "Data-driven Interventions"],
    benefits: "Strategic actionable roadmaps detailing implementation paths.",
    icon: BarChart,
    color: "group-hover:text-[#4facfe]"
  },
  {
    title: "Reports & Assignments",
    description: "Meticulous documentation detailing software requirements, functional systems, database schemas, and source code behaviors.",
    features: ["System Specification Reports", "Database Model Diagrams", "Structured Code Explanations"],
    benefits: "Clear technical breakdowns ready for developers and evaluators.",
    icon: BookOpen,
    color: "group-hover:text-[#7f00ff]"
  },
  {
    title: "Presentation Design",
    description: "Designing high-end custom keynote and slide presentations styled with premium animations and layouts.",
    features: ["Figma & Canva Pro Templates", "Dynamic Slide Flow Layouts", "Interactive Pitch Deck Assets"],
    benefits: "Visual presentations that easily hook and persuade stakeholders.",
    icon: Presentation,
    color: "group-hover:text-[#e100ff]"
  },
  {
    title: "AI Content Creation",
    description: "Generating highly optimized blog copy, LinkedIn articles, and marketing copy utilizing advanced prompt engineering.",
    features: ["Persona-based prompt engineering", "SEO optimization targeting keywords", "Brand voice alignment"],
    benefits: "Scalable high-quality content output written with human-like flow.",
    icon: Sparkles,
    color: "group-hover:text-[#00f2fe]"
  },
  {
    title: "Thumbnail Design",
    description: "Creating highly clickable, high-contrast, and aesthetic custom thumbnails that boost CTR and conversions.",
    features: ["Aesthetic Glassmorphism Styles", "Vibrant Color Correction", "Clean Bold Typography Layouts"],
    benefits: "Enhanced click-through rates that multiply traffic instantly.",
    icon: ImageIcon,
    color: "group-hover:text-[#4facfe]"
  },
  {
    title: "Creative Editing",
    description: "Polishing drafts, formatting styles, and refining layout structures to match high-end corporate standards.",
    features: ["Proofreading & Content Refining", "Formatting Styles (APA, MLA, IEEE)", "Visual Layout Polishing"],
    benefits: "Highly polished documentation ready for executive reviews.",
    icon: Edit,
    color: "group-hover:text-[#7f00ff]"
  },
  {
    title: "Social Media Content",
    description: "Synthesizing engaging copy, visual posts, and video briefs built for platforms like LinkedIn, Twitter, and TikTok.",
    features: ["Engaging hooks & storytelling", "Multi-format platform templates", "Trending content blueprints"],
    benefits: "Accelerated online engagement and authority building.",
    icon: Share2,
    color: "group-hover:text-[#e100ff]"
  }
];

export default function Services() {
  const handleScrollToContact = (serviceName: string) => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      // Pre-fill message field in contact form
      const messageInput = document.querySelector("#contact-message") as HTMLTextAreaElement;
      if (messageInput) {
        messageInput.value = `Hi Muzammil, I would like to inquire about your "${serviceName}" service. Let's discuss further!`;
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
            A comprehensive suite of technical engineering solutions and digital content creation tailored to scale conversions and build strong brands.
          </p>
        </div>

        {/* Staggered Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
                key={service.title}
                className="group relative glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  {/* Glowing Icon Header */}
                  <div className="mb-6 relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-transparent transition-colors overflow-hidden">
                    {/* Glowing color block inside border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00f2fe]/20 to-[#7f00ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Icon className={`w-6 h-6 text-gray-300 transition-colors duration-300 ${service.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-[#00f2fe] transition-colors duration-300">
                    {service.title}
                  </h3>

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
                    <p className="font-sans text-xs text-[#00f2fe] font-medium italic">
                      “{service.benefits}”
                    </p>
                  </div>
                </div>

                {/* CTA Button inside Card */}
                <button
                  onClick={() => handleScrollToContact(service.title)}
                  className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-transparent hover:bg-gradient-to-r hover:from-[#7f00ff] hover:to-[#e100ff] text-white font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer"
                >
                  Book Service
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
