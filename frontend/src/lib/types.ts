// Types and interfaces for the Extreme Explorers platform

export interface Place {
  id: string;
  name: string;
  slug: string;
  description: string;
  fullDescription: string;
  category: "dangerous" | "beautiful" | "extreme";
  dangerLevel: 1 | 2 | 3 | 4 | 5;
  location: string;
  coordinates: { lat: number; lng: number };
  climate: string;
  bestTimeToVisit: string;
  dangers: string[];
  highlights: string[];
  interestingFacts: string[];
  imageId: string;
  galleryImages: string[];
  survivalTips: string[];
  equipmentNeeded: string[];
  famousExpeditions: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  place: string;
  placeSlug: string;
  readTime: string;
  image: string;
  images?: string[];
  content: string;
}

export interface ImagePlaceholder {
  id: string;
  imageUrl: string;
  description: string;
  imageHint: string;
}
