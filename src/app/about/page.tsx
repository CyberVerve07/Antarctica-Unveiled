import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mountain, BookOpen, Users, Globe, Shield, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 px-4 bg-gradient-to-b from-primary/10 via-transparent to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-4">
            About Extreme Explorers
          </h1>
          <div className="w-16 h-1 rounded-full bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            We are a community of adventurers, explorers, and storytellers dedicated to documenting 
            the world's most extreme destinations. Our mission is to share real experiences, survival 
            knowledge, and deep insights about places that push human limits.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Mountain className="h-6 w-6 text-primary" />
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Extreme Explorers was born from a passion for adventure and a desire to share knowledge 
              about the world's most dangerous and beautiful places. We believe that every explorer 
              has a story worth telling, and every destination has lessons to teach. Our platform 
              connects adventurers worldwide, creating a repository of real-world experiences that can 
              help others prepare for their own journeys.
            </p>
          </Card>
        </div>
      </section>

      {/* What We Offer */}
      <section className="w-full py-16 px-4 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Deep Information</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive guides about dangerous places, including survival tips, equipment needs, and real dangers.
              </p>
            </Card>
            
            <Card className="p-6 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Real Stories</h3>
              <p className="text-muted-foreground text-sm">
                First-hand accounts from adventurers who have actually visited these extreme destinations.
              </p>
            </Card>
            
            <Card className="p-6 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Global Coverage</h3>
              <p className="text-muted-foreground text-sm">
                From the Amazon Rainforest to Mount Everest, we cover the world's most extreme destinations.
              </p>
            </Card>
            
            <Card className="p-6 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Safety First</h3>
              <p className="text-muted-foreground text-sm">
                Detailed danger level ratings and survival tips to help explorers stay safe in extreme conditions.
              </p>
            </Card>
            
            <Card className="p-6 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Community Driven</h3>
              <p className="text-muted-foreground text-sm">
                A platform built by explorers, for explorers. Share your knowledge and learn from others.
              </p>
            </Card>
            
            <Card className="p-6 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Mountain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Adventure Planning</h3>
              <p className="text-muted-foreground text-sm">
              Tools and resources to help you plan your own extreme expeditions safely and successfully.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/30">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-4">
              Share Your Adventure
            </h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              Have you explored an extreme destination? Your experience could help other adventurers. 
              Write your story and share your knowledge with our community.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/blog/write">
                <BookOpen className="mr-2 h-5 w-5" />
                Start Writing
              </Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
