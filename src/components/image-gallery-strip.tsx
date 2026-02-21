"use client";

import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const galleryIds = ["wildlife-penguins", "climate-glacier", "visit-cruise-ship", "research-scientist", "expedition-team"] as const;

const idToHref: Record<string, string> = {
  "wildlife-penguins": "/wildlife",
  "climate-glacier": "/climate",
  "visit-cruise-ship": "/visit",
  "research-scientist": "/research",
  "expedition-team": "/expedition",
};

export function ImageGalleryStrip() {
  const images = galleryIds
    .map((id) => PlaceHolderImages.find((p) => p.id === id))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <section className="w-full py-16 md:py-24 px-4 relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            A Glimpse of the Ice
          </h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Hover to zoom · Click to explore
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {images.map((img, i) => (
            <Link
              key={img.id}
              href={idToHref[img.id] ?? "/"}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-border/60 hover:border-primary/50 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Image
                src={img.imageUrl}
                alt={img.description}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
                {img.description}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
