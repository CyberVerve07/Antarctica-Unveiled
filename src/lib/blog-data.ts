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
  content: string;
}

export const mockBlogs: BlogPost[] = [
  {
    id: 1,
    title: "Surviving the Amazon: 30 Days Deep in the Rainforest",
    excerpt: "My harrowing journey through the Amazon Rainforest, facing venomous snakes, extreme humidity, and the beauty of untouched wilderness. I learned that the jungle doesn't forgive mistakes...",
    author: "Sarah Explorer",
    date: "2024-01-15",
    place: "Amazon Rainforest",
    placeSlug: "amazon-rainforest",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80",
    content: `
# Day 1: Entering the Green Hell

The moment our boat pushed off from Manaus, I knew my life would change forever. The Amazon Rainforest stretched before us like an endless green ocean, both beautiful and terrifying. Our guide, a local named Carlos who had spent 40 years in the jungle, looked at me and said in broken English, "The jungle doesn't forgive mistakes."

## The Heat and Humidity

Within hours, the humidity hit me like a physical weight. At 95% humidity and 32°C, every movement felt like swimming through hot syrup. Sweat dripped constantly, and my clothes were soaked within minutes. Carlos taught us to drink 4 liters of water daily and add electrolytes to prevent dangerous dehydration.

## Night 3: The First Scare

We were setting up camp when I heard rustling in the bushes. Carlos grabbed my arm and whispered, "Don't move." A fer-de-lance, one of the most venomous snakes in the world, slithered past our tent, just meters away. That night, I slept with one eye open, every shadow looking like a threat.

## Week 2: Learning to Survive

Carlos taught us essential survival skills:
- **Never touch plants you don't recognize** - many are poisonous
- **Check for spiders and snakes before sitting** - especially in hollow trees
- **Purify all water** - even clear streams can contain parasites
- **Wear long sleeves and pants** - despite the heat, protection is crucial

## The Beauty Within the Danger

Despite the dangers, the Amazon revealed incredible beauty. I saw pink river dolphins playing in the Amazon River, howler monkeys calling at dawn, and bioluminescent fungi lighting up the forest floor at night. The biodiversity here is unlike anywhere else on Earth.

## Day 30: A Changed Person

Emerging from the jungle after 30 days, I was a different person. I had learned respect for nature's power, the importance of preparation, and that humans are just visitors in this ancient ecosystem. The Amazon had tested me, scared me, and ultimately taught me lessons I would carry forever.

**Survival Tips for Amazon Expeditions:**
1. Always travel with experienced local guides
2. Carry comprehensive first aid kit with antivenom
3. Use DEET-based insect repellent (at least 30%)
4. Wear waterproof, quick-drying clothing
5. Bring satellite communication devices
6. Learn basic Portuguese before visiting
7. Respect indigenous communities and their territories

The Amazon is not for the unprepared, but for those who respect its dangers, it offers rewards found nowhere else on Earth.
    `
  },
  {
    id: 2,
    title: "Conquering Everest: The Death Zone Experience",
    excerpt: "Standing at 8,849 meters, every breath is a struggle. Here's what it's really like to climb the world's highest mountain. The death zone above 8,000m is where your body starts shutting down...",
    author: "John Mountaineer",
    date: "2024-02-20",
    place: "Mount Everest",
    placeSlug: "mount-everest",
    readTime: "20 min read",
    image: "https://images.unsplash.com/photo-1574735765780-aca0c7a0a9ea?w=600&q=80",
    content: `
# The Death Zone: Where Every Breath Counts

At 8,849 meters, Mount Everest's summit sits in what climbers call the "Death Zone" - above 8,000 meters where oxygen levels are only one-third of those at sea level. Here, your body begins to shut down. Cells die, digestion stops, and the risk of cerebral edema and pulmonary edema becomes very real.

## Preparation: Two Years of Training

I spent two years preparing for this climb:
- **Physical training**: Running, weightlifting, and altitude simulation
- **Technical skills**: Ice climbing, crevasse rescue, rope work
- **Mental preparation**: Meditation, visualization, stress management
- **Equipment**: Investing $25,000 in specialized gear

## The Journey Begins

Our expedition started in Kathmandu, where we met our Sherpa team. These incredible climbers are the unsung heroes of Everest - their strength, skill, and local knowledge make summit attempts possible for foreigners like me.

## Base Camp to Camp IV: The Long Climb

The trek from Base Camp (5,364m) to Camp IV (7,952m) took us 18 days of acclimatization. We climbed up, rested, climbed higher, rested again - allowing our bodies to adapt to the thinning oxygen. Each night at altitude brought headaches, nausea, and sleeplessness.

## Summit Night: 12 Hours of Hell

We left Camp IV at 11 PM with headlamps cutting through the darkness. The temperature was -40°C with wind chill. Every step required conscious effort. My oxygen mask fogged constantly, and the regulator hissed with each breath.

## The Hillary Step

At 8,790 meters, we reached the Hillary Step - a 12-meter vertical rock face. With ice axes and crampons, we inch our way up. One slip here means certain death. My hands were so cold I could barely feel them.

## The Summit: 8,849 Meters

At 6:15 AM, I pulled myself onto the summit. The view was beyond description - the curvature of the Earth, peaks below us like islands in a sea of clouds. I cried, not from emotion but from the physical release of months of effort.

## The Descent: More Dangerous Than the Climb

Most Everest deaths happen on the descent. Exhausted, oxygen-depleted, and running out of daylight, we had to navigate down carefully. Every step was a battle against my body's desperate need to rest.

## Aftermath: Physical and Mental Changes

Returning to sea level felt strange. My body had adapted to low oxygen, and normal air felt thick and heavy. It took weeks to recover fully. Mentally, I was changed - the experience had shown me what true human limits look like.

**Critical Everest Survival Tips:**
1. Never climb without experienced Sherpas
2. Use supplemental oxygen above 7,000m
3. Turn back if conditions deteriorate - no summit is worth dying for
4. Respect the mountain - it can kill you in seconds
5. Train for at least two years before attempting
6. Budget $50,000+ for a proper expedition
7. The window for summiting is only a few days per year

Everest is not just a mountain - it's a test of human will, preparation, and respect for nature's overwhelming power.
    `
  },
  {
    id: 3,
    title: "Sahara Desert: Crossing the Sea of Sand",
    excerpt: "150 kilometers of golden dunes, scorching heat, and the most beautiful starlit nights I've ever experienced. The Sahara teaches you that water is life...",
    author: "Maria Nomad",
    date: "2024-03-10",
    place: "Sahara Desert",
    placeSlug: "sahara-desert",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&q=80",
    content: `
# 150 Kilometers of Golden Silence

The Sahara Desert is the world's largest hot desert, spanning 11 countries across North Africa. My goal: cross 150 kilometers of its most remote section, guided only by Tuareg nomads who have navigated these dunes for centuries.

## Day 1: The Heat Hits

Stepping out of the 4x4 at the desert's edge, the heat was like opening an oven door. 52°C in the shade. Our Tuareg guide, Ibrahim, wrapped his blue turban tighter and said, "The sun is not your enemy here. Your own mind is."

## Water: The Constant Worry

Each of us carried 8 liters of water - heavy, but necessary. In the Sahara, dehydration kills faster than anything else. Ibrahim taught us to drink small amounts constantly rather than gulping, and to monitor urine color as a hydration indicator.

## Night 5: The Sandstorm

I woke to a howling wind. Sand filled the air, reducing visibility to zero. Ibrahim ordered us to dig in, creating shallow depressions and covering ourselves with blankets. For six hours, we lay there as sand scoured our exposed skin. The desert teaches humility.

## The Beauty Within

Despite the harshness, the Sahara has moments of incredible beauty:
- **Sunrise over the dunes**: Light painting the sand in gold, orange, and pink
- **Night skies**: The Milky Way so bright it casts shadows
- **Oasis discoveries**: Finding life where it seems impossible
- **Silence**: So complete you can hear your own heartbeat

## Day 10: The Finish Line

Reaching our destination felt surreal. The desert had tested us physically and mentally. I had lost 5kg, my skin was sunburned despite protection, but I felt stronger than ever.

**Sahara Survival Essentials:**
1. Carry minimum 4 liters of water per person daily
2. Wear loose, light-colored clothing that covers all skin
3. Travel in convoys with experienced guides
4. Know the location of all oases along your route
5. Carry GPS and satellite communication
6. Never travel during peak heat (10 AM - 4 PM)
7. Learn basic navigation by stars

The Sahara is not empty - it's full of life, beauty, and lessons for those willing to listen.
    `
  },
  {
    id: 4,
    title: "Antarctica: The White Continent Awaits",
    excerpt: "Six months of isolation, -60°C temperatures, and the most pristine wilderness on Earth. My research station diary reveals the psychological challenges of polar living...",
    author: "Dr. Alex Scientist",
    date: "2024-04-05",
    place: "Antarctica",
    placeSlug: "antarctica",
    readTime: "18 min read",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&q=80",
    content: `
# Six Months at the Bottom of the World

Antarctica is the coldest, driest, windiest continent on Earth. My research station sat at 82°S, where winter temperatures drop to -60°C and winds exceed 200 km/h. This is my diary of six months in the most isolated place on Earth.

## Arrival: The Last Frontier

Flying in, I saw ice stretching to the horizon in every direction. No trees, no buildings, no signs of human life except our station. The plane landed on a blue ice runway - the coldest landing strip in the world.

## Month 1: Adjustment

The first month was about survival. Learning to:
- Dress in layers (-60°C requires serious gear)
- Manage water (everything freezes)
- Navigate whiteout conditions
- Live with 24-hour darkness (in winter)

## The Psychology of Isolation

By month three, the isolation began affecting everyone:
- **Sleep patterns disrupted** by constant darkness
- **Social tensions** increased in close quarters
- **Depression** affected half the station
- **Cabin fever** became real

We established routines: daily exercise, movie nights, shared meals, and regular communication with family via satellite.

## The Science: Why We're Here

Despite the harshness, Antarctica is a scientist's paradise:
- **Ice cores** revealing 800,000 years of climate history
- **Aurora studies** of solar wind interactions
- **Marine biology** in the Southern Ocean
- **Astronomy** with the clearest skies on Earth

## Wildlife Encounters

Emperor penguins visited our station regularly. Watching them huddle together in -40°C temperatures, surviving conditions that would kill humans in minutes, was humbling. Weddell seals appeared through cracks in the ice, their curiosity overcoming their wariness.

## The Aurora Australis

The Southern Lights are Antarctica's reward for enduring the darkness. Green, pink, and purple ribbons dancing across the sky, silent and ethereal. I spent many nights just watching, feeling small under the cosmic display.

## Departure: Changed Forever

Leaving Antarctica felt strange. After six months, the cold had become normal, the isolation expected. Returning to "civilization" was overwhelming - too many people, too much noise, too much color.

**Antarctica Survival Requirements:**
1. Extreme cold weather gear rated to -80°C
2. Psychological screening for isolation tolerance
3. Comprehensive medical training
4. Satellite communication equipment
5. Emergency shelter and survival supplies
6. Physical fitness for harsh conditions
7. Respect for the fragile ecosystem

Antarctica is not just a place - it's a teacher of humility, resilience, and the fragility of human existence.
    `
  },
  {
    id: 5,
    title: "Death Valley: Surviving 56°C Heat",
    excerpt: "The hottest place on Earth tested my limits. With temperatures reaching 56.7°C, I learned crucial survival lessons about heat stroke and dehydration...",
    author: "Mike Adventurer",
    date: "2024-05-12",
    place: "Death Valley",
    placeSlug: "death-valley",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80",
    content: `
# 56.7°C: The Hottest Place on Earth

Death Valley holds the record for the highest reliably reported air temperature: 56.7°C (134°F). I wanted to experience this extreme environment, document the effects of such heat on the human body, and learn survival techniques for desert conditions.

## Preparation: Understanding the Danger

Heat stroke can kill in hours. Dehydration in minutes. I prepared by:
- Studying desert survival techniques
- Acclimating to heat gradually
- Testing equipment in controlled conditions
- Planning escape routes and emergency protocols

## Day 1: The Heat Hits

At 10 AM, the temperature was already 45°C. By 2 PM, it peaked at 53°C. The heat was like standing in front of an open oven door. Every movement required effort, and sweat evaporated before it could cool my skin.

## The Physical Effects

Within hours, I experienced:
- **Rapid heart rate** (over 120 bpm at rest)
- **Dizziness and nausea** from heat stress
- **Confusion and difficulty concentrating**
- **Muscle cramps** from electrolyte loss
- **Extreme thirst** despite constant water intake

## Night: No Relief

Even at night, temperatures stayed above 35°C. Without air conditioning or shade, the body never gets a break. Sleep became impossible, and the psychological toll of constant heat began to show.

## Survival Techniques That Worked

1. **Stay underground**: Even a few feet below ground, temperatures drop significantly
2. **Cover all skin**: Prevents sunburn and reduces water loss
3. **Rest during peak heat**: 10 AM to 4 PM is for survival, not activity
4. **Monitor urine color**: The best hydration indicator
5. **Electrolytes are crucial**: Water alone isn't enough

## The Beauty in Extremes

Despite the danger, Death Valley has stunning beauty:
- Badwater Basin's salt flats reflecting mountains
- Mesquite Flat's wind-sculpted sand dunes
- Zabriskie Point's colorful badlands at sunrise
- The clearest night skies I've ever seen

## Day 3: Retreat

By day three, my body was struggling. Core temperature remained elevated, and I was showing early signs of heat exhaustion. The decision to leave was difficult but necessary. Death Valley doesn't forgive mistakes.

**Death Valley Survival Rules:**
1. Never travel alone in summer
2. Carry at least 4 liters of water per person daily
3. Tell someone your exact itinerary
4. Stay with your vehicle if it breaks down
5. Check weather for flash flood warnings
6. Avoid canyons during storm season
7. Know the signs of heat exhaustion vs heat stroke

Death Valley is beautiful but deadly. Respect it, prepare for it, and never underestimate it.
    `
  },
  {
    id: 6,
    title: "Amazon Indigenous Tribes: A Cultural Journey",
    excerpt: "Living with the Yanomami people for three weeks changed my perspective on life. Their knowledge of the rainforest is thousands of years old...",
    author: "Emma Anthropologist",
    date: "2024-06-18",
    place: "Amazon Rainforest",
    placeSlug: "amazon-rainforest",
    readTime: "25 min read",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80",
    content: `
# Three Weeks with the Yanomami

The Yanomami people have lived in the Amazon for thousands of years. Their knowledge of the rainforest, its plants, animals, and ecosystems, is unparalleled. Living with them for three weeks taught me lessons no textbook could ever convey.

## First Contact: Building Trust

Gaining access to Yanomami territory required months of preparation and permission from Brazilian authorities. Our first meeting was tense - they've had bad experiences with outsiders. But through patience, respect, and the help of a mediator who spoke their language, trust slowly built.

## Daily Life: Connected to Nature

Yanomami life revolves around the forest:
- **Hunting and gathering** using traditional methods
- **Medicine** from plants they've used for generations
- **Spiritual beliefs** deeply connected to the natural world
- **Community** where everyone has a role

## Forest Knowledge: Ancient Wisdom

What I learned from them:
- **Plant identification**: Over 200 species with medicinal uses
- **Animal tracking**: Reading signs invisible to outsiders
- **Weather prediction**: Using plants and animal behavior
- **Sustainable harvesting**: Taking only what's needed

## The Challenges They Face

The Yanomami are under threat:
- **Illegal mining** polluting their rivers
- **Disease** brought by outsiders
- **Deforestation** destroying their territory
- **Cultural erosion** from outside influences

## What We Can Learn

Modern society has much to learn from indigenous peoples:
- **Sustainability**: Living without depleting resources
- **Community**: Supporting each other through challenges
- **Connection**: Understanding our place in nature
- **Wisdom**: Respecting ancient knowledge

## Leaving Changed

Leaving the Yanomami was harder than arriving. Their way of life, so different from modern society, had shown me alternatives I never considered. The Amazon isn't just a forest to them - it's home, pharmacy, supermarket, and spiritual center all in one.

**Responsible Indigenous Tourism:**
1. Always get proper permissions
2. Hire indigenous guides when possible
3. Respect cultural practices and beliefs
4. Don't photograph without permission
5. Support indigenous-owned businesses
6. Learn about their struggles and advocate for their rights
7. Remember you're a guest in their home

The Yanomami taught me that wisdom isn't about knowing more - it's about understanding differently.
    `
  },
  {
    id: 7,
    title: "Everest Base Camp: The Journey Before the Climb",
    excerpt: "Most people focus on the summit, but getting to Base Camp is an adventure itself. The trek through the Khumbu Valley offers stunning views...",
    author: "Chris Trekker",
    date: "2024-07-22",
    place: "Mount Everest",
    placeSlug: "mount-everest",
    readTime: "16 min read",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    content: `
# The Trek to Base Camp: 14 Days of Himalayan Beauty

While the summit gets all the attention, the journey to Everest Base Camp (5,364m) is an adventure in itself. The 14-day trek through Nepal's Khumbu Valley offers some of the most stunning mountain scenery on Earth.

## Preparation: Kathmandu

We spent three days in Kathmandu preparing:
- **Permits**: Sagarmatha National Park and TIMS cards
- **Gear**: Renting equipment and buying supplies
- **Sherpa team**: Meeting our guides and porters
- **Final checks**: Medical exams and equipment testing

## Day 1-3: Lukla to Namche Bazaar

The adventure began with a terrifying flight into Lukla - a runway carved into a mountainside. From there, we trekked to Namche Bazaar, the gateway to the high Himalayas. The first signs of altitude appeared - slight headaches and faster breathing.

## Day 4-6: Acclimatization in Namche

We spent two days in Namche acclimatizing:
- **Hiking higher** during the day
- **Sleeping lower** at night
- **Exploring** the Sherpa capital
- **Visiting** the local monastery

## Day 7-10: Tengboche to Dingboche

The scenery became more dramatic with each day. Tengboche's monastery offered spiritual reflection before the challenging climb ahead. Dingboche marked our entry into the high altitude zone - 4,400m.

## Day 11-12: Acclimatization Hikes

From Dingboche, we made day hikes to higher elevations:
- **Nangkartshang Peak**: 5,100m for acclimatization
- **Chhukung Ri**: Testing our bodies at 5,500m
- **Rest days**: Essential for altitude adaptation

## Day 13-14: Lobuche to Base Camp

The final push to Base Camp:
- **Lobuche**: 4,910m, the last village
- **Gorak Shep**: 5,160m, our final stop before Base Camp
- **Base Camp**: 5,364m, our destination

## Reaching Base Camp

The moment we saw Base Camp spread across the glacier was overwhelming. Tents from expeditions around the world dotted the ice. The Khumbu Icefall loomed above - our next challenge if we were to continue.

## The Sherpa People

Throughout the trek, our Sherpa team impressed us:
- **Strength**: Carrying heavy loads at altitude
- **Knowledge**: Every trail, every danger memorized
- **Hospitality**: Sharing their culture and homes
- **Spirituality**: Deep connection to the mountains

## Physical Effects of Altitude

By Base Camp, I felt:
- **Reduced appetite**: Food tasted like cardboard
- **Insomnia**: Waking frequently at night
- **Shortness of breath**: Even at rest
- **Mental fog**: Simple tasks became difficult

## The Beauty

Despite the physical challenges, the views were incredible:
- **Ama Dablam**: The most beautiful mountain I've seen
- **Thamserku**: Dramatic peaks at sunset
- **Khumbu Glacier**: A river of ice
- **Starlit nights**: The clearest skies imaginable

## Return: Changed Forever

The trek back felt different. We were stronger, more confident, and had experienced something few people ever do. Base Camp wasn't just a destination - it was a gateway to understanding human potential.

**Base Camp Trek Essentials:**
1. Allow 14-18 days for proper acclimatization
2. Hire experienced Sherpa guides
3. Travel in trekking season (March-May, September-November)
4. Pack layers for all weather conditions
5. Bring water purification tablets
6. Respect local culture and customs
7. Have travel insurance that covers high altitude

The journey to Base Camp is not just preparation for climbing - it's a life-changing adventure in itself.
    `
  },
  {
    id: 8,
    title: "Sahara's Hidden Oases: Finding Water in the Desert",
    excerpt: "Finding water in the Sahara can mean the difference between life and death. I spent weeks mapping traditional water sources used by Tuareg nomads...",
    author: "Ahmed Guide",
    date: "2024-08-30",
    place: "Sahara Desert",
    placeSlug: "sahara-desert",
    readTime: "19 min read",
    image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=600&q=80",
    content: `
# Water is Life: Mapping Sahara Oases

In the Sahara Desert, water is everything. Finding it can mean the difference between life and death. I spent eight weeks with Tuareg nomads, learning their ancient methods of locating and accessing water sources that have sustained desert travelers for centuries.

## The Tuareg: Masters of the Desert

The Tuareg people have navigated the Sahara for generations. Their knowledge of water sources is passed down orally - maps drawn in sand, locations memorized through song, techniques refined over thousands of years.

## Traditional Water Finding Methods

The Tuareg use multiple techniques:

**1. Animal Behavior**
- Birds flying in circles indicate nearby water
- Animal tracks converge at water sources
- Insects swarm around hidden water

**2. Plant Indicators**
- Certain palms grow only near water
- Green vegetation in otherwise barren areas
- Roots visible on sand dunes

**3. Geological Signs**
- Rock formations that trap water
- Sand patterns indicating underground flow
- Salt crusts suggesting ancient water tables

**4. Star Navigation**
- Memorizing routes by constellations
- Using the North Star for orientation
- Reading seasonal star patterns

## The Oases We Found

Over eight weeks, we located and documented 23 water sources:

**Natural Springs**
- Underground aquifers surfacing naturally
- Often marked by ancient palm groves
- Water temperature varies by depth

**Man-Made Wells**
- Dug centuries ago by nomads
- Maintained through communal effort
- Some over 100 meters deep

**Hidden Reservoirs**
- Water trapped in rock formations
- Accessible only through narrow passages
- Pristine and untouched

## Water Conservation Techniques

The Tuareg taught me water conservation:
- **Drink slowly** to maximize absorption
- **Cover water containers** to prevent evaporation
- **Reuse water** when possible
- **Never waste** a single drop

## Modern Technology Meets Ancient Wisdom

I combined traditional knowledge with modern tools:
- **GPS mapping** of all water sources
- **Water quality testing** for safety
- **Satellite imagery** to find new locations
- **Database creation** for future travelers

## The Challenges

Finding water wasn't easy:
- **Some sources were dry**: Climate change is affecting the Sahara
- **Competition**: Other groups guard their water sources
- **Distance**: Some oases required days of travel
- **Quality**: Not all water is safe to drink

## Cultural Exchange

Working with the Tuareg was a privilege:
- **Language barrier**: Overcome through gestures and shared experience
- **Trust building**: Essential for accessing secret locations
- **Knowledge sharing**: I taught them modern techniques, they taught me ancient wisdom
- **Friendship**: Formed bonds that transcend culture

## The Results

Our mapping project:
- **Documented** 23 water sources
- **Created** GPS coordinates for each
- **Tested** water quality at all locations
- **Shared** findings with local communities
- **Published** a guide for desert travelers

**Sahara Water Finding Tips:**
1. Always travel with experienced local guides
2. Learn traditional water-finding methods
3. Carry water purification tablets
4. Never rely on a single water source
5. Plan routes around known oases
6. Respect local water rights and customs
7. Conserve water at every opportunity

The Sahara teaches that water is not just a resource - it's life, community, and survival itself.
    `
  }
];
