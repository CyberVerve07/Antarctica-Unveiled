"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MountainSnow, X, ExternalLink, MapPin } from "lucide-react";
import TemperatureWidget from "@/components/ui/temperature-widget";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "History", href: "/history" },
  { name: "Life", href: "/life" },
  { name: "Research", href: "/research" },
  { name: "Climate", href: "/climate" },
  { name: "Wildlife", href: "/wildlife" },
  { name: "Expedition", href: "/expedition" },
  { name: "Visit", href: "/visit" },
  { name: "Deep Facts", href: "/deep-facts" },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40 shadow-lg shadow-black/20">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-lg md:text-xl font-bold group">
          <div className="relative">
            <MountainSnow className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="bg-gradient-to-r from-primary to-cyan-200 bg-clip-text text-transparent">
            Antarctica Unveiled
          </span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.slice(1).map((item) => (
            <Button
              key={item.name}
              asChild
              variant="ghost"
              size="sm"
              className={cn(
                "text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-200 text-sm font-medium px-3",
                pathname === item.href && "text-primary bg-primary/10 font-semibold"
              )}
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </nav>
        
        <div className="hidden lg:block">
          <TemperatureWidget />
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
                  <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold" onClick={() => setSheetOpen(false)}>
                    <MountainSnow className="h-6 w-6 text-primary" />
                    <span className="bg-gradient-to-r from-primary to-cyan-200 bg-clip-text text-transparent">
                      Antarctica
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
