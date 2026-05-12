"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  MapPin, 
  Flame, 
  AlertTriangle, 
  BookOpen, 
  Users, 
  Star, 
  Activity, 
  ShieldAlert, 
  Crosshair, 
  Radar, 
  Terminal, 
  Gauge, 
  Thermometer, 
  Wind, 
  Compass,
  Cpu,
  Zap,
  Target,
  BarChart3,
  Camera,
  Maximize2
} from "lucide-react";
import { places, getPlaceBySlug, PlaceHolderImages } from "@/lib/data";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { TelemetryChart } from "@/components/ui/telemetry-chart";

export default function PlacePage({ params }: { params: { slug: string } }) {
  const [isDecrypting, setIsDecrypting] = useState(true);
  const [decryptProgress, setDecryptProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const place = getPlaceBySlug(params.slug);

  useEffect(() => {
    if (!place) return;
    const interval = setInterval(() => {
      setDecryptProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsDecrypting(false), 800);
          return 100;
        }
        return prev + 10;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [place]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!place) {
    notFound();
  }

  const heroImage = PlaceHolderImages.find((p) => p.id === place.imageId);
  const galleryImages = place.galleryImages
    .map((id) => PlaceHolderImages.find((p) => p.id === id))
    .filter((img): img is NonNullable<typeof img> => Boolean(img));

  if (isDecrypting) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#020617] flex items-center justify-center font-mono">
        <div className="w-full max-w-lg p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-primary text-[10px] tracking-widest uppercase">
              <span className="flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                Decrypting Sector Data: {place.slug.toUpperCase()}
              </span>
              <span>{decryptProgress}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${decryptProgress}%` }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
                <div className="text-[8px] text-white/40 uppercase">LAT_COORD</div>
                <div className="text-xs text-primary font-bold">{-60 + Math.random() * 20}° S</div>
             </div>
             <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
                <div className="text-[8px] text-white/40 uppercase">LNG_COORD</div>
                <div className="text-xs text-primary font-bold">{40 + Math.random() * 40}° E</div>
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#020617] text-foreground font-body relative overflow-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/10 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/5 blur-[150px] rounded-full" />
      </div>

      {/* Cinematic Hero Section */}
      <section className="relative w-full h-screen min-h-[800px] overflow-hidden">
        <motion.div 
          style={{ x: mousePos.x, y: mousePos.y }}
          className="absolute inset-[-50px] z-0"
        >
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              sizes="110vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
        
        {/* HUD Elements */}
        <div className="absolute inset-0 p-8 md:p-16 flex flex-col z-10">
          <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/places" className="inline-flex items-center gap-3 text-white/60 hover:text-primary transition-all group p-4 rounded-2xl glass border border-white/10">
                <ArrowLeft className="h-4 w-4" />
                <span className="font-mono text-[10px] tracking-widest uppercase">SECURE_CHANNEL_BACK</span>
              </Link>
            </motion.div>
            
            <div className="space-y-8 max-w-5xl pb-24">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap items-center gap-4"
              >
                <span className="px-5 py-2 rounded-full glass-glow text-xs font-mono font-bold tracking-widest text-primary border border-primary/40">
                  {place.category.toUpperCase()}
                </span>
                <div className="flex items-center gap-2 px-5 py-2 rounded-full glass text-xs font-mono text-white/60 border border-white/10">
                  <Cpu className="h-3 w-3" />
                  ID: {place.id.slice(0, 12)}
                </div>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="font-headline text-7xl md:text-9xl font-black text-white tracking-tighter leading-none"
              >
                {place.name.toUpperCase()}
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-wrap items-center gap-8 text-white/80 font-mono text-sm"
              >
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-all">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span className="tracking-tight">{place.location}</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20 group-hover:border-secondary/40 transition-all">
                    <Target className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="tracking-tight">{(-60 - Math.random() * 20).toFixed(4)}° S / {(40 + Math.random() * 20).toFixed(4)}° E</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Animated Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03] bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,242,255,0.2)_50%)] bg-[length:100%_4px]" />
      </section>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 py-32 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column - Tactical Data */}
          <div className="lg:col-span-8 space-y-32">
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 text-primary font-mono text-xs tracking-widest uppercase">
                <Radar className="h-6 w-6 animate-spin-slow" />
                <span>Operational Intelligence Briefing</span>
              </div>
              <h2 className="font-headline text-5xl font-bold text-white tracking-tight">SECTOR_OVERVIEW</h2>
              <p className="text-muted-foreground/80 leading-relaxed text-2xl font-light max-w-3xl">
                {place.fullDescription}
              </p>

              {/* Live Telemetry Data */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <TelemetryChart color="#0ea5e9" label="ATMOSPHERIC_PRESSURE" />
                <TelemetryChart color="#a855f7" label="BIOLOGICAL_SIGNATURES" />
              </div>
            </motion.section>

            {/* Risk Assessment HUD */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 rounded-[3.5rem] glass-card border border-red-500/20 relative overflow-hidden group shadow-[0_0_50px_rgba(239,68,68,0.05)]"
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                <ShieldAlert className="h-64 w-64 text-red-500" />
              </div>
              <div className="flex items-center gap-6 mb-12">
                <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                  <AlertTriangle className="h-10 w-10 text-red-500 animate-pulse" />
                </div>
                <div>
                  <h2 className="font-headline text-5xl font-bold text-white uppercase tracking-tighter">THREAT_LEVEL</h2>
                  <div className="flex items-center gap-3">
                    <span className="text-red-500 font-mono text-xs tracking-[0.3em] font-bold">CRITICAL_ANOMALY</span>
                    <div className="h-[1px] w-12 bg-red-500/30" />
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                {place.dangers.map((danger, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ x: 10, backgroundColor: "rgba(239, 68, 68, 0.08)" }}
                    className="flex gap-6 p-8 rounded-[2rem] bg-red-500/5 border border-red-500/10 hover:border-red-500/40 transition-all group/item"
                  >
                    <div className="h-10 w-10 rounded-full border border-red-500/20 flex items-center justify-center shrink-0">
                      <span className="text-red-500 font-mono text-[10px]">0{index + 1}</span>
                    </div>
                    <p className="text-white/70 text-lg font-light leading-relaxed group-hover/item:text-white transition-colors">{danger}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Objectives and Protocols */}
            <div className="grid md:grid-cols-2 gap-12">
              <motion.section 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="font-headline text-3xl font-bold text-white flex items-center gap-4">
                  <Target className="h-8 w-8 text-primary" />
                  OBJECTIVES
                </h3>
                <div className="space-y-4">
                  {place.highlights.map((h, i) => (
                    <div key={i} className="p-6 rounded-3xl glass border border-white/5 hover:border-primary/40 transition-all group">
                      <div className="text-primary font-mono text-[10px] mb-2 uppercase">Task_0{i+1}</div>
                      <p className="text-white/80 font-light text-lg">{h}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="font-headline text-3xl font-bold text-white flex items-center gap-4">
                  <Zap className="h-8 w-8 text-secondary" />
                  PROTOCOLS
                </h3>
                <div className="space-y-4">
                  {place.survivalTips.map((tip, i) => (
                    <div key={i} className="p-6 rounded-3xl glass border border-white/5 hover:border-secondary/40 transition-all group">
                      <div className="text-secondary font-mono text-[10px] mb-2 uppercase">Safety_P_0{i+1}</div>
                      <p className="text-white/80 font-light text-lg">{tip}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Tactical Image Gallery */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-secondary font-mono text-xs tracking-widest uppercase">
                  <Camera className="h-6 w-6" />
                  <span>Visual Reconnaissance Data</span>
                </div>
                <div className="h-[1px] flex-grow mx-8 bg-secondary/10" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {galleryImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-video rounded-[2.5rem] overflow-hidden glass border border-white/10 group cursor-pointer"
                  >
                    <Image 
                      src={img.imageUrl} 
                      alt={img.description} 
                      fill 
                      className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                    />
                    
                    {/* Tactical Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    
                    {/* Scanning Line */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.div 
                        animate={{ top: ["-10%", "110%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-primary/50 shadow-[0_0_15px_rgba(14,165,233,0.8)] z-10"
                      />
                    </div>

                    {/* Corner Markers */}
                    <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-primary/40 group-hover:border-primary transition-colors" />
                    <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-primary/40 group-hover:border-primary transition-colors" />
                    <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-primary/40 group-hover:border-primary transition-colors" />
                    <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-primary/40 group-hover:border-primary transition-colors" />

                    {/* Label */}
                    <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="space-y-1">
                        <div className="text-[8px] text-primary font-mono uppercase tracking-[0.2em]">Capture_Node_0{idx+1}</div>
                        <div className="text-xs font-bold text-white uppercase tracking-wider">{img.description}</div>
                      </div>
                      <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-md border border-primary/40 text-primary">
                        <Maximize2 className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      RESOLVING_IMAGE_SPEC... 4K_TACTICAL_MAP
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column - System Specs */}
          <div className="lg:col-span-4 space-y-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="p-10 rounded-[3.5rem] glass-card border border-white/10 sticky top-32 space-y-10"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-mono text-primary/60 tracking-widest uppercase">Environmental_Specs</div>
                  <BarChart3 className="h-4 w-4 text-primary/40" />
                </div>
                
                <div className="space-y-6">
                   <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-center gap-3">
                        <Thermometer className="h-5 w-5 text-orange-400" />
                        <span className="text-sm font-light text-white/60">Climate</span>
                      </div>
                      <span className="text-sm font-mono text-white">{place.climate}</span>
                   </div>
                   
                   <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-center gap-3">
                        <Wind className="h-5 w-5 text-blue-400" />
                        <span className="text-sm font-light text-white/60">Window</span>
                      </div>
                      <span className="text-sm font-mono text-white">{place.bestTimeToVisit}</span>
                   </div>

                   <div className="space-y-4 pt-4">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-red-500/60 uppercase">Threat_Metric</span>
                        <span className="text-red-500 font-bold tracking-tighter">{place.dangerLevel}.0 / 5.0</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-[2px]">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${(place.dangerLevel / 5) * 100}%` }}
                           className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]" 
                         />
                      </div>
                   </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-[10px] font-mono text-secondary/60 tracking-widest uppercase">Required_Tactical_Gear</div>
                <div className="flex flex-wrap gap-2">
                   {place.equipmentNeeded.map((item, i) => (
                     <span key={i} className="px-4 py-2 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-mono hover:bg-secondary/20 transition-all uppercase tracking-tight">
                       {item}
                     </span>
                   ))}
                </div>
              </div>

              <Button asChild className="w-full h-16 rounded-[2rem] bg-primary hover:bg-primary/80 text-black font-black text-lg shadow-2xl shadow-primary/20 transition-all uppercase tracking-tighter">
                <Link href={`/blog/write?place=${place.slug}`}>
                  <Terminal className="mr-2 h-5 w-5" />
                  Log Field Report
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>
    </div>
  );
}
