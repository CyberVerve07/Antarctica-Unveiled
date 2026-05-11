import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Flame, AlertTriangle, BookOpen, Users, Star, Activity, ShieldAlert, Crosshair, Radar, Terminal, Gauge, Thermometer, Wind, Compass } from "lucide-react";
import { places, getPlaceBySlug, PlaceHolderImages } from "@/lib/data";

export async function generateStaticParams() {
  return places.map((place) => ({
    slug: place.slug,
  }));
}

export default function PlacePage({ params }: { params: { slug: string } }) {
  const place = getPlaceBySlug(params.slug);

  if (!place) {
    notFound();
  }

  const heroImage = PlaceHolderImages.find((p) => p.id === place.imageId);
  const galleryImages = place.galleryImages
    .map((id) => PlaceHolderImages.find((p) => p.id === id))
    .filter((img): img is NonNullable<typeof img> => Boolean(img));

  return (
    <div className="w-full min-h-screen bg-[#020617] text-foreground font-body relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full" />
      </div>

      {/* Cinematic Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[600px] overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover grayscale-[0.2]"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
        
        {/* HUD Elements */}
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col pointer-events-none">
          <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between pointer-events-auto">
            <Link href="/places" className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-all group w-fit">
              <div className="p-2 rounded-lg glass border border-white/10 group-hover:border-primary/40 transition-all">
                <ArrowLeft className="h-4 w-4" />
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase">RETURN_TO_BASE</span>
            </Link>
            
            <div className="space-y-6 max-w-4xl pb-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-4 py-1.5 rounded-lg glass-glow text-[10px] font-mono font-bold tracking-widest text-primary border border-primary/40">
                  {place.category.toUpperCase()}
                </span>
                <span className="px-4 py-1.5 rounded-lg glass text-[10px] font-mono font-bold tracking-widest text-secondary border border-secondary/40">
                  SECTOR_ID: {place.id.slice(0, 8)}
                </span>
              </div>
              
              <h1 className="font-headline text-6xl md:text-8xl font-black text-white tracking-tighter">
                {place.name.split(' ').map((word, i) => (
                   <span key={i} className={i % 2 !== 0 ? 'text-primary italic' : ''}>{word} </span>
                ))}
              </h1>
              
              <div className="flex items-center gap-6 text-white/80 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{place.location}</span>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <Compass className="h-5 w-5 text-secondary" />
                  <span>{Math.floor(Math.random() * 360)}° NNE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Corner Scanlines */}
        <div className="absolute bottom-0 right-0 p-12 hidden lg:block">
           <div className="h-32 w-64 border-b-2 border-r-2 border-primary/20 p-4">
              <div className="text-[10px] font-mono text-primary/60 mb-2">TELEMETRY_FEED</div>
              <div className="space-y-1">
                 <div className="h-1 bg-primary/20 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-primary animate-pulse w-[70%]" />
                 </div>
                 <div className="h-1 bg-secondary/20 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-secondary animate-pulse w-[45%]" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Main Intel Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Core Intel */}
          <div className="lg:col-span-8 space-y-20">
            {/* Overview */}
            <section className="space-y-6">
              <div className="flex items-center gap-4 text-primary font-mono text-xs tracking-widest uppercase">
                <Radar className="h-5 w-5 animate-spin-slow" />
                <span>Sector Intelligence Report</span>
              </div>
              <h2 className="font-headline text-4xl font-bold text-white tracking-tight">OPERATIONAL SUMMARY</h2>
              <p className="text-muted-foreground/80 leading-relaxed text-xl font-light">
                {place.fullDescription}
              </p>
            </section>

            {/* Tactical Dangers */}
            <section className="space-y-8">
               <div className="p-10 rounded-[32px] glass-card border border-red-500/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <ShieldAlert className="h-32 w-32 text-red-500" />
                  </div>
                  <h2 className="font-headline text-3xl font-bold text-white mb-8 flex items-center gap-3">
                    <AlertTriangle className="h-8 w-8 text-red-500" />
                    RISK ASSESSMENT
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {place.dangers.map((danger, index) => (
                      <div key={index} className="flex gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10 group hover:border-red-500/30 transition-all">
                        <div className="h-2 w-2 rounded-full bg-red-500 mt-2 shrink-0 animate-pulse" />
                        <p className="text-white/70 text-sm font-light leading-relaxed group-hover:text-white transition-colors">{danger}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </section>

            {/* Sector Highlights */}
            <section className="space-y-8">
              <h2 className="font-headline text-3xl font-bold text-white flex items-center gap-3">
                <Star className="h-8 w-8 text-yellow-500" />
                PRIMARY_OBJECTIVES
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {place.highlights.map((highlight, index) => (
                  <div key={index} className="p-6 rounded-2xl glass border border-white/5 hover:border-primary/30 transition-all">
                    <div className="text-primary font-mono text-[10px] mb-2">OBJ_0{index + 1}</div>
                    <p className="text-white/80 font-light text-sm">{highlight}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Survival Protocol */}
            <section className="space-y-8">
              <div className="p-10 rounded-[32px] glass-card border border-primary/20">
                <h2 className="font-headline text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Activity className="h-8 w-8 text-primary" />
                  SURVIVAL_PROTOCOL
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {place.survivalTips.map((tip, index) => (
                    <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4 hover:border-primary/20 transition-all group">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-all">
                        ✓
                      </div>
                      <p className="text-white/70 text-sm font-light">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Tech Specs */}
          <div className="lg:col-span-4 space-y-8">
            {/* Status Panel */}
            <div className="p-8 rounded-[32px] glass-card border border-white/10 sticky top-24 space-y-8">
              <div className="space-y-4">
                <div className="text-[10px] font-mono text-primary/60 tracking-widest uppercase">ENVIRONMENT_SPECS</div>
                
                <div className="space-y-6">
                   <div className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5 text-secondary">
                          <Thermometer className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-light text-white/60">Climate</span>
                      </div>
                      <span className="text-sm font-mono text-white">{place.climate}</span>
                   </div>
                   
                   <div className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5 text-primary">
                          <Wind className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-light text-white/60">Window</span>
                      </div>
                      <span className="text-sm font-mono text-white">{place.bestTimeToVisit}</span>
                   </div>

                   <div className="space-y-3 pt-4">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-red-500/80">THREAT_LEVEL</span>
                        <span className="text-red-500 font-bold">{place.dangerLevel}/05</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
                         <div 
                           className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full" 
                           style={{ width: `${(place.dangerLevel / 5) * 100}%` }} 
                         />
                      </div>
                   </div>
                </div>
              </div>

              {/* Equipment Grid */}
              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="text-[10px] font-mono text-primary/60 tracking-widest uppercase">REQUIRED_GEAR</div>
                <div className="flex flex-wrap gap-2">
                   {place.equipmentNeeded.map((item, i) => (
                     <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-white/60 text-[10px] font-mono hover:border-secondary/40 hover:text-secondary transition-all">
                       {item.toUpperCase()}
                     </span>
                   ))}
                </div>
              </div>

              {/* Historical Logs */}
              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="text-[10px] font-mono text-primary/60 tracking-widest uppercase">EXPEDITION_LOGS</div>
                <div className="space-y-3">
                   {place.famousExpeditions.map((ex, i) => (
                     <div key={i} className="text-[10px] font-light text-white/40 border-l-2 border-primary/20 pl-3 py-1">
                        {ex}
                     </div>
                   ))}
                </div>
              </div>

              <Button asChild className="w-full h-14 rounded-2xl bg-secondary hover:bg-secondary/80 text-black font-bold text-lg shadow-xl shadow-secondary/10 transition-all">
                <Link href={`/blog/write?place=${place.slug}`}>
                  INITIATE_FIELD_REPORT
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>
    </div>
  );
}
