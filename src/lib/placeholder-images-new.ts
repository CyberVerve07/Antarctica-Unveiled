export interface ImagePlaceholder {
  id: string;
  imageUrl: string;
  description: string;
  imageHint?: string;
}

export const PlaceHolderImages: ImagePlaceholder[] = [
  {
    id: "amazon-river",
    imageUrl: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
    description: "Amazon River winding through the rainforest",
    imageHint: "Aerial view of Amazon River with green rainforest on both sides"
  },
  {
    id: "amazon-jungle",
    imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
    description: "Dense Amazon jungle canopy",
    imageHint: "Thick green jungle canopy with sunlight filtering through"
  },
  {
    id: "amazon-wildlife",
    imageUrl: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&q=80",
    description: "Amazon wildlife - jaguar in the wild",
    imageHint: "Jaguars and other wildlife in their natural habitat"
  },
  {
    id: "amazon-river-dolphin",
    imageUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80",
    description: "Pink river dolphin in Amazon",
    imageHint: "Pink river dolphin swimming in Amazon River"
  },
  {
    id: "sahara-dunes",
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80",
    description: "Golden sand dunes of Sahara Desert",
    imageHint: "Vast golden sand dunes under blue sky"
  },
  {
    id: "sahara-oasis",
    imageUrl: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80",
    description: "Desert oasis with palm trees",
    imageHint: "Green oasis surrounded by golden sand dunes"
  },
  {
    id: "sahara-camels",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    description: "Camel caravan in Sahara",
    imageHint: "Line of camels trekking across desert dunes"
  },
  {
    id: "sahara-night",
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
    description: "Starry night sky over Sahara",
    imageHint: "Milky Way galaxy visible over desert landscape"
  },
  {
    id: "everest-summit",
    imageUrl: "https://images.unsplash.com/photo-1574735765780-aca0c7a0a9ea?w=800&q=80",
    description: "Mount Everest summit view",
    imageHint: "Snowy peak of Mount Everest with blue sky"
  },
  {
    id: "everest-base-camp",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    description: "Mount Everest base camp",
    imageHint: "Tents at Everest base camp with mountain backdrop"
  },
  {
    id: "everest-climbers",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    description: "Climbers on Mount Everest",
    imageHint: "Mountaineers climbing snowy mountain ridge"
  },
  {
    id: "everest-himalayas",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description: "Himalayan mountain range",
    imageHint: "Panoramic view of Himalayan peaks at sunset"
  },
  {
    id: "antarctica-ice",
    imageUrl: "https://www.bwallpaperhd.com/wp-content/uploads/2022/12/AntarcticaDay.jpg",
    description: "Antarctic ice landscape",
    imageHint: "Vast white ice sheet with blue ice formations"
  },
  {
    id: "antarctica-penguins",
    imageUrl: "https://www.bwallpaperhd.com/wp-content/uploads/2022/12/AntarcticaDay.jpg",
    description: "Emperor penguins in Antarctica",
    imageHint: "Colony of emperor penguins on ice"
  },
  {
    id: "antarctica-aurora",
    imageUrl: "https://www.bwallpaperhd.com/wp-content/uploads/2022/12/AntarcticaDay.jpg",
    description: "Aurora Australis over Antarctica",
    imageHint: "Southern Lights dancing over Antarctic landscape"
  },
  {
    id: "antarctica-station",
    imageUrl: "https://www.bwallpaperhd.com/wp-content/uploads/2022/12/AntarcticaDay.jpg",
    description: "Research station in Antarctica",
    imageHint: "Scientific research station in snowy landscape"
  },
  {
    id: "death-valley-dunes",
    imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    description: "Mesquite Flat Sand Dunes",
    imageHint: "Wind-sculpted sand dunes in Death Valley"
  },
  {
    id: "death-valley-badwater",
    imageUrl: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
    description: "Badwater Basin salt flats",
    imageHint: "Salt flats reflecting mountains at sunrise"
  },
  {
    id: "death-valley-zabriskie",
    imageUrl: "https://images.unsplash.com/photo-1509023464722-18d996c3e3a5?w=800&q=80",
    description: "Zabriskie Point viewpoint",
    imageHint: "Colorful badlands landscape at sunrise"
  },
  {
    id: "death-valley-night",
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    description: "Death Valley night sky",
    imageHint: "Star filled sky over desert mountains"
  },
  // Hero images
  {
    id: "hero-adventure",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    description: "Mountain adventure landscape",
    imageHint: "Dramatic mountain landscape with clouds"
  },
  {
    id: "hero-exploration",
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&q=80",
    description: "Explorer in wilderness",
    imageHint: "Person standing on mountain peak looking at horizon"
  },
  // Blog related
  {
    id: "blog-writing",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    description: "Writing blog post",
    imageHint: "Person writing on laptop in natural setting"
  },
  {
    id: "blog-travel",
    imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    description: "Travel photography",
    imageHint: "Camera and travel accessories"
  }
];
