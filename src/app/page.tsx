"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ChevronDown, 
  Mountain, 
  Flame, 
  Wind, 
  Snowflake, 
  TreePine, 
  Compass, 
  ArrowRight, 
  BookOpen, 
  Users, 
  Star, 
  Activity, 
  Shield, 
  Map as MapIcon, 
  Radio, 
  Zap, 
  Target,
  Lock,
  Eye,
  Database,
  Crosshair,
  BarChart3
} from "lucide-react";
import Image from "next/image";
import { places, PlaceHolderImages } from "@/lib/data";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView, useSpring } from "framer-motion";
import { DecryptText } from "@/components/ui/decrypt-text";

const featuredPlaces = places.slice(0, 5);

const stats = [
  { icon: Activity, title: "5+", desc: "Extreme Sectors", color: "text-primary" },
  { icon: Shield, title: "50+", desc: "Survival Logs", color: "text-secondary" },
  { icon: Radio, title: "10K+", desc: "Signal Syncs", color: "text-tertiary" },
  { icon: Target, title: "100%", desc: "Data Integrity", color: "text-primary" },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30 }); // More responsive spring
  
  const heroY = useTransform(smoothY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(smoothY, [0, 400], [1, 0]);
  const heroScale = useTransform(smoothY, [0, 500], [1, 1.05]);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#020617] text-foreground selection:bg-primary/30 selection:text-white relative overflow-x-hidden">
      {/* Premium Cinematic Overlays (Inherited from Layout, but refined here) */}
      <div className="fixed inset-0 pointer-events-none z-[70] mix-blend-overlay opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Boot Loading Sequence */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#020617] flex flex-col items-center justify-center font-mono"
          >
            <div className="relative w-64 h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_rgba(14,165,233,0.8)]" 
              />
            </div>
            <motion.div 
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-primary text-[10px] tracking-[0.5em] uppercase font-bold"
            >
              Initializing Tactical Interface...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full flex flex-col min-h-screen relative z-10">
        {/* Hero Section - The Command Center */}
        <section ref={heroRef} className="relative w-full min-h-screen overflow-hidden flex items-center justify-center pt-20">
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ 
              y: heroY,
              scale: heroScale,
              opacity: heroOpacity,
            }}
          >
            <Image
              src="/images/hero_tactical.png"
              alt="Tactical Mission Control"
              fill
              className="object-cover object-center opacity-40 scale-110 grayscale-[0.2] transition-all duration-1000"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617]" />
            
            {/* Holographic Grid */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: "radial-gradient(circle, #0ea5e9 1.5px, transparent 1.5px)", backgroundSize: "60px 60px" }} />
          </motion.div>

          {/* Dynamic Scanning Interface */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
             <motion.div 
               animate={{ top: ["-10%", "110%"] }}
               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               className="absolute left-0 w-full h-[2px] bg-primary/40 shadow-[0_0_30px_rgba(14,165,233,0.6)] flex items-center justify-center z-20"
             >
               <div className="px-6 py-1.5 bg-[#020617]/80 backdrop-blur-sm border border-primary/40 rounded-full text-[10px] text-primary font-mono uppercase tracking-[0.4em] font-bold shadow-2xl">
                 SCANNING_SECTOR_THETA_UPLINK
               </div>
             </motion.div>
             
             {/* Additional HUD Scan lines */}
             <motion.div 
               animate={{ opacity: [0, 0.3, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(14,165,233,0.05)_2px,transparent_3px)]"
             />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center"
          >
            <div className="flex flex-col items-center text-center max-w-5xl">
              <motion.div 
                variants={itemVariants}
                className="group cursor-help relative inline-flex items-center gap-3 px-6 py-2 rounded-full glass border-primary/30 text-primary text-[10px] font-mono uppercase tracking-[0.4em] mb-12 shadow-[0_0_20px_rgba(14,165,233,0.15)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <DecryptText text="System Status: Operational" />
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="font-headline text-8xl sm:text-9xl md:text-[10rem] lg:text-[13rem] font-black tracking-tighter mb-8 leading-[0.7] mix-blend-screen select-none"
              >
                <span className="block text-white opacity-95 drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]">EXTREME</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient py-2">EXPLORERS</span>
              </motion.h1>
              
              <motion.div 
                variants={itemVariants}
                className="relative px-12 py-10 mb-14 glass rounded-[2rem] max-w-3xl border border-white/5 shadow-[0_30px_70px_rgba(0,0,0,0.8)] group hover:border-primary/40 transition-all duration-700"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#020617] border border-white/10 rounded-full flex items-center justify-center">
                  <Lock className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
                </div>
                
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-2xl md:text-3xl text-white font-headline font-black italic leading-[1.1] relative z-10 tracking-tight">
                  "THE EDGE IS NOT A PLACE. <br />IT IS A <span className="text-primary underline decoration-primary/30 underline-offset-8">MANIFESTO</span>."
                </p>
                
                {/* HUD Corners */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20 group-hover:border-primary/50 transition-all" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20 group-hover:border-primary/50 transition-all" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20 group-hover:border-primary/50 transition-all" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20 group-hover:border-primary/50 transition-all" />
              </motion.div>
              
              <motion.p 
                variants={itemVariants}
                className="max-w-2xl text-white/50 text-xl mb-14 leading-relaxed font-light tracking-wide"
              >
                Access classified survival telemetry, high-fidelity topographical reconnaissance, and expedition intel from the most hostile environments on this planet.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-8"
              >
                <Button
                  asChild
                  size="lg"
                  className="group relative h-20 bg-primary text-primary-foreground hover:bg-primary/90 px-12 rounded-2xl text-xl font-black transition-all duration-500 shadow-[0_15px_40px_rgba(14,165,233,0.3)] hover:shadow-[0_20px_60px_rgba(14,165,233,0.5)] hover:-translate-y-2 border border-white/10 overflow-hidden"
                >
                  <Link href="#destinations">
                    <span className="relative z-20 flex items-center gap-4">
                      INITIATE RECON <Crosshair className="w-6 h-6 animate-pulse" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="glass group relative h-20 border-white/10 text-white hover:bg-white/5 px-12 rounded-2xl text-xl font-black hover:border-tertiary/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <Link href="/blog">
                    <Database className="mr-4 h-6 w-6 text-tertiary group-hover:rotate-12 transition-transform" />
                    INTEL ARCHIVE
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Tactical Stats Matrix */}
            <motion.div 
              variants={itemVariants}
              className="mt-32 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5, backgroundColor: "rgba(14, 165, 233, 0.05)" }}
                  className="glass group p-8 rounded-[2rem] flex flex-col items-start border border-white/5 hover:border-primary/30 relative overflow-hidden transition-all duration-500"
                >
                  <div className={`p-4 rounded-xl bg-white/5 mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 ${stat.color}`}>
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-black text-white mb-1 tracking-tighter">
                    <DecryptText text={stat.title} delay={index * 0.1 + 0.8} />
                  </div>
                  <div className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/30 group-hover:text-primary transition-colors">{stat.desc}</div>
                  
                  {/* Subtle Scanline in card */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Destinations - Asymmetrical Tactical Grid */}
        <section id="destinations" className="w-full py-40 px-6 relative z-10 bg-[#020617]">
          {/* Section Header */}
          <div className="max-w-7xl mx-auto mb-32">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-3xl"
              >
                <div className="inline-flex items-center gap-4 text-primary font-mono text-[10px] uppercase tracking-[0.6em] mb-6">
                  <div className="w-16 h-[2px] bg-primary/40" /> SECTOR_RECON_ALPHA
                </div>
                <h2 className="font-headline text-7xl sm:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase">
                  HIGH_RISK <br /><span className="text-primary italic">DEPLOYMENT_ZONES</span>
                </h2>
                <p className="text-white/40 mt-10 text-2xl font-light leading-relaxed max-w-2xl">
                  Sensors have identified critical sectors exhibiting anomalous data. Real-time satellite imagery and threat assessments are synchronized.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Link href="/places" className="group flex items-center gap-6 text-white font-black hover:text-primary transition-all py-8 px-12 glass rounded-3xl border border-white/5 hover:border-primary/40 bg-white/5 text-xl">
                  FULL GLOBAL SCAN <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {featuredPlaces.map((place, index) => {
              const spanClass = index === 0 ? "md:col-span-8 lg:col-span-8 h-[550px]" : 
                                index === 1 ? "md:col-span-4 lg:col-span-4 h-[550px]" :
                                index === 2 ? "md:col-span-4 lg:col-span-4 h-[450px]" :
                                index === 3 ? "md:col-span-4 lg:col-span-4 h-[450px]" :
                                "md:col-span-4 lg:col-span-4 h-[450px]";
              
              const imageUrl = `/images/${place.slug.replace('-', '_')}_tactical.png`;

              return (
                <motion.div
                  key={place.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={spanClass}
                >
                  <Link
                    href={`/places/${place.slug}`}
                    className="group relative block h-full rounded-[2rem] overflow-hidden glass-card transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 z-0 bg-black">
                      <Image
                        src={imageUrl}
                        alt={place.name}
                        fill
                        className="object-cover opacity-70 transition-all duration-1000 ease-out group-hover:scale-110 group-hover:opacity-100 grayscale-[0.3] group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
                      
                      {/* Grid Scan Pattern */}
                      <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-20 transition-opacity" 
                           style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                    </div>
                    
                    {/* HUD Labels */}
                    <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
                      <div className={`px-4 py-1.5 rounded-lg text-[9px] font-mono border backdrop-blur-md font-bold uppercase tracking-wider ${
                        place.dangerLevel >= 4 ? 'bg-red-500/20 border-red-500/30 text-red-200' :
                        'bg-primary/20 border-primary/30 text-primary-foreground'
                      }`}>
                        LVL_{place.dangerLevel}
                      </div>
                      <div className="px-4 py-1.5 glass rounded-lg text-[9px] font-mono text-white/60 uppercase tracking-widest border border-white/10 font-medium">
                        {place.location.split(',')[0]}
                      </div>
                    </div>
    
                    {/* Main Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="h-[1px] w-8 bg-primary/60 group-hover:w-12 transition-all duration-500" />
                        <span className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] font-bold">{place.category}</span>
                      </div>
                      
                      <h3 className="font-headline text-3xl lg:text-4xl font-black text-white group-hover:text-primary transition-all duration-500 mb-4 leading-tight">
                        {place.name}
                      </h3>
                      
                      <p className="text-base text-white/40 line-clamp-2 mb-8 font-light leading-relaxed group-hover:text-white/70 transition-colors">
                        {place.description}
                      </p>
                      
                      <div className="flex items-center justify-between border-t border-white/5 pt-8 group-hover:border-primary/30 transition-all duration-500">
                        <div className="flex flex-col">
                           <span className="text-[8px] text-white/30 font-mono uppercase tracking-[0.3em] mb-0.5">Telemetry Uplink</span>
                           <span className="text-xs font-bold text-white tracking-widest uppercase group-hover:text-primary transition-colors">ACCESS_INTEL</span>
                        </div>
                        <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                           <ArrowRight className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
     
                    {/* Corner accents */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/10 group-hover:border-primary transition-colors duration-500" />
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/10 group-hover:border-primary transition-colors duration-500" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Global Intel Stream Submission */}
        <section className="w-full py-60 relative overflow-hidden bg-[#020617]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent)] animate-pulse" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-4 px-8 py-3 rounded-full glass border-secondary/30 text-secondary text-[10px] font-mono uppercase tracking-[0.5em] mb-12 shadow-[0_0_40px_rgba(139,92,246,0.2)]"
            >
              <Radio className="h-5 w-5 animate-pulse" />
              GLOBAL_BROADCAST_RECEPTOR_ACTIVE
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-headline text-6xl sm:text-8xl font-black text-white mb-10 tracking-tighter leading-none"
            >
              BROADCAST YOUR <br /><span className="text-secondary italic">EXPEDITION_INTEL</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-2xl text-white/40 max-w-3xl mx-auto mb-20 font-light leading-relaxed"
            >
              The central archive is powered by frontline reconnaissance. Submit your mission telemetry to fortify our collective survival protocols.
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-10 mb-24 text-left">
              {[
                { icon: BookOpen, title: "Tactical Manuals", desc: "Share validated survival strategies and optimized gear configs." },
                { icon: MapIcon, title: "Hazard Mappings", desc: "Verified terrain anomalies and localized threat coordinates." },
                { icon: Users, title: "Unit Logistics", desc: "Interface with specialized survivalist cells for joint missions." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="glass-card p-12 rounded-[2.5rem] group hover:border-secondary/50 transition-all duration-700 hover:shadow-[0_30px_60px_rgba(139,92,246,0.15)] bg-white/5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                    <item.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6 tracking-tight uppercase group-hover:text-secondary transition-colors">{item.title}</h3>
                  <p className="text-white/40 leading-relaxed text-lg font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button asChild size="lg" className="relative h-24 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-16 rounded-3xl text-2xl font-black shadow-[0_20px_60px_rgba(139,92,246,0.4)] hover:shadow-[0_30px_80px_rgba(139,92,246,0.6)] transition-all duration-700 hover:-translate-y-3 group overflow-hidden">
                <Link href="/blog/write" className="flex items-center gap-6 relative z-10">
                  <span className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-700" />
                  INITIATE BROADCAST <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Tactical Intel Streams Footer Section */}
        <section className="w-full py-40 px-6 relative z-10 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-start mb-32">
              <div className="inline-flex items-center gap-4 text-tertiary font-mono text-[10px] uppercase tracking-[0.6em] mb-6">
                <div className="w-16 h-[2px] bg-tertiary/40" /> SYSTEM_EXPLORATION_CHANNELS
              </div>
              <h2 className="font-headline text-5xl sm:text-7xl font-black text-white tracking-tighter leading-none uppercase">
                INTELLIGENCE <br /><span className="text-tertiary">STREAMS</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { href: "/places?category=dangerous", icon: Flame, title: "LETHAL_SECTORS", color: "text-red-500", border: "border-red-500/20", hover: "hover:border-red-500/60", glow: "shadow-red-500/10", desc: "Probability of biological survival: <5%. Extreme environmental hazards confirmed. Maximum-tier thermal/physical shielding mandatory." },
                { href: "/places?category=extreme", icon: Mountain, title: "GEOLOGIC_ANOMALIES", color: "text-primary", border: "border-primary/20", hover: "hover:border-primary/60", glow: "shadow-primary/10", desc: "Planetary deviations challenging standard physics. High-fidelity sensors required for navigation. Expect atmospheric disruptions." },
                { href: "/places?category=beautiful", icon: Snowflake, title: "STRATEGIC_FRONTIERS", color: "text-tertiary", border: "border-tertiary/20", hover: "hover:border-tertiary/60", glow: "shadow-tertiary/10", desc: "High-value visual yield data points. Minimal threat level. Optimal for long-term observation and topographic baseline establishment." }
              ].map((cat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={cat.href}
                    className={`group block p-16 rounded-[3rem] glass-card border ${cat.border} ${cat.hover} transition-all duration-700 hover:-translate-y-6 shadow-2xl ${cat.glow} bg-white/5 relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                    
                    <div className="mb-14 relative inline-block">
                      <div className={`absolute inset-0 blur-3xl opacity-20 ${cat.color.replace('text', 'bg')}`} />
                      <cat.icon className={`h-24 w-24 ${cat.color} relative z-10 group-hover:scale-110 transition-transform duration-700`} />
                    </div>
                    
                    <h3 className={`font-headline text-4xl font-black text-white mb-8 tracking-tighter uppercase transition-colors`}>
                      {cat.title}
                    </h3>
                    <p className="text-white/40 leading-relaxed text-lg mb-14 font-light group-hover:text-white/70 transition-colors">
                      {cat.desc}
                    </p>
                    
                    <div className="flex items-center gap-6 text-[10px] font-mono font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-white transition-colors">
                      INIT_UPLINK_00{i+1} <ArrowRight className="h-5 w-5 group-hover:translate-x-3 transition-transform text-primary" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      {/* Global HUD Decorations */}
      <div className="fixed top-0 left-10 h-full w-[1px] bg-white/5 z-0" />
      <div className="fixed top-0 right-10 h-full w-[1px] bg-white/5 z-0" />
    </div>
  );
}
