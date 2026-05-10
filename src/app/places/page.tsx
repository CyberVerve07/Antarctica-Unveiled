import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mountain, Flame, TreePine, ArrowRight } from "lucide-react";
import { places, PlaceHolderImages } from "@/lib/data";

export default function PlacesPage() {
  const dangerousPlaces = places.filter((place) => place.category === "dangerous");
  const extremePlaces = places.filter((place) => place.category === "extreme");
  const beautifulPlaces = places.filter((place) => place.category === "beautiful");

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 px-4 bg-gradient-to-b from-primary/10 via-transparent to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-4">
            All Destinations
          </h1>
          <div className="w-16 h-1 rounded-full bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our complete collection of the world's most dangerous, extreme, and beautiful destinations
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="w-full py-8 px-4 border-b border-border/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" className="gap-2">
              <Mountain className="h-4 w-4" />
              All Places
            </Button>
            <Button variant="outline" className="gap-2">
              <Flame className="h-4 w-4" />
              Dangerous
            </Button>
            <Button variant="outline" className="gap-2">
              <Mountain className="h-4 w-4" />
              Extreme
            </Button>
            <Button variant="outline" className="gap-2">
              <TreePine className="h-4 w-4" />
              Beautiful
            </Button>
          </div>
        </div>
      </section>

      {/* All Places Grid */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map((place, index) => {
              const image = PlaceHolderImages.find((p) => p.id === place.imageId);
              return (
                <Link
                  key={place.id}
                  href={`/places/${place.slug}`}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/60 hover:border-primary/50 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2"
                >
                  {image && (
                    <img
                      src={image.imageUrl}
                      alt={image.description}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
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

      {/* Category Sections */}
      {dangerousPlaces.length > 0 && (
        <section className="w-full py-16 px-4 bg-gradient-to-r from-red-500/5 to-orange-500/5">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Flame className="h-6 w-6 text-red-500" />
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground">
                Dangerous Places
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dangerousPlaces.map((place) => {
                const image = PlaceHolderImages.find((p) => p.id === place.imageId);
                return (
                  <Link
                    key={place.id}
                    href={`/places/${place.slug}`}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-red-500/30 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2"
                  >
                    {image && (
                      <img
                        src={image.imageUrl}
                        alt={image.description}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <h3 className="font-headline text-lg font-bold text-white">{place.name}</h3>
                      <p className="text-sm text-white/80 mt-1 line-clamp-2">{place.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {extremePlaces.length > 0 && (
        <section className="w-full py-16 px-4 bg-gradient-to-r from-purple-500/5 to-blue-500/5">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Mountain className="h-6 w-6 text-purple-500" />
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground">
                Extreme Environments
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {extremePlaces.map((place) => {
                const image = PlaceHolderImages.find((p) => p.id === place.imageId);
                return (
                  <Link
                    key={place.id}
                    href={`/places/${place.slug}`}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
                  >
                    {image && (
                      <img
                        src={image.imageUrl}
                        alt={image.description}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <h3 className="font-headline text-lg font-bold text-white">{place.name}</h3>
                      <p className="text-sm text-white/80 mt-1 line-clamp-2">{place.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
