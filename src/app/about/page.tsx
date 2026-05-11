import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mountain, BookOpen, Users, Globe, Shield, Star, ShieldCheck, Zap, Target, Award, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-[#020617] text-foreground font-body relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-primary/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] left-[10%] w-[30%] h-[30%] bg-secondary/20 blur-[150px] rounded-full" />
      </div>

      {/* Hero Section - Mission Briefing */}
      <section className="relative w-full py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/30 text-primary font-mono text-[10px] tracking-[0.2em] uppercase mb-4 animate-pulse">
              <ShieldCheck className="h-3 w-3" />
              Strategic Overview / Protocol-01
            </div>
            <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter text-white">
              MISSION <span className="text-primary italic">DIRECTIVE</span>
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-tertiary rounded-full" />
            <p className="text-muted-foreground/80 text-xl max-w-3xl leading-relaxed font-light mt-8">
              Documenting the final frontiers. We are a decentralized intelligence network of explorers dedicated to mapping the most extreme 
              and volatile sectors of the frozen continent.
            </p>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="w-full py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl md:text-5xl font-bold text-white tracking-tight">
                  THE <span className="text-secondary">ARCHIVE</span> PROJECT
                </h2>
                <p className="text-muted-foreground/80 text-lg leading-relaxed font-light">
                  Antarctica Unveiled was established as a high-fidelity data repository for the extreme exploration community. 
                  In an era of rising environmental volatility, documented experience is the most valuable survival asset.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { icon: Target, title: "Precision Mapping", text: "Verified coordinates and sector analysis." },
                   { icon: Zap, title: "Survival Intel", text: "Tactical data on extreme weather & terrain." },
                   { icon: Users, title: "Explorer Network", text: "Global connection of high-altitude operatives." },
                   { icon: Award, title: "Field Reports", text: "Authentic, first-hand accounts from the edge." }
                 ].map((item, i) => (
                   <div key={i} className="p-5 rounded-2xl glass border border-white/5 hover:border-primary/20 transition-all group">
                     <item.icon className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                     <h3 className="text-white font-headline font-bold mb-1">{item.title}</h3>
                     <p className="text-muted-foreground/60 text-xs leading-relaxed">{item.text}</p>
                   </div>
                 ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden glass border border-white/10 p-4">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1517044679447-24851333ed2c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Antarctica Base" 
                    className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 p-3 glass-glow border border-primary/30 rounded-xl">
                    <div className="text-[10px] font-mono text-primary animate-pulse">SYSTEM_SCANNING...</div>
                  </div>
                </div>
              </div>
              {/* Floating Tech Elements */}
              <div className="absolute -top-6 -right-6 h-24 w-24 border-t-4 border-r-4 border-secondary/40 rounded-tr-3xl" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 border-b-4 border-l-4 border-primary/40 rounded-bl-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Operational Pillars */}
      <section className="w-full py-24 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-white tracking-tight">OPERATIONAL PILLARS</h2>
            <p className="text-muted-foreground/60 max-w-2xl mx-auto">The foundations of our exploration framework.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Globe, 
                title: "Global Intelligence", 
                text: "From the dry valleys to the magnetic pole, we gather data from across the entire 14 million km² continent.",
                color: "text-blue-400"
              },
              { 
                icon: Shield, 
                title: "Zero-Risk Protocol", 
                text: "We prioritize survival above all. Our danger level ratings use real-time environmental metrics.",
                color: "text-red-400"
              },
              { 
                icon: BookOpen, 
                title: "Living Archive", 
                text: "Every field report is a permanent record of human endurance and environmental shift.",
                color: "text-purple-400"
              }
            ].map((pillar, i) => (
              <Card key={i} className="p-8 glass-card border border-white/5 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <pillar.icon className="h-24 w-24" />
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-primary/30 transition-all`}>
                  <pillar.icon className={`h-7 w-7 ${pillar.color}`} />
                </div>
                <h3 className="font-headline text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground/70 text-sm leading-relaxed font-light">{pillar.text}</p>
                <div className="mt-8 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 rounded-full" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Directive CTA */}
      <section className="w-full py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-12 md:p-20 rounded-[40px] overflow-hidden glass-card border border-primary/20 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            <div className="relative z-10 space-y-8">
              <Rocket className="h-16 w-16 text-primary mx-auto animate-bounce" />
              <h2 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tighter">
                READY FOR <span className="text-primary italic">DEPLOYMENT?</span>
              </h2>
              <p className="text-muted-foreground/80 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Your data could be the difference between survival and failure for the next operative. 
                Contribute your field reports to the global archive.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-xl h-14 px-10 bg-primary hover:bg-primary/80 text-black font-bold text-lg transition-all hover:scale-105 active:scale-95">
                  <Link href="/blog/write">
                    INITIATE_UPLINK
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl h-14 px-10 border-white/10 hover:bg-white/5 text-white font-mono tracking-widest text-sm transition-all">
                  <Link href="/places">
                    BROWSE_SECTORS
                  </Link>
                </Button>
              </div>
            </div>
            {/* HUD Corner Elements */}
            <div className="absolute top-0 left-0 p-8 h-12 w-12 border-t-2 border-l-2 border-primary/30" />
            <div className="absolute bottom-0 right-0 p-8 h-12 w-12 border-b-2 border-r-2 border-primary/30" />
          </div>
        </div>
      </section>

      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
    </div>
  );
}
