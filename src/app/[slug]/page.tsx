import { notFound } from "next/navigation";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { ContentBody } from "@/components/content-body";
import Snowfall from "@/components/ui/snowfall";

// NOTE: All AI-generated content has been replaced with static content to resolve persistent generation errors.

const lifePageContent = `
<p><strong>Let’s be blunt: Antarctica is not survivable by humans without technology.</strong> No native population. No agriculture. No rescue margin. People don’t “live” there — they endure it with engineering, discipline, and brutal routines. Below is the full breakdown, no fluff.</p>
<h2>1. Environment: why Antarctica tries to kill you daily</h2>
<h3>Cold</h3>
<ul><li>Coastal summer: −2°C to −10°C</li><li>Interior winter: −60°C to −80°C</li><li>Wind chill can push felt temperature below −100°C</li></ul>
<h3>Wind</h3>
<ul><li>Katabatic winds regularly exceed 200 km/h</li><li>One mistake outside = frostbite in minutes</li></ul>
<h3>Darkness</h3>
<ul><li>Winter: 6 months no sun</li><li>Summer: 6 months no night</li><li>This wrecks sleep cycles and mental health</li></ul>
<h3>Altitude</h3>
<ul><li>Interior plateau ≈ 3,000–4,000 m</li><li>Low oxygen + cold = constant fatigue</li></ul>
<blockquote><p><strong>Reality check:</strong> Humans didn’t evolve for this. Survival here is manufactured, not natural.</p></blockquote>
<h2>2. Who lives there (and why)</h2>
<p>Only researchers, engineers, medics, and logistics staff stay — typically 6–12 months.</p>
<h3>Major bases:</h3>
<ul><li>McMurdo Station (largest, ~1,000 in summer)</li><li>Amundsen-Scott South Pole Station</li><li>Vostok Station (coldest recorded temps)</li></ul>
<p>There are zero families, zero children, zero permanent civilians.</p>
<h2>3. Clothing & personal survival gear (non-negotiable)</h2>
<p>If your clothing fails, you die. Simple.</p>
<h3>Layering system (mandatory)</h3>
<ul><li><strong>Base layer</strong> – moisture-wicking (merino wool / synthetic)</li><li><strong>Insulation layer</strong> – fleece + down</li><li><strong>Outer shell</strong> – windproof, waterproof (Gore-Tex)</li><li><strong>Extreme cold parka</strong> – thick down, fur-lined hood</li></ul>
<h3>Critical accessories</h3>
<ul><li>Double gloves (liner + insulated shell)</li><li>Insulated boots rated to −100°C</li><li>Balaclava + goggles (eye freezing is real)</li><li>Chemical heat packs</li><li>Personal locator beacon (PLB)</li></ul>
<blockquote><p><strong>Fact:</strong> Metal touching bare skin = instant injury.</p></blockquote>
<h2>4. Shelter & stations: engineered life bubbles</h2>
<p>Stations are sealed ecosystems.</p>
<h3>Construction</h3>
<ul><li>Elevated buildings (snow doesn’t bury them)</li><li>Aerodynamic shapes to reduce wind load</li><li>Triple insulation, vapor barriers</li><li>No exposed plumbing (everything freezes)</li></ul>
<h3>Inside the station</h3>
<ul><li>Constant 20–22°C</li><li>Controlled humidity</li><li>Artificial lighting cycles to fake “day/night”</li></ul>
<blockquote><p><strong>If the station loses power in winter:</strong><br/>Everyone dies within hours.</p></blockquote>
<h2>5. Food & water: nothing grows here</h2>
<h3>Food</h3>
<p>Shipped once or twice per year. Mostly frozen meat, canned food, and dehydrated meals. Fresh food is a rare luxury available only in the early months after resupply. Some stations experiment with small hydroponic labs to grow greens.</p>
<p>Calories are high (4,000–6,000/day). The extreme cold burns energy at a phenomenal rate.</p>
<h3>Water</h3>
<p>Snow and ice are melted for water. It is then purified and recycled aggressively. Every single drop is tracked and conserved.</p>
<p>Waste doesn't just disappear. All waste, including human waste, is collected and shipped out of the continent. Antarctica is legally protected, and leaving trash behind is not an option.</p>
<h2>6. Power & technology: the real lifeline</h2>
<h3>Power sources</h3>
<ul><li>Diesel generators (the primary workhorse)</li><li>Wind turbines (supplemental, where conditions permit)</li><li>Solar panels (summer only, and less effective than you'd think)</li></ul>
<h3>Tech essentials</h3>
<ul><li>Satellite internet & comms (the only link to the outside world)</li><li>Weather radar and forecasting tools</li><li>GPS + mapping for safe navigation</li><li>Emergency medical equipment</li><li>Advanced fire suppression systems (fire is the #1 internal danger to a station)</li></ul>
<p>There are no Amazon deliveries. There are no quick replacements. Everything critical is redundant, with backups for the backups.</p>
<h2>7. Medical reality: no second chances</h2>
<p>Most stations have one doctor to handle everything from common colds to surgical emergencies. The facilities are limited, and evacuation is often impossible during the winter months when planes cannot land.</p>
<blockquote><p><strong>If something goes seriously wrong:</strong><br/>You live with it or you die with it.</p></blockquote>
<p>This harsh reality is why:</p>
<ul><li>Psychological screening for personnel is brutally strict.</li><li>All dental work is mandatory before deployment to prevent issues.</li><li>In some cases, an appendix is removed preventively. Yes, seriously.</li></ul>
<h2>8. Mental survival: the silent killer</h2>
<p>The biggest enemy in Antarctica isn’t the cold. It’s your own mind during the long, dark winter.</p>
<h3>Problems</h3>
<ul><li><strong>Isolation:</strong> Complete separation from the world.</li><li><strong>Monotony:</strong> The same faces, same food, same corridors, every day.</li><li><strong>No privacy:</strong> You are never truly alone.</li><li><strong>No escape:</strong> You cannot leave, no matter what.</li><li><strong>Sensory deprivation:</strong> An endless world of white and black.</li></ul>
<h3>Countermeasures</h3>
<ul><li>Strict, unwavering daily routines.</li><li>Mandatory physical training and gym time.</li><li>Social events: Movie nights, music, board games.</li><li>Clearly defined responsibilities and work schedules.</li><li>Use of artificial sunlight lamps to combat Seasonal Affective Disorder (SAD).</li></ul>
<p>Weak mental discipline leads to breakdowns. It is not optional.</p>
<h2>9. Rules & law: no country owns Antarctica</h2>
<p>The entire continent is governed by the Antarctic Treaty System, an international agreement.</p>
<h3>Key rules:</h3>
<ul><li><strong>Science Only:</strong> The continent is reserved for peaceful scientific investigation.</li><li><strong>No military activity:</strong> All military presence is banned.</li><li><strong>No mining:</strong> Mineral and resource exploitation is forbidden.</li><li><strong>Environmental protection is paramount:</strong> Strict regulations on waste, wildlife interaction, and pollution.</li></ul>
<p>If you break the law in Antarctica, your home country is responsible for prosecuting you.</p>
<h2>Final truth (read this carefully)</h2>
<blockquote>
<p>Antarctica proves one thing clearly:<br/><strong>Humans don’t conquer nature. We temporarily negotiate with it using technology.</strong></p>
<p>Remove the clothing → you die.<br/>Remove the power → you die.<br/>Remove the discipline → you die.</p>
<p>Life there isn’t inspirational. It’s a masterclass in controlled survival under constant, unforgiving risk.</p>
</blockquote>
`;

const climatePageContent = `
<p><strong>This is not a remote frozen wasteland. Antarctica is Earth’s climate control system.</strong> If it destabilizes, the planet does not “adapt” — it reconfigures violently.</p>
<p>Below is the deep, technical, no-BS reality.</p>
<h2>1. Antarctica is Earth’s largest heat regulator (not the Amazon)</h2>
<p>Most people think forests regulate climate. That’s shallow thinking.</p>
<p>Antarctica regulates planetary temperature through physics, not biology.</p>
<h3>How it works</h3>
<ul>
    <li>White ice reflects ~80–90% of solar radiation (albedo effect)</li>
    <li>Oceans absorb heat; ice rejects it</li>
    <li>Antarctica acts like a giant heat mirror</li>
</ul>
<p>Lose ice → darker ocean exposed → more heat absorbed → more melting.<br/>This is a positive feedback loop, not gradual warming.</p>
<blockquote><p>Once this loop crosses a threshold, it does not stop even if emissions drop.</p></blockquote>
<h2>2. Antarctic ice = Earth’s climate memory (800,000+ years)</h2>
<p>Ice cores from Antarctica are time machines.</p>
<h3>What ice cores contain</h3>
<ul>
    <li>Trapped air bubbles (ancient atmosphere)</li>
    <li>CO₂, methane, oxygen ratios</li>
    <li>Volcanic ash layers</li>
    <li>Temperature proxies</li>
</ul>
<blockquote><p><strong>Fact that should scare you:</strong><br/>We know current CO₂ levels are abnormal because Antarctica preserved proof.</p></blockquote>
<h3>Unique insight</h3>
<p>Every ice age and warming cycle follows a pattern</p>
<ul>
    <li>CO₂ rise always comes first</li>
    <li>Temperature follows later</li>
</ul>
<p>This kills the “climate change is natural” argument completely.</p>
<h2>3. Antarctica controls global sea level — not evenly, but brutally</h2>
<p>Antarctica holds ~70% of Earth’s freshwater.</p>
<h3>Numbers that matter</h3>
<ul>
    <li>Complete Antarctic melt = ~58 meters sea-level rise</li>
    <li>West Antarctic Ice Sheet alone = 3–5 meters</li>
    <li>Thwaites Glacier (called Doomsday Glacier) is already unstable</li>
</ul>
<p>This won’t flood equally.</p>
<h3>Who gets hit first</h3>
<ul>
    <li>Coastal megacities (Mumbai, NYC, Shanghai)</li>
    <li>Island nations (existential threat)</li>
    <li>Delta regions (Bangladesh, Nile, Mekong)</li>
</ul>
<blockquote><p><strong>Important:</strong><br/>Sea level rise from Antarctica is nonlinear.<br/>Ice shelves collapse → glaciers accelerate → irreversible flow into ocean.<br/>You don’t get warning decades. You get sudden acceleration.</p></blockquote>
<h2>4. Antarctic Ocean circulation drives global weather</h2>
<p>Antarctica powers the global ocean conveyor belt.</p>
<h3>Key mechanism</h3>
<ul>
    <li>Cold, salty water sinks near Antarctica</li>
    <li>Drives deep-ocean circulation</li>
</ul>
<h3>Regulates:</h3>
<ul>
    <li>Monsoons</li>
    <li>El Niño / La Niña patterns</li>
    <li>European winters</li>
    <li>African rainfall</li>
</ul>
<p>If Antarctic meltwater freshens the ocean:</p>
<ul>
    <li>Deep-water formation slows</li>
    <li>Currents weaken</li>
    <li>Weather becomes chaotic, not just warmer</li>
</ul>
<p>That means:</p>
<ul>
    <li>Unpredictable droughts</li>
    <li>Extreme floods</li>
    <li>Crop failure patterns break</li>
</ul>
<blockquote><p>Climate chaos ≠ global warming.<br/>Chaos is worse.</p></blockquote>
<h2>5. Sea ice loss affects ecosystems thousands of km away</h2>
<p>Antarctica isn’t biologically rich — but it’s structurally critical.</p>
<h3>Krill = foundation species</h3>
<p>Antarctic krill feed:</p>
<ul>
    <li>Whales</li>
    <li>Seals</li>
    <li>Penguins</li>
    <li>Fish</li>
</ul>
<p>Krill depend on sea ice algae.</p>
<p>Less ice → less algae → krill collapse → entire Southern Ocean food web destabilizes.</p>
<p>This affects:</p>
<ul>
    <li>Global fisheries</li>
    <li>Carbon absorption by oceans</li>
    <li>Marine biodiversity worldwide</li>
</ul>
<blockquote><p>This is a bottom-up collapse, not visible until it’s too late.</p></blockquote>
<h2>6. Antarctica absorbs humanity’s damage silently</h2>
<p>This is uncomfortable but true.</p>
<p>Antarctica currently:</p>
<ul>
    <li>Absorbs excess atmospheric heat</li>
    <li>Locks CO₂ into cold oceans</li>
    <li>Stores freshwater instead of releasing it</li>
</ul>
<p>It has been buffering human emissions.</p>
<p>That buffer is failing.</p>
<blockquote><p>Once Antarctica switches from:<br/>climate stabilizer → climate amplifier<br/>We lose control of timelines.</p></blockquote>
<h2>7. Unique, disturbing facts most people don’t know</h2>
<p>Here are facts you won’t hear in documentaries:</p>
<ul>
    <li>Antarctica is warming faster from below (warm ocean currents) than from air temperature</li>
    <li>Ice shelves don’t raise sea level — but they hold back glaciers</li>
    <li>Once a glacier’s grounding line retreats, it cannot reattach</li>
    <li>Some Antarctic changes are already committed even if emissions stop today</li>
    <li>Antarctica doesn’t respond politically, economically, or emotionally — only physically</li>
</ul>
<blockquote><p>Nature doesn’t negotiate.</p></blockquote>
<h2>8. Why Antarctica matters more than the Arctic</h2>
<p>People focus on the Arctic because it’s visible and inhabited.</p>
<p>That’s a mistake.</p>
<div class="overflow-x-auto rounded-lg border border-border/50 bg-card/30 p-1 my-6">
<table class="my-0 w-full">
    <thead class="[&_tr]:border-b-0">
        <tr class="border-b border-primary/20">
            <th class="p-3 text-left font-headline text-accent">Feature</th>
            <th class="p-3 text-left font-headline text-accent">Arctic</th>
            <th class="p-3 text-left font-headline text-accent">Antarctica</th>
        </tr>
    </thead>
    <tbody class="[&_tr:last-child]:border-0">
        <tr class="border-b border-border/50">
            <td class="p-3 font-semibold">Ice Type</td>
            <td class="p-3">Floating ice</td>
            <td class="p-3">Land ice</td>
        </tr>
        <tr class="border-b border-border/50">
            <td class="p-3 font-semibold">Melt Type</td>
            <td class="p-3">Faster melt</td>
            <td class="p-3">More catastrophic melt</td>
        </tr>
        <tr class="border-b border-border/50">
            <td class="p-3 font-semibold">Primary Impact</td>
            <td class="p-3">Local impact</td>
            <td class="p-3">Global sea-level control</td>
        </tr>
        <tr>
            <td class="p-3 font-semibold">Feedback Loop</td>
            <td class="p-3">Regional feedback</td>
            <td class="p-3">Planetary feedback</td>
        </tr>
    </tbody>
</table>
</div>
<blockquote><p>Antarctica is slower — but terminal.</p></blockquote>
`;

const visitPageContent = `
<p><strong>This is not tourism-lite. It’s expensive, regulated, weather-dependent logistics.</strong> Anyone telling you otherwise is lying or selling junk trips.</p>
<h2>1. When to go — months that actually work</h2>
<p>Only window: November to March (Southern Hemisphere summer)</p>
<h3>Month-by-month reality</h3>
<ul>
    <li><strong>November (Early season)</strong><br/>Pros: pristine snow, fewer tourists, dramatic landscapes<br/>Cons: colder, rougher seas, limited wildlife</li>
    <li><strong>December–January (Peak, best overall)</strong><br/>Pros: warmest temps (−2°C to 5°C), long daylight, penguin chicks<br/>Cons: highest prices, crowded ships</li>
    <li><strong>February–March (Late season)</strong><br/>Pros: whales everywhere, calmer seas<br/>Cons: melting snow = muddy landings, some colonies disperse</li>
</ul>
<blockquote><p><strong>Blunt advice:</strong><br/>If you can afford it, December or January. Everything else is compromise.</p></blockquote>
<h2>2. Shortest & safest route (there is only one sensible way)</h2>
<h3>Standard route (90% of visitors)</h3>
<p>Fly to Ushuaia, board an expedition ship, cross the Drake Passage (2 days), and reach the Antarctic Peninsula. This is the shortest sea route on Earth to Antarctica.</p>
<h3>Alternative (less sea sickness, more money)</h3>
<p>Fly from Punta Arenas to King George Island and join a ship already in Antarctica. This costs more and has fewer weather guarantees.</p>
<blockquote><p><strong>Hard truth:</strong><br/>If you can’t handle rough seas, don’t romanticize it. The Drake Passage has earned its reputation.</p></blockquote>
<h2>3. Trip duration — what’s realistic</h2>
<ul>
    <li>10–12 days → rushed, minimal landings</li>
    <li>12–14 days → ideal (recommended)</li>
    <li>18–21 days → deep exploration, higher cost</li>
</ul>
<p>Anything under 10 days is marketing nonsense.</p>
<h2>4. What you actually do there (no shopping, no cities)</h2>
<h3>Core activities</h3>
<ul>
    <li>Zodiac landings on ice and islands</li>
    <li>Penguin, seal, and whale observation</li>
    <li>Short guided hikes</li>
    <li>Iceberg cruising</li>
    <li>Scientific briefings & lectures on board</li>
</ul>
<h3>Optional (extra cost / limited slots)</h3>
<ul>
    <li>Kayaking</li>
    <li>Polar camping</li>
    <li>Mountaineering</li>
    <li>Photography workshops</li>
</ul>
<blockquote><p>You do not roam freely.<br/>Every step is regulated to protect the ecosystem.</p></blockquote>
<h2>5. Price — let’s kill the fantasy now</h2>
<h3>Real cost breakdown (USD per person)</h3>
<ul>
    <li>Budget expedition: $8,000–$10,000</li>
    <li>Standard expedition: $12,000–$18,000</li>
    <li>Luxury ships: $20,000–$30,000+</li>
    <li>Fly-in trips: add $3,000–$6,000</li>
</ul>
<h3>Not included:</h3>
<ul>
    <li>Flights to South America</li>
    <li>Insurance (mandatory)</li>
    <li>Gear rentals (if not included)</li>
    <li>Tips (yes, they expect it)</li>
</ul>
<blockquote><p>If someone quotes $3–4k, it’s a scam or not Antarctica.</p></blockquote>
<h2>6. Equipment — what actually matters (no Instagram gear)</h2>
<h3>Clothing (non-negotiable)</h3>
<ul>
    <li>Expedition parka (often provided by the operator)</li>
    <li>Waterproof insulated boots</li>
    <li>Thermal base layers (merino wool preferred)</li>
    <li>Mid-layer fleece/down</li>
    <li>Waterproof shell pants & jacket</li>
    <li>Insulated gloves + liner gloves</li>
    <li>Balaclava + neck gaiter</li>
    <li>UV-protection goggles/sunglasses</li>
</ul>
<h3>Personal gear</h3>
<ul>
    <li>30–40L waterproof backpack</li>
    <li>Dry bags for electronics</li>
    <li>Sunscreen (yes, the UV is brutal)</li>
    <li>Motion sickness medication</li>
    <li>Camera with cold-rated batteries</li>
</ul>
<blockquote><p><strong>Mistake people make:</strong><br/>Fashion jackets. They fail. You freeze.</p></blockquote>
<h2>7. Rules you must follow (no exceptions)</h2>
<p>Antarctica is governed under the Antarctic Treaty System via IAATO (International Association of Antarctica Tour Operators).</p>
<h3>Key restrictions:</h3>
<ul>
    <li>No touching or feeding wildlife</li>
    <li>No food on land</li>
    <li>No souvenirs (not even stones or feathers)</li>
    <li>Boots must be disinfected before and after every landing</li>
    <li>Maintain mandatory distances from animals (e.g., 5 meters from penguins)</li>
</ul>
<blockquote><p>Break the rules → the expedition company is liable → your trip ends for you.</p></blockquote>
<h2>8. Physical & mental preparation (ignored by amateurs)</h2>
<h3>Fitness</h3>
<p>You need good balance, endurance, and cold tolerance. Getting in and out of Zodiacs in rough seas is physical. Ice is slippery, and falls are dangerous.</p>
<h3>Mental</h3>
<p>There is no phone signal and limited (or no) internet. Weather delays are normal, and plans change hourly. If uncertainty or being disconnected bothers you, do not go.</p>
<blockquote><p>Antarctica punishes entitlement.</p></blockquote>
<h2>9. Who should NOT go</h2>
<p>Be honest with yourself. This trip is not for you if you have:</p>
<ul>
    <li>Severe motion sickness</li>
    <li>Poor cold tolerance</li>
    <li>Expectations of luxury tourism</li>
    <li>A tight budget</li>
    <li>A need for constant connectivity</li>
</ul>
<h2>Final verdict (read twice)</h2>
<blockquote>
<p>Visiting Antarctica is expensive, physically demanding, strictly controlled, and unforgettable if done right. It is not a vacation. It’s a logistics-heavy expedition with comfort added later.</p>
</blockquote>
`;

const factsPageContent = `
<p><strong>No romance. No myths. These are structural truths about the coldest, driest, most decisive place on Earth.</strong></p>
<ol>
    <li><p><strong>Antarctica is the highest continent, not the flattest.</strong><br/>Average elevation ≈ 2,300 m. Why it matters: colder air + thin oxygen + brutal winds. This is why temperatures collapse so hard and machines fail. Cold + altitude is a multiplier, not a detail.</p></li>
    <li><p><strong>Most of Antarctica is warmer at the bottom than the top.</strong><br/>Ice is melting from below, driven by warm circumpolar deep water. Air temperature is secondary. Consequence: even if surface temps stabilize, basal melt can continue and accelerate ice loss.</p></li>
    <li><p><strong>Ice shelves don’t raise sea level — but losing them is catastrophic.</strong><br/>Ice shelves float, so their melt doesn’t add water. Their job is buttressing: slowing inland glaciers. When shelves collapse, glaciers surge into the ocean. That’s when sea level jumps.</p></li>
    <li><p><strong>Antarctica has 400+ subglacial lakes.</strong><br/>Liquid water exists under kilometers of ice due to pressure + geothermal heat. Some lakes are isolated for millions of years. They’re biological time capsules—and testbeds for alien-life theories.</p></li>
    <li><p><strong>The coldest place on Earth is not the South Pole.</strong><br/>Record low (−89.2°C) happened near Vostok Station. Even colder pockets (−98°C) occur on ridges where cold air pools—too extreme for permanent stations.</p></li>
    <li><p><strong>Antarctica is a desert.</strong><br/>Annual precipitation inland: &lt;50 mm (water equivalent). It’s dry because cold air can’t hold moisture. Snow accumulates slowly but never melts—so thickness still grows.</p></li>
    <li><p><strong>Winds can outrun hurricanes (near the ground).</strong><br/>Katabatic winds are gravity-driven cold air avalanches. They exceed 200 km/h and don’t care about forecasts. Visibility can drop to zero in seconds.</p></li>
    <li><p><strong>Antarctica runs the global ocean conveyor.</strong><br/>The cold, salty water formed here sinks and spreads worldwide. Freshwater from melt weakens this engine, scrambling weather far from the poles.</p></li>
    <li><p><strong>Most meteorites are found in Antarctica.</strong><br/>Dark rocks on white ice + ice flow concentrates them in “blue-ice” fields. Antarctica is Earth’s meteorite collection tray.</p></li>
    <li><p><strong>Time behaves differently.</strong><br/>Summer: 24-hour daylight. Winter: 24-hour darkness. Human circadian rhythms collapse without strict schedules. Stations use artificial light cycles to prevent cognitive decay.</p></li>
    <li><p><strong>Fire is deadlier than cold inside stations.</strong><br/>Cold preserves oxygen-rich air and dries materials. If a fire starts, evacuation may be impossible. Every station treats fire as the top internal threat.</p></li>
    <li><p><strong>Antarctica stores Earth’s climate memory.</strong><br/>Ice cores preserve 800,000+ years of atmosphere. They prove today’s CO₂ spike is abrupt, human-driven, and unprecedented in that record.</p></li>
    <li><p><strong>The continent is legally demilitarized.</strong><br/>Governed by the Antarctic Treaty System: No military bases, no mining, science only. It’s the rare place where geopolitics is restrained by physics and paperwork.</p></li>
    <li><p><strong>Some Antarctic changes are already locked in.</strong><br/>Ice dynamics include thresholds. Once grounding lines retreat past certain points, reversal is physically implausible on human timescales—even if emissions stop.</p></li>
    <li><p><strong>Antarctica is quieter than space.</strong><br/>In winter, with no wind, sound dies instantly. No insects. No birds. No leaves. The silence is so complete it causes anxiety and auditory hallucinations in some people.</p></li>
    <li><p><strong>UV exposure is extreme.</strong><br/>Ozone depletion + reflective snow = high UV. You can get sunburn at −20°C. Eye damage is a real risk without protection.</p></li>
    <li><p><strong>You can’t “own” Antarctica, but you can be prosecuted there.</strong><br/>Crimes are handled by your home country’s laws. Jurisdiction follows nationality, not location.</p></li>
    <li><p><strong>Antarctica decides outcomes silently.</strong><br/>It doesn’t flood cities directly. It changes rates—sea level rise, currents, heat absorption. Rates kill planning. That’s the danger.</p></li>
</ol>
`;

const historyPageContent = `
<p>Antarctica’s history is a testament to human endurance, ambition, and the relentless drive to explore the unknown. Before the 19th century, it was a theoretical landmass—<i>Terra Australis Incognita</i>—hypothesized to exist simply to balance the lands of the Northern Hemisphere. Today, it stands as a symbol of scientific collaboration, yet the journey from myth to modern reality is paved with unimaginable hardship.</p>
<h2>1. The Early Sightings (1820s)</h2>
<p>The existence of Antarctica was finally confirmed in 1820. Three completely separate expeditions, led by Russian Fabian Gottlieb von Bellingshausen, British Edward Bransfield, and American Nathaniel Palmer, spotted the ice shelf or the Antarctic Peninsula within days or weeks of each other.</p>
<p>These early encounters were not driven by pure science but by the lucrative sealing industry. Sealers ruthlessly exploited the beaches of sub-Antarctic islands, nearly driving several species to extinction before pushing further south into the ice.</p>
<h2>2. The Heroic Age of Antarctic Exploration (Late 19th - Early 20th Century)</h2>
<p>This period is defined by intense, internationally competitive expeditions aimed at scientific discovery and geographic milestones—most notably, the race to the South Pole. It was an era of wood, canvas, and animal power against the brute force of the polar environment.</p>
<ul>
    <li><strong>Robert Falcon Scott (UK):</strong> Led the Discovery Expedition (1901–1904) and the tragic Terra Nova Expedition (1910–1913). Scott and his team reached the Pole, only to find they had been beaten, and all perished on the harrowing return journey.</li>
    <li><strong>Roald Amundsen (Norway):</strong> The ultimate pragmatist. Using sled dogs, skis, and drawing on Inuit survival techniques, Amundsen’s team became the first to reach the South Pole on December 14, 1911. They returned safely, a masterful execution of polar logistics.</li>
    <li><strong>Ernest Shackleton (UK):</strong> Famous not for reaching goals, but for his extraordinary leadership in failure. During the Imperial Trans-Antarctic Expedition (1914–1917), his ship, the <i>Endurance</i>, was crushed by ice. Shackleton’s open-boat journey across the Southern Ocean to rescue his men remains one of the greatest survival stories in history. Every man survived.</li>
</ul>
<blockquote><p>"For scientific discovery give me Scott; for speed and efficiency of travel give me Amundsen; but when disaster strikes and all hope is gone, get down on your knees and pray for Shackleton." — Apsley Cherry-Garrard</p></blockquote>
<h2>3. The Mechanized Era and the IGY (Mid-20th Century)</h2>
<p>Following WWII, the approach to Antarctica shifted from heroic survival to sustained, mechanized occupation. Airplanes, tractors, and icebreakers replaced dogs and wooden ships. The U.S. Navy’s Operation Highjump (1946–1947) was the largest expedition ever mounted, involving thousands of men and mapping vast stretches of the coastline.</p>
<p>The turning point, however, was the <strong>International Geophysical Year (IGY) of 1957–1958</strong>. Twelve nations established over 60 stations across the continent. It proved that international scientific cooperation could transcend Cold War geopolitical tensions, fundamentally changing the human relationship with the continent.</p>
<h2>4. The Antarctic Treaty (1959 - Present)</h2>
<p>The success of the IGY led directly to the Antarctic Treaty, signed in 1959. It is a unique geopolitical document that:</p>
<ul>
    <li>Demilitarizes the entire continent.</li>
    <li>Suspends all territorial sovereignty claims.</li>
    <li>Dedicates the land to peaceful, cooperative scientific research.</li>
</ul>
<p>Since its signing, subsequent protocols have banned mining and established strict environmental protections. Antarctica remains the only continent without a native human population, governed not by a sovereign state, but by an international agreement dedicated to science and preservation.</p>
`;

const researchPageContent = `
<p>Antarctica is not merely a continent; it is Earth's premier natural laboratory. Separated from the industrialized world by the roaring Southern Ocean, its pristine environment allows scientists to study phenomena impossible to observe anywhere else. From ancient climate history locked in ice to the mysteries of the cosmos viewed through the crystal-clear polar atmosphere, research here is critical to understanding our planet's past and securing its future.</p>
<h2>1. Glaciology and Paleoclimatology: Reading the Ice</h2>
<p>The Antarctic ice sheet is a massive archive of Earth's climate history. By drilling deep into the ice—sometimes over 3 kilometers down—scientists extract ice cores containing trapped air bubbles, dust, and isotopes from hundreds of thousands of years ago.</p>
<ul>
    <li><strong>The Vostok Core:</strong> Provided continuous climate data going back 400,000 years, conclusively linking past atmospheric carbon dioxide concentrations with global temperature variations.</li>
    <li><strong>EPICA Dome C:</strong> Extended this record to 800,000 years. Current efforts are targeting a 1.5-million-year-old ice core to understand even older climate transitions.</li>
</ul>
<p>This data is the bedrock of modern climate science, proving unequivocally that current greenhouse gas levels are an anomaly driven by human activity.</p>
<h2>2. Astronomy and Astrophysics: The Clear View Up</h2>
<p>The South Pole is arguably the best location on Earth for certain types of astronomy. The high altitude (about 2,800 meters), extreme cold (which reduces atmospheric moisture to near zero), and stable atmosphere provide unparalleled viewing conditions.</p>
<ul>
    <li><strong>IceCube Neutrino Observatory:</strong> A completely unique telescope built <i>into</i> the ice. It consists of thousands of sensors deployed deep within a cubic kilometer of clear Antarctic ice to detect neutrinos—ghostly subatomic particles originating from the most violent events in the universe, such as black holes and supernovas.</li>
    <li><strong>South Pole Telescope (SPT):</strong> Designed to survey the cosmic microwave background radiation, studying the very early universe and the distribution of dark energy and dark matter.</li>
</ul>
<h2>3. Marine Biology and Ecology: Life on the Edge</h2>
<p>The Southern Ocean surrounding Antarctica is one of the most productive marine ecosystems on the planet, despite the extreme cold and seasonal darkness.</p>
<ul>
    <li><strong>Krill Research:</strong> Antarctic krill are the keystone species of the Southern Ocean, supporting the entire food web (penguins, seals, whales). Scientists study how changing ice conditions and ocean acidification threaten krill populations, which has cascading effects globally.</li>
    <li><strong>Adaptation to Extreme Cold:</strong> Researchers investigate how Antarctic fish survive sub-zero waters without freezing, discovering unique "antifreeze glycoproteins" in their blood. Understanding these adaptations has profound implications for medicine, evolutionary biology, and biotechnology.</li>
</ul>
<h2>4. Geology and Geophysics: What Lies Beneath</h2>
<p>Beneath the kilometers of ice lies a complex topography of mountain ranges, vast rift systems, and an extensive network of subglacial lakes and rivers.</p>
<ul>
    <li><strong>Subglacial Lakes (e.g., Lake Vostok):</strong> These massive bodies of liquid water are kept liquid by geothermal heat and the pressure of the ice above. They have been sealed off from the surface for millions of years. Drilling into these lakes (with extreme caution to prevent contamination) offers a chance to find unique extremophilic microbial life, providing clues about the potential for life on icy moons like Jupiter's Europa.</li>
    <li><strong>Tectonic Studies:</strong> Mapping the bedrock helps understand the breakup of the supercontinent Gondwana and precisely models how the ice sheet flows and responds to warming oceans.</li>
</ul>
<h2>5. Logistical Realities of Antarctic Science</h2>
<p>Conducting this research requires immense logistical support. Stations range from small, seasonal field camps to massive operations like the US McMurdo Station (operating similarly to a small town). Supplying these bases with fuel, food, and equipment via icebreakers and specialized aircraft is among the most challenging and expensive logistical operations in the world.</p>
`;

const wildlifePageContent = `
<p><strong>Antarctic wildlife operates on the absolute edge of biological possibility.</strong> The terrestrial environment is nearly sterile, home only to microscopic organisms, tardigrades, and hardy lichens clinging to exposed rock. However, the Southern Ocean surrounding the continent teems with an astonishing concentration of life, driven by nutrient-rich upwellings that sustain a massive, though delicate, food web.</p>
<h2>1. The Foundation: Krill (The Keystone)</h2>
<p>Everything in the Antarctic ecosystem ultimately relies on <i>Euphausia superba</i>—Antarctic krill. These small, shrimp-like crustaceans form immense swarms that can stretch for miles, visible from space.</p>
<ul>
    <li>They graze on phytoplankton growing under the sea ice.</li>
    <li>Total biomass is estimated at 300–500 million tonnes, making them one of the most abundant animal species on Earth.</li>
    <li><strong>The Threat:</strong> Krill face a dual threat from commercial fishing (used for aquaculture feed and omega-3 supplements) and the loss of the sea ice they rely on for breeding and shelter.</li>
</ul>
<h2>2. The Icons: Penguins</h2>
<p>Penguins are the defining birds of Antarctica. While there are 18 species globally, only a few are truly Antarctic.</p>
<ul>
    <li><strong>Emperor Penguins:</strong> The giants (up to 1.2m tall). They are the only species that breeds during the brutal Antarctic winter on the open sea ice. Males huddle together for months in complete darkness, balancing an egg on their feet in −60°C winds while the females hunt.</li>
    <li><strong>Adélie Penguins:</strong> Small, feisty, and intensely numerous. They breed on rocky shores during the short summer. They depend heavily on sea ice for foraging.</li>
    <li><strong>Chinstrap & Gentoo Penguins:</strong> Often found on the warmer Antarctic Peninsula. As the Peninsula warms, sea ice-dependent Adélies are declining, while Gentoos (who prefer open water) are expanding their range southward.</li>
</ul>
<h2>3. The Predators: Seals</h2>
<p>Six species of seals live in established Antarctic waters, thriving on the bounty of fish, squid, and krill.</p>
<ul>
    <li><strong>Leopard Seals:</strong> Solitary, massive (up to 3.5m), and formidable apex predators. They possess massive jaws and a unique dentition that allows them to hunt penguins on the ice edge, while also filtering krill from the water.</li>
    <li><strong>Weddell Seals:</strong> The southernmost mammals on Earth. They live fast to the coastal ice, maintaining breathing holes by gnawing the ice with their powerful incisors. They can dive over 600m deep and hold their breath for over an hour.</li>
    <li><strong>Crabeater Seals:</strong> Despite the name, they don't eat crabs; they are specialized krill feeders. They are considered the most abundant large mammal on Earth (excluding humans).</li>
</ul>
<h2>4. The Giants: Whales</h2>
<p>The Southern Ocean is a crucial feeding ground for numerous cetacean species.</p>
<ul>
    <li><strong>Baleen Whales:</strong> Blue, Fin, Humpback, and Minke whales migrate thousands of miles to gorge on Antarctic krill during the summer. A blue whale can consume up to 4 tons of krill per day. They build up massive blubber reserves here before returning north to breed.</li>
    <li><strong>Orcas (Killer Whales):</strong> Highly intelligent apex predators. Different "ecotypes" target different prey. "Type B" orcas famously use coordinated physical attacks to create waves that wash seals off ice floes.</li>
</ul>
<h2>5. The Unseen: Benthic Life</h2>
<p>Beneath the ice, the sea floor (benthos) holds surprising diversity, characterized by gigantism and slow growth rates due to the cold, stable conditions.</p>
<ul>
    <li>Sea spiders the size of dinner plates.</li>
    <li>Sponges and corals that may be hundreds or thousands of years old.</li>
    <li>These bottom-dwelling communities are highly vulnerable to physical disturbance, such as passing icebergs scraping the seafloor, or changes in ocean temperature.</li>
</ul>
`;

const expeditionPageContent = `
<p>Undertaking an expedition to Antarctica today is vastly different from the Heroic Age, yet it remains one of the most challenging environments on Earth. Modern expeditions blend extreme sports, scientific field research, and rigorous survival discipline. This page details what it takes to organize, launch, and survive a contemporary Antarctic expedition.</p>
<h2>1. Modern Logistics and Support</h2>
<p>Gone are the days of wood and canvas alone. Today's deep field expeditions rely on a highly specialized network of transport and support systems.</p>
<ul>
    <li><strong>Air Support:</strong> Ski-equipped aircraft like the Twin Otter and Basler BT-67 are the workhorses of the continent, capable of landing on unprepared snow surfaces to deploy teams and establish fuel caches.</li>
    <li><strong>Ground Transport:</strong> Specialized tracked vehicles (like PistenBullys) towing sledges are used for heavy traverses, moving thousands of pounds of fuel and equipment across the ice shelf or plateau.</li>
</ul>
<h2>2. Expedition Profiles</h2>
<p>Expeditions generally fall into several categories, each with its own risk profile and objectives.</p>
<ul>
    <li><strong>Deep Field Science Camps:</strong> Teams of scientists establish temporary camps hundreds of miles from the main bases. They might spend weeks drilling ice cores, collecting meteorites, or surveying geology. These require massive logistical backing but operate in nearly complete isolation once deployed.</li>
    <li><strong>Extreme Distance Crossings:</strong> Athletes and adventurers still cross the continent, often unsupported (no food drops) and unassisted (no kites or vehicles). These grueling journeys demand dragging sleds weighing over 100kg for thousands of kilometers, battling crevasses and relentless sastrugi (wind-blown ice ridges).</li>
    <li><strong>Mountaineering:</strong> The Vinson Massif (Antarctica's highest peak) is a target for climbers completing the Seven Summits. Beyond Vinson, much of the continent's interior mountains remain unclimbed, offering pristine, highly challenging alpine routes.</li>
</ul>
<h2>3. Survival in the Deep Field</h2>
<p>When operating away from established bases, expeditioners must be entirely self-sufficient.</p>
<ul>
    <li><strong>Shelter:</strong> Specialized double-walled dome tents designed to withstand hurricane-force winds. Sleep is managed in extreme cold-weather sleeping bags rated to -40°C or lower.</li>
    <li><strong>Caloric Intake:</strong> Pulling a sled in extreme cold requires 5,000 to 7,000 calories a day. Diets consist of dehydrated meals, copious amounts of butter, chocolate, and freeze-dried meats to maximize caloric density.</li>
    <li><strong>Crevasse Rescue:</strong> The greatest physical danger while traveling. All team members must be expertly trained in crevasse rescue techniques, often traveling roped together. The surface snow often hides deep chasms capable of swallowing a person or a vehicle.</li>
</ul>
<h2>4. The Psychological Toll</h2>
<p>The physical demands of an expedition are matched by the mental challenges. The sensory deprivation of the polar plateau—endless white in every direction, no sounds other than the wind—can cause severe psychological strain. Teams must manage conflict, maintain morale, and stay hyper-vigilant for weeks or months in an environment that allows zero margin for error.</p>
`;

const pageConfig: { [key: string]: { title: string; imageId: string; staticContent: string; } } = {
    history: {
        title: "History of Antarctica",
        imageId: "history-exploration",
        staticContent: historyPageContent,
    },
    life: {
        title: "Life in Antarctica",
        imageId: "life-research-station",
        staticContent: lifePageContent,
    },
    research: {
        title: "Scientific Research",
        imageId: "research-scientist",
        staticContent: researchPageContent,
    },
    climate: {
        title: "Climate & Global Impact",
        imageId: "climate-glacier",
        staticContent: climatePageContent,
    },
    wildlife: {
        title: "Antarctic Wildlife",
        imageId: "wildlife-penguins",
        staticContent: wildlifePageContent,
    },
    visit: {
        title: "How to Visit Antarctica",
        imageId: "visit-cruise-ship",
        staticContent: visitPageContent,
    },
    expedition: {
        title: "Antarctic Expeditions",
        imageId: "expedition-team",
        staticContent: expeditionPageContent,
    },
    'deep-facts': {
        title: "Deep Facts About Antarctica",
        imageId: "deep-facts",
        staticContent: factsPageContent,
    },
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const config = pageConfig[params.slug as keyof typeof pageConfig];
    if (!config) {
        return {};
    }
    return {
        title: `${config.title} | Antarctica Unveiled`,
    };
}


export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const config = pageConfig[slug as keyof typeof pageConfig];

    if (!config) {
        notFound();
    }

    const initialContent = config.staticContent;
    const heroImage = PlaceHolderImages.find(p => p.id === config.imageId);

    return (
        <article className="min-h-screen">
            {slug === "climate" && <Snowfall />}
            <header className="relative h-[38vh] min-h-[220px] md:h-[45vh] flex items-center justify-center text-center text-white overflow-hidden">
                {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                        data-ai-hint={heroImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />
                <div className="relative z-10 px-4 py-6">
                    <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in-down drop-shadow-lg">
                        {config.title}
                    </h1>
                </div>
            </header>

            <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
                <Card className="bg-card/80 backdrop-blur-sm border border-border/80 shadow-xl shadow-black/10 -mt-20 md:-mt-28 relative z-20 rounded-2xl overflow-hidden">
                    <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                        <ContentBody slug={slug} initialContent={initialContent} />
                    </CardContent>
                </Card>
            </div>
        </article>
    );
}
