import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mountain, Flame, TreePine, ArrowRight, ShieldAlert, Crosshair, Radar, Activity, Map as MapIcon, Globe } from "lucide-react";
import { places, PlaceHolderImages } from "@/lib/data";

export default function PlacesPage() {
  return (
    <div className="w-full min-h-screen bg-[#020617] text-foreground font-body relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Mission Header */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-widest uppercase">
                <Radar className="h-4 w-4 animate-spin-slow" />
                <span>Sector Database / Active Recon</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-white">
                TACTICAL <span className="text-primary italic">MAP</span>
              </h1>
              <p className="text-muted-foreground/80 max-w-xl text-lg font-light leading-relaxed">
                Comprehensive data archive of identified high-risk sectors across the Antarctic frontier. 
                Monitor environmental shifts and survival metrics before deployment.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <div className="p-4 rounded-xl glass border border-primary/20 flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-primary/60 font-mono">Total Sectors</div>
                  <div className="text-xl font-headline font-bold text-white">{places.length}</div>
                </div>
              </div>
              <div className="p-4 rounded-xl glass border border-secondary/20 flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20">
                  <Activity className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-secondary/60 font-mono">Active Threats</div>
                  <div className="text-xl font-headline font-bold text-white">
                    {places.filter(p => p.dangerLevel >= 4).length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tactical Filters */}
          <div className="flex flex-wrap items-center gap-4 p-2 rounded-2xl glass-card border border-white/5 mb-16">
             <Button variant="ghost" className="rounded-xl px-6 py-6 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all font-mono tracking-tighter group">
                <Crosshair className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform" />
                ALL_SECTORS
             </Button>
             <Button variant="ghost" className="rounded-xl px-6 py-6 hover:bg-white/5 text-foreground/60 hover:text-white transition-all font-mono tracking-tighter">
                <ShieldAlert className="mr-2 h-4 w-4 text-red-500" />
                DANGER_ZONE
             </Button>
             <Button variant="ghost" className="rounded-xl px-6 py-6 hover:bg-white/5 text-foreground/60 hover:text-white transition-all font-mono tracking-tighter">
                <Mountain className="mr-2 h-4 w-4 text-blue-400" />
                EXTREME_ENV
             </Button>
             <Button variant="ghost" className="rounded-xl px-6 py-6 hover:bg-white/5 text-foreground/60 hover:text-white transition-all font-mono tracking-tighter">
                <TreePine className="mr-2 h-4 w-4 text-teal-400" />
                PRISTINE_WILD
             </Button>
          </div>

          {/* Sector Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {places.map((place, index) => {
              const image = PlaceHolderImages.find((p) => p.id === place.imageId);
              return (
                <Link
                  key={place.id}
                  href={`/places/${place.slug}`}
                  className="group relative flex flex-col h-[500px] rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 glass-card shadow-2xl"
                >
                  {/* Image Layer */}
                  <div className="absolute inset-0 z-0">
                    {image && (
                      <img
                        src={image.imageUrl}
                        alt={image.description}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute top-0 right-0 p-4 z-20">
                    <div className="h-10 w-10 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-all duration-500" />
                  </div>

                  {/* Badges */}
                  <div className="relative z-10 p-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-md glass-glow text-[10px] font-mono font-bold tracking-widest uppercase border border-primary/30 text-primary">
                      {place.category}
                    </span>
                    <span className={`px-3 py-1 rounded-md glass text-[10px] font-mono font-bold tracking-widest uppercase border ${
                      place.dangerLevel >= 4 ? 'border-red-500/50 text-red-400' : 'border-teal-500/50 text-teal-400'
                    }`}>
                      THREAT: {place.dangerLevel}/05
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-auto relative z-10 p-8 space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-primary/60 font-mono text-[10px] tracking-widest uppercase mb-1">
                        <MapIcon className="h-3 w-3" />
                        Lat: {(-60 - Math.random() * 30).toFixed(4)}° S
                      </div>
                      <h3 className="font-headline text-3xl font-bold text-white group-hover:text-primary transition-colors">
                        {place.name}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-white/60 line-clamp-2 font-light leading-relaxed group-hover:text-white/80 transition-colors">
                      {place.description}
                    </p>

                    <div className="pt-4 flex items-center justify-between border-t border-white/5 group-hover:border-primary/20 transition-all">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="h-8 w-8 rounded-full border-2 border-[#020617] bg-white/10 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${place.id}${i}`} alt="explorer" />
                          </div>
                        ))}
                        <div className="h-8 w-8 rounded-full border-2 border-[#020617] bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                          +{(12 + index * 4)}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-mono text-[10px] tracking-widest uppercase group-hover:translate-x-2 transition-transform">
                        ACCESS_DATA
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>

                  {/* Scanline Effect on Hover */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.1)_50%)] bg-[length:100%_4px]" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>
    </div>
  );
}
