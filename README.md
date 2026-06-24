# Muzammil Tanveer | Premium Developer & Content Specialist Portfolio

A highly immersive, visually stunning, and performance-optimized personal portfolio designed to showcase software engineering, academic research, and AI media creation projects. Built on the modern **Next.js 16** and **React 19** stack, this application features rich glassmorphism interfaces, smooth physics-based background particles, custom cursor interactions, and fluid cinematic animations.

🚀 **Live Portfolio**: [Muzammil Tanveer Portfolio](https://portfolio-mine.vercel.app/) *(or local default port)*  
📂 **Source Code**: [BuildsByMT/portfolio-mine](https://github.com/BuildsByMT/portfolio-mine)

---

## ✨ Features & Design Aesthetics

The portfolio leverages cutting-edge web design conventions to establish an elite digital footprint:

*   🎬 **Cinematic Preloader**: A bespoke introductory preloader with elegant SVG animations and letter-by-letter reveal sequences built using Framer Motion.
*   🖱️ **Custom Cursor System**: An interactive, magnetic cursor that scales and modifies its behavior depending on the hovered interactive elements.
*   🌌 **Interactive Particle Network**: A dynamic, high-performance canvas background that renders interactive particle networks reflecting user hover/cursor positions.
*   💎 **Glassmorphic UI**: Sleek, transparent glass panels with neon-glowing accents, borders, and backdrop-blur filters.
*   📐 **Bento-Grid Gallery**: A modern grid structure organizing custom graphics, design artifacts, and client deliverables with zero unused white space.
*   📱 **Fully Responsive**: Optimized fluid layouts from ultra-wide 4K displays down to modern smartphones.
*   📧 **Fiverr & Contact Integrations**: Quick links to order freelance services, check academic writing portfolios, or start a direct WhatsApp/Email chat.

---

## 🛠️ Technology Stack

The project represents a production-grade stack utilizing the latest stable frameworks and package versions:

### Core Frameworks
*   **Next.js 16.2.6** (App Router & React Server Components)
*   **React 19.2.4** (Concurrent Rendering & Enhanced Hooks)
*   **TypeScript 5.x** (Strict Type Safety)

### Styling & Motion
*   **Tailwind CSS v4.0.0** (Utilizing the new CSS-based configuration & `@tailwindcss/postcss`)
*   **Framer Motion 12.40.0** (Advanced physics-based spring animations & exit transitions)
*   **GSAP 3.15.0** (High-precision timeline sequences)
*   **Lucide React 1.16.0** (Sleek minimalist SVG iconography)
*   **Canvas Confetti 1.9.4** (Celebratory modal transitions)

---

## 📁 Repository Structure

```filepath
portfolio/
├── public/                 # Static assets (portraits, icons, resume PDF)
├── src/
│   ├── app/                # Next.js App Router root layout, styles, & page
│   │   ├── favicon.ico
│   │   ├── globals.css     # Global CSS rules & Tailwind v4 layers
│   │   ├── layout.tsx      # Main layout config (metadata, viewport)
│   │   └── page.tsx        # Compilation of sections & loading states
│   └── components/
│       ├── sections/       # Modular page sections
│       │   ├── About.tsx       # Bio, educational details, & stats
│       │   ├── Contact.tsx     # Fully styled contact details & forms
│       │   ├── Footer.tsx      # Premium copyright & social footer
│       │   ├── Gallery.tsx     # Bento-grid bento layout for visual assets
│       │   ├── Hero.tsx        # Title block, interactive badges, & CTAs
│       │   ├── Portfolio.tsx   # Detailed project grids with video modals
│       │   ├── Resume.tsx      # Multi-column timeline of experience & education
│       │   ├── Services.tsx    # Technical/freelance offerings (Fiverr)
│       │   └── Skills.tsx      # Interactive skill dials & ecosystem grid
│       └── ui/             # Reusable UX elements
│           ├── CustomCursor.tsx       # Magnetic cursor tracker
│           ├── Icons.tsx              # Custom brand SVG icons
│           ├── Navbar.tsx             # Glassmorphic scroll-linked navbar
│           ├── ParticleBackground.tsx # Canvas particle network setup
│           └── Preloader.tsx          # Introductory preloading animation
├── package.json            # Scripts and version dependencies
├── tsconfig.json           # Compiler rules for TypeScript
└── next.config.ts          # Next.js compiler settings
```

---

## 🚀 Getting Started

To run this project locally, make sure you have [Node.js (v18+)](https://nodejs.org/) installed.

### 1. Clone the Repository
```bash
git clone https://github.com/BuildsByMT/portfolio-mine.git
cd portfolio-mine
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
To optimize assets and generate static page structures:
```bash
npm run build
npm run start
```

---

## 📝 Credentials & Focus Areas

*   **Academic Excellence**: Completed 6th Semester of BS Software Engineering at *PMAS Arid Agriculture University* with a **3.90 CGPA**.
*   **Professional Internships**:
    *   *Erudite Coaching Centre* (HR Intern & Front-End Developer) - Bridged organizational processes with front-end React apps.
    *   *Daybie Associates* (Summer Internee - React & CSS) - Enhanced layout rendering efficiency by 20%.
*   **Freelancing & AI Operations**: active vendor on Fiverr providing advanced AI Voiceover (ElevenLabs), case study analyses, academic formatting, and cinematic video synthesis.

---

## 📄 License

This project is private and built as a personal portfolio. Feel free to explore the code for learning purposes or design inspiration. For commercial use, reach out directly.