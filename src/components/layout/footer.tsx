import Link from "next/link";
import { MountainSnow, Mail, MapPin, ExternalLink, Github } from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "All Places", href: "/places" },
      { name: "Dangerous", href: "/places?category=dangerous" },
      { name: "Extreme", href: "/places?category=extreme" },
      { name: "Beautiful", href: "/places?category=beautiful" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Write Story", href: "/blog/write" },
      { name: "About", href: "/about" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Survival Tips", href: "/places" },
      { name: "Equipment Guide", href: "/places" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border/60 bg-card/40 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold mb-4 group">
              <div className="relative">
                <MountainSnow className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all" />
              </div>
              <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent tracking-tighter">
                ANTARCTICA <span className="text-foreground/90 font-light text-lg">UNVEILED</span>
              </span>
            </Link>
            <p className="text-muted-foreground/80 text-sm md:text-base leading-relaxed mb-8 max-w-sm font-body">
              A high-precision exploration interface dedicated to documenting the most extreme and breathtaking sectors of the frozen continent. 
              Join the mission, share tactical data, and survive the edge.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer group">
                <div className="p-2 rounded-md bg-primary/5 border border-primary/10 group-hover:border-primary/30">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="font-mono">SECTOR-721-ANTARCTICA</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-secondary transition-colors cursor-pointer group">
                <div className="p-2 rounded-md bg-secondary/5 border border-secondary/10 group-hover:border-secondary/30">
                  <Mail className="h-4 w-4 text-secondary" />
                </div>
                <span className="font-mono">COMMS@ANTARCTICA-UNVEILED.COM</span>
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
