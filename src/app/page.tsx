import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExploreCard } from "@/components/explore-card";
import { HomeStats } from "@/components/home-stats";
import { ImageGalleryStrip } from "@/components/image-gallery-strip";

const navItems: { name: string; href: string; desc: string; imageId: string }[] = [
  { name: "History", href: "/history", desc: "The heroic age of exploration and treaties.", imageId: "history-exploration" },
  { name: "Life", href: "/life", desc: "How humans survive in extreme isolation.", imageId: "life-research-station" },
  { name: "Research", href: "/research", desc: "Unlocking ancient climate and cosmic secrets.", imageId: "research-scientist" },
  { name: "Climate", href: "/climate", desc: "Earth's largest heat regulator.", imageId: "climate-glacier" },
  { name: "Wildlife", href: "/wildlife", desc: "Penguins, whales, and the fragile food web.", imageId: "wildlife-penguins" },
  { name: "Expedition", href: "/expedition", desc: "Logistics of modern extreme crossings.", imageId: "expedition-team" },
  { name: "Visit", href: "/visit", desc: "The reality of Antarctic tourism.", imageId: "visit-cruise-ship" },
  { name: "Deep Facts", href: "/deep-facts", desc: "Unveiling the hidden truths of the ice.", imageId: "deep-facts" },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-antarctica");

  return (
    <div className="w-full flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10">
          <main className="flex flex-col items-center max-w-4xl mx-auto">
            <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight animate-fade-in-down text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-sky-200 drop-shadow-[0_0_40px_rgba(34,211,238,0.3)]">
              Antarctica Unveiled
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-sky-100/95 italic animate-fade-in-up delay-200 font-light">
              "The land of silence, of white desolation, and of the shimmering,
              ethereal aurora."
            </p>
            <p className="mt-6 md:mt-8 max-w-xl text-sm md:text-lg text-muted-foreground animate-fade-in-up delay-400 leading-relaxed">
              Explore the most untouched continent on Earth. A journey into the
              heart of ice and science, revealing the secrets of our planet's
              past and the keys to its future.
            </p>
            <div className="mt-10 md:mt-14 flex flex-wrap justify-center gap-4 animate-fade-in-up delay-600">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-primary/30"
              >
                <Link href="#explore">
                  Begin Journey <ChevronDown className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <a
              href="#explore"
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors animate-bounce"
              aria-label="Scroll to explore"
            >
              <span className="text-xs uppercase tracking-widest">Explore</span>
              <ChevronDown className="h-6 w-6" />
            </a>
          </main>
        </div>
      </section>

      {/* Stats strip - interactive feel */}
      <HomeStats />

      {/* Explore Grid - image cards */}
      <section id="explore" className="w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-14">
          <div className="text-center flex flex-col items-center gap-3">
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Discover the Continent
            </h2>
            <div className="w-16 h-1 rounded-full bg-primary" />
            <p className="text-muted-foreground max-w-xl text-base md:text-lg">
              Delve into guides detailing every aspect of the world's most extreme environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {navItems.map((item) => (
              <ExploreCard
                key={item.name}
                name={item.name}
                href={item.href}
                desc={item.desc}
                image={PlaceHolderImages.find((p) => p.id === item.imageId) ?? null}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image gallery strip */}
      <ImageGalleryStrip />
    </div>
  );
}
