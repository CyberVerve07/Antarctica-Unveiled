"use client";

import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink } from "lucide-react";

const galleryIds = [
  "wildlife-penguins",
  "wildlife-penguin-colony",
  "climate-glacier",
  "landscape-iceberg",
  "visit-cruise-ship",
  "research-scientist",
  "expedition-team",
  "hero-aurora",
  "landscape-mountains",
  "wildlife-whale"
] as const;

const idToHref: Record<string, string> = {
  "wildlife-penguins": "/wildlife",
  "wildlife-penguin-colony": "/wildlife",
  "climate-glacier": "/climate",
  "landscape-iceberg": "/climate",
  "visit-cruise-ship": "/visit",
  "research-scientist": "/research",
  "expedition-team": "/expedition",
  "hero-aurora": "/deep-facts",
  "landscape-mountains": "/deep-facts",
  "wildlife-whale": "/wildlife",
};

export function ImageGalleryStrip() {
  const images = galleryIds
    .map((id) => PlaceHolderImages.find((p) => p.id === id))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <section className="w-full py-20 md:py-28 px-4 relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            <ExternalLink className="h-4 w-4" />
            <span>Gallery</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            A Glimpse of the Ice
          </h2>
          <p className="text-muted-foreground mt-3 text-base md:text-lg max-w-2xl mx-auto">
            Immerse yourself in the breathtaking beauty of the frozen continent
          </p>
        </div>
        
        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {images.map((img, i) => (
            <Link
              key={img.id}
              href={idToHref[img.id] ?? "/"}
              className={`group relative rounded-xl overflow-hidden border border-border/60 hover:border-primary/50 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                i === 0 || i === 5 ? 'md:row-span-2 md:aspect-[3/4]' : 'aspect-[3/4]'
              }`}
            >
              <Image
                src={img.imageUrl}
                alt={img.description}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
                {img.description}
              </span>
              
              {/* Hover overlay with link indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                  <ExternalLink className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm">
            Hover to zoom · Click any image to explore
          </p>
        </div>
      </div>
    </section>
  );
}
