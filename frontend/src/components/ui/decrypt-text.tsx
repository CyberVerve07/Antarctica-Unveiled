"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "framer-motion";

interface DecryptTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateOnce?: boolean;
}

export const DecryptText = ({ 
  text, 
  delay = 0, 
  className = "",
  animateOnce = true 
}: DecryptTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const chars = "!@#$%^&*()_+{}[]|:;<>?,./~";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: animateOnce });

  const decrypt = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(decrypt, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, decrypt, delay]);

  return (
    <span ref={ref} className={className}>
      {displayText || text.split("").map((c) => (c === " " ? " " : "_")).join("")}
    </span>
  );
};
