import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const navItems = [
  { name: "History", href: "/history" },
  { name: "Life", href: "/life" },
  { name: "Research", href: "/research" },
  { name: "Climate", href: "/climate" },
  { name: "Visit", href: "/visit" },
  { name: "Deep Facts", href: "/deep-facts" },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-antarctica');

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <main className="z-10 flex flex-col items-center">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-shadow-lg animate-fade-in-down">
            Antarctica Unveiled
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary/80 animate-fade-in-up delay-200">
            "The land of silence, of white desolation, and of the shimmering, ethereal aurora."
          </p>
          <p className="mt-8 max-w-3xl text-base md:text-lg text-foreground/70 animate-fade-in-up delay-400">
            Explore the most untouched continent on Earth. A journey into the heart of ice and science, revealing the secrets of our planet's past and the keys to its future.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up delay-600">
            {navItems.map((item) => (
              <Button
                key={item.name}
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-primary/50 text-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-blue-glow"
              >
                <Link href={item.href}>
                  {item.name} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
