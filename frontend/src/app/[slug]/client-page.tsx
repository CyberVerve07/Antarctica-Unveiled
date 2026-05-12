"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Terminal, 
  Radar, 
  Activity, 
  ShieldAlert, 
  Crosshair, 
  Cpu, 
  Target, 
  Zap, 
  Camera, 
  Maximize2,
  Gauge,
  Thermometer,
  Wind,
  Compass,
  BarChart3,
  Info
} from "lucide-react";
import { ContentBody } from "@/components/content-body";
import { RelatedImages } from "@/components/related-images";
import Snowfall from "@/components/ui/snowfall";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// NOTE: All AI-generated content has been replaced with static content to resolve persistent generation errors.
import { 
  historyPageContent,
  lifePageContent,
  researchPageContent,
  climatePageContent,
  wildlifePageContent,
  visitPageContent,
  expeditionPageContent,
  factsPageContent,
  PlaceHolderImages
} from "@/lib/data";

const pageConfig: { [key: string]: { title: string; imageId: string; staticContent: string; } } = {
    history: {
        title: "History of Antarctica",
        imageId: "history-exploration",
        staticContent: historyPageContent,
    },
    life: {
        title: "Life in Antarctica",
        imageId: "life-research-station",
        staticContent: lifePageContent,
    },
    research: {
        title: "Scientific Research",
        imageId: "research-scientist",
        staticContent: researchPageContent,
    },
    climate: {
        title: "Climate & Global Impact",
        imageId: "climate-glacier",
        staticContent: climatePageContent,
    },
    wildlife: {
        title: "Antarctic Wildlife",
        imageId: "wildlife-penguins",
        staticContent: wildlifePageContent,
    },
    visit: {
        title: "How to Visit Antarctica",
        imageId: "visit-cruise-ship",
        staticContent: visitPageContent,
    },
    expedition: {
        title: "Antarctic Expeditions",
        imageId: "expedition-team",
        staticContent: expeditionPageContent,
    },
    'deep-facts': {
        title: "Deep Facts About Antarctica",
        imageId: "deep-facts",
        staticContent: factsPageContentImport,
    },
};

// generateMetadata has been removed — this file uses "use client" and metadata
// exports are only valid in Server Components. SEO metadata can be added in layout.tsx if needed.

export default function Page({ params }: { params: { slug: string } }) {
    const [isDecrypting, setIsDecrypting] = useState(true);
    const [decryptProgress, setDecryptProgress] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const { slug } = params;
    const config = pageConfig[slug as keyof typeof pageConfig];

    useEffect(() => {
        if (!config) return;
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
    }, [config]);

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

    if (!config) {
        notFound();
    }

    const initialContent = config.staticContent;
    const heroImage = PlaceHolderImages.find(p => p.id === config.imageId);

    if (isDecrypting) {
        return (
            <div className="fixed inset-0 z-[100] bg-[#020617] flex items-center justify-center font-mono">
                <div className="w-full max-w-lg p-12 space-y-8">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-primary text-[10px] tracking-widest uppercase">
                            <span className="flex items-center gap-2">
                                <Terminal className="h-4 w-4" />
                                Decrypting Intel: {slug.toUpperCase()}
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
                </div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-[#020617] text-foreground font-body relative overflow-hidden">
            {slug === "climate" && <Snowfall />}
            
            {/* Background Decor */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/10 blur-[180px] rounded-full animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/5 blur-[150px] rounded-full" />
            </div>

            {/* Cinematic Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
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
                                <span className="font-mono text-[10px] tracking-widest uppercase">RETURN_TO_BASE</span>
                            </Link>
                        </motion.div>
                        
                        <div className="space-y-6 max-w-5xl pb-12">
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex flex-wrap items-center gap-4"
                            >
                                <span className="px-5 py-2 rounded-full glass-glow text-xs font-mono font-bold tracking-widest text-primary border border-primary/40">
                                    INTEL_FILE: {slug.toUpperCase()}
                                </span>
                                <div className="flex items-center gap-2 px-5 py-2 rounded-full glass text-xs font-mono text-white/60 border border-white/10">
                                    <Activity className="h-3 w-3 animate-pulse text-red-500" />
                                    STATUS: VERIFIED
                                </div>
                            </motion.div>
                            
                            <motion.h1 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-tight"
                            >
                                {config.title.toUpperCase()}
                            </motion.h1>
                        </div>
                    </div>
                </div>
                
                {/* Animated Scanline Overlay */}
                <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03] bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,242,255,0.2)_50%)] bg-[length:100%_4px]" />
            </section>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-4 py-20 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-8 space-y-16">
                        <motion.section 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4 text-primary font-mono text-xs tracking-widest uppercase">
                                <Radar className="h-6 w-6 animate-spin-slow" />
                                <span>Encrypted Field Intelligence</span>
                            </div>
                            
                            <div className="prose prose-invert prose-p:text-muted-foreground/90 prose-p:leading-relaxed prose-p:text-xl prose-p:font-light prose-headings:text-white prose-headings:font-headline prose-headings:tracking-tight prose-strong:text-primary prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:p-6 prose-blockquote:rounded-2xl">
                                <ContentBody slug={slug} initialContent={initialContent} />
                            </div>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-10"
                        >
                            <div className="flex items-center gap-4 text-secondary font-mono text-xs tracking-widest uppercase">
                                <Camera className="h-6 w-6" />
                                <span>Visual Reconnaissance</span>
                            </div>
                            <div className="p-8 rounded-[2.5rem] glass-card border border-white/10">
                                <RelatedImages slug={slug} mainImageId={config.imageId} />
                            </div>
                        </motion.section>
                    </div>

                    {/* Right Column - Intelligence Sidebar */}
                    <div className="lg:col-span-4 space-y-12">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="p-10 rounded-[3.5rem] glass-card border border-white/10 sticky top-32 space-y-10"
                        >
                            <div className="space-y-6">
                                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                    <div className="text-[10px] font-mono text-primary/60 tracking-widest uppercase flex items-center gap-2">
                                        <Info className="h-3 w-3" />
                                        Intel_Specs
                                    </div>
                                    <BarChart3 className="h-4 w-4 text-primary/40" />
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                                        <div className="text-[8px] font-mono text-white/40 uppercase">Classification</div>
                                        <div className="text-sm font-bold text-primary">TOP_SECRET_RECON</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                                        <div className="text-[8px] font-mono text-white/40 uppercase">Sector</div>
                                        <div className="text-sm font-bold text-white">7A-ANTARCTICA</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                                        <div className="text-[8px] font-mono text-white/40 uppercase">Data_Node</div>
                                        <div className="text-sm font-mono text-white/80 break-all">{slug.toUpperCase()}_v2.0.4</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="text-[10px] font-mono text-secondary/60 tracking-widest uppercase flex items-center gap-2">
                                    <Target className="h-3 w-3" />
                                    Mission_Tags
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["SENSORY", "HISTORICAL", "CLIMATE", "GEOLOGIC"].map((tag, i) => (
                                        <span key={i} className="px-4 py-2 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-mono uppercase tracking-tight">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <Button asChild className="w-full h-16 rounded-[2rem] bg-primary hover:bg-primary/80 text-black font-black text-lg shadow-2xl shadow-primary/20 transition-all uppercase tracking-tighter">
                                <Link href="/places">
                                    <Compass className="mr-2 h-5 w-5" />
                                    Deploy to Sector
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
