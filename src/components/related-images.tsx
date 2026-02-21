"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const slugToExtraIds: Record<string, string[]> = {
  history: ["expedition-team", "life-research-station"],
  life: ["research-scientist", "mcmurdo-station"],
  research: ["life-research-station", "concordia-station"],
  climate: ["deep-facts", "expedition-team"],
  wildlife: ["wildlife-penguins", "visit-cruise-ship"],
  visit: ["visit-cruise-ship", "wildlife-penguins"],
  expedition: ["expedition-team", "vostok-station"],
  "deep-facts": ["climate-glacier", "research-scientist"],
};

type RelatedImagesProps = { slug: string; mainImageId: string };

export function RelatedImages({ slug, mainImageId }: RelatedImagesProps) {
  const extraIds = slugToExtraIds[slug];
  const ids = [mainImageId, ...(extraIds ?? [])].slice(0, 3);
  const images = ids
    .map((id) => PlaceHolderImages.find((p) => p.id === id))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  if (images.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-border/60">
      <h3 className="font-headline text-xl font-bold text-foreground mb-6">
        Related visuals
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-border/60 bg-muted hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
          >
            <Image
              src={img.imageUrl}
              alt={img.description}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <p className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">
              {img.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
