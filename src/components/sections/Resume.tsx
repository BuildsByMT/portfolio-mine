"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, GraduationCap, Award, Calendar, 
  MapPin, CheckCircle, Download, ArrowUpRight 
} from "lucide-react";

const EDUCATION = [
  {
    institution: "PMAS Arid Agriculture University",
    degree: "Bachelor of Software Engineering (BS SE)",
    duration: "2023 - 2027",
    location: "Rawalpindi, Pakistan",
    details: "Completed 6th Semester. Academic excellence standing with a CGPA of 3.91. Engaging in software architecture, algorithms, and design structures."
  },
  {
    institution: "ICAP (Institute of Chartered Accountants of Pakistan)",
    degree: "Assessment of Fundamental Competencies (AFC Accounting)",
    duration: "2021 - 2022",
    location: "Lahore, Pakistan",
    details: "Synthesized core understanding of digital accounting practices, statistics, and organizational communication workflows."
  },
  {
    institution: "BISE Bahawalpur",
    degree: "FSc Pre-Medical (Intermediate)",
    duration: "2018 - 2020",
    location: "Bahawalnagar, Pakistan",
    details: "Focusing on analytical biology and foundational science subjects."
  }
];

const EXPERIENCE = [
  {
    company: "Erudite Coaching Centre",
    role: "HR Intern & Front-End Developer",
    duration: "June 2025 - Oct 2025",
    location: "Islamabad, Pakistan",
    type: "Internship",
    bullets: [
      "Executed dual responsibilities by managing HR administrative workflows and contributing to front-end web development projects.",
      "Bridged the gap between organizational operations and digital presence.",
      "Improved internal project tracking systems and enhanced online engagement."
    ]
  },
  {
    company: "Daybie Associates",
    role: "Summer Internee (React & CSS)",
    duration: "June 2024 - July 2024",
    location: "Islamabad, Pakistan",
    type: "Internship",
    bullets: [
      "Optimized user interface performance by developing responsive front-end components using React.JS and CSS.",
      "Ensured a seamless digital experience across client-facing web applications.",
      "Collaborated in agile sprint cycles to resolve layout bottlenecks, yielding a 20% increase in rendering efficiency and cross-browser compatibility."
    ]
  },
  {
    company: "Digital Freelancing & AI Creation",
    role: "Creative Freelancer & AI Specialist",
    duration: "2024 - Present",
    location: "Remote",
    type: "Self-Employed",
    bullets: [
      "Architecting custom AI video pipelines using Runway, Sora, and CapCut tools.",
      "Authoring high-end academic research documents and corporate reports for international clients.",
      "Designing conversion-focused graphic layouts and presentation slide decks."
    ]
  }
];

const COURSES = [
  { name: "Tailwind CSS Training", provider: "Younge Interns", year: "2025" },
  { name: "Introduction to Data Science", provider: "Google Career Certificates", year: "2025" },
  { name: "Foundation of UI/UX Design", provider: "Google Career Certificates", year: "2025" }
];

const AWARDS = [
  { name: "Runner-Up - Badminton", event: "HITEC Olympiad", year: "2024" }
];

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 bg-[#030014]/40 overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] bg-[#7f00ff]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[300px] h-[300px] bg-[#00f2fe]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <GraduationCap className="w-3.5 h-3.5 text-[#e100ff]" />
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#e100ff]">
              Career
            </span>
          </motion.div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Academic & Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#e100ff]">Timeline</span>
          </h2>

          <p className="font-sans text-gray-400 text-sm sm:text-base max-w-xl font-light mb-8">
            An overview of my education milestones, administrative experience, software engineering internships, and certifications.
          </p>

          <a
            href="/assets/resume.pdf"
            download="Muzammil_Tanveer_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7f00ff] to-[#e100ff] hover:shadow-[0_0_20px_rgba(225,0,255,0.4)] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 border border-white/5 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download Complete Resume
          </a>
        </div>

        {/* Timeline Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Work Experience Timeline (Left column, span 6) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-3 border-b border-white/5 pb-2">
              <Briefcase className="w-5.5 h-5.5 text-[#00f2fe]" />
              Professional Experience
            </h3>

            <div className="relative border-l border-white/10 pl-6 ml-4 flex flex-col gap-10">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  key={exp.company}
                  className="relative group"
                >
                  {/* Timeline Node Dot */}
                  <span className="absolute -left-[31px] top-1.5 w-[9px] h-[9px] rounded-full bg-[#00f2fe] border-2 border-[#030014] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_#00f2fe]" />

                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <div>
                      <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#00f2fe] transition-colors duration-300">
                        {exp.role}
                      </h4>
                      <p className="font-sans text-xs font-semibold text-[#4facfe]">
                        {exp.company}
                      </p>
                    </div>
                    
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 font-sans text-[10px] text-gray-400 w-fit h-fit font-medium">
                      {exp.type}
                    </span>
                  </div>

                  {/* Location & Time */}
                  <div className="flex flex-wrap items-center gap-4 font-sans text-[11px] text-gray-500 mb-4 font-light">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Bullet Lists */}
                  <ul className="flex flex-col gap-2 font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                    {exp.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Timeline (Right column, span 6) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-3 border-b border-white/5 pb-2">
                <GraduationCap className="w-5.5 h-5.5 text-[#e100ff]" />
                Education Details
              </h3>

              <div className="relative border-l border-white/10 pl-6 ml-4 flex flex-col gap-10">
                {EDUCATION.map((edu, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    key={edu.degree}
                    className="relative group"
                  >
                    {/* Timeline Node Dot */}
                    <span className="absolute -left-[31px] top-1.5 w-[9px] h-[9px] rounded-full bg-[#e100ff] border-2 border-[#030014] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_#e100ff]" />

                    <div className="mb-2">
                      <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#e100ff] transition-colors duration-300">
                        {edu.degree}
                      </h4>
                      <p className="font-sans text-xs font-semibold text-[#7f00ff]">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 font-sans text-[11px] text-gray-500 mb-3 font-light">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                      {edu.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications & Awards block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {/* Courses */}
              <div className="glass-panel p-5 rounded-2xl border border-white/5">
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#00f2fe]" />
                  Certifications
                </h4>
                <div className="flex flex-col gap-3">
                  {COURSES.map((course) => (
                    <div key={course.name} className="border-l border-[#00f2fe]/30 pl-3">
                      <p className="font-sans text-xs font-semibold text-white tracking-wide">{course.name}</p>
                      <p className="font-sans text-[10px] text-gray-400 mt-0.5">{course.provider} • {course.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards */}
              <div className="glass-panel p-5 rounded-2xl border border-white/5 flex flex-col justify-between">
                <div>
                  <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#e100ff]" />
                    Awards & Honors
                  </h4>
                  <div className="flex flex-col gap-3">
                    {AWARDS.map((award) => (
                      <div key={award.name} className="border-l border-[#e100ff]/30 pl-3">
                        <p className="font-sans text-xs font-semibold text-white tracking-wide">{award.name}</p>
                        <p className="font-sans text-[10px] text-gray-400 mt-0.5">{award.event} • {award.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 flex items-center gap-2 p-2.5 rounded bg-white/3 font-sans text-[11px] text-gray-400 font-light italic leading-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                  Runner-Up Badminton matches represent strong sportsmanship and team communication dynamics.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
