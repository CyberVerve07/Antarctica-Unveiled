import Link from "next/link";
import { MountainSnow, Mail, MapPin, ExternalLink, Github } from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "History", href: "/history" },
      { name: "Wildlife", href: "/wildlife" },
      { name: "Climate", href: "/climate" },
      { name: "Research", href: "/research" },
    ],
  },
  {
    title: "Visit",
    links: [
      { name: "Plan Your Trip", href: "/visit" },
      { name: "Expedition", href: "/expedition" },
      { name: "Research Stations", href: "/life" },
    ],
  },
  {
    title: "Learn",
    links: [
      { name: "Deep Facts", href: "/deep-facts" },
      { name: "Life at Stations", href: "/life" },
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
            <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold mb-4">
              <div className="relative">
                <MountainSnow className="h-8 w-8 text-primary" />
                <div className="absolute inset-0 bg-primary/20 blur-xl" />
              </div>
              <span className="bg-gradient-to-r from-primary to-cyan-200 bg-clip-text text-transparent">
                Antarctica Unveiled
              </span>
            </Link>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-sm">
              An immersive journey into the coldest, driest, windiest, and highest 
              continent on Earth. Discover the secrets of our planet's past and 
              the challenges of its future.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Antarctica</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@antarcticaunveiled.com</span>
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
              <span>© {new Date().getFullYear()} Antarctica Unveiled. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
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
