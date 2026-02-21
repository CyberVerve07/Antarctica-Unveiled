"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MountainSnow } from "lucide-react";
import TemperatureWidget from "@/components/ui/temperature-widget";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "History", href: "/history" },
  { name: "Life", href: "/life" },
  { name: "Research", href: "/research" },
  { name: "Climate", href: "/climate" },
  { name: "Visit", href: "/visit" },
  { name: "Deep Facts", href: "/deep-facts" },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
          <MountainSnow className="h-7 w-7 text-primary" />
          <span>Antarctica Unveiled</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.slice(1).map((item) => (
            <Button
              key={item.name}
              asChild
              variant="link"
              className={cn(
                "text-foreground/70 hover:text-primary transition-colors duration-300 text-base",
                pathname === item.href && "text-primary font-semibold"
              )}
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
          <TemperatureWidget />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card w-[250px] sm:w-[300px]">
              <div className="p-6">
                 <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold mb-8">
                    <MountainSnow className="h-6 w-6 text-primary" />
                    <span>Antarctica Unveiled</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Button
                      key={item.name}
                      asChild
                      variant="ghost"
                      className={cn(
                        "justify-start text-lg",
                        pathname === item.href && "bg-accent text-accent-foreground"
                      )}
                      onClick={() => setSheetOpen(false)}
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </Button>
                  ))}
                </nav>
                 <div className="mt-8">
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