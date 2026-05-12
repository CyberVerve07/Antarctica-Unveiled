"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, MessageCircle, Link as LinkIcon, Copy, Check } from "lucide-react";
import { useState } from "react";

export function SocialShare({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : url;

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const shareToWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${title} ${shareUrl}`)}`,
      "_blank"
    );
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={shareToFacebook}
        className="gap-2 hover:bg-blue-500/10 hover:border-blue-500/30"
      >
        <Facebook className="h-4 w-4 text-blue-600" />
        Facebook
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={shareToTwitter}
        className="gap-2 hover:bg-sky-500/10 hover:border-sky-500/30"
      >
        <Twitter className="h-4 w-4 text-sky-500" />
        Twitter
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={shareToLinkedIn}
        className="gap-2 hover:bg-blue-700/10 hover:border-blue-700/30"
      >
        <Linkedin className="h-4 w-4 text-blue-700" />
        LinkedIn
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={shareToWhatsApp}
        className="gap-2 hover:bg-green-500/10 hover:border-green-500/30"
      >
        <MessageCircle className="h-4 w-4 text-green-500" />
        WhatsApp
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={copyLink}
        className="gap-2 hover:bg-primary/10 hover:border-primary/30"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-green-500" />
            Copied!
          </>
        ) : (
          <>
            <LinkIcon className="h-4 w-4" />
            Copy Link
          </>
        )}
      </Button>
    </div>
  );
}
