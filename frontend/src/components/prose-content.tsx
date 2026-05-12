import { cn } from "@/lib/utils";

export function ProseContent({ content, className }: { content: string; className?: string }) {
  return (
    <div
      className={cn(
        "prose-styles text-base md:text-lg leading-relaxed text-foreground/90",
        "[&_p]:mb-5 [&_p]:max-w-[65ch]",
        "[&_h2]:font-headline [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-primary/25 [&_h2]:text-primary [&_h2]:font-bold",
        "[&_h3]:font-headline [&_h3]:text-xl md:[&_h3]:text-2xl [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-accent [&_h3]:font-semibold",
        "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-1.5",
        "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-1.5",
        "[&_li]:max-w-[65ch] [&_li::marker]:text-primary",
        "[&_a]:text-accent hover:[&_a]:underline hover:[&_a]:text-accent/90 transition-colors",
        "[&_strong]:font-semibold [&_strong]:text-foreground",
        "[&_em]:text-primary",
        "[&_blockquote]:pl-5 [&_blockquote]:py-3 [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:italic [&_blockquote]:text-foreground/80 [&_blockquote]:bg-card/40 [&_blockquote]:rounded-r-md",
        "[&_code]:bg-muted [&_code]:text-foreground [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-code [&_code]:text-sm",
        "[&_hr]:my-8 [&_hr]:border-border/50",
        "[&_table]:w-full [&_th]:text-left [&_td]:py-2",
        className
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
