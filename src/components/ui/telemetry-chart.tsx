"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TelemetryData {
  time: string;
  value: number;
}

export function TelemetryChart({ color = "#0ea5e9", label = "ATMOSPHERIC_PRESSURE" }: { color?: string, label?: string }) {
  const [data, setData] = useState<TelemetryData[]>([]);

  useEffect(() => {
    // Generate initial data
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      time: `${i}s`,
      value: 40 + Math.random() * 20
    }));
    setData(initialData);

    // Live updates
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1), {
          time: "now",
          value: 40 + Math.random() * 20
        }];
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const maxValue = 100;
  const height = 100;
  const width = 300;

  return (
    <div className="space-y-4 p-6 rounded-3xl glass border border-white/5 overflow-hidden relative">
      <div className="flex items-center justify-between">
        <div className="text-[10px] font-mono text-white/40 tracking-widest flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: color }} />
          {label}
        </div>
        <div className="text-[10px] font-mono text-white/20">LIVE_TELEMETRY</div>
      </div>

      <div className="relative h-[100px] w-full mt-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
          {/* Grid Lines */}
          <line x1="0" y1="0" x2={width} y2="0" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="0" y1={height / 2} x2={width} y2={height / 2} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="0" y1={height} x2={width} y2={height} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

          {/* Data Path */}
          <motion.path
            d={`M ${data.map((d, i) => `${(i * (width / (data.length - 1)))},${height - (d.value / maxValue) * height}`).join(" L ")}`}
            fill="none"
            stroke={color}
            strokeWidth="2"
            initial={false}
            animate={{ d: `M ${data.map((d, i) => `${(i * (width / (data.length - 1)))},${height - (d.value / maxValue) * height}`).join(" L ")}` }}
            transition={{ duration: 1, ease: "linear" }}
          />

          {/* Area Fill */}
          <motion.path
            d={`M ${data.map((d, i) => `${(i * (width / (data.length - 1)))},${height - (d.value / maxValue) * height}`).join(" L ")} L ${width},${height} L 0,${height} Z`}
            fill={`url(#gradient-${label.replace(/\s+/g, '-')})`}
            initial={false}
            animate={{ d: `M ${data.map((d, i) => `${(i * (width / (data.length - 1)))},${height - (d.value / maxValue) * height}`).join(" L ")} L ${width},${height} L 0,${height} Z` }}
            transition={{ duration: 1, ease: "linear" }}
          />

          <defs>
            <linearGradient id={`gradient-${label.replace(/\s+/g, '-')}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.2" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Current Value Indicator */}
        {data.length > 0 && (
          <div 
            className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 flex flex-col items-end"
            style={{ top: `${height - (data[data.length - 1].value / maxValue) * height}%` }}
          >
            <div className="px-2 py-1 rounded bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white">
              {data[data.length - 1].value.toFixed(1)}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-2 opacity-30">
        <div className="h-1 w-8 bg-white/20 rounded-full" />
        <div className="h-1 w-12 bg-white/20 rounded-full" />
        <div className="h-1 w-6 bg-white/20 rounded-full" />
      </div>
    </div>
  );
}
