"use client";

import React, { useEffect, useState } from "react";

const Snowfall = ({ count = 36 }) => {
  const [snowflakes, setSnowflakes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generatedSnowflakes = Array.from({ length: count }).map((_, i) => {
      const style = {
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 2 + 2}px`,
        height: `${Math.random() * 2 + 2}px`,
        opacity: Math.random() * 0.35 + 0.5,
        animationDuration: `${Math.random() * 8 + 8}s`,
        animationDelay: `-${Math.random() * 4}s`,
        willChange: "transform",
      } as React.CSSProperties;
      return <div key={i} className="snowflake" style={style} />;
    });
    setSnowflakes(generatedSnowflakes);
  }, [count]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-40 overflow-hidden [contain:strict]"
      aria-hidden="true"
    >
      {snowflakes}
    </div>
  );
};

export default Snowfall;
