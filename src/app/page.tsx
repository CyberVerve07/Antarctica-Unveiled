import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const navItems = [
  { name: "History", href: "/history", desc: "The heroic age of exploration and treaties." },
  { name: "Life", href: "/life", desc: "How humans survive in extreme isolation." },
  { name: "Research", href: "/research", desc: "Unlocking ancient climate and cosmic secrets." },
  { name: "Climate", href: "/climate", desc: "Earth's largest heat regulator." },
  { name: "Wildlife", href: "/wildlife", desc: "Penguins, whales, and the fragile food web." },
  { name: "Expedition", href: "/expedition", desc: "Logistics of modern extreme crossings." },
  { name: "Visit", href: "/visit", desc: "The reality of Antarctic tourism." },
  { name: "Deep Facts", href: "/deep-facts", desc: "Unveiling the hidden truths of the ice." },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-antarctica");

  return (
    <div className="w-full flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
          <main className="flex flex-col items-center max-w-4xl mx-auto">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-shadow-lg animate-fade-in-down text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200">
              Antarctica Unveiled
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-2xl text-blue-100/90 italic animate-fade-in-up delay-200 font-light">
              "The land of silence, of white desolation, and of the shimmering,
              ethereal aurora."
            </p>
            <p className="mt-8 text-base md:text-xl text-gray-300 animate-fade-in-up delay-400 font-medium leading-relaxed">
              Explore the most untouched continent on Earth. A journey into the
              heart of ice and science, revealing the secrets of our planet's
              past and the keys to its future.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-in-up delay-600">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white border-0 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)] px-8 text-lg rounded-full"
              >
                <Link href="#explore">
                  Begin Journey <ChevronDown className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </main>
        </div>
      </div>

      {/* Explore Grid Section */}
      <div id="explore" className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#0a0f18] relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center flex flex-col items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-white tracking-tight">
              Discover the Continent
            </h2>
            <div className="w-24 h-1 bg-blue-500 rounded-full" />
            <p className="text-gray-400 max-w-2xl text-lg">
              Delve into the comprehensive guides detailing every aspect of the world's most extreme environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="group">
                <Card className="h-full bg-white/5 border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] rounded-2xl">
                  <CardContent className="p-6 flex flex-col h-full justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-100 group-hover:text-blue-400 transition-colors drop-shadow-md">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 mt-2 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex items-center text-blue-500 text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Explore <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
