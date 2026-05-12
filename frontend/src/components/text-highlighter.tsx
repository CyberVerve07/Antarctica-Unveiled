"use client";

import { useState, useCallback, useEffect } from "react";
import { Highlighter, Pencil, Eraser, Save, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HighlightData {
  text: string;
  color: string;
  note?: string;
}

export function TextHighlighter({ content, postId }: { content: string; postId: string }) {
  const [highlights, setHighlights] = useState<HighlightData[]>([]);
  const [selectedText, setSelectedText] = useState("");
  const [isHighlighting, setIsHighlighting] = useState(false);
  const [isAnnotating, setIsAnnotating] = useState(false);
  const [currentNote, setCurrentNote] = useState("");
  const [selectedColor, setSelectedColor] = useState("yellow");

  // Load highlights from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`highlights-${postId}`);
    if (saved) {
      setHighlights(JSON.parse(saved));
    }
  }, [postId]);

  // Save highlights to localStorage
  useEffect(() => {
    if (highlights.length > 0) {
      localStorage.setItem(`highlights-${postId}`, JSON.stringify(highlights));
    }
  }, [highlights, postId]);

  const handleTextSelection = useCallback(() => {
    const selection = window.getSelection();
    const text = selection?.toString();
    if (text && text.length > 0) {
      setSelectedText(text);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mouseup", handleTextSelection);
    return () => document.removeEventListener("mouseup", handleTextSelection);
  }, [handleTextSelection]);

  const handleHighlight = () => {
    if (!selectedText) return;
    
    const newHighlight: HighlightData = {
      text: selectedText,
      color: selectedColor,
      note: currentNote || undefined,
    };
    
    setHighlights([...highlights, newHighlight]);
    setSelectedText("");
    setCurrentNote("");
    window.getSelection()?.removeAllRanges();
  };

  const handleRemoveHighlight = (index: number) => {
    setHighlights(highlights.filter((_, i) => i !== index));
  };

  const handleExportNotes = () => {
    const notes = highlights
      .filter((h) => h.note)
      .map((h, i) => `Highlight ${i + 1}: "${h.text}"\nNote: ${h.note}\n`)
      .join("\n");
    
    const blob = new Blob([notes], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `notes-${postId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const renderContent = () => {
    let renderedContent = content;
    
    // Apply highlights to content
    highlights.forEach((highlight, index) => {
      const colorMap: Record<string, string> = {
        yellow: "bg-yellow-200",
        green: "bg-green-200",
        blue: "bg-blue-200",
        pink: "bg-pink-200",
      };
      
      const colorClass = colorMap[highlight.color] || "bg-yellow-200";
      const replacement = `<span class="${colorClass} rounded px-1 cursor-pointer" data-highlight="${index}" title="${highlight.note || ''}">${highlight.text}</span>`;
      renderedContent = renderedContent.replace(highlight.text, replacement);
    });

    return renderedContent;
  };

  return (
    <div className="relative">
      {/* Toolbar */}
      <div className="sticky top-4 z-50 mb-4 p-3 bg-card border border-border rounded-lg shadow-lg">
        <div className="flex items-center gap-2 flex-wrap">
          <Button
            variant={isHighlighting ? "default" : "outline"}
            size="sm"
            onClick={() => setIsHighlighting(!isHighlighting)}
            className="gap-2"
          >
            <Highlighter className="h-4 w-4" />
            Highlight
          </Button>
          
          <Button
            variant={isAnnotating ? "default" : "outline"}
            size="sm"
            onClick={() => setIsAnnotating(!isAnnotating)}
            className="gap-2"
          >
            <Pencil className="h-4 w-4" />
            Annotate
          </Button>
          
          {isHighlighting && (
            <div className="flex items-center gap-2 ml-2">
              <button
                onClick={() => setSelectedColor("yellow")}
                className={`w-6 h-6 rounded-full ${selectedColor === "yellow" ? "ring-2 ring-offset-2 ring-primary" : ""}`}
                style={{ backgroundColor: "#fef08a" }}
              />
              <button
                onClick={() => setSelectedColor("green")}
                className={`w-6 h-6 rounded-full ${selectedColor === "green" ? "ring-2 ring-offset-2 ring-primary" : ""}`}
                style={{ backgroundColor: "#bbf7d0" }}
              />
              <button
                onClick={() => setSelectedColor("blue")}
                className={`w-6 h-6 rounded-full ${selectedColor === "blue" ? "ring-2 ring-offset-2 ring-primary" : ""}`}
                style={{ backgroundColor: "#bfdbfe" }}
              />
              <button
                onClick={() => setSelectedColor("pink")}
                className={`w-6 h-6 rounded-full ${selectedColor === "pink" ? "ring-2 ring-offset-2 ring-primary" : ""}`}
                style={{ backgroundColor: "#fbcfe8" }}
              />
              
              {selectedText && (
                <Button size="sm" onClick={handleHighlight} className="ml-2">
                  Apply Highlight
                </Button>
              )}
            </div>
          )}
          
          {isAnnotating && selectedText && (
            <div className="flex items-center gap-2 ml-2">
              <input
                type="text"
                placeholder="Add a note..."
                value={currentNote}
                onChange={(e) => setCurrentNote(e.target.value)}
                className="px-3 py-1 border border-border rounded-md text-sm bg-background"
              />
              <Button size="sm" onClick={handleHighlight}>
                <Save className="h-4 w-4" />
              </Button>
            </div>
          )}
          
          {highlights.length > 0 && (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setHighlights([])}
                className="gap-2"
              >
                <Eraser className="h-4 w-4" />
                Clear All
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportNotes}
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                Export Notes
              </Button>
            </>
          )}
          
          <span className="text-sm text-muted-foreground ml-auto">
            {highlights.length} highlight{highlights.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Content with highlights */}
      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: renderContent() }}
      />

      {/* Highlights sidebar */}
      {highlights.length > 0 && (
        <div className="mt-8 p-4 bg-muted/30 border border-border rounded-lg">
          <h3 className="font-semibold mb-4">Your Highlights & Notes</h3>
          <div className="space-y-3">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-3 bg-background border border-border rounded-md relative group"
              >
                <div
                  className={`inline-block px-2 py-1 rounded ${
                    highlight.color === "yellow"
                      ? "bg-yellow-200"
                      : highlight.color === "green"
                      ? "bg-green-200"
                      : highlight.color === "blue"
                      ? "bg-blue-200"
                      : "bg-pink-200"
                  }`}
                >
                  &ldquo;{highlight.text}&rdquo;
                </div>
                {highlight.note && (
                  <p className="mt-2 text-sm text-muted-foreground italic">
                    Note: {highlight.note}
                  </p>
                )}
                <button
                  onClick={() => handleRemoveHighlight(index)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700"
                >
                  <Eraser className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
