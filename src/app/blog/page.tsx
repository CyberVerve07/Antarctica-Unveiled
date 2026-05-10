import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Calendar, User, MapPin, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { mockBlogs } from "@/lib/data";

export default function BlogPage() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 px-4 bg-gradient-to-b from-primary/10 via-transparent to-background">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            <span>Adventure Stories</span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-4">
            Explorer Blogs
          </h1>
          <div className="w-16 h-1 rounded-full bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Read real experiences from adventurers who have explored the world's most extreme destinations
          </p>
          <Button asChild size="lg" className="rounded-full mt-8">
            <Link href="/blog/write">
              <BookOpen className="mr-2 h-5 w-5" />
              Share Your Story
            </Link>
          </Button>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {mockBlogs.map((blog) => (
              <Card key={blog.id} className="overflow-hidden border border-border/60 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                      {blog.place}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                    <span>{blog.readTime}</span>
                  </div>
                  
                  <h2 className="font-headline text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                    {blog.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <Link
                    href={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
                  >
                    Read Full Story <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Have Your Own Adventure Story?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Share your experiences, survival tips, and deep insights with our community of explorers
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/blog/write">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Writing
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
