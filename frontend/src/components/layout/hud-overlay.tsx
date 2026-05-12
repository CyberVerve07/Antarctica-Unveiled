"use client";

import { motion } from "framer-motion";
import { 
  Activity, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Signal, 
  Terminal,
  Wifi,
  Zap,
  BarChart3,
  Locate
} from "lucide-react";
import { useEffect, useState } from "react";

export function HUDOverlay() {
  const [time, setTime] = useState("");
  const [coords, setCoords] = useState({ lat: -82.8628, lng: 135.0000 });
  const [load, setLoad] = useState(32);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      
      // Jitter coordinates slightly for effect
      setCoords(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.0001,
        lng: prev.lng + (Math.random() - 0.5) * 0.0001
      }));

      // Simulate system load fluctuation
      setLoad(prev => {
        const next = prev + (Math.random() - 0.5) * 4;
        return Math.max(20, Math.min(60, next));
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] font-mono select-none overflow-hidden">
      {/* Top Left: System Status */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-8 left-8 space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-primary/10 border border-primary/20">
            <Cpu className="h-4 w-4 text-primary animate-pulse" />
          </div>
          <div className="space-y-0.5">
            <div className="text-[10px] text-white/40 uppercase tracking-widest leading-none">System_Core</div>
            <div className="text-xs text-primary font-bold">ARCTIC_PULSE_v2.4</div>
          </div>
        </div>
        
        <div className="flex flex-col gap-1.5 pl-2 border-l border-white/10">
          <div className="flex items-center gap-4 text-[9px] uppercase tracking-tighter">
            <span className="text-white/40">Status:</span>
            <span className="text-emerald-400">Operational</span>
          </div>
          <div className="flex items-center gap-4 text-[9px] uppercase tracking-tighter">
            <span className="text-white/40">Load:</span>
            <span className="text-primary">{load.toFixed(1)}%</span>
          </div>
          <div className="flex items-center gap-4 text-[9px] uppercase tracking-tighter">
            <span className="text-white/40">Time:</span>
            <span className="text-white/80">{time}</span>
          </div>
        </div>
      </motion.div>

      {/* Top Right: Telemetry */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-8 right-8 text-right space-y-4"
      >
        <div className="flex items-center justify-end gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-white/40 uppercase tracking-widest leading-none">Telemetry</div>
            <div className="text-xs text-secondary font-bold">LIVE_FEED_SECURE</div>
          </div>
          <div className="p-2 rounded bg-secondary/10 border border-secondary/20">
            <Globe className="h-4 w-4 text-secondary animate-spin-slow" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 pr-2 border-r border-white/10 items-end">
          <div className="flex items-center gap-4 text-[9px] uppercase tracking-tighter">
            <span className="text-secondary/80 font-bold">{coords.lat.toFixed(6)}° S</span>
            <span className="text-white/40">Lat:</span>
          </div>
          <div className="flex items-center gap-4 text-[9px] uppercase tracking-tighter">
            <span className="text-secondary/80 font-bold">{coords.lng.toFixed(6)}° E</span>
            <span className="text-white/40">Lng:</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-1 w-8 bg-white/5 rounded-full overflow-hidden">
               <motion.div 
                 animate={{ width: ["20%", "80%", "40%"] }}
                 transition={{ duration: 3, repeat: Infinity }}
                 className="h-full bg-secondary" 
               />
            </div>
            <Signal className="h-3 w-3 text-secondary" />
          </div>
        </div>
      </motion.div>

      {/* Bottom Left: Bio-Metrics */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-8 left-8 space-y-4"
      >
        <div className="flex items-center gap-4 p-4 rounded-2xl glass border border-white/5">
          <div className="relative">
            <Activity className="h-8 w-8 text-tertiary animate-pulse" />
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 bg-tertiary/20 rounded-full blur-md"
            />
          </div>
          <div className="space-y-1">
            <div className="text-[8px] text-white/40 uppercase tracking-widest">Biometric_Pulse</div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black text-white leading-none">72</span>
              <span className="text-[10px] text-tertiary font-bold tracking-tighter uppercase">BPM</span>
            </div>
          </div>
          <div className="h-10 w-[1px] bg-white/10 mx-2" />
          <div className="space-y-1">
             <div className="text-[8px] text-white/40 uppercase tracking-widest">O2_Levels</div>
             <div className="text-sm font-bold text-tertiary">98.4%</div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Right: Mission Context */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-8 right-8 text-right"
      >
        <div className="p-4 rounded-2xl glass border border-white/5 space-y-3 min-w-[180px]">
          <div className="flex items-center justify-between">
            <span className="text-[8px] text-white/40 uppercase tracking-widest">Protocol_State</span>
            <ShieldCheck className="h-3 w-3 text-primary" />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-black text-white uppercase tracking-tighter">Exploration_Phase_01</div>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: "0%" }}
                 animate={{ width: "65%" }}
                 className="h-full bg-primary"
               />
            </div>
          </div>
          <div className="flex items-center justify-between text-[8px] text-white/40 uppercase">
             <span>Data_Sync</span>
             <span className="text-primary">In_Progress</span>
          </div>
        </div>
      </motion.div>

      {/* Center Framing Corners (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[85vh] border border-white/5 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30" />
      </div>
    </div>
  );
}
