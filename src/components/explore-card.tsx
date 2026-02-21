"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

type ExploreCardProps = {
  name: string;
  href: string;
  desc: string;
  image: ImagePlaceholder | null;
};

export function ExploreCard({ name, href, desc, image }: ExploreCardProps) {
  return (
    <Link href={href} className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl">
      <article className="h-full rounded-2xl overflow-hidden border border-border/80 bg-card/80 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 active:translate-y-0">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          {image ? (
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-white drop-shadow-lg group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-white/85 mt-1 line-clamp-2 group-hover:text-white/95 transition-colors">
              {desc}
            </p>
            <span className="inline-flex items-center mt-3 text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200">
              Explore <ArrowRight className="ml-1.5 h-4 w-4" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
