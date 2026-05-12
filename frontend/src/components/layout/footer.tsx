import Link from "next/link";
import { DecryptText } from "@/components/ui/decrypt-text";
import { motion } from "framer-motion";
import { 
  MountainSnow, 
  MapPin, 
  Mail, 
  ExternalLink, 
  Github 
} from "lucide-react";

const footerLinks = [
  {
    title: "Sectors",
    links: [
      { name: "Global Map", href: "/places" },
      { name: "Risk Assessment", href: "/places?category=dangerous" },
      { name: "Extreme Zones", href: "/places?category=extreme" },
      { name: "Safe Havens", href: "/places?category=beautiful" },
    ],
  },
  {
    title: "Network",
    links: [
      { name: "Intelligence Feed", href: "/blog" },
      { name: "Field Reporting", href: "/blog/write" },
      { name: "Operational Protocol", href: "/about" },
    ],
  },
  {
    title: "Intelligence",
    links: [
      { name: "Survival Logic", href: "/places" },
      { name: "Tactical Gear", href: "/places" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-primary/20 bg-[#020617]/80 backdrop-blur-xl mt-auto relative overflow-hidden">
      {/* Noise Grain Effect */}
      <div className="absolute inset-0 noise-overlay opacity-[0.05] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="h-12 w-12 glass border border-primary/40 rounded-xl flex items-center justify-center relative z-10 overflow-hidden shadow-[0_0_20px_rgba(14,165,233,0.2)]">
                  <MountainSnow className="h-7 w-7 text-primary group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-primary/20 blur-2xl group-hover:bg-primary/40 transition-all scale-150" />
              </div>
              <div className="flex flex-col">
                <span className="text-white tracking-[0.2em] leading-none text-lg font-black flex items-center gap-1 uppercase">
                  <DecryptText text="ANTARCTICA" delay={0.2} />
                </span>
                <span className="text-primary/80 font-light text-xs tracking-[0.4em] uppercase mt-1">
                  UNVEILED
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground/60 text-sm md:text-base leading-relaxed max-w-sm font-light font-mono">
              [DECRYPTED_LOGS]: High-precision exploration interface dedicated to documenting extreme sectors. 
              Join the mission, share tactical data, and survive the edge.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-[10px] text-primary/70 hover:text-primary transition-colors cursor-pointer group font-mono tracking-widest uppercase">
                <div className="p-2 rounded-lg bg-primary/5 border border-primary/10 group-hover:border-primary/30 shadow-inner">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>LOC: SECTOR-721-ANTARCTICA</span>
              </div>
              <div className="flex items-center gap-4 text-[10px] text-secondary/70 hover:text-secondary transition-colors cursor-pointer group font-mono tracking-widest uppercase">
                <div className="p-2 rounded-lg bg-secondary/5 border border-secondary/10 group-hover:border-secondary/30 shadow-inner">
                  <Mail className="h-4 w-4" />
                </div>
                <span>COMMS: UPLINK_SECURE_@ANTARCTICA-UNVEILED.COM</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-foreground mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Extreme Explorers. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1">
                Mission Protocol
              </Link>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1">
                Data Sovereignty
              </Link>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span className="font-mono">SOURCE-CODE</span>
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center md:text-left text-xs text-muted-foreground/60">
            <p>This is an educational project. All images are from Unsplash and used for demonstration purposes.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
