"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Upload, 
  Image as ImageIcon, 
  Bold, 
  Italic, 
  List, 
  Heading1, 
  X, 
  Tag, 
  Radio, 
  Terminal, 
  ShieldCheck, 
  Activity,
  Cpu,
  Database
} from "lucide-react";
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
    } catch (error) {
      console.error("Failed to save draft");
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
    alert("Mission log transmitted! (Uplink complete)");
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
    const html = text
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
    <div className="w-full min-h-screen bg-[#020617] text-white selection:bg-primary/30">
      {/* HUD Background Decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50" />
        <div className="absolute top-10 left-10 w-32 h-32 border-t-2 border-l-2 border-primary/20" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-b-2 border-r-2 border-primary/20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        {/* Navigation & Actions HUD */}
        <div className="glass-card p-6 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border-primary/10 shadow-[0_0_30px_rgba(14,165,233,0.1)]">
          <div className="flex items-center gap-6">
            <Link href="/blog" className="group flex items-center gap-3 text-white/60 hover:text-primary transition-colors font-mono text-sm uppercase tracking-widest">
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
              </div>
              Abort Mission
            </Link>
            <div className="h-10 w-[1px] bg-white/10 hidden md:block" />
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-1">Status</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold font-mono uppercase">Encryption Active</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="outline"
              onClick={() => setIsPreview(!isPreview)}
              className="glass-card border-white/10 text-white hover:bg-white/5 px-6 font-mono text-xs uppercase tracking-widest"
            >
              <Eye className="mr-2 h-4 w-4 text-tertiary" />
              {isPreview ? "Edit Source" : "Simulate Output"}
            </Button>
            <Button 
              variant="outline" 
              onClick={handleSave} 
              disabled={isSaving} 
              className="glass-card border-white/10 text-white hover:bg-white/5 px-6 font-mono text-xs uppercase tracking-widest"
            >
              <Save className={`mr-2 h-4 w-4 ${isSaving ? 'animate-spin' : 'text-primary'}`} />
              {isSaving ? "Caching..." : "Cache Draft"}
            </Button>
            <Button 
              onClick={handlePublish}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(14,165,233,0.3)]"
            >
              <Radio className="mr-2 h-4 w-4" />
              Initialize Uplink
            </Button>
          </div>
        </div>

        {!isPreview ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Editor Section */}
            <div className="lg:col-span-8 space-y-8">
              <div className="glass-card p-8 rounded-3xl border-primary/10 bg-slate-950/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Terminal className="w-20 h-20" />
                </div>
                
                {/* Title Input */}
                <div className="mb-8">
                  <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] block mb-4">Mission Title</span>
                  <Input
                    placeholder="Enter briefing title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-3xl md:text-4xl font-headline font-bold border-none px-0 focus-visible:ring-0 bg-transparent placeholder:text-white/10 h-auto py-2"
                  />
                  <div className="h-[1px] w-full bg-gradient-to-r from-primary/50 to-transparent mt-2" />
                </div>

                {/* Content Editor */}
                <div className="relative">
                  <div className="flex items-center gap-2 mb-6 p-2 rounded-lg bg-white/5 border border-white/5 sticky top-4 z-20 backdrop-blur-md">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => insertMarkdown("# ", "")}
                      className="h-8 w-8 p-0 hover:text-primary"
                    >
                      <Heading1 className="h-4 w-4" />
                    </Button>
                    <div className="w-[1px] h-4 bg-white/10" />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => insertMarkdown("**", "**")}
                      className="h-8 w-8 p-0 hover:text-primary"
                    >
                      <Bold className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => insertMarkdown("*", "*")}
                      className="h-8 w-8 p-0 hover:text-primary"
                    >
                      <Italic className="h-4 w-4" />
                    </Button>
                    <div className="w-[1px] h-4 bg-white/10" />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => insertMarkdown("- ", "")}
                      className="h-8 w-8 p-0 hover:text-primary"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                    <div className="flex-grow" />
                    <span className="text-[10px] font-mono text-white/30 uppercase mr-2">Markdown Active</span>
                  </div>
                  
                  <Textarea
                    id="content"
                    placeholder="Document your findings, environmental data, and tactical observations..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="min-h-[500px] text-lg leading-relaxed border-none px-0 focus-visible:ring-0 bg-transparent resize-none placeholder:text-white/5 font-light"
                  />
                </div>
              </div>

              {/* Multi-Image Upload Grid */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-white/60 flex items-center gap-2">
                    <Database className="w-4 h-4 text-tertiary" /> Visual Intelligence Archive
                  </h3>
                  <span className="text-[10px] font-mono text-white/30">{images.length} files attached</span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative aspect-video rounded-xl overflow-hidden glass-card group border-white/10">
                      <img src={image} alt={`Upload ${index + 1}`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      <button
                        onClick={() => setImages(images.filter((_, i) => i !== index))}
                        className="absolute top-2 right-2 p-1.5 bg-black/60 rounded-full text-white/80 hover:text-white hover:bg-red-500/80 transition-all scale-0 group-hover:scale-100"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                  
                  <label 
                    htmlFor="image-upload" 
                    className="aspect-video rounded-xl border-2 border-dashed border-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer flex flex-col items-center justify-center group"
                  >
                    <Upload className="h-6 w-6 text-white/20 group-hover:text-primary transition-colors mb-2" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/20 group-hover:text-white transition-colors">Add Signal</span>
                    <input
                      id="image-upload"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Sidebar Controls Section */}
            <div className="lg:col-span-4 space-y-6">
              {/* Sector Assignment */}
              <div className="glass-card p-6 rounded-2xl border-primary/10">
                <div className="flex items-center gap-2 mb-4">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/60">Sector Assignment</span>
                </div>
                <select
                  value={selectedPlace}
                  onChange={(e) => setSelectedPlace(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 text-white font-mono text-sm appearance-none"
                >
                  <option value="" className="bg-slate-900">NO SECTOR LINKED</option>
                  {places.map((place) => (
                    <option key={place.id} value={place.slug} className="bg-slate-900">
                      {place.name.toUpperCase()}
                    </option>
                  ))}
                </select>
                <p className="mt-4 text-[10px] font-mono text-white/30 leading-relaxed uppercase">
                  Linking a sector synchronizes this log with regional telemetry data.
                </p>
              </div>

              {/* Cover Image Upload */}
              <div className="glass-card p-6 rounded-2xl border-primary/10 overflow-hidden relative group">
                <div className="flex items-center gap-2 mb-4">
                  <ImageIcon className="w-4 h-4 text-tertiary" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/60">Primary Visual</span>
                </div>
                <div 
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all cursor-pointer bg-white/5 group"
                  onClick={() => document.getElementById('cover-upload')?.click()}
                >
                  {coverImage ? (
                    <>
                      <img src={coverImage} alt="Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-white/20 group-hover:text-primary transition-colors">
                      <ImageIcon className="h-8 w-8 mb-2" />
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em]">Upload Matrix</p>
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
              </div>

              {/* Tags/Keywords */}
              <div className="glass-card p-6 rounded-2xl border-primary/10">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/60">Classification Tags</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
                    <div key={tag} className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-mono uppercase">
                      {tag}
                      <button onClick={() => removeTag(tag)} className="hover:text-white transition-colors">
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                  {tags.length === 0 && <span className="text-[10px] font-mono text-white/20 italic">No classifications set...</span>}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter tag..."
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                    className="bg-white/5 border-white/10 focus-visible:ring-primary/30 h-9 text-xs font-mono"
                  />
                  <Button variant="ghost" size="sm" onClick={addTag} className="h-9 px-3 hover:bg-secondary/20 text-secondary">
                    <Tag className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Data Integrity Check */}
              <div className="glass-card p-6 rounded-2xl border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  <span className="text-xs font-bold font-mono text-white/80">INTEGRITY PROTOCOL</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-white/40">PAYLOAD SIZE:</span>
                    <span className="text-white">{(content.length / 1024).toFixed(2)} KB</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-white/40">ENCRYPTION:</span>
                    <span className="text-emerald-500">AES-256 BIT</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-white/40">UPLINK STRENGTH:</span>
                    <span className="text-primary">OPTIMAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="glass-card rounded-3xl border-primary/10 overflow-hidden bg-slate-950/60 animate-fade-in">
            {/* Preview Simulation View */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                </div>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">Broadcast Simulation Mode</span>
              </div>
              <div className="text-[10px] font-mono text-primary animate-pulse uppercase">Live Preview Rendering...</div>
            </div>

            <div className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto space-y-10">
                {/* Preview Header */}
                <header>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold font-mono uppercase tracking-widest">
                      {selectedPlace ? places.find(p => p.slug === selectedPlace)?.name : "UNSECTORIZED"}
                    </div>
                    <div className="h-[1px] flex-grow bg-white/10" />
                    <div className="text-[10px] font-mono text-white/30">LOG_{Date.now().toString().slice(-6)}</div>
                  </div>
                  
                  <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {title || "UNTITLED_LOG_ENTRY"}
                  </h1>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-white/40 text-[10px] font-mono uppercase">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </header>

                {/* Preview Cover */}
                {coverImage && (
                  <div className="relative aspect-video rounded-2xl overflow-hidden glass-glow">
                    <img src={coverImage} alt="Cover" className="w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent" />
                  </div>
                )}
                
                {/* Preview Content */}
                <div 
                  className="prose prose-invert max-w-none text-sky-100/70 text-lg leading-relaxed font-light
                  prose-headings:font-headline prose-headings:text-white prose-headings:font-bold
                  prose-strong:text-primary prose-strong:font-bold
                  prose-em:text-tertiary prose-em:italic"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(content || "No tactical data recorded...") }}
                />
                
                {/* Preview Images */}
                {images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {images.map((image, index) => (
                      <div key={index} className="aspect-video rounded-xl overflow-hidden glass-card border-white/10">
                        <img src={image} alt={`Preview ${index + 1}`} className="w-full h-full object-cover opacity-70" />
                      </div>
                    ))}
                  </div>
                )}

                {/* Preview Footer */}
                <footer className="pt-20 border-t border-white/5 flex flex-col items-center">
                  <div className="flex items-center gap-4 text-white/20 mb-4">
                    <ShieldCheck className="h-4 w-4" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em]">End of Transmission</span>
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div className="w-12 h-1 bg-primary/20 rounded-full" />
                </footer>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
