"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown, Mountain, Flame, Wind, Snowflake, TreePine, Compass, ArrowRight, BookOpen, Users, Star, Activity, Shield, Map as MapIcon, Radio } from "lucide-react";
import Image from "next/image";
import { places, PlaceHolderImages } from "@/lib/data";
import { useEffect, useState } from "react";

const featuredPlaces = places.slice(0, 5);

const stats = [
  { icon: Activity, title: "5+", desc: "Extreme Sectors", color: "text-primary" },
  { icon: Shield, title: "50+", desc: "Survival Logs", color: "text-secondary" },
  { icon: Radio, title: "10K+", desc: "Signal Syncs", color: "text-tertiary" },
  { icon: MapIcon, title: "100%", desc: "Data Integrity", color: "text-primary" },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-adventure");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#020617] text-foreground selection:bg-primary/30 selection:text-white">
      {/* Aurora Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/15 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      {/* Hero Section - The Command Center */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center pt-20">
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover object-center opacity-40 scale-105"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/60 to-[#020617]" />
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />
          </div>
        )}
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-4xl">
            {/* Mission Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border-primary/20 text-primary text-xs font-mono uppercase tracking-[0.2em] mb-8 animate-fade-in-down shadow-[0_0_15px_rgba(14,165,233,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              System Status: Active Exploration
            </div>
            
            <h1 className="font-headline text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight animate-fade-in-down mb-6">
              <span className="block text-white">EXTREME</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-tertiary animate-gradient">EXPLORERS</span>
            </h1>
            
            <div className="relative px-8 py-4 mb-8 glass rounded-xl max-w-2xl animate-fade-in-up delay-200">
              <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary rounded-full shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
              <p className="text-xl md:text-2xl text-sky-100/80 font-light italic leading-relaxed">
                "Pushing the boundaries of human endurance in the world's most unforgiving frontiers."
              </p>
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-12 bg-tertiary rounded-full shadow-[0_0_10px_rgba(60,221,199,0.8)]" />
            </div>
            
            <p className="max-w-xl text-muted-foreground text-lg mb-12 animate-fade-in-up delay-400 leading-relaxed">
              Welcome to the Tactical Operations Hub. Access survival data, thermal imagery, and mission logs from Earth's most dangerous sectors.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up delay-600">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 rounded-lg text-lg font-bold transition-all duration-500 shadow-[0_0_20px_rgba(14,165,233,0.4)]"
              >
                <Link href="#destinations">
                  <span className="relative z-10 flex items-center gap-2">
                    INITIATE DISCOVERY <Activity className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="glass-card border-white/10 text-white hover:bg-white/5 px-10 py-7 rounded-lg text-lg font-bold"
              >
                <Link href="/blog/write">
                  <BookOpen className="mr-3 h-5 w-5 text-tertiary" />
                  SUBMIT MISSION LOG
                </Link>
              </Button>
            </div>
          </div>

          {/* Telemetry Stats Bar */}
          <div className="mt-24 w-full grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up delay-700">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-xl flex flex-col items-center justify-center group hover:bg-white/5 transition-colors">
                <div className={`p-3 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.title}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative Compass Lines */}
        <div className="absolute bottom-10 right-10 opacity-20 pointer-events-none hidden xl:block">
          <div className="relative w-64 h-64 border border-primary/40 rounded-full animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-4 bg-primary" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-4 bg-primary" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-1 bg-primary" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-1 bg-primary" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-primary/40 font-mono text-[10px]">
            LAT: 90.0000° S
          </div>
        </div>
      </section>

      {/* Featured Destinations - Tactical Grid */}
      <section id="destinations" className="w-full py-32 px-4 relative z-10 overflow-hidden">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-20 reveal-on-scroll">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-[0.3em] mb-4">
                <div className="w-8 h-[1px] bg-primary" /> Sector Analysis
              </div>
              <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                High-Risk <span className="text-primary">Deployments</span>
              </h2>
              <p className="text-muted-foreground mt-6 text-lg">
                Our advanced sensors have identified 5 key areas requiring immediate attention. Access thermal data and terrain analysis below.
              </p>
            </div>
            <Link href="/places" className="hidden md:flex items-center gap-3 text-white font-bold hover:text-primary transition-colors group">
              VIEW ALL SECTORS <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPlaces.map((place, index) => {
            const image = PlaceHolderImages.find((p) => p.id === place.imageId);
            return (
              <Link
                key={place.id}
                href={`/places/${place.slug}`}
                className={`group relative aspect-[3/4] rounded-2xl overflow-hidden glass-card glass-glow reveal-on-scroll transition-all duration-500 hover:-translate-y-3`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-90"
                  />
                )}
                
                {/* HUD Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/30" />
                
                {/* Card Top Info */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                  <div className={`px-3 py-1 rounded-sm text-[10px] font-mono border ${
                    place.dangerLevel >= 4 ? 'bg-red-500/20 border-red-500 text-red-400' :
                    'bg-primary/20 border-primary text-primary'
                  }`}>
                    RISK: LVL {place.dangerLevel}
                  </div>
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    ID: {place.id.split('-')[0]}
                  </div>
                </div>

                {/* Card Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-[2px] w-8 bg-primary" />
                    <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">{place.category}</span>
                  </div>
                  <h3 className="font-headline text-3xl font-bold text-white group-hover:text-primary transition-colors mb-3">
                    {place.name}
                  </h3>
                  <p className="text-sm text-sky-100/60 line-clamp-2 mb-6 font-light leading-relaxed">
                    {place.description}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-white/10 pt-6 group-hover:border-primary/30 transition-colors">
                    <span className="text-xs font-bold text-white tracking-widest uppercase">Access Data</span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                      <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/100 transition-all duration-700" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/100 transition-all duration-700" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Mission Log Submission CTA */}
      <section className="w-full py-40 relative overflow-hidden reveal-on-scroll">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform scale-110" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border-secondary/20 text-secondary text-xs font-mono uppercase tracking-[0.2em] mb-10 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
            <Radio className="h-4 w-4 animate-pulse" />
            Establish Uplink
          </div>
          
          <h2 className="font-headline text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Document Your <span className="text-secondary">Expedition</span>
          </h2>
          
          <p className="text-xl text-sky-100/60 max-w-2xl mx-auto mb-14 font-light leading-relaxed">
            Every survivor has a story. Every mission provides data. Contribute your findings to the global archive and help others survive the frost.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16 text-left">
            {[
              { icon: BookOpen, title: "Survival Guides", desc: "Detailed breakdown of gear and tactics." },
              { icon: MapIcon, title: "Terrain Mapping", desc: "Verified coordinates and hazard zones." },
              { icon: Users, title: "Team Coordination", desc: "Connect with specialized elite squads." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl group hover:border-secondary/40 transition-colors">
                <item.icon className="h-8 w-8 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-sky-100/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-12 py-8 rounded-full text-xl font-bold shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:scale-105 transition-all">
            <Link href="/blog/write" className="flex items-center gap-3">
              START BROADCAST <ArrowRight className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Tactical Category Explorer */}
      <section className="w-full py-32 px-4 relative z-10 bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20 reveal-on-scroll">
            <h2 className="font-headline text-4xl sm:text-5xl font-bold text-white mb-6">Tactical Databases</h2>
            <div className="h-1 w-20 bg-primary rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { href: "/places?category=dangerous", icon: Flame, title: "Death Zones", color: "text-red-500", border: "border-red-500/20", hover: "hover:border-red-500/50", glow: "shadow-red-500/10", desc: "High-fatality sectors where conditions exceed biological limits." },
              { href: "/places?category=extreme", icon: Mountain, title: "Anomalous Terrains", color: "text-primary", border: "border-primary/20", hover: "hover:border-primary/50", glow: "shadow-primary/10", desc: "Geographical deviations requiring specialized sub-zero hardware." },
              { href: "/places?category=beautiful", icon: Snowflake, title: "Pristine Frontiers", color: "text-tertiary", border: "border-tertiary/20", hover: "hover:border-tertiary/50", glow: "shadow-tertiary/10", desc: "Untouched glacial landscapes of immense visual and strategic value." }
            ].map((cat, i) => (
              <Link
                key={i}
                href={cat.href}
                className={`group p-10 rounded-2xl glass-card border ${cat.border} ${cat.hover} transition-all duration-500 hover:-translate-y-2 shadow-xl ${cat.glow} reveal-on-scroll`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <cat.icon className={`h-16 w-16 ${cat.color} mb-8 group-hover:scale-110 transition-transform`} />
                <h3 className={`font-headline text-3xl font-bold text-white mb-4 group-hover:${cat.color} transition-colors`}>
                  {cat.title}
                </h3>
                <p className="text-sky-100/50 leading-relaxed">
                  {cat.desc}
                </p>
                <div className="mt-8 flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                  Initialize Sync <ChevronDown className="h-4 w-4 -rotate-90" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
