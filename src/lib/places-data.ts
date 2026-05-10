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

export const places: Place[] = [
  {
    id: "amazon-rainforest",
    name: "Amazon Rainforest",
    slug: "amazon-rainforest",
    description: "The world's largest tropical rainforest, spanning 9 countries in South America.",
    fullDescription: "The Amazon Rainforest, often called the 'Lungs of the Earth,' covers over 5.5 million square kilometers across Brazil, Peru, Colombia, and other South American nations. This immense jungle houses 10% of all known species, including 40,000 plant species, 3,000 fish species, and 370 types of reptiles. The Amazon River alone discharges more water than any other river in the world.",
    category: "dangerous",
    dangerLevel: 4,
    location: "South America (9 countries)",
    coordinates: { lat: -3.4653, lng: -62.2159 },
    climate: "Tropical rainforest - hot and humid year-round (26-27°C average)",
    bestTimeToVisit: "June to November (dry season)",
    dangers: [
      "Venomous snakes (fer-de-lance, bushmaster)",
      "Predatory animals (jaguars, caimans, anacondas)",
      "Disease-carrying insects (malaria mosquitoes, bullet ants)",
      "Flash floods and river currents",
      "Getting lost in dense vegetation",
      "Poisonous plants and fungi"
    ],
    highlights: [
      "Meeting indigenous tribes",
      "Pink river dolphins in the Amazon River",
      "Canopy walkway tours",
      "Night wildlife spotting",
      "Piranha fishing expeditions"
    ],
    interestingFacts: [
      "The Amazon produces 20% of the world's oxygen",
      "1 in 10 known species lives in the Amazon",
      "The rainforest is home to uncontacted tribes",
      "Some trees reach over 70 meters tall",
      "The Amazon River has over 3,000 fish species"
    ],
    imageId: "amazon-river",
    galleryImages: ["amazon-jungle", "amazon-wildlife", "amazon-river-dolphin"],
    survivalTips: [
      "Always travel with experienced guides",
      "Wear protective clothing and insect repellent",
      "Carry purification tablets for water",
      "Learn to identify dangerous plants and animals",
      "Stay on marked trails"
    ],
    equipmentNeeded: [
      "Heavy-duty hiking boots",
      "Waterproof clothing",
      "Insect repellent (DEET)",
      "First aid kit with antivenom",
      "GPS device and satellite phone",
      "Water purification system"
    ],
    famousExpeditions: [
      "Percy Fawcett's mysterious disappearance (1925)",
      "Ted Roosevelt's River of Doubt expedition (1914)",
      "Modern scientific expeditions documenting new species"
    ]
  },
  {
    id: "sahara-desert",
    name: "Sahara Desert",
    slug: "sahara-desert",
    description: "The world's largest hot desert, covering most of Northern Africa.",
    fullDescription: "The Sahara Desert spans 9.2 million square kilometers across 11 countries, making it nearly the size of the United States. This vast sea of sand reaches temperatures exceeding 50°C (122°F) during the day and can drop below freezing at night. Despite its harsh conditions, the Sahara supports unique ecosystems and has been home to human civilizations for millennia.",
    category: "dangerous",
    dangerLevel: 4,
    location: "North Africa (11 countries)",
    coordinates: { lat: 23.4162, lng: 25.6628 },
    climate: "Extreme desert - scorching days, freezing nights, almost no rainfall",
    bestTimeToVisit: "October to April (cooler months)",
    dangers: [
      "Extreme heat and dehydration",
      "Sandstorms that can last for days",
      "Getting lost in featureless terrain",
      "Scorpions and venomous spiders",
      "Flash floods in dry valleys",
      "Limited water sources"
    ],
    highlights: [
      "Star gazing in crystal clear skies",
      "Visiting ancient rock art sites",
      "Camel treks through dunes",
      "Oasis exploration",
      "Tuareg cultural experiences"
    ],
    interestingFacts: [
      "The Sahara is expanding southward by 1.5 km per year",
      "Sand dunes can reach 180 meters in height",
      "The desert contains dinosaur fossils",
      "Under aquifers hold more water than the Great Lakes",
      "Temperatures can swing 40°C in a single day"
    ],
    imageId: "sahara-dunes",
    galleryImages: ["sahara-oasis", "sahara-camels", "sahara-night"],
    survivalTips: [
      "Travel in convoys with experienced guides",
      "Carry at least 4 liters of water per person daily",
      "Cover all skin to prevent sunburn and dehydration",
      "Navigate by stars and GPS",
      "Know the location of all oases"
    ],
    equipmentNeeded: [
      "Sun protection (hat, sunglasses, sunscreen)",
      "Lightweight, loose-fitting clothing",
      "Desert survival kit",
      "GPS and satellite communication",
      "High-capacity water containers",
      "Sand goggles and face mask"
    ],
    famousExpeditions: [
      "The Tuareg trade routes across the desert",
      "European explorers seeking Timbuktu",
      "Modern Sahara Marathon endurance races"
    ]
  },
  {
    id: "mount-everest",
    name: "Mount Everest",
    slug: "mount-everest",
    description: "Earth's highest mountain, standing at 8,849 meters above sea level.",
    fullDescription: "Mount Everest, known as Sagarmatha in Nepal and Chomolungma in Tibet, is the ultimate challenge for mountaineers. The 'Death Zone' above 8,000 meters has only one-third of the oxygen available at sea level. Despite its deadly reputation, over 4,000 climbers have reached the summit, with hundreds attempting each year during the brief climbing season.",
    category: "extreme",
    dangerLevel: 5,
    location: "Nepal-China border",
    coordinates: { lat: 27.9881, lng: 86.9250 },
    climate: "Extreme alpine - temperatures below -60°C, hurricane-force winds",
    bestTimeToVisit: "April-May and September-October (climbing windows)",
    dangers: [
      "Altitude sickness and cerebral edema",
      "Avalanches and falling ice",
      "Extreme cold and frostbite",
      "Khumbu Icefall crevasse falls",
      "Exhaustion and limited oxygen",
      "Crowding on summit day"
    ],
    highlights: [
      "Reaching the world's highest point",
      "Sunrise over the Himalayas",
      "Sherpa culture and hospitality",
      "Base Camp trekking experience",
      "Views of four of the world's highest peaks"
    ],
    interestingFacts: [
      "Everest grows about 4mm taller each year",
      "Over 300 bodies remain on the mountain",
      "The youngest summiter was 13, oldest 80",
      "Oxygen at summit is 1/3 of sea level",
      "First successful climb was 1953 by Hillary and Norgay"
    ],
    imageId: "everest-summit",
    galleryImages: ["everest-base-camp", "everest-climbers", "everest-himalayas"],
    survivalTips: [
      "Acclimatize properly over weeks",
      "Use supplemental oxygen above 7,000m",
      "Climb with experienced Sherpa guides",
      "Monitor weather conditions constantly",
      "Know when to turn back"
    ],
    equipmentNeeded: [
      "High-altitude mountaineering gear",
      "Supplemental oxygen system",
      "Down suit and extreme cold protection",
      "Crampons and ice axe",
      "Satellite phone and emergency beacon",
      "Medical kit for altitude sickness"
    ],
    famousExpeditions: [
      "1953: Hillary and Tenzing's first summit",
      "1996: Deadly season documented in 'Into Thin Air'",
      "2021: All-Nepali team sets winter record"
    ]
  },
  {
    id: "antarctica",
    name: "Antarctica",
    slug: "antarctica",
    description: "The coldest, driest, and windiest continent on Earth.",
    fullDescription: "Antarctica is the world's last frontier, a frozen wilderness covering 14 million square kilometers. With temperatures reaching -89.2°C and winds exceeding 200 mph, it's the most hostile environment on Earth. Despite this, it supports unique wildlife including emperor penguins and hosts international research stations studying climate change and cosmic mysteries.",
    category: "extreme",
    dangerLevel: 4,
    location: "Southern Hemisphere, surrounding the South Pole",
    coordinates: { lat: -82.8628, lng: 135.0000 },
    climate: "Polar desert - extremely cold, dry, and windy",
    bestTimeToVisit: "November to March (summer season)",
    dangers: [
      "Extreme cold and hypothermia",
      "Whiteout conditions and disorientation",
      "Crevasse falls on glaciers",
      "Katabatic winds over 200 mph",
      "Limited rescue capabilities",
      "Isolation and psychological stress"
    ],
    highlights: [
      "Emperor penguin colonies",
      "Aurora Australis (Southern Lights)",
      "Iceberg kayaking",
      "Research station visits",
      "Historic exploration sites"
    ],
    interestingFacts: [
      "98% of Antarctica is covered in ice",
      "It contains 70% of Earth's fresh water",
      "No permanent human residents",
      "The ice is up to 4.8km thick",
      "It's the largest desert in the world"
    ],
    imageId: "antarctica-ice",
    galleryImages: [
      "https://tse2.mm.bing.net/th/id/OIP.OyoLcve5oDvJi-daylYuGAHaE8?w=1440&h=960&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://th.bing.com/th/id/OIP.mvwsaK5rjUxp5TBcxW-BbQHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse4.mm.bing.net/th/id/OIP.6wAGwrIYxR073h8iMS8CuAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    survivalTips: [
      "Never travel alone",
      "Always carry emergency shelter",
      "Monitor weather constantly",
      "Use GPS and satellite communication",
      "Train for extreme cold conditions"
    ],
    equipmentNeeded: [
      "Extreme cold weather gear (-60°C rated)",
      "Emergency shelter and sleeping bag",
      "Satellite phone and GPS",
      "Crevasse rescue equipment",
      "High-calorie food supplies",
      "Medical kit for frostbite"
    ],
    famousExpeditions: [
      "1911: Amundsen reaches South Pole first",
      "1914: Shackleton's Endurance survival",
      "Modern scientific research expeditions"
    ]
  },
  {
    id: "death-valley",
    name: "Death Valley",
    slug: "death-valley",
    description: "North America's hottest, driest, and lowest national park.",
    fullDescription: "Death Valley holds the record for the highest reliably reported air temperature on Earth: 56.7°C (134°F). Located below sea level, this otherworldly landscape features salt flats, sand dunes, and colorful badlands. Despite its name, the valley supports unique desert life and offers stunning geological formations.",
    category: "dangerous",
    dangerLevel: 3,
    location: "California/Nevada border, USA",
    coordinates: { lat: 36.2505, lng: -116.8258 },
    climate: "Extreme desert - hottest place in North America",
    bestTimeToVisit: "November to March",
    dangers: [
      "Extreme heat and heat stroke",
      "Dehydration",
      "Flash floods in canyons",
      "Getting lost in remote areas",
      "Vehicle breakdowns in heat",
      "Limited cell service"
    ],
    highlights: [
      "Badwater Basin salt flats",
      "Mesquite Flat Sand Dunes",
      "Zabriskie Point sunrise",
      "Artist's Drive colors",
      "Night sky viewing"
    ],
    interestingFacts: [
      "Highest recorded temperature: 56.7°C (134°F)",
      "Badwater Basin is 86m below sea level",
      "Only rains a few inches per year",
      "Home to the hottest place in North America",
      "Rocks mysteriously move on Racetrack Playa"
    ],
    imageId: "death-valley-dunes",
    galleryImages: ["death-valley-badwater", "death-valley-zabriskie", "death-valley-night"],
    survivalTips: [
      "Carry extra water (more than you think you need)",
      "Travel early morning or evening",
      "Stay on marked roads",
      "Tell someone your itinerary",
      "Check weather for flash flood warnings"
    ],
    equipmentNeeded: [
      "Extra water supply (4+ liters per person)",
      "Sun protection and hat",
      "Cool clothing and shade",
      "Emergency supplies",
      "Fully charged phone and GPS",
      "First aid kit for heat exhaustion"
    ],
    famousExpeditions: [
      "1849: Lost '49ers gold rush party",
      "Modern tourism and photography expeditions",
      "Scientific studies of moving rocks"
    ]
  }
];

export function getPlaceBySlug(slug: string): Place | undefined {
  return places.find((place) => place.slug === slug);
}

export function getPlacesByCategory(category: Place["category"]): Place[] {
  return places.filter((place) => place.category === category);
}

export function getPlacesByDangerLevel(level: Place["dangerLevel"]): Place[] {
  return places.filter((place) => place.dangerLevel === level);
}
