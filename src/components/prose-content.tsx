import { cn } from "@/lib/utils";

export function ProseContent({ content, className }: { content: string; className?: string }) {
  return (
    <div
      className={cn(
        "prose-styles text-lg leading-relaxed text-foreground/80",
        // General prose styles
        "[&_p]:mb-6",
        "[&_h2]:font-headline [&_h2]:text-3xl md:[&_h2]:text-4xl [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-primary/20 [&_h2]:text-primary",
        "[&_h3]:font-headline [&_h3]:text-2xl md:[&_h3]:text-3xl [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:text-accent",
        "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2",
        "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2",
        "[&_li::marker]:text-primary",
        "[&_a]:text-accent hover:[&_a]:underline hover:[&_a]:text-accent/80 transition-colors",
        "[&_strong]:font-semibold [&_strong]:text-foreground/95",
        "[&_em]:text-primary",
        "[&_blockquote]:pl-4 [&_blockquote]:py-2 [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:italic [&_blockquote]:text-foreground/70 [&_blockquote]:bg-card/50",
        "[&_code]:bg-muted [&_code]:text-foreground [&_code]:px-1.5 [&_code]:py-1 [&_code]:rounded-md [&_code]:font-code [&_code]:text-sm",
        "[&_hr]:my-8 [&_hr]:border-border/50",
        className
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
