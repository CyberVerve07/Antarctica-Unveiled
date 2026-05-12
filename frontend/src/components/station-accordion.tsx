import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProseContent } from "@/components/prose-content";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const stations = [
    {
        name: "McMurdo Station (USA)",
        imageId: "mcmurdo-station",
        content: `
<h4>The backbone of Antarctic operations</h4>
<h4>Location & Scale</h4>
<p>Ross Island (coastal Antarctica)<br/>Largest station on the continent</p>
<p><strong>Population:</strong><br/>Summer: 800–1,000<br/>Winter: ~200</p>
<p>This is not a “camp.” It’s a small industrial town.</p>
<h4>Purpose</h4>
<p>McMurdo exists for one reason: logistics + science support.</p>
<ul>
    <li>Supply hub for South Pole Station</li>
    <li>Main airfield (ice runways)</li>
    <li>Cargo, fuel, food distribution</li>
    <li>Scientific research (biology, geology, climate, oceanography)</li>
</ul>
<p>If McMurdo shuts down, most Antarctic science collapses.</p>
<h4>Infrastructure</h4>
<ul>
    <li>Power plant (diesel-based)</li>
    <li>Desalination + ice-melting systems</li>
    <li>Hospital (basic surgery possible)</li>
    <li>Gym, cafeteria, workshops, labs</li>
    <li>Roads, heavy vehicles, cranes</li>
</ul>
<p>This is the only place in Antarctica that feels semi-normal. That’s intentional—to keep people functional.</p>
<h4>Risks & Reality</h4>
<ul>
    <li>Fire is the biggest danger (cold makes fire control harder)</li>
    <li>Isolation still brutal in winter</li>
    <li>Alcohol abuse and mental fatigue are known problems</li>
</ul>
<blockquote><p><strong>Bottom line:</strong><br/>McMurdo is Antarctica’s operating system.</p></blockquote>
        `
    },
    {
        name: "Vostok Station (Russia)",
        imageId: "vostok-station",
        content: `
<h4>The coldest place humans have ever worked</h4>
<h4>Location & Conditions</h4>
<p>East Antarctic Plateau<br/>Altitude: ~3,500 m</p>
<p>Coldest recorded temperature on Earth: −89.2°C</p>
<p>This station is pure suffering.</p>
<h4>Purpose</h4>
<ul>
    <li>Climate history (ice cores)</li>
    <li>Atmospheric science</li>
    <li>Study of Lake Vostok (subglacial lake buried under ~4 km of ice)</li>
</ul>
<p>Lake Vostok is isolated for millions of years. Studying it helps:</p>
<ul>
    <li>Understand ancient life</li>
    <li>Model extraterrestrial oceans (Europa, Enceladus)</li>
</ul>
<h4>Living Conditions</h4>
<p>Population: ~25–30 (summer), ~15 (winter)</p>
<ul>
    <li>Extremely low humidity (nosebleeds common)</li>
    <li>Constant hypoxia (altitude + cold)</li>
    <li>Equipment failure is routine</li>
</ul>
<p>People here don’t “work comfortably.”<br/>They endure.</p>
<h4>Extreme Reality</h4>
<ul>
    <li>Fuel freezes</li>
    <li>Plastic shatters</li>
    <li>Metal becomes brittle</li>
    <li>Breathing hurts</li>
</ul>
<p>In the 1980s, the station lost heating and researchers survived weeks at −60°C indoors.</p>
<blockquote><p><strong>Bottom line:</strong><br/>Vostok is where humans test the absolute limits of survival.</p></blockquote>
        `
    },
    {
        name: "Concordia Station (France/Italy)",
        imageId: "concordia-station",
        content: `
<h4>The most psychologically extreme station</h4>
<h4>Location</h4>
<p>Dome C, East Antarctica<br/>Altitude: ~3,200 m</p>
<p>Winter temperature: −60°C</p>
<p>Total isolation for 9 months<br/>No flights. No evacuation. Zero rescue.</p>
<h4>Purpose</h4>
<p>Concordia is less about Earth—and more about space.</p>
<p><strong>Research areas:</strong></p>
<ul>
    <li>Human psychology under isolation</li>
    <li>Sleep cycle disruption</li>
    <li>Immune system degradation</li>
    <li>Climate and atmospheric physics</li>
    <li>Astronomy (cleanest air on Earth)</li>
</ul>
<p>NASA and ESA use Concordia data to prepare for:</p>
<ul>
    <li>Moon bases</li>
    <li>Mars missions</li>
</ul>
<h4>Living Setup</h4>
<p>Two connected towers</p>
<ul>
    <li>One for living</li>
    <li>One for science</li>
</ul>
<p>Artificial light cycles<br/>Strict schedules<br/>Heavy mental health monitoring</p>
<p><strong>Crew size:</strong><br/>Summer: ~50<br/>Winter: ~12</p>
<p>You live with the same 11 people for 9 months.<br/>No escape. No rotation.</p>
<h4>Psychological Risk</h4>
<p>This is the hardest station mentally.</p>
<ul>
    <li>Depression</li>
    <li>Cognitive slowdown</li>
    <li>Interpersonal conflict</li>
    <li>Seasonal affective disorder</li>
</ul>
<p>Only people with exceptional psychological stability are selected.</p>
<blockquote><p><strong>Bottom line:</strong><br/>Concordia is Antarctica’s Mars simulator.</p></blockquote>
        `
    }
];

const comparisonContent = `
<h4 class="text-center mt-12 mb-4 !text-accent">Direct Comparison</h4>
<div class="overflow-x-auto rounded-lg border border-border/50 bg-card/30 p-1">
<table class="my-0 w-full">
    <thead class="[&_tr]:border-b-0">
        <tr class="border-b border-primary/20">
            <th class="p-3 text-left font-headline text-accent">Station</th>
            <th class="p-3 text-left font-headline text-accent">Main Threat</th>
            <th class="p-3 text-left font-headline text-accent">Core Role</th>
        </tr>
    </thead>
    <tbody class="[&_tr:last-child]:border-0">
        <tr class="border-b border-border/50">
            <td class="p-3 font-semibold">McMurdo</td>
            <td class="p-3">Logistics failure</td>
            <td class="p-3">Backbone of all Antarctic ops</td>
        </tr>
        <tr class="border-b border-border/50">
            <td class="p-3 font-semibold">Vostok</td>
            <td class="p-3">Extreme cold + altitude</td>
            <td class="p-3">Physical survival limits</td>
        </tr>
        <tr>
            <td class="p-3 font-semibold">Concordia</td>
            <td class="p-3">Isolation + psychology</td>
            <td class="p-3">Space mission research</td>
        </tr>
    </tbody>
</table>
</div>
<blockquote class="mt-8">
<p><strong>Final hard truth</strong></p>
<p>McMurdo proves humans can build systems at scale.</p>
<p>Vostok proves nature still dominates us.</p>
<p>Concordia proves the mind breaks before the body.</p>
<p>Antarctica isn’t about discovery alone. It’s about learning how fragile humans really are when comfort is removed.</p>
</blockquote>
`;

export function StationAccordion() {
  return (
    <div className="mt-16">
        <h2 className="font-headline text-3xl md:text-4xl mb-8 text-center text-primary">Major Research Stations</h2>
        <Accordion type="single" collapsible className="w-full">
            {stations.map(station => {
                 const stationImage = PlaceHolderImages.find(p => p.id === station.imageId);
                 return (
                    <AccordionItem key={station.name} value={station.name} className="border-border/50">
                        <AccordionTrigger className="text-xl hover:no-underline text-accent hover:text-accent/80 font-headline">
                            {station.name}
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                            {stationImage && (
                                <div className="my-6 rounded-lg overflow-hidden border border-border/50">
                                    <Image
                                        src={stationImage.imageUrl}
                                        alt={stationImage.description}
                                        width={600}
                                        height={400}
                                        className="w-full object-cover"
                                        data-ai-hint={stationImage.imageHint}
                                    />
                                </div>
                            )}
                            <ProseContent content={station.content} />
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion>
        <ProseContent content={comparisonContent} className="mt-8" />
    </div>
  );
}
