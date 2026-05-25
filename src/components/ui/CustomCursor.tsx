"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsHidden(false);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      // Inner dot follows instantly
      setDotPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") || 
        target.classList.contains("interactive") ||
        target.closest(".interactive");
      
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Outer Circle with lag effect */}
      <div
        ref={cursorRef}
        className={`custom-cursor`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 2.5 : 1})`,
          borderColor: isHovered ? "var(--color-neon-pink)" : "var(--color-neon-cyan)",
          boxShadow: isHovered 
            ? "0 0 15px rgba(225, 0, 255, 0.4)" 
            : "0 0 10px rgba(0, 242, 254, 0.3)",
          transition: "transform 0.15s ease-out, border-color 0.2s, box-shadow 0.2s",
        }}
      />
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 0.5 : 1})`,
          backgroundColor: isHovered ? "var(--color-neon-cyan)" : "var(--color-neon-pink)",
          transition: "transform 0.1s ease-out, background-color 0.2s",
        }}
      />
    </>
  );
}
