"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function CursorGlow() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={cn(
        'pointer-events-none fixed -inset-px z-50 opacity-0 transition-opacity duration-300 lg:opacity-100',
        'cursor-glow'
      )}
    />
  );
}
