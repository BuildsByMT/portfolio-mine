"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let current = 0;
    const duration = 2000; // 2 seconds total loader
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      current += increment + Math.random() * 2;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(() => {
          setIsCompleted(true);
          setTimeout(onComplete, 800); // Allow fade out animation to finish
        }, 300);
      }
      setProgress(Math.floor(current));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isCompleted && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#030014]"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(127,0,255,0.15)_0%,transparent_70%)] blur-[40px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(0,242,254,0.1)_0%,transparent_70%)] blur-[50px] pointer-events-none" />

          {/* Logo Container */}
          <div className="relative mb-8 overflow-hidden select-none">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-1 font-display text-4xl sm:text-5xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple"
            >
              MUZAMMIL
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-center font-sans text-xs uppercase tracking-[0.35em] text-gray-500 mt-2"
            >
              Creative Tech Specialist
            </motion.div>
          </div>

          {/* Progress Percent */}
          <div className="relative w-64 flex flex-col items-center">
            <motion.div
              className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-4"
              style={{ textShadow: "0 0 20px rgba(0, 242, 254, 0.3)" }}
            >
              {progress}%
            </motion.div>

            {/* Premium Loader Bar */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
            
            <div className="flex justify-between w-full mt-2 font-sans text-[10px] text-gray-400 uppercase tracking-widest">
              <span>Initializing Node</span>
              <span>Loaded</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
