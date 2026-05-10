"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown, Mountain, Flame, Wind, Snowflake, TreePine, Compass, ArrowRight, BookOpen, Users, Star } from "lucide-react";
import Image from "next/image";
import { places, PlaceHolderImages } from "@/lib/data";
import { useEffect } from "react";

const featuredPlaces = places.slice(0, 5);
const dangerousPlaces = places.filter((place) => place.category === "dangerous");
const extremePlaces = places.filter((place) => place.category === "extreme");

const stats = [
  { icon: Mountain, title: "5+", desc: "Extreme Destinations" },
  { icon: Flame, title: "50+", desc: "Danger Levels Rated" },
  { icon: BookOpen, title: "1000+", desc: "Adventure Stories" },
  { icon: Users, title: "10K+", desc: "Active Explorers" },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-adventure");
  const heroExploration = PlaceHolderImages.find((p) => p.id === "hero-exploration");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10">
          <main className="flex flex-col items-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6 animate-fade-in-down">
              <Compass className="h-4 w-4" />
              <span>World's Most Extreme Destinations</span>
            </div>
            
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight animate-fade-in-down text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-white to-cyan-200 drop-shadow-[0_0_40px_rgba(34,211,238,0.3)]">
              Extreme Explorers
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl text-sky-100/90 italic animate-fade-in-up delay-200 font-light leading-relaxed">
              "The world is a book, and those who do not travel read only one page."
            </p>
            
            <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-muted-foreground animate-fade-in-up delay-400 leading-relaxed">
              Discover the world's most dangerous and breathtaking destinations. 
              From the Amazon Rainforest to Mount Everest, explore places that push 
              human limits. Share your adventures and read deep insights from fellow explorers.
            </p>
            
            <div className="mt-10 md:mt-14 flex flex-wrap justify-center gap-4 animate-fade-in-up delay-600">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-primary/30"
              >
                <Link href="#destinations">
                  Explore Destinations <ChevronDown className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-base font-semibold border-primary/50 text-primary hover:bg-primary/10"
              >
                <Link href="/blog/write">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Write Your Story
                </Link>
              </Button>
            </div>
            
            {/* Quick Stats in Hero */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in-up delay-700">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold text-primary">
                    <stat.icon className="h-6 w-6" />
                    {stat.title}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.desc}</div>
                </div>
              ))}
            </div>
          </main>
        </div>
        
        <a
          href="#destinations"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll to explore"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ChevronDown className="h-6 w-6" />
        </a>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="w-full py-20 md:py-28 px-4 relative z-20 reveal-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              <Mountain className="h-4 w-4" />
              <span>Featured Destinations</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              World's Most Extreme Places
            </h2>
            <div className="w-16 h-1 rounded-full bg-primary mx-auto mt-4" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Explore the most dangerous and beautiful destinations on Earth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPlaces.map((place, index) => {
              const image = PlaceHolderImages.find((p) => p.id === place.imageId);
              return (
                <Link
                  key={place.id}
                  href={`/places/${place.slug}`}
                  className={`group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/60 hover:border-primary/50 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 stagger-${index + 1}`}
                >
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                  
                  {/* Danger Level Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      place.dangerLevel >= 4 ? 'bg-red-500/90 text-white' :
                      place.dangerLevel >= 3 ? 'bg-orange-500/90 text-white' :
                      'bg-yellow-500/90 text-black'
                    }`}>
                      Danger Level: {place.dangerLevel}/5
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      place.category === 'extreme' ? 'bg-purple-500/90 text-white' :
                      place.category === 'dangerous' ? 'bg-red-500/90 text-white' :
                      'bg-blue-500/90 text-white'
                    }`}>
                      {place.category}
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <h3 className="font-headline text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {place.name}
                    </h3>
                    <p className="text-sm text-white/80 mt-2 line-clamp-2">{place.description}</p>
                    <div className="mt-3 flex items-center gap-2 text-primary text-sm font-semibold">
                      <span>Explore</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Writing CTA */}
      <section className="w-full py-20 md:py-28 px-4 relative z-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 reveal-on-scroll">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            <span>Share Your Adventures</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Write Your Story
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mx-auto mt-4" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Have you explored these extreme destinations? Share your experiences, 
            survival tips, and deep insights with our community of adventurers.
          </p>
          
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card/50 border border-border/60 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Write Articles</h3>
              <p className="text-sm text-muted-foreground">Create detailed guides and stories about your adventures</p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 border border-border/60 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Share Experiences</h3>
              <p className="text-sm text-muted-foreground">Connect with fellow explorers and share real-time updates</p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 border border-border/60 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Build Reputation</h3>
              <p className="text-sm text-muted-foreground">Become a trusted source for adventure insights</p>
            </div>
          </div>
          
          <Button asChild size="lg" className="rounded-full px-8 mt-10">
            <Link href="/blog/write">
              Start Writing <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* All Categories */}
      <section className="w-full py-20 md:py-28 px-4 relative z-20 reveal-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Browse by Category
            </h2>
            <div className="w-16 h-1 rounded-full bg-primary mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/places?category=dangerous"
              className="group p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <Flame className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="font-headline text-2xl font-bold text-foreground mb-2 group-hover:text-red-400 transition-colors">
                Dangerous Places
              </h3>
              <p className="text-muted-foreground">
                Explore the world's most hazardous destinations that test human limits
              </p>
            </Link>
            
            <Link
              href="/places?category=extreme"
              className="group p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <Mountain className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="font-headline text-2xl font-bold text-foreground mb-2 group-hover:text-purple-400 transition-colors">
                Extreme Environments
              </h3>
              <p className="text-muted-foreground">
                Discover places with the most extreme conditions on Earth
              </p>
            </Link>
            
            <Link
              href="/places?category=beautiful"
              className="group p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <TreePine className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="font-headline text-2xl font-bold text-foreground mb-2 group-hover:text-green-400 transition-colors">
                Beautiful Wilderness
              </h3>
              <p className="text-muted-foreground">
                Experience breathtaking natural beauty and pristine landscapes
              </p>
            </Link>
          </div>
        </div>
      </section>



    </div>
  );
}
