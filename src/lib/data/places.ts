import { Place } from "../types";

export const places: Place[] = [
  {
    id: "1",
    name: "Amazon Rainforest",
    slug: "amazon-rainforest",
    description: "The world's largest tropical rainforest, spanning 9 countries and home to 10% of all known species.",
    fullDescription: "The Amazon Rainforest is the largest tropical rainforest in the world, covering over 5.5 million square kilometers across nine countries in South America. It is home to an incredible diversity of plant and animal species, many of which are found nowhere else on Earth. The rainforest plays a crucial role in regulating the global climate and producing oxygen.",
    category: "dangerous",
    dangerLevel: 3,
    location: "South America (Brazil, Peru, Colombia, etc.)",
    coordinates: { lat: -3.4653, lng: -62.2159 },
    climate: "Tropical rainforest with high humidity (80-90%) and temperatures averaging 26°C",
    bestTimeToVisit: "June to November (dry season)",
    dangers: [
      "Venomous snakes (fer-de-lance, bushmaster)",
      "Poisonous frogs and insects",
      "Diseases (malaria, dengue fever)",
      "Flash floods during rainy season",
      "Getting lost without proper navigation"
    ],
    highlights: [
      "Meeting indigenous tribes",
      "Wildlife spotting (jaguars, macaws, pink river dolphins)",
      "Canopy walkway experiences",
      "River cruises on the Amazon",
      "Night wildlife expeditions",
      "Piranha fishing expeditions"
    ],
    interestingFacts: [
      "The Amazon produces 20% of the world's oxygen",
      "1 in 10 known species lives in the Amazon",
      "The rainforest is home to uncontacted tribes",
      "Some trees reach over 70 meters tall",
      "The Amazon River has over 3,000 fish species"
    ],
    imageId: "amazon-rainforest",
    galleryImages: [
      "amazon-rainforest",
      "hero-adventure"
    ],
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
      "Insect repellent (DEET 30%+)",
      "Water purification system",
      "First aid kit with antivenom",
      "GPS device and satellite phone"
    ],
    famousExpeditions: [
      "Percy Fawcett's mysterious disappearance in 1925",
      "Teddy Roosevelt's River of Doubt expedition (1914)",
      "Modern scientific research expeditions"
    ]
  },
  {
    id: "2",
    name: "Sahara Desert",
    slug: "sahara-desert",
    description: "The world's largest hot desert, spanning 11 countries across North Africa with extreme temperatures and vast sand dunes.",
    fullDescription: "The Sahara Desert is the largest hot desert in the world, covering 9.2 million square kilometers across North Africa. It's a landscape of extremes - scorching days, freezing nights, and endless sand dunes that can reach 180 meters in height. Despite the harsh conditions, the Sahara has supported human life for millennia through oases and trade routes.",
    category: "extreme",
    dangerLevel: 4,
    location: "North Africa (Morocco, Algeria, Tunisia, Libya, Egypt, etc.)",
    coordinates: { lat: 23.4162, lng: 25.6628 },
    climate: "Extreme arid with temperatures reaching 52°C in day, freezing at night",
    bestTimeToVisit: "October to April (cooler months)",
    dangers: [
      "Extreme heat (up to 56°C)",
      "Dehydration and heat stroke",
      "Sandstorms reducing visibility to zero",
      "Getting lost without landmarks",
      "Scorpions and venomous snakes"
    ],
    highlights: [
      "Sleeping under starlit skies",
      "Visiting ancient oasis towns",
      "Camel treks across dunes",
      "Tuareg cultural experiences",
      "Rock art and ancient archaeological sites"
    ],
    interestingFacts: [
      "The Sahara is roughly the size of the United States",
      "Sand dunes can reach 180 meters in height",
      "The Sahara was once green and fertile",
      "Some sand dunes 'sing' when wind blows",
      "Temperatures can swing 40°C between day and night"
    ],
    imageId: "sahara-desert",
    galleryImages: [
      "sahara-desert",
      "hero-adventure"
    ],
    survivalTips: [
      "Carry minimum 4 liters of water per person daily",
      "Travel during cooler hours (early morning, evening)",
      "Cover all skin to prevent sunburn and dehydration",
      "Use GPS and satellite communication",
      "Know the location of all oases"
    ],
    equipmentNeeded: [
      "Lightweight, loose-fitting clothing",
      "Wide-brimmed hat and sunglasses",
      "High-SPF sunscreen",
      "Water purification tablets",
      "GPS and satellite phone",
      "Emergency shelter"
    ],
    famousExpeditions: [
      "The Trans-Saharan Trade Routes",
      "Modern desert crossings",
      "Scientific research on climate change"
    ]
  },
  {
    id: "3",
    name: "Mount Everest",
    slug: "mount-everest",
    description: "The world's highest peak at 8,849 meters, standing on the border between Nepal and Tibet in the Himalayas.",
    fullDescription: "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point. Its elevation of 8,848.86 m was most recently established in 2020 by the Chinese and Nepali authorities.",
    category: "extreme",
    dangerLevel: 5,
    location: "Nepal/Tibet border, Himalayas",
    coordinates: { lat: 27.9881, lng: 86.9250 },
    climate: "Extreme alpine with temperatures dropping to -60°C, winds over 200 km/h",
    bestTimeToVisit: "April-May and September-October (climbing windows)",
    dangers: [
      "Altitude sickness and cerebral edema",
      "Avalanches and falling ice",
      "Khumbu Icefall dangers",
      "Extreme cold and frostbite",
      "Exhaustion and lack of oxygen"
    ],
    highlights: [
      "Standing on the world's highest point",
      "Sunrise over the Himalayas",
      "Sherpa culture and hospitality",
      "Base Camp trek experience",
      "Views of surrounding 8,000m peaks"
    ],
    interestingFacts: [
      "Over 300 people have died attempting the summit",
      "The summit moves approximately 1 inch northeast per year",
      "First successful climb was in 1953 by Hillary and Norgay",
      "Oxygen at summit is 1/3 of sea level",
      "The death zone starts at 8,000m"
    ],
    imageId: "mount-everest",
    galleryImages: [
      "mount-everest",
      "hero-adventure"
    ],
    survivalTips: [
      "Never climb without experienced Sherpas",
      "Use supplemental oxygen above 7,000m",
      "Turn back if conditions deteriorate",
      "Train for at least two years",
      "Respect the mountain - it can kill you in seconds"
    ],
    equipmentNeeded: [
      "Extreme cold weather gear (-60°C rated)",
      "Oxygen bottles and regulators",
      "Crampons and ice axes",
      "Climbing harness and ropes",
      "High-altitude tent and sleeping bag",
      "Satellite communication device"
    ],
    famousExpeditions: [
      "1953: Hillary and Tenzing Norgay first summit",
      "1963: First American expedition",
      "1978: First solo ascent without oxygen",
      "Modern commercial climbing expeditions"
    ]
  },
  {
    id: "4",
    name: "Antarctica",
    slug: "antarctica",
    description: "The coldest, driest, windiest continent on Earth, covered by ice up to 4.8 kilometers thick.",
    fullDescription: "Antarctica is Earth's southernmost continent. It contains the geographic South Pole and is situated in the Antarctic region of the Southern Hemisphere, almost entirely south of the Antarctic Circle, and is surrounded by the Southern Ocean. At 14,200,000 square kilometers, it is the fifth-largest continent.",
    category: "extreme",
    dangerLevel: 5,
    location: "Southern Hemisphere, surrounding the South Pole",
    coordinates: { lat: -82.8628, lng: 135.0000 },
    climate: "Polar with temperatures as low as -60°C, winds exceeding 200 km/h",
    bestTimeToVisit: "November to March (Antarctic summer)",
    dangers: [
      "Extreme cold (-60°C temperatures)",
      "Whiteout conditions with zero visibility",
      "Crevasse falls in ice",
      "Isolation and lack of rescue options",
      "Frostbite and hypothermia"
    ],
    highlights: [
      "Seeing emperor penguins",
      "Aurora Australis (Southern Lights)",
      "Visiting research stations",
      "Iceberg and glacier landscapes",
      "Scientific discoveries and research"
    ],
    interestingFacts: [
      "98% of Antarctica is covered in ice",
      "It contains 70% of Earth's fresh water",
      "No permanent human residents",
      "The ice is up to 4.8km thick",
      "It's the largest desert in the world"
    ],
    imageId: "antarctica",
    galleryImages: [
      "antarctica",
      "hero-adventure"
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
      "GPS and satellite phone",
      "High-calorie food supplies",
      "Medical kit for cold-related injuries"
    ],
    famousExpeditions: [
      "1911: Amundsen first to reach South Pole",
      "Scott's tragic expedition (1912)",
      "Modern scientific research stations",
      "Tourist expeditions to interior"
    ]
  },
  {
    id: "5",
    name: "Death Valley",
    slug: "death-valley",
    description: "The hottest place in North America, holding the world record for highest reliably reported air temperature of 56.7°C.",
    fullDescription: "Death Valley is a desert valley in Eastern California, in the northern Mojave Desert bordering the Great Basin Desert. It is one of the hottest places on Earth, along with deserts in the Middle East and the Sahara. Badwater Basin, located in Death Valley, is the lowest point in North America at 86 meters below sea level.",
    category: "extreme",
    dangerLevel: 4,
    location: "California, USA",
    coordinates: { lat: 36.2505, lng: -116.8257 },
    climate: "Extreme desert with summer temperatures exceeding 50°C",
    bestTimeToVisit: "October to April (cooler months)",
    dangers: [
      "Extreme heat stroke risk",
      "Rapid dehydration",
      "Flash floods in canyons",
      "Getting stranded in remote areas",
      "Sunburn and heat exhaustion"
    ],
    highlights: [
      "Badwater Basin salt flats",
      "Mesquite Flat sand dunes",
      "Zabriskie Point sunrise",
      "Artist's Palette colorful badlands",
      "Stargazing in clear desert skies"
    ],
    interestingFacts: [
      "Record high: 56.7°C (134°F) in 1913",
      "Badwater Basin is 86m below sea level",
      "Home to the oldest known living tree",
      "Summer ground temperatures reach 82°C",
      "Named by prospectors who barely survived"
    ],
    imageId: "death-valley",
    galleryImages: [
      "death-valley",
      "hero-adventure"
    ],
    survivalTips: [
      "Never travel alone in summer",
      "Carry at least 4 liters of water per person daily",
      "Tell someone your exact itinerary",
      "Stay with your vehicle if it breaks down",
      "Avoid canyons during storm season"
    ],
    equipmentNeeded: [
      "Wide-brimmed hat and full sun coverage",
      "Extra water containers",
      "Cooler with ice",
      "Emergency beacon",
      "First aid kit for heat-related illnesses"
    ],
    famousExpeditions: [
      "Gold rush prospectors (1849)",
      "Scotty's Castle construction",
      "Modern geological research",
      "Extreme heat survival studies"
    ]
  }
];

export function getPlaceBySlug(slug: string): Place | undefined {
  return places.find((place) => place.slug === slug);
}
