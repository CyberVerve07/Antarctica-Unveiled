import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, MapPin, Clock, BookOpen, Share2, Terminal, Shield, Download, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { mockBlogs } from "@/lib/data";
import { TextHighlighter } from "@/components/text-highlighter";
import { CommentSystem } from "@/components/comment-system";
import { SocialShare } from "@/components/social-share";
import { ReadingProgress } from "@/components/reading-progress";
import { ArticleClap } from "@/components/article-clap";

export async function generateStaticParams() {
  return mockBlogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const blog = mockBlogs.find((b) => b.id === parseInt(params.id));

  if (!blog) {
    notFound();
  }

  return (
    <>
      <ReadingProgress />
      <div className="w-full min-h-screen bg-[#020617] text-foreground font-body relative overflow-hidden pb-20">
        {/* Background Atmosphere */}
        <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 pt-32 relative z-10">
          {/* Back Action */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-all group mb-12">
            <div className="p-2 rounded-lg glass border border-white/10 group-hover:border-primary/40">
              <ArrowLeft className="h-4 w-4" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase">ACCESS_ARCHIVES</span>
          </Link>

          {/* Dossier Header */}
          <header className="space-y-8 mb-16">
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-3 py-1 rounded-md glass-glow text-[10px] font-mono font-bold tracking-widest text-primary border border-primary/30">
                FIELD_REPORT_ID: {blog.id}
              </span>
              <span className="px-3 py-1 rounded-md glass text-[10px] font-mono font-bold tracking-widest text-secondary border border-secondary/30">
                CLEARANCE_LEVEL: OMEGA
              </span>
            </div>

            <h1 className="font-headline text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
              {blog.title.toUpperCase()}
            </h1>

            <div className="flex flex-wrap items-center gap-8 py-6 border-y border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl glass border border-primary/20 flex items-center justify-center text-primary">
                  <User className="h-5 w-5" />
                </div>
                <div>
                   <div className="text-[10px] font-mono text-white/40 uppercase">Operative</div>
                   <div className="text-sm font-semibold text-white">{blog.author}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl glass border border-secondary/20 flex items-center justify-center text-secondary">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                   <div className="text-[10px] font-mono text-white/40 uppercase">Date_Logged</div>
                   <div className="text-sm font-semibold text-white">{new Date(blog.date).toLocaleDateString()}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/60">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                   <div className="text-[10px] font-mono text-white/40 uppercase">Decryption_Time</div>
                   <div className="text-sm font-semibold text-white">{blog.readTime}</div>
                </div>
              </div>
              
              <div className="ml-auto">
                 <ArticleClap articleId={blog.id.toString()} />
              </div>
            </div>
          </header>

          {/* Hero Visualization */}
          <div className="relative aspect-[21/9] rounded-[32px] overflow-hidden mb-16 border border-white/10 glass-card p-2">
            <div className="relative w-full h-full rounded-[24px] overflow-hidden">
               <img
                 src={blog.image}
                 alt={blog.title}
                 className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
               <div className="absolute bottom-6 left-6 flex items-center gap-2">
                 <div className="px-4 py-2 rounded-xl glass-glow border border-primary/40 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">{blog.place}</span>
                 </div>
               </div>
               
               {/* Tech Overlay */}
               <div className="absolute top-6 right-6 hidden md:block">
                  <div className="flex gap-2">
                     <div className="h-10 w-10 glass border border-white/20 rounded-xl flex items-center justify-center">
                        <Shield className="h-4 w-4 text-secondary animate-pulse" />
                     </div>
                     <div className="h-10 w-10 glass border border-white/20 rounded-xl flex items-center justify-center">
                        <Terminal className="h-4 w-4 text-primary" />
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Report Content */}
          <article className="prose prose-invert prose-lg max-w-none prose-headings:font-headline prose-headings:font-bold prose-headings:tracking-tighter prose-p:font-light prose-p:leading-relaxed prose-p:text-white/80 prose-strong:text-primary">
            <div className="relative p-8 md:p-12 rounded-[40px] glass-card border border-white/5 bg-white/[0.01]">
               <TextHighlighter content={blog.content} postId={blog.id.toString()} />
            </div>
          </article>

          {/* Evidence Gallery */}
          {blog.images && blog.images.length > 0 && (
            <section className="mt-24 space-y-8">
              <div className="flex items-center gap-4">
                 <div className="h-px flex-1 bg-white/10" />
                 <h2 className="font-headline text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                   <Lock className="h-6 w-6 text-secondary" />
                   CAPTURED_VISUALS
                 </h2>
                 <div className="h-px flex-1 bg-white/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blog.images.map((img, index) => (
                  <div key={index} className="relative aspect-video rounded-2xl overflow-hidden glass border border-white/10 group p-2">
                    <div className="w-full h-full rounded-xl overflow-hidden relative">
                       <img
                         src={img}
                         alt={`${blog.title} - Visual ${index + 1}`}
                         className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                       />
                       <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg glass-glow border border-primary/40">
                             <Download className="h-3 w-3 text-primary" />
                          </Button>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Operational Actions */}
          <div className="mt-24 pt-12 border-t border-white/5">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <SocialShare title={blog.title} url={`/blog/${blog.id}`} />
              <Link href={`/places/${blog.placeSlug}`}>
                <Button variant="ghost" className="h-14 px-8 rounded-xl glass border border-primary/20 hover:bg-primary/10 text-primary font-mono tracking-widest group">
                  <MapPin className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  GOTO_SECTOR: {blog.place.toUpperCase()}
                </Button>
              </Link>
            </div>
          </div>

          {/* Intel Comms */}
          <div className="mt-24 pt-12 border-t border-white/5">
             <div className="flex items-center gap-3 mb-10 text-secondary font-mono text-[10px] tracking-[0.3em] uppercase">
                <Terminal className="h-4 w-4" />
                Decrypted_Communication_Logs
             </div>
            <CommentSystem postId={blog.id.toString()} />
          </div>

          {/* Join Mission Directive */}
          <Card className="mt-24 p-12 md:p-16 rounded-[40px] glass-card border border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 text-center relative overflow-hidden">
             <div className="relative z-10 space-y-6">
               <h3 className="font-headline text-4xl font-bold text-white tracking-tighter">
                 CONTRIBUTE TO THE <span className="text-primary italic">ARCHIVE</span>
               </h3>
               <p className="text-muted-foreground/80 font-light max-w-xl mx-auto leading-relaxed">
                 Every report enhances our collective survival probability. Submit your tactical experiences.
               </p>
               <Link href="/blog/write" className="inline-block mt-4">
                 <Button className="h-14 px-10 rounded-xl bg-primary hover:bg-primary/80 text-black font-bold text-lg transition-all hover:scale-105 active:scale-95">
                   <BookOpen className="mr-2 h-5 w-5" />
                   INITIATE_UPLINK
                 </Button>
               </Link>
             </div>
             {/* Tech Decoration */}
             <div className="absolute top-0 left-0 p-8 opacity-5">
                <Shield className="h-24 w-24" />
             </div>
          </Card>
        </div>

        {/* Global Grid */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]">
           <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
      </div>
    </>
  );
}
