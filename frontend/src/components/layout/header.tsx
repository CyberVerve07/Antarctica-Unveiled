"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MountainSnow, X, ExternalLink, MapPin } from "lucide-react";
import TemperatureWidget from "@/components/ui/temperature-widget";
import { SearchBar } from "@/components/search-bar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { DecryptText } from "@/components/ui/decrypt-text";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Sectors", href: "/places" },
  { name: "Archives", href: "/blog" },
  { name: "Uplink", href: "/blog/write" },
  { name: "Protocol", href: "/about" },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/40 backdrop-blur-3xl border-b border-primary/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] overflow-hidden h-16 md:h-20 transition-all duration-500">
      {/* Noise Grain Effect */}
      <div className="absolute inset-0 noise-overlay opacity-10 pointer-events-none" />
      <div className="absolute inset-0 crt-overlay opacity-20 pointer-events-none" />

      {/* Tactical Scanning Line */}
      <motion.div 
        animate={{ left: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent z-10" 
      />

      <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-8 relative z-20">
        <Link href="/" className="flex items-center gap-4 font-headline group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 blur-2xl group-hover:bg-primary/50 transition-all duration-700 rounded-full scale-110" />
            <div className="h-10 w-10 md:h-12 md:w-12 glass border border-primary/40 rounded-xl flex items-center justify-center relative z-10 overflow-hidden shadow-[0_0_20px_rgba(14,165,233,0.3)]">
              <MountainSnow className="h-6 w-6 md:h-7 md:w-7 text-primary transition-all duration-700 group-hover:scale-125 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-white tracking-[0.25em] leading-none text-xs md:text-sm font-black flex items-center gap-1">
              <DecryptText text="EXTREME" delay={0.5} />
              <span className="text-primary"><DecryptText text="EXPLORERS" delay={1} /></span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[7px] font-mono text-primary/60 tracking-[0.4em] uppercase">
                Sector_Intelligence_Archive
              </span>
              <div className="h-[1px] w-4 bg-primary/30" />
              <span className="text-[7px] font-mono text-green-500 animate-pulse tracking-[0.2em] uppercase">
                v2.0.4_Live
              </span>
            </div>
          </div>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-1 glass p-1 rounded-2xl border border-white/10 shadow-inner">
          {navItems.map((item) => (
            <Button
              key={item.name}
              asChild
              variant="ghost"
              size="sm"
              className={cn(
                "text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-500 text-[9px] font-mono uppercase tracking-[0.2em] px-6 h-10 relative group rounded-xl",
                pathname === item.href && "text-primary font-bold bg-primary/5 shadow-[0_0_15px_rgba(14,165,233,0.05)]"
              )}
            >
              <Link href={item.href}>
                <span className="relative z-10">{item.name}</span>
                {pathname === item.href && (
                  <motion.span 
                    layoutId="activeNav"
                    className="absolute inset-0 border border-primary/30 rounded-xl bg-primary/5 shadow-[0_0_20px_rgba(14,165,233,0.1)]" 
                  />
                )}
                <motion.span 
                  initial={{ width: 0 }}
                  whileHover={{ width: "60%" }}
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-primary/60 blur-[1px]" 
                />
              </Link>
            </Button>
          ))}
        </nav>
        
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex flex-col items-end font-mono text-[9px] text-muted-foreground mr-2 leading-tight">
            <div className="flex items-center gap-2">
              <span className="text-primary/70">UPLINK_STABLE</span>
              <div className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/40">LATENCY:</span>
              <span className="text-secondary tabular-nums">12ms</span>
            </div>
          </div>
          <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="flex items-center gap-2">
            <SearchBar />
            <TemperatureWidget />
          </div>
        </div>
        
        <div className="lg:hidden flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-primary"
          >
            <Link href="/visit">
              <MapPin className="h-4 w-4" />
            </Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card w-[300px] sm:w-[350px] p-0">
              <div className="flex flex-col h-full">
                {/* Header in sheet */}
                <div className="flex items-center justify-between p-4 border-b border-border/60">
                  <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold group" onClick={() => setSheetOpen(false)}>
                    <MountainSnow className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform" />
                    <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                      ANTARCTICA <span className="text-foreground/90 font-light">UNVEILED</span>
                    </span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <Button
                        key={item.name}
                        asChild
                        variant="ghost"
                        className={cn(
                          "w-full justify-start text-base font-medium py-3",
                          pathname === item.href 
                            ? "bg-primary/15 text-primary" 
                            : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                        )}
                        onClick={() => setSheetOpen(false)}
                      >
                        <Link href={item.href}>
                          {pathname === item.href && (
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                          )}
                          {item.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                  
                  {/* Quick links */}
                  <div className="mt-8 pt-6 border-t border-border/60">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
                      Quick Links
                    </h4>
                    <div className="space-y-1">
                      <Button
                        asChild
                        variant="ghost"
                        className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-primary/10"
                        onClick={() => setSheetOpen(false)}
                      >
                        <Link href="/visit" className="flex items-center">
                          <ExternalLink className="h-4 w-4 mr-3" />
                          Plan Your Visit
                        </Link>
                      </Button>
                    </div>
                  </div>
                </nav>
                
                {/* Temperature widget in sheet */}
                <div className="p-4 border-t border-border/60">
                  <TemperatureWidget />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
