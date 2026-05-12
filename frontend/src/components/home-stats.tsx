"use client";

import { Snowflake, Mountain, ThermometerSnowflake, Wind, Droplets, Clock } from "lucide-react";

const stats = [
  {
    icon: ThermometerSnowflake,
    value: "−89.2°C",
    label: "Coldest Recorded",
    sublabel: "Vostok Station, 1983",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/20",
  },
  {
    icon: Mountain,
    value: "14M km²",
    label: "Ice Sheet Area",
    sublabel: "98% of the continent",
    color: "text-sky-400",
    bgColor: "bg-sky-500/20",
  },
  {
    icon: Droplets,
    value: "~70%",
    label: "Earth's Freshwater",
    sublabel: "Locked in ice",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
  },
  {
    icon: Wind,
    value: "200+ km/h",
    label: "Katabatic Winds",
    sublabel: "Strongest on Earth",
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/20",
  },
  {
    icon: Snowflake,
    value: "2,000+",
    label: "Ice Shelves",
    sublabel: "Floating ice platforms",
    color: "text-teal-400",
    bgColor: "bg-teal-500/20",
  },
  {
    icon: Clock,
    value: "6+ months",
    label: "Polar Night",
    sublabel: "Continuous darkness",
    color: "text-violet-400",
    bgColor: "bg-violet-500/20",
  },
];

export function HomeStats() {
  return (
    <section className="w-full py-14 md:py-20 px-4 relative z-20 border-y border-border/40 bg-card/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map(({ icon: Icon, value, label, sublabel, color, bgColor }) => (
            <div
              key={label}
              className="group flex flex-col items-center text-center p-5 rounded-2xl border border-border/60 bg-background/40 hover:border-primary/40 hover:bg-card/60 transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className={`flex items-center justify-center w-14 h-14 rounded-2xl ${bgColor} ${color} group-hover:scale-110 transition-all duration-300`}>
                <Icon className="h-7 w-7" />
              </div>
              <span className="font-headline text-2xl md:text-3xl font-bold text-foreground mt-4 group-hover:text-primary transition-colors">
                {value}
              </span>
              <span className="text-sm font-semibold text-foreground/90 mt-1">{label}</span>
              <span className="text-xs text-muted-foreground mt-1">{sublabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
