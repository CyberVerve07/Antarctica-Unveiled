"use client";

import { Snowflake, Mountain, ThermometerSnowflake, Wind } from "lucide-react";

const stats = [
  {
    icon: ThermometerSnowflake,
    value: "−89.2°C",
    label: "Coldest recorded (Vostok)",
  },
  {
    icon: Mountain,
    value: "14M km²",
    label: "Ice sheet area",
  },
  {
    icon: Snowflake,
    value: "~70%",
    label: "Earth's freshwater",
  },
  {
    icon: Wind,
    value: "200+ km/h",
    label: "Katabatic winds",
  },
];

export function HomeStats() {
  return (
    <section className="w-full py-12 md:py-16 px-4 relative z-20 border-y border-border/50 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center text-center p-4 rounded-xl border border-border/60 bg-background/50 hover:border-primary/40 hover:bg-card/50 transition-all duration-300 cursor-default"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/15 text-primary group-hover:bg-primary/25 group-hover:scale-110 transition-all duration-300">
                <Icon className="h-6 w-6" />
              </span>
              <span className="font-headline text-2xl md:text-3xl font-bold text-foreground mt-3 group-hover:text-primary transition-colors">
                {value}
              </span>
              <span className="text-sm text-muted-foreground mt-1">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
