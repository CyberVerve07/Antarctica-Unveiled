"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={`back-to-top ${isVisible ? "is-visible" : ""} 
        fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 
        glass border-primary/20 text-primary hover:text-white
        hover:bg-primary hover:border-primary transition-all duration-500
        shadow-[0_0_15px_rgba(14,165,233,0.2)] group overflow-hidden`}
      size="icon"
      aria-label="Return to Surface"
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <ChevronUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
        <span className="text-[6px] font-mono uppercase tracking-tighter opacity-60 group-hover:opacity-100">Surface</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </Button>
  );
}
