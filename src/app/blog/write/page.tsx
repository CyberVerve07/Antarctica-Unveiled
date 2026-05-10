"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Eye, Upload, Image as ImageIcon, Bold, Italic, List, Heading1, X, Tag } from "lucide-react";
import Link from "next/link";
import { places } from "@/lib/data";

export default function BlogWritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [coverImage, setCoverImage] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Auto-save draft
  useEffect(() => {
    const draft = localStorage.getItem('blog-draft');
    if (draft) {
      try {
        const parsed = JSON.parse(draft);
        setTitle(parsed.title || "");
        setContent(parsed.content || "");
        setSelectedPlace(parsed.selectedPlace || "");
        setImages(parsed.images || []);
        setCoverImage(parsed.coverImage || "");
        setTags(parsed.tags || []);
      } catch (e) {
        console.error("Failed to load draft");
      }
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (title || content) {
        localStorage.setItem('blog-draft', JSON.stringify({ title, content, selectedPlace, images, coverImage, tags }));
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [title, content, selectedPlace, images, coverImage, tags]);

  const handleCoverImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      localStorage.setItem('blog-draft', JSON.stringify({ title, content, selectedPlace, images, coverImage, tags }));
      alert("Blog draft saved locally!");
    } catch (error) {
      alert("Failed to save draft");
    } finally {
      setIsSaving(false);
    }
  };

  const handlePublish = () => {
    if (!title || !content) {
      alert("Please fill in title and content before publishing");
      return;
    }
    localStorage.removeItem('blog-draft');
    alert("Blog post published! (This would publish to Firebase in production)");
  };

  const insertMarkdown = (prefix: string, suffix: string = "") => {
    const textarea = document.getElementById('content') as HTMLTextAreaElement;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = content;
    const before = text.substring(0, start);
    const selection = text.substring(start, end);
    const after = text.substring(end);
    setContent(before + prefix + selection + suffix + after);
    textarea.focus();
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const renderMarkdown = (text: string) => {
    let html = text
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-4 mb-2">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-4 mb-2">$1</h1>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/^- (.*$)/gim, '<li class="ml-4">$1</li>')
      .replace(/\n/gim, '<br />');
    return html;
  };

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Link>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsPreview(!isPreview)}
              className="gap-2"
            >
              <Eye className="h-4 w-4" />
              {isPreview ? "Edit" : "Preview"}
            </Button>
            <Button variant="ghost" size="sm" onClick={handleSave} disabled={isSaving} className="gap-2">
              <Save className="h-4 w-4" />
              {isSaving ? "Saving..." : "Save"}
            </Button>
            <Button size="sm" onClick={handlePublish}>
              Publish
            </Button>
          </div>
        </div>

        {!isPreview ? (
          <div className="space-y-8">
            {/* Cover Image */}
            <div 
              className="relative aspect-[16/9] rounded-lg overflow-hidden border-2 border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => document.getElementById('cover-upload')?.click()}
            >
              {coverImage ? (
                <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                  <ImageIcon className="h-12 w-12 mb-2" />
                  <p className="font-medium">Add a cover image</p>
                  <p className="text-sm">Click to upload</p>
                </div>
              )}
              <input
                id="cover-upload"
                type="file"
                accept="image/*"
                onChange={handleCoverImageUpload}
                className="hidden"
              />
            </div>

            {/* Title */}
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-4xl font-bold border-none px-0 focus-visible:ring-0 bg-transparent placeholder:text-muted-foreground/50"
            />

            {/* Place Selection */}
            <select
              value={selectedPlace}
              onChange={(e) => setSelectedPlace(e.target.value)}
              className="w-full px-0 py-2 bg-transparent border-b border-border focus:outline-none focus:border-primary text-muted-foreground"
            >
              <option value="">Select destination...</option>
              {places.map((place) => (
                <option key={place.id} value={place.slug}>
                  {place.name}
                </option>
              ))}
            </select>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <div key={tag} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  {tag}
                  <button onClick={() => removeTag(tag)} className="hover:text-primary/70">
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
              <div className="flex gap-2">
                <Input
                  placeholder="Add tag..."
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTag()}
                  className="w-32 border-none px-0 focus-visible:ring-0 bg-transparent placeholder:text-muted-foreground/50"
                />
                <Button variant="ghost" size="sm" onClick={addTag}>
                  <Tag className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Content Editor */}
            <div className="relative">
              <div className="flex gap-2 mb-4 sticky top-16 bg-background/95 backdrop-blur z-10 py-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => insertMarkdown("# ", "")}
                  title="Heading"
                >
                  <Heading1 className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => insertMarkdown("**", "**")}
                  title="Bold"
                >
                  <Bold className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => insertMarkdown("*", "*")}
                  title="Italic"
                >
                  <Italic className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => insertMarkdown("- ", "")}
                  title="List"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              
              <Textarea
                id="content"
                placeholder="Tell your story..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[500px] text-lg leading-relaxed border-none px-0 focus-visible:ring-0 bg-transparent resize-none placeholder:text-muted-foreground/30"
              />
            </div>

            {/* Additional Images */}
            {images.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                    <img src={image} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
                    <button
                      onClick={() => setImages(images.filter((_, i) => i !== index))}
                      className="absolute top-2 right-2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Upload More Images */}
            <Button
              variant="outline"
              asChild
              className="w-full border-dashed"
            >
              <label htmlFor="image-upload" className="cursor-pointer gap-2 py-8">
                <Upload className="h-5 w-5" />
                <span>Add more images</span>
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
          </div>
        ) : (
          <div className="space-y-8">
            {/* Preview */}
            {coverImage && (
              <div className="aspect-[16/9] rounded-lg overflow-hidden">
                <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
              </div>
            )}
            
            <div className="prose prose-invert max-w-none">
              <h1 className="font-headline text-4xl font-bold mb-4">{title || "Untitled"}</h1>
              
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              {selectedPlace && (
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm mb-6">
                  {places.find((p) => p.slug === selectedPlace)?.name}
                </div>
              )}
              
              <div 
                className="text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(content || "Your story will appear here...") }}
              />
            </div>
            
            {images.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden">
                    <img src={image} alt={`Preview ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
