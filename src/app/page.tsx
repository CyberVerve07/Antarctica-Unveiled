import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown, Snowflake, Mountain, ThermometerSnowflake, Wind, Droplets, PawPrint, Ship, Compass, Calendar, ArrowRight } from "lucide-react";
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

const wildlifeItems = [
  { name: "Emperor Penguins", desc: "The iconic emperors of the ice", imageId: "wildlife-penguins", href: "/wildlife" },
  { name: "Humpback Whales", desc: "Gentle giants of the Southern Ocean", imageId: "wildlife-whale", href: "/wildlife" },
  { name: "Weddell Seals", desc: "The southernmost mammal on Earth", imageId: "wildlife-seal", href: "/wildlife" },
  { name: "Albatross", desc: "Masters of the open ocean", imageId: "wildlife-albatross", href: "/wildlife" },
];

const facts = [
  { icon: Snowflake, title: "98%", desc: "of Antarctica is covered in ice" },
  { icon: Droplets, title: "70%", desc: "of Earth's fresh water" },
  { icon: ThermometerSnowflake, title: "-89.2°C", desc: "Coldest temperature recorded" },
  { icon: Wind, title: "200+ mph", desc: "Strongest winds on Earth" },
  { icon: Mountain, title: "2,800m", desc: "Average ice sheet elevation" },
  { icon: PawPrint, title: "0", desc: "No permanent human residents" },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-antarctica");
  const heroAurora = PlaceHolderImages.find((p) => p.id === "hero-aurora");

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
        
        {/* Animated Aurora overlay */}
        {heroAurora && (
          <div className="absolute inset-0 opacity-30">
            <Image
              src={heroAurora.imageUrl}
              alt="Aurora Australis"
              fill
              className="object-cover animate-pulse"
              sizes="100vw"
            />
          </div>
        )}
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10">
          <main className="flex flex-col items-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6 animate-fade-in-down">
              <Snowflake className="h-4 w-4" />
              <span>The Seventh Continent</span>
            </div>
            
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight animate-fade-in-down text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-sky-200 drop-shadow-[0_0_40px_rgba(34,211,238,0.3)]">
              Antarctica Unveiled
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl text-sky-100/90 italic animate-fade-in-up delay-200 font-light leading-relaxed">
              "The land of silence, of white desolation, and of the shimmering,
              ethereal aurora."
            </p>
            
            <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-muted-foreground animate-fade-in-up delay-400 leading-relaxed">
              Journey into the heart of Earth's most extreme continent. Discover 
              pristine wilderness, witness incredible wildlife, and explore the 
              scientific mysteries that lie beneath miles of ice.
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
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-base font-semibold border-primary/50 text-primary hover:bg-primary/10"
              >
                <Link href="/visit">
                  Plan Your Visit
                </Link>
              </Button>
            </div>
            
            {/* Quick Stats in Hero */}
            <div className="mt-16 grid grid-cols-3 gap-8 text-center animate-fade-in-up delay-700">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">14M km²</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Surface Area</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">-60°C</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Winter Average</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">0</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Native Residents</div>
              </div>
            </div>
          </main>
        </div>
        
        <a
          href="#explore"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll to explore"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ChevronDown className="h-6 w-6" />
        </a>
      </section>

      {/* Stats strip - interactive feel */}
      <HomeStats />

      {/* Quick Facts Section */}
      <section className="w-full py-16 md:py-20 px-4 relative z-20 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Antarctica by the Numbers
            </h2>
            <div className="w-16 h-1 rounded-full bg-primary mx-auto mt-4" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Fascinating facts about the least explored continent on Earth
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-border/60 bg-card/40 hover:border-primary/50 hover:bg-card/60 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/15 text-primary group-hover:bg-primary/25 group-hover:scale-110 transition-all duration-300">
                  <fact.icon className="h-6 w-6" />
                </div>
                <div className="font-headline text-xl md:text-2xl font-bold text-foreground mt-3 group-hover:text-primary transition-colors">
                  {fact.title}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{fact.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife Showcase */}
      <section className="w-full py-16 md:py-24 px-4 relative z-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                <PawPrint className="h-4 w-4" />
                <span>Wildlife</span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Iconic Antarctic Wildlife
              </h2>
              <div className="w-16 h-1 rounded-full bg-primary mt-4" />
              <p className="text-muted-foreground mt-4 max-w-xl">
                Discover the remarkable creatures that call this frozen continent home
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full border-primary/50 text-primary hover:bg-primary/10">
              <Link href="/wildlife">
                View All Wildlife <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {wildlifeItems.map((item) => {
              const image = PlaceHolderImages.find((p) => p.id === item.imageId);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative aspect-square rounded-2xl overflow-hidden border border-border/60 hover:border-primary/50 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2"
                >
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <h3 className="font-headline text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-white/80 mt-1">{item.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore Grid - image cards */}
      <section id="explore" className="w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-14">
          <div className="text-center flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
              <Compass className="h-4 w-4" />
              <span>Explore</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Discover the Continent
            </h2>
            <div className="w-16 h-1 rounded-full bg-primary" />
            <p className="text-muted-foreground max-w-xl text-base md:text-lg">
              Delve into guides detailing every aspect of the world's most extreme environment
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

      {/* Expedition & Tourism Section */}
      <section className="w-full py-16 md:py-24 px-4 relative z-20 bg-gradient-to-b from-card/30 via-transparent to-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/60">
              {PlaceHolderImages.find((p) => p.id === "expedition-ski") && (
                <Image
                  src={PlaceHolderImages.find((p) => p.id === "expedition-ski")!.imageUrl}
                  alt="Antarctic Expedition"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
                  <Ship className="h-4 w-4" />
                  <span>Expedition</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground">
                  Experience the Ice
                </h2>
                <div className="w-16 h-1 rounded-full bg-primary mt-4" />
              </div>
              
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                From luxury cruise ships to scientific expeditions, Antarctica offers 
                once-in-a-lifetime experiences for adventurers and researchers alike. 
                Explore the frozen frontier while contributing to conservation efforts.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/60">
                  <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">Nov - Mar</div>
                    <div className="text-sm text-muted-foreground">Best season to visit</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/60">
                  <Ship className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">50,000+</div>
                    <div className="text-sm text-muted-foreground">Annual visitors</div>
                  </div>
                </div>
              </div>
              
              <Button asChild className="rounded-full px-6 mt-2 w-fit">
                <Link href="/visit">
                  Plan Your Adventure <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image gallery strip */}
      <ImageGalleryStrip />
    </div>
  );
}
