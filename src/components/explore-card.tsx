"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

type ExploreCardProps = {
  name: string;
  href: string;
  desc: string;
  image: ImagePlaceholder | null;
};

export function ExploreCard({ name, href, desc, image }: ExploreCardProps) {
  return (
    <Link 
      href={href} 
      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
    >
      <article className="h-full rounded-2xl overflow-hidden border border-border/80 bg-card/80 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 active:translate-y-0">
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
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
          
          {/* Icon indicator */}
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-white drop-shadow-lg group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-white/85 mt-2 line-clamp-2 group-hover:text-white/95 transition-colors leading-relaxed">
              {desc}
            </p>
            <span className="inline-flex items-center mt-4 text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-200">
              <span>Explore</span>
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
