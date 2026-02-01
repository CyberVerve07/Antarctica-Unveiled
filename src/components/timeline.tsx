import { Clock, Ship, Flag, Microscope, Handshake } from 'lucide-react';

const timelineEvents = [
  {
    year: '1773',
    title: 'First Crossing of Antarctic Circle',
    description: 'James Cook\'s HMS Resolution and Adventure are the first ships to cross the Antarctic Circle, though they never sight the continent.',
    icon: <Ship />,
  },
  {
    year: '1820',
    title: 'First Sighting of the Continent',
    description: 'Disputed first sightings by expeditions led by Fabian Gottlieb von Bellingshausen (Russia), Edward Bransfield (UK), and Nathaniel Palmer (USA).',
    icon: <Clock />,
  },
  {
    year: '1899',
    title: 'First Overwinter on the Mainland',
    description: 'Carsten Borchgrevink\'s British Antarctic Expedition builds the first huts on the continent at Cape Adare and spends the winter.',
    icon: <Flag />,
  },
  {
    year: '1911',
    title: 'Race to the South Pole',
    description: 'Roald Amundsen\'s Norwegian team reaches the South Pole on December 14, followed by Robert Falcon Scott\'s British party a month later.',
    icon: <Flag />,
  },
  {
    year: '1957-58',
    title: 'International Geophysical Year (IGY)',
    description: 'A major international scientific effort that saw 12 nations establish over 50 research stations in Antarctica, marking the beginning of modern scientific cooperation.',
    icon: <Microscope />,
  },
  {
    year: '1959',
    title: 'The Antarctic Treaty',
    description: 'Signed by 12 nations, the treaty establishes Antarctica as a scientific preserve, guarantees freedom of scientific investigation, and bans military activity.',
    icon: <Handshake />,
  },
  {
    year: '1970s',
    title: 'Entry into Global Climate Science',
    description: 'Ice cores reveal past climate cycles and the CO₂-temperature link. Antarctica becomes the baseline reference for Earth’s climate, without which modern climate science would not exist.',
    icon: <Microscope />,
  },
  {
    year: '1985',
    title: 'Ozone Hole Discovered',
    description: 'British scientists detect massive ozone depletion, leading directly to the 1987 Montreal Protocol—proving global coordination can address planetary-scale damage.',
    icon: <Handshake />,
  },
  {
    year: '1991',
    title: 'Madrid Protocol Signed',
    description: 'The Protocol on Environmental Protection bans mining indefinitely and declares Antarctica a "natural reserve," mandating waste removal and environmental impact assessments.',
    icon: <Handshake />,
  },
  {
    year: '2000s',
    title: 'The Climate Alarm Sounds',
    description: 'Major ice shelf collapses (Larsen A & B) and precise satellite monitoring confirm Antarctica\'s contribution to sea level rise. The continent shifts from a research subject to a global warning signal.',
    icon: <Clock />,
  },
  {
    year: '2010s',
    title: 'Irreversibility in Focus',
    description: 'The conversation shifts from "if" to "how fast." Scientists confirm West Antarctic Ice Sheet instability and that some melting thresholds have already been crossed, driven by ocean heat.',
    icon: <Microscope />,
  },
  {
    year: '2020s-Present',
    title: 'Quiet Geopolitics Returns',
    description: 'Nations expand their station networks and infrastructure, creating a tension between scientific cooperation and strategic positioning for a potential post-treaty future.',
    icon: <Flag />,
  },
];

export function Timeline() {
  return (
    <div className="mb-16">
      <h2 className="font-headline text-3xl md:text-4xl mt-0 mb-12 text-center text-primary">A Timeline of Exploration</h2>
      <div className="relative wrap overflow-hidden p-2 md:p-10 h-full">
        <div className="absolute left-1/2 -ml-[2px] h-full border-2 border-dashed border-primary/20"></div>
        {timelineEvents.map((event, index) => (
          <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
              <div className="h-full w-full text-primary-foreground flex items-center justify-center">
                {event.icon}
              </div>
            </div>
            <div className="order-1 bg-card rounded-lg shadow-xl w-5/12 px-6 py-4 border border-border">
              <p className="font-bold text-accent text-lg">{event.year}</p>
              <h3 className="mb-3 font-bold text-foreground text-xl">{event.title}</h3>
              <p className="text-sm leading-snug tracking-wide text-muted-foreground">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
