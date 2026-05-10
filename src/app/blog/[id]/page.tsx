import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, MapPin, Clock, BookOpen, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { mockBlogs } from "@/lib/blog-data";

export async function generateStaticParams() {
  return mockBlogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const blog = mockBlogs.find((b) => b.id === parseInt(params.id));

  if (!blog) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Blog</span>
        </Link>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium mb-3">
              <MapPin className="h-3 w-3" />
              {blog.place}
            </div>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border/60">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(blog.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          {blog.title}
        </h1>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="whitespace-pre-wrap text-base leading-relaxed text-muted-foreground">
            {blog.content}
          </div>
        </div>

        {/* Share and Related */}
        <div className="mt-12 pt-8 border-t border-border/60">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share Story
            </Button>
            <Link href={`/places/${blog.placeSlug}`}>
              <Button variant="outline" className="gap-2">
                <MapPin className="h-4 w-4" />
                Visit {blog.place}
              </Button>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/30">
          <h3 className="font-headline text-xl font-bold text-foreground mb-3">
            Have Your Own Story?
          </h3>
          <p className="text-muted-foreground mb-6">
            Share your adventure experiences with our community of explorers
          </p>
          <Link href="/blog/write">
            <Button className="gap-2">
              <BookOpen className="h-5 w-5" />
              Write Your Story
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
