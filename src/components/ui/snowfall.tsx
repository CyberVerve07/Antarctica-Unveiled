"use client";

import React, { useEffect, useState } from 'react';

const Snowfall = ({ count = 150 }) => {
  const [snowflakes, setSnowflakes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // This code will only run on the client, avoiding hydration mismatch
    const generatedSnowflakes = Array.from({ length: count }).map((_, i) => {
      const style = {
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 2 + 1.5}px`,
        height: `${Math.random() * 2 + 1.5}px`,
        opacity: Math.random() * 0.4 + 0.6,
        animationDuration: `${Math.random() * 10 + 5}s`,
        animationDelay: `-${Math.random() * 5}s`,
      };
      return <div key={i} className="snowflake" style={style} />;
    });
    setSnowflakes(generatedSnowflakes);
  }, [count]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-40 overflow-hidden"
      aria-hidden="true"
    >
      {snowflakes}
    </div>
  );
};

export default Snowfall;
