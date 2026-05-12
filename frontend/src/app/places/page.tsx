"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { 
  Mountain, 
  Flame, 
  TreePine, 
  ArrowRight, 
  ShieldAlert, 
  Crosshair, 
  Radar, 
  Activity, 
  Map as MapIcon, 
  Globe,
  Database,
  Cpu,
  Terminal,
  Wifi,
  Lock
} from "lucide-react";
import { places, PlaceHolderImages } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export default function PlacesPage() {
  const [filter, setFilter] = useState<string>("ALL");
  const [isBooting, setIsBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBootProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsBooting(false), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const filteredPlaces = useMemo(() => {
    if (filter === "ALL") return places;
    if (filter === "DANGER") return places.filter(p => p.dangerLevel >= 4);
    if (filter === "EXTREME") return places.filter(p => p.category === "extreme");
    if (filter === "WILD") return places.filter(p => p.category === "beautiful" || p.category === "dangerous");
    return places;
  }, [filter]);

  if (isBooting) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#020617] flex items-center justify-center font-mono">
        <div className="w-full max-w-md p-8 space-y-6">
          <div className="flex items-center justify-between text-primary text-[10px] tracking-widest uppercase mb-2">
            <div className="flex items-center gap-2">
              <Terminal className="h-3 w-3" />
              <span>Initializing Sector Database</span>
            </div>
            <span>{bootProgress}%</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${bootProgress}%` }}
            />
          </div>
          <div className="space-y-1 text-[8px] text-primary/40 uppercase tracking-tight">
            <p className={bootProgress > 20 ? "text-primary/80" : ""}>{">"} Syncing global coordinates...</p>
            <p className={bootProgress > 40 ? "text-primary/80" : ""}>{">"} Establishing secure satellite uplink...</p>
            <p className={bootProgress > 60 ? "text-primary/80" : ""}>{">"} Decrypting environmental telemetry...</p>
            <p className={bootProgress > 80 ? "text-primary/80" : ""}>{">"} Finalizing tactical map projection...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cinematic-container">
      {/* Main Content */}
      <main className="relative z-20 max-w-7xl mx-auto px-4 pt-32 pb-24">
        {/* Header Section */}
        <section className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-12"
          >
            <div className="space-y-6 max-w-2xl">
              <div className="flex items-center gap-3 text-primary font-mono text-xs tracking-widest uppercase">
                <Radar className="h-5 w-5 animate-spin-slow" />
                <span className="flex items-center gap-2">
                  Live Feed Status: <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Encrypted
                </span>
              </div>
              <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">
                TACTICAL <span className="text-primary italic">DATABASE</span>
              </h1>
              <p className="text-muted-foreground/80 text-xl font-light leading-relaxed">
                Access comprehensive environmental intelligence on high-risk sectors. 
                Filter by threat level or category to optimize your next mission profile.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="p-6 rounded-[2rem] glass-card border border-white/10 flex flex-col items-center gap-2 min-w-[140px]">
                <Globe className="h-6 w-6 text-primary" />
                <div className="text-[10px] font-mono uppercase text-primary/60">Sectors</div>
                <div className="text-3xl font-headline font-bold text-white">{places.length}</div>
              </div>
              <div className="p-6 rounded-[2rem] glass-card border border-white/10 flex flex-col items-center gap-2 min-w-[140px]">
                <Activity className="h-6 w-6 text-secondary" />
                <div className="text-[10px] font-mono uppercase text-secondary/60">Risk_High</div>
                <div className="text-3xl font-headline font-bold text-white">
                  {places.filter(p => p.dangerLevel >= 4).length}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 p-3 rounded-[2.5rem] glass-card border border-white/5 mb-16"
        >
           <Button 
              variant="ghost" 
              onClick={() => setFilter("ALL")}
              className={`rounded-full px-8 py-7 transition-all font-mono tracking-tighter group ${
                filter === "ALL" ? "bg-primary text-black font-bold shadow-lg shadow-primary/20" : "text-white/60 hover:bg-white/5"
              }`}
           >
              <Crosshair className={`mr-2 h-4 w-4 ${filter === "ALL" ? "rotate-90" : "group-hover:rotate-45"}`} />
              ALL_ARCHIVES
           </Button>
           <Button 
              variant="ghost" 
              onClick={() => setFilter("DANGER")}
              className={`rounded-full px-8 py-7 transition-all font-mono tracking-tighter group ${
                filter === "DANGER" ? "bg-red-500 text-white font-bold shadow-lg shadow-red-500/20" : "text-white/60 hover:bg-white/5"
              }`}
           >
              <ShieldAlert className="mr-2 h-4 w-4" />
              THREAT_LEVEL_HIGH
           </Button>
           <Button 
              variant="ghost" 
              onClick={() => setFilter("EXTREME")}
              className={`rounded-full px-8 py-7 transition-all font-mono tracking-tighter group ${
                filter === "EXTREME" ? "bg-secondary text-black font-bold shadow-lg shadow-secondary/20" : "text-white/60 hover:bg-white/5"
              }`}
           >
              <Mountain className="mr-2 h-4 w-4" />
              EXTREME_ENV
           </Button>
           <Button 
              variant="ghost" 
              onClick={() => setFilter("WILD")}
              className={`rounded-full px-8 py-7 transition-all font-mono tracking-tighter group ${
                filter === "WILD" ? "bg-tertiary text-black font-bold shadow-lg shadow-tertiary/20" : "text-white/60 hover:bg-white/5"
              }`}
           >
              <TreePine className="mr-2 h-4 w-4" />
              WILDERNESS
           </Button>
        </motion.div>

        {/* Places Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredPlaces.map((place, index) => {
              const image = PlaceHolderImages.find((p) => p.id === place.imageId);
              return (
                <motion.div
                  key={place.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 30 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className="group relative"
                >
                  <Link
                    href={`/places/${place.slug}`}
                    className="block relative h-[600px] rounded-[3rem] overflow-hidden border border-white/5 group-hover:border-primary/40 transition-all duration-700 glass-card shadow-2xl"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
                    </div>

                    {/* HUD Overlays */}
                    <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
                      <div className="flex flex-col gap-2">
                        <span className={`px-4 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase border ${
                          place.dangerLevel >= 4 ? 'bg-red-500/20 border-red-500/40 text-red-400' : 'bg-primary/20 border-primary/40 text-primary'
                        }`}>
                          LEVEL: 0{place.dangerLevel}
                        </span>
                        <div className="flex items-center gap-2 text-[8px] font-mono text-white/40 tracking-tight">
                          <Wifi className="h-2 w-2" />
                          SIGNAL_STABLE
                        </div>
                      </div>
                      <div className="h-12 w-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-primary/40 group-hover:scale-110 transition-all">
                        <Lock className="h-4 w-4 text-white/40 group-hover:text-primary" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="absolute bottom-0 left-0 right-0 p-10 z-20 space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-primary/60 font-mono text-[10px] tracking-widest uppercase">
                          <MapIcon className="h-3 w-3" />
                          {place.location}
                        </div>
                        <h3 className="font-headline text-4xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                          {place.name}
                        </h3>
                      </div>
                      
                      <p className="text-white/60 line-clamp-3 font-light leading-relaxed group-hover:text-white/80 transition-colors">
                        {place.description}
                      </p>

                      <div className="pt-6 flex items-center justify-between border-t border-white/10 group-hover:border-primary/20 transition-all">
                        <div className="flex items-center gap-3">
                           <div className="flex -space-x-2">
                              {[1, 2, 3].map(i => (
                                <div key={i} className="h-8 w-8 rounded-full border-2 border-[#020617] bg-white/10 relative overflow-hidden">
                                  <Image 
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${place.id}${i}`} 
                                    alt="explorer" 
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ))}
                           </div>
                           <span className="text-[10px] font-mono text-white/40 uppercase">+{12 + index * 4} Actives</span>
                        </div>
                        <div className="flex items-center gap-2 text-primary font-mono text-[10px] tracking-widest uppercase group-hover:translate-x-2 transition-transform">
                          VIEW_REPORT
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    {/* Scanning Line Effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,242,255,0.2)_50%)] bg-[length:100%_4px]" />
                    
                    {/* Corners */}
                    <div className="absolute top-4 right-4 h-8 w-8 border-t-2 border-r-2 border-white/5 group-hover:border-primary/40 transition-all duration-500" />
                    <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-white/5 group-hover:border-primary/40 transition-all duration-500" />
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Persistent UI Elements */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="p-4 rounded-full glass border border-white/10 flex items-center gap-3">
          <div className="flex flex-col items-end">
            <div className="text-[8px] font-mono text-primary uppercase">System_Load</div>
            <div className="text-xs font-mono text-white font-bold">OPTIMAL</div>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Database className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

