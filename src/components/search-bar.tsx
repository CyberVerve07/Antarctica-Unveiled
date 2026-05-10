"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { places, mockBlogs, type BlogPost } from "@/lib/data";
import Link from "next/link";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredPlaces = places.filter(
    (place) =>
      place.name.toLowerCase().includes(query.toLowerCase()) ||
      place.description.toLowerCase().includes(query.toLowerCase()) ||
      place.location.toLowerCase().includes(query.toLowerCase())
  );

  const filteredBlogs = mockBlogs.filter(
    (blog: BlogPost) =>
      blog.title.toLowerCase().includes(query.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      blog.place.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
        aria-label="Search"
      >
        <Search className="h-5 w-5 text-muted-foreground" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
      <div className="w-full max-w-2xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search places, adventures, stories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 pr-12 h-14 text-lg"
            autoFocus
          />
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-primary/10"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {query && (
          <div className="mt-4 bg-card border border-border rounded-xl overflow-hidden shadow-xl">
            {filteredPlaces.length > 0 && (
              <div>
                <div className="px-4 py-2 bg-muted/50 border-b border-border">
                  <h3 className="text-sm font-semibold text-muted-foreground">Places</h3>
                </div>
                {filteredPlaces.slice(0, 5).map((place) => (
                  <Link
                    key={place.id}
                    href={`/places/${place.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 hover:bg-primary/5 transition-colors border-b border-border/50 last:border-0"
                  >
                    <div className="font-semibold text-foreground">{place.name}</div>
                    <div className="text-sm text-muted-foreground">{place.location}</div>
                  </Link>
                ))}
              </div>
            )}

            {filteredBlogs.length > 0 && (
              <div>
                <div className="px-4 py-2 bg-muted/50 border-b border-border">
                  <h3 className="text-sm font-semibold text-muted-foreground">Stories</h3>
                </div>
                {filteredBlogs.slice(0, 5).map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.id}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 hover:bg-primary/5 transition-colors border-b border-border/50 last:border-0"
                  >
                    <div className="font-semibold text-foreground">{blog.title}</div>
                    <div className="text-sm text-muted-foreground">by {blog.author}</div>
                  </Link>
                ))}
              </div>
            )}

            {filteredPlaces.length === 0 && filteredBlogs.length === 0 && (
              <div className="px-4 py-8 text-center text-muted-foreground">
                No results found for "{query}"
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
