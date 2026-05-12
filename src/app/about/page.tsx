"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mountain, BookOpen, Users, Globe, Shield, Star, ShieldCheck, Zap, Target, Award, Rocket, Terminal, Database, Crosshair, Radar, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DecryptText } from "@/components/ui/decrypt-text";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(8px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="w-full min-h-screen bg-[#020617] relative overflow-hidden">
      {/* Hero Section - Mission Briefing */}
      <section className="relative w-full py-32 md:py-48 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_tactical.png" 
            alt="Mission Control Center" 
            fill 
            className="object-cover opacity-20 scale-105 grayscale-[0.5]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-[#020617]" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto"
        >
          <div className="flex flex-col items-center text-center space-y-12">
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass border border-primary/30 text-primary font-mono text-[10px] tracking-[0.5em] uppercase shadow-[0_0_20px_rgba(14,165,233,0.2)]"
            >
              <div className="h-2 w-2 rounded-full bg-primary animate-ping" />
              Strategic Overview / Protocol-01
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="font-headline text-6xl md:text-9xl font-black tracking-tighter text-white leading-none"
            >
              MISSION <br /><span className="text-primary italic"><DecryptText text="DIRECTIVE" delay={0.5} /></span>
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="w-32 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" 
            />
            
            <motion.p 
              variants={itemVariants}
              className="text-white/60 text-xl md:text-2xl max-w-3xl leading-relaxed font-light tracking-wide"
            >
              Documenting the final frontiers. We are a decentralized intelligence network of explorers dedicated to mapping the most extreme 
              and volatile sectors of the frozen continent.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-8">
              <Button asChild variant="outline" className="glass h-16 px-10 rounded-2xl border-white/10 hover:border-primary/50 text-white font-mono tracking-widest text-xs">
                <Link href="#objectives">
                  DECRYPT_MORE_INTEL <ChevronDown className="ml-4 h-4 w-4 animate-bounce" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Core Objectives */}
      <section id="objectives" className="w-full py-40 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="text-secondary font-mono text-[10px] uppercase tracking-[0.6em] mb-4 flex items-center gap-4">
                   <div className="w-12 h-[1px] bg-secondary/40" /> SYSTEM_DATABASE
                </div>
                <h2 className="font-headline text-5xl md:text-7xl font-black text-white tracking-tight leading-none uppercase">
                  THE <span className="text-secondary italic">ARCHIVE</span> <br />PROJECT
                </h2>
                <p className="text-white/40 text-xl leading-relaxed font-light">
                  Antarctica Unveiled was established as a high-fidelity data repository for the extreme exploration community. 
                  In an era of rising environmental volatility, documented experience is the most valuable survival asset.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 {[
                   { icon: Target, title: "Precision Mapping", text: "Verified coordinates and sector analysis.", color: "text-primary" },
                   { icon: Zap, title: "Survival Intel", text: "Tactical data on extreme weather & terrain.", color: "text-secondary" },
                   { icon: Users, title: "Explorer Network", text: "Global connection of high-altitude operatives.", color: "text-tertiary" },
                   { icon: Database, title: "Field Reports", text: "Authentic, first-hand accounts from the edge.", color: "text-primary" }
                 ].map((item, i) => (
                   <motion.div 
                    key={i} 
                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.02)" }}
                    className="p-8 rounded-[2rem] glass border border-white/5 hover:border-white/20 transition-all group"
                   >
                     <item.icon className={`h-8 w-8 ${item.color} mb-6 group-hover:scale-110 transition-transform`} />
                     <h3 className="text-white font-headline text-xl font-bold mb-3 uppercase tracking-tight">{item.title}</h3>
                     <p className="text-white/40 text-sm leading-relaxed font-light">{item.text}</p>
                   </motion.div>
                 ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden glass border border-white/10 p-6">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative group">
                  <Image 
                    src="/images/antarctica_tactical.png" 
                    alt="Antarctica Base Recon" 
                    fill
                    className="object-cover opacity-60 grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                  
                  {/* HUD Elements Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8 pointer-events-none">
                    <div className="flex justify-between items-start">
                      <div className="px-4 py-2 glass border border-primary/30 rounded-lg">
                        <div className="text-[8px] font-mono text-primary animate-pulse flex items-center gap-2">
                           <Radar className="h-3 w-3" /> SCANNING_SECTOR_7
                        </div>
                      </div>
                      <div className="text-[8px] font-mono text-white/40 text-right">
                        LAT: 82.8628 S<br />LNG: 135.0000 E
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ width: ["0%", "100%", "0%"] }}
                          transition={{ duration: 10, repeat: Infinity }}
                          className="h-full bg-primary/40" 
                        />
                      </div>
                      <div className="flex justify-between text-[8px] font-mono text-primary/60 uppercase">
                        <span>Recon_Sync</span>
                        <span>78.4% COMPLETE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Decorative Accents */}
              <div className="absolute -top-10 -right-10 h-32 w-32 border-t-2 border-r-2 border-primary/20 rounded-tr-[4rem] pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 border-b-2 border-l-2 border-secondary/20 rounded-bl-[4rem] pointer-events-none" />
              
              {/* Spinning Radar Decoration */}
              <div className="absolute -bottom-20 -right-20 h-64 w-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operational Pillars - The Tactical Grid */}
      <section className="w-full py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.05),transparent)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32 space-y-6">
            <div className="inline-flex items-center gap-3 text-tertiary font-mono text-[10px] uppercase tracking-[0.6em]">
              <div className="w-10 h-[1px] bg-tertiary/40" /> FOUNDATIONAL_PROTOCOLS
            </div>
            <h2 className="font-headline text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              OPERATIONAL <span className="text-tertiary">PILLARS</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: Globe, 
                title: "Global Intelligence", 
                text: "From the dry valleys to the magnetic pole, we gather data from across the entire 14 million km² continent using advanced satellite telemetry.",
                color: "text-primary",
                bg: "bg-primary/5",
                id: "GRID_01"
              },
              { 
                icon: Shield, 
                title: "Zero-Risk Protocol", 
                text: "We prioritize survival above all. Our danger level ratings use real-time environmental metrics and historical anomaly data.",
                color: "text-red-500",
                bg: "bg-red-500/5",
                id: "GRID_02"
              },
              { 
                icon: BookOpen, 
                title: "Living Archive", 
                text: "Every field report is a permanent record of human endurance and environmental shift, stored in a decentralized high-security vault.",
                color: "text-secondary",
                bg: "bg-secondary/5",
                id: "GRID_03"
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group relative h-full"
              >
                <div className="h-full p-12 glass-card border border-white/5 hover:border-white/20 transition-all duration-700 rounded-[3rem] flex flex-col relative overflow-hidden group-hover:-translate-y-4">
                  {/* Background Grid Pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" 
                       style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                  
                  <div className="absolute top-6 right-10 text-[8px] font-mono text-white/20 uppercase tracking-widest">{pillar.id}</div>
                  
                  <div className={`w-20 h-20 rounded-2xl ${pillar.bg} flex items-center justify-center mb-10 border border-white/5 group-hover:border-white/20 transition-all shadow-2xl`}>
                    <pillar.icon className={`h-10 w-10 ${pillar.color} group-hover:scale-110 transition-transform duration-500`} />
                  </div>
                  
                  <h3 className="font-headline text-3xl font-black text-white mb-6 uppercase tracking-tight group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-white/40 text-lg leading-relaxed font-light group-hover:text-white/70 transition-colors">
                    {pillar.text}
                  </p>
                  
                  <div className="mt-auto pt-10">
                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: "0%" }}
                         whileInView={{ width: "100%" }}
                         transition={{ duration: 1.5, delay: 0.5 }}
                         className={`h-full ${pillar.color.replace('text', 'bg')}`} 
                       />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Directive CTA */}
      <section className="w-full py-48 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative p-16 md:p-24 rounded-[4rem] overflow-hidden glass-card border border-primary/20 text-center group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
            
            <div className="relative z-10 space-y-12">
              <div className="relative inline-block">
                <Rocket className="h-20 w-20 text-primary mx-auto animate-float" />
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10" />
              </div>
              
              <h2 className="font-headline text-5xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase">
                READY FOR <br /><span className="text-primary italic"><DecryptText text="DEPLOYMENT?" delay={0.8} /></span>
              </h2>
              
              <p className="text-white/50 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
                Your data could be the difference between survival and failure for the next operative. 
                Contribute your field reports to the global archive.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
                <Button asChild size="lg" className="group relative h-20 px-12 rounded-2xl bg-primary hover:bg-primary/90 text-black font-black text-xl transition-all duration-500 shadow-[0_15px_40px_rgba(14,165,233,0.3)] hover:-translate-y-2 overflow-hidden">
                  <Link href="/blog/write" className="flex items-center gap-4 relative z-10">
                    <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    INITIATE_UPLINK <Crosshair className="h-6 w-6" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="glass h-20 px-12 rounded-2xl border-white/10 hover:border-tertiary/50 text-white hover:bg-white/5 font-mono tracking-widest text-sm transition-all duration-500 hover:-translate-y-2">
                  <Link href="/places" className="flex items-center gap-4">
                    <Database className="h-5 w-5 text-tertiary" /> BROWSE_SECTORS
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* HUD Corner Elements */}
            <div className="absolute top-10 left-10 h-16 w-16 border-t-2 border-l-2 border-primary/40 group-hover:w-20 group-hover:h-20 transition-all duration-700" />
            <div className="absolute bottom-10 right-10 h-16 w-16 border-b-2 border-r-2 border-primary/40 group-hover:w-20 group-hover:h-20 transition-all duration-700" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
