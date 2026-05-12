"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const TacticalCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHoverStart);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHoverStart);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div 
          animate={{
            scale: isHovering ? 1.5 : 1,
            backgroundColor: isHovering ? "rgba(14, 165, 233, 0.4)" : "rgba(14, 165, 233, 0)",
          }}
          className="w-1 h-1 bg-primary rounded-full" 
        />
        
        {/* Tactical Crosshair Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-[1px] h-2 bg-primary/40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-[1px] h-2 bg-primary/40" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 h-[1px] w-2 bg-primary/40" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 h-[1px] w-2 bg-primary/40" />
      </motion.div>

      {/* Secondary Dot for "Smoothness" feel */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-secondary rounded-full pointer-events-none z-[9999] opacity-50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};
