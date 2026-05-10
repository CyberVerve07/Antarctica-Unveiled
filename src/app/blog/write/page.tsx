"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Save, Eye, Upload, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { places } from "@/lib/places-data";

export default function BlogWritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [isPreview, setIsPreview] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // In a real app, this would upload to Firebase Storage
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
  };

  const handleSave = () => {
    // In a real app, this would save to Firebase Firestore
    console.log({ title, content, selectedPlace, images });
    alert("Blog post saved! (This would save to Firebase in production)");
  };

  const handlePublish = () => {
    // In a real app, this would publish to Firebase Firestore
    console.log({ title, content, selectedPlace, images });
    alert("Blog post published! (This would publish to Firebase in production)");
  };

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Link>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setIsPreview(!isPreview)}
              className="gap-2"
            >
              <Eye className="h-4 w-4" />
              {isPreview ? "Edit" : "Preview"}
            </Button>
            <Button variant="outline" onClick={handleSave} className="gap-2">
              <Save className="h-4 w-4" />
              Save Draft
            </Button>
            <Button onClick={handlePublish} className="gap-2">
              Publish
            </Button>
          </div>
        </div>

        {!isPreview ? (
          <div className="space-y-6">
            {/* Title Input */}
            <Card className="p-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter your adventure title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-lg font-semibold"
                />
              </div>
            </Card>

            {/* Place Selection */}
            <Card className="p-6">
              <div className="space-y-2">
                <Label htmlFor="place">Select Destination</Label>
                <select
                  id="place"
                  value={selectedPlace}
                  onChange={(e) => setSelectedPlace(e.target.value)}
                  className="w-full p-3 rounded-lg bg-background border border-input text-foreground"
                >
                  <option value="">Choose a destination...</option>
                  {places.map((place) => (
                    <option key={place.id} value={place.slug}>
                      {place.name} ({place.category})
                    </option>
                  ))}
                </select>
              </div>
            </Card>

            {/* Content Editor */}
            <Card className="p-6">
              <div className="space-y-2">
                <Label htmlFor="content">Your Story</Label>
                <Textarea
                  id="content"
                  placeholder="Share your adventure, survival tips, and deep insights about this destination..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[400px] text-base leading-relaxed"
                />
                <p className="text-xs text-muted-foreground">
                  Tip: Use Markdown for formatting. Add **bold**, *italic*, # headings, etc.
                </p>
              </div>
            </Card>

            {/* Image Upload */}
            <Card className="p-6">
              <div className="space-y-4">
                <Label>Upload Images</Label>
                <div className="flex items-center gap-4">
                  <Button variant="outline" asChild className="gap-2">
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <Upload className="h-4 w-4" />
                      Upload Images
                    </label>
                  </Button>
                  <input
                    id="image-upload"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <span className="text-sm text-muted-foreground">
                    {images.length} image{images.length !== 1 ? "s" : ""} selected
                  </span>
                </div>
                
                {images.length > 0 && (
                  <div className="grid grid-cols-3 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-border">
                        <img
                          src={image}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => setImages(images.filter((_, i) => i !== index))}
                          className="absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white hover:bg-red-600"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>

            {/* Tips */}
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-primary" />
                Writing Tips
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Share your personal experiences and emotions</li>
                <li>• Include practical survival tips and lessons learned</li>
                <li>• Add interesting facts about the destination</li>
                <li>• Describe the challenges you faced</li>
                <li>• Include recommendations for other explorers</li>
                <li>• Add high-quality images to enhance your story</li>
              </ul>
            </Card>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Preview */}
            <Card className="p-8">
              <div className="prose prose-invert max-w-none">
                <h1 className="font-headline text-4xl font-bold mb-4">{title || "Untitled"}</h1>
                {selectedPlace && (
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm mb-6">
                    {places.find((p) => p.slug === selectedPlace)?.name}
                  </div>
                )}
                <div className="whitespace-pre-wrap text-base leading-relaxed">
                  {content || "Your story will appear here..."}
                </div>
              </div>
              
              {images.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-semibold text-foreground mb-4">Images</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="aspect-video rounded-lg overflow-hidden border border-border">
                        <img
                          src={image}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
