import Link from "next/link";
import { MountainSnow } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/60 bg-card/30 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-2 font-headline text-lg font-bold text-foreground">
            <MountainSnow className="h-6 w-6 text-primary" />
            <span>Antarctica Unveiled</span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/history" className="text-muted-foreground hover:text-primary transition-colors">History</Link>
            <Link href="/climate" className="text-muted-foreground hover:text-primary transition-colors">Climate</Link>
            <Link href="/visit" className="text-muted-foreground hover:text-primary transition-colors">Visit</Link>
            <Link href="/deep-facts" className="text-muted-foreground hover:text-primary transition-colors">Deep Facts</Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Antarctica Unveiled. All rights reserved.</p>
          <p className="mt-1">An educational project exploring the wonders of the southern continent.</p>
        </div>
      </div>
    </footer>
  );
}
