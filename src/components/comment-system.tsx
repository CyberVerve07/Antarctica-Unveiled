"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MessageSquare, Send, Trash2, ThumbsUp, Clock } from "lucide-react";

export interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  timestamp: number;
  likes: number;
}

export function CommentSystem({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load comments from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`comments-${postId}`);
    if (saved) {
      setComments(JSON.parse(saved));
    }
  }, [postId]);

  // Save comments to localStorage
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem(`comments-${postId}`, JSON.stringify(comments));
    }
  }, [comments, postId]);

  // Load author name from localStorage
  useEffect(() => {
    const savedName = localStorage.getItem("comment-author-name");
    if (savedName) {
      setAuthorName(savedName);
    }
  }, []);

  const handleSubmit = () => {
    if (!newComment.trim() || !authorName.trim()) {
      return;
    }

    setIsSubmitting(true);

    const comment: Comment = {
      id: Date.now().toString(),
      postId,
      author: authorName,
      content: newComment,
      timestamp: Date.now(),
      likes: 0,
    };

    setComments([comment, ...comments]);
    setNewComment("");
    localStorage.setItem("comment-author-name", authorName);

    setTimeout(() => setIsSubmitting(false), 500);
  };

  const handleLike = (commentId: string) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
  };

  const handleDelete = (commentId: string) => {
    if (confirm("Are you sure you want to delete this comment?")) {
      setComments(comments.filter((comment) => comment.id !== commentId));
    }
  };

  const formatTime = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="h-5 w-5 text-primary" />
        <h2 className="font-headline text-2xl font-bold text-foreground">
          Discussion ({comments.length})
        </h2>
      </div>

      {/* Add Comment Form */}
      <Card className="p-6 mb-6 bg-card/50 border-border/60">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Textarea
            placeholder="Share your thoughts, ask questions, or add to the discussion..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[120px] bg-background text-foreground placeholder:text-muted-foreground"
          />
          <div className="flex justify-end">
            <Button
              onClick={handleSubmit}
              disabled={!newComment.trim() || !authorName.trim() || isSubmitting}
              className="gap-2"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? "Posting..." : "Post Comment"}
            </Button>
          </div>
        </div>
      </Card>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <Card
              key={comment.id}
              className="p-6 bg-card/50 border-border/60 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-foreground">
                      {comment.author}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {formatTime(comment.timestamp)}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {comment.content}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/60">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(comment.id)}
                  className="gap-1 text-muted-foreground hover:text-primary"
                >
                  <ThumbsUp className="h-4 w-4" />
                  {comment.likes}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDelete(comment.id)}
                  className="gap-1 text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
