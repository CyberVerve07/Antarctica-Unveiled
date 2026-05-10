import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Flame, AlertTriangle, BookOpen, Users, Star } from "lucide-react";
import { places, getPlaceBySlug, PlaceHolderImages } from "@/lib/data";

export async function generateStaticParams() {
  return places.map((place) => ({
    slug: place.slug,
  }));
}

export default function PlacePage({ params }: { params: { slug: string } }) {
  const place = getPlaceBySlug(params.slug);

  if (!place) {
    notFound();
  }

  const heroImage = PlaceHolderImages.find((p) => p.id === place.imageId);
  const galleryImages = place.galleryImages
    .map((id) => PlaceHolderImages.find((p) => p.id === id))
    .filter((img): img is NonNullable<typeof img> => Boolean(img));

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Destinations</span>
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                place.category === 'extreme' ? 'bg-purple-500/90 text-white' :
                place.category === 'dangerous' ? 'bg-red-500/90 text-white' :
                'bg-blue-500/90 text-white'
              }`}>
                {place.category}
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                place.dangerLevel >= 4 ? 'bg-red-500/90 text-white' :
                place.dangerLevel >= 3 ? 'bg-orange-500/90 text-white' :
                'bg-yellow-500/90 text-black'
              }`}>
                Danger Level: {place.dangerLevel}/5
              </div>
            </div>
            
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              {place.name}
            </h1>
            <p className="text-white/90 mt-2 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              {place.location}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-4">
                About {place.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {place.fullDescription}
              </p>
            </div>
            
            <div className="md:w-80 space-y-4">
              <div className="p-4 rounded-xl bg-card/50 border border-border/60">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Flame className="h-4 w-4" />
                  <span className="text-sm font-medium">Climate</span>
                </div>
                <p className="text-foreground">{place.climate}</p>
              </div>
              
              <div className="p-4 rounded-xl bg-card/50 border border-border/60">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">Best Time to Visit</span>
                </div>
                <p className="text-foreground">{place.bestTimeToVisit}</p>
              </div>
              
              <div className="p-4 rounded-xl bg-card/50 border border-border/60">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm font-medium">Danger Level</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`h-2 flex-1 rounded-full ${
                        level <= place.dangerLevel ? 'bg-red-500' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dangers */}
        <section className="mb-16">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            Dangers & Risks
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {place.dangers.map((danger, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 hover:border-red-500/50 transition-colors"
              >
                <p className="text-foreground flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  {danger}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-16">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Star className="h-6 w-6 text-yellow-500" />
            Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {place.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 hover:border-yellow-500/50 transition-colors"
              >
                <p className="text-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interesting Facts */}
        <section className="mb-16">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-blue-500" />
            Interesting Facts
          </h2>
          <div className="space-y-3">
            {place.interestingFacts.map((fact, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 hover:border-blue-500/50 transition-colors"
              >
                <p className="text-foreground">{fact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Survival Tips */}
        <section className="mb-16">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-green-500" />
            Survival Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {place.survivalTips.map((tip, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 hover:border-green-500/50 transition-colors"
              >
                <p className="text-foreground flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Equipment Needed */}
        <section className="mb-16">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Users className="h-6 w-6 text-purple-500" />
            Equipment Needed
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {place.equipmentNeeded.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 hover:border-purple-500/50 transition-colors"
              >
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        {galleryImages.length > 0 && (
          <section className="mb-16">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-6">
              Photo Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-xl overflow-hidden border border-border/60"
                >
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Famous Expeditions */}
        {place.famousExpeditions.length > 0 && (
          <section className="mb-16">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-6">
              Famous Expeditions
            </h2>
            <div className="space-y-3">
              {place.famousExpeditions.map((expedition, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-card/50 border border-border/60"
                >
                  <p className="text-foreground">{expedition}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Share Your Experience CTA */}
        <section className="mb-16">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 text-center">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-4">
              Share Your Experience
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Have you visited {place.name}? Share your adventure, survival tips, and deep insights with our community of explorers.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href={`/blog/write?place=${place.slug}`}>
                <BookOpen className="mr-2 h-5 w-5" />
                Write Your Story
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
