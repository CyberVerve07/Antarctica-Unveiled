"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function ArticleClap({ articleId }: { articleId: string }) {
  const [claps, setClaps] = useState(0);
  const [hasClapped, setHasClapped] = useState(false);

  useEffect(() => {
    const savedClaps = localStorage.getItem(`claps-${articleId}`);
    const savedHasClapped = localStorage.getItem(`has-clapped-${articleId}`);
    if (savedClaps) setClaps(parseInt(savedClaps));
    if (savedHasClapped) setHasClapped(true);
  }, [articleId]);

  const handleClap = () => {
    if (!hasClapped) {
      const newClaps = claps + 1;
      setClaps(newClaps);
      setHasClapped(true);
      localStorage.setItem(`claps-${articleId}`, newClaps.toString());
      localStorage.setItem(`has-clapped-${articleId}`, "true");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleClap}
        disabled={hasClapped}
        className={`gap-2 ${hasClapped ? "text-red-500" : ""}`}
      >
        <Heart className={`h-5 w-5 ${hasClapped ? "fill-current" : ""}`} />
        <span>{claps}</span>
      </Button>
      <span className="text-sm text-muted-foreground">
        {claps} {claps === 1 ? "clap" : "claps"}
      </span>
    </div>
  );
}
