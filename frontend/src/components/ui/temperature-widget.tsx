"use client";

import { useState, useEffect } from 'react';
import { ThermometerSnowflake } from 'lucide-react';

const TemperatureWidget = () => {
  const [temperature, setTemperature] = useState<number | null>(null);

  useEffect(() => {
    // Initial temperature
    setTemperature(parseFloat((Math.random() * (-20 - -80) + -80).toFixed(1)));

    const interval = setInterval(() => {
      setTemperature(prevTemp => {
        if (prevTemp === null) return -50.0;
        const change = (Math.random() - 0.5) * 2; // -1 to 1
        const newTemp = prevTemp + change;
        if (newTemp > -10) return -10.0;
        if (newTemp < -89) return -89.0;
        return parseFloat(newTemp.toFixed(1));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-card/50 border border-primary/20 text-sm font-mono text-primary shadow-sm">
      <ThermometerSnowflake className="h-5 w-5 animate-pulse" />
      <div className="flex items-baseline">
        <span className="font-bold tracking-wider">
          {temperature !== null ? temperature.toFixed(1) : '--.-'}
        </span>
        <span>°C</span>
      </div>
      <span className="text-xs text-muted-foreground ml-2 hidden sm:inline">Vostok Station</span>
    </div>
  );
};

export default TemperatureWidget;
