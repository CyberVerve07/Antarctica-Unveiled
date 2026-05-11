import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Calendar, User, MapPin, ArrowRight, Terminal, Share2, Eye, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { mockBlogs } from "@/lib/data";

export default function BlogPage() {
  return (
    <div className="w-full min-h-screen bg-[#020617] text-foreground font-body relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[35%] h-[35%] bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[35%] h-[35%] bg-secondary/5 blur-[100px] rounded-full" />
      </div>

      {/* Hero Section - Intelligence Archive */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/30 text-primary font-mono text-[10px] tracking-[0.2em] uppercase">
              <Terminal className="h-3 w-3" />
              Intelligence Feed / Field Reports
            </div>
            <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter text-white">
              EXPLORER <span className="text-secondary italic">ARCHIVES</span>
            </h1>
            <p className="text-muted-foreground/80 text-xl max-w-3xl leading-relaxed font-light mt-4">
              Access decrypted logs from high-latitude operatives. First-hand tactical data on sector status and survival events.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild size="lg" className="rounded-xl h-14 px-8 bg-primary hover:bg-primary/80 text-black font-bold transition-all hover:scale-105">
                <Link href="/blog/write">
                  <Share2 className="mr-2 h-5 w-5" />
                  SUBMIT_REPORT
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {mockBlogs.map((blog, index) => (
              <Card key={blog.id} className="overflow-hidden glass-card border border-white/5 hover:border-primary/40 transition-all duration-700 group flex flex-col md:flex-row h-auto md:h-[300px]">
                {/* Media Container */}
                <div className="relative w-full md:w-[40%] h-[200px] md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-white/5 group-hover:border-primary/20 transition-all">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#020617]/40" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md glass-glow text-[10px] font-mono font-bold tracking-widest text-primary border border-primary/30">
                      {blog.place}
                    </span>
                  </div>
                </div>
                
                {/* Content Container */}
                <div className="flex-1 p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[10px] font-mono text-primary/60 tracking-widest uppercase">
                      <div className="flex items-center gap-1.5">
                        <User className="h-3 w-3" />
                        <span>OPERATIVE: {blog.author.split(' ')[0]}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(blog.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <h2 className="font-headline text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                      {blog.title}
                    </h2>
                    
                    <p className="text-muted-foreground/80 text-sm leading-relaxed font-light line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                  
                  <div className="pt-6 flex items-center justify-between mt-auto border-t border-white/5">
                    <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground/60">
                       <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> 1.2K</span>
                       <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" /> 24</span>
                    </div>
                    <Link
                      href={`/blog/${blog.id}`}
                      className="inline-flex items-center gap-2 text-primary font-mono text-[10px] tracking-[0.2em] hover:translate-x-2 transition-transform group/link"
                    >
                      DECRYPT_FILE <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>

                  {/* Tech Detail Decoration */}
                  <div className="absolute bottom-[-10px] right-[-10px] opacity-10 group-hover:opacity-30 transition-opacity">
                    <Terminal className="h-24 w-24 text-primary" />
                  </div>
                </div>

                {/* Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.1)_50%)] bg-[length:100%_4px]" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Submission CTA */}
      <section className="w-full py-24 px-4 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-20 rounded-[40px] border border-secondary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5" />
          <div className="relative z-10 space-y-6">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tighter">
              LOG YOUR <span className="text-secondary italic">EXPEDITION</span>
            </h2>
            <p className="text-muted-foreground/80 text-lg mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Every data point matters. Share your survival experiences and environmental observations with the global network.
            </p>
            <Button asChild size="lg" className="rounded-xl h-14 px-10 bg-secondary hover:bg-secondary/80 text-black font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-secondary/10">
              <Link href="/blog/write">
                <BookOpen className="mr-2 h-5 w-5" />
                INITIATE_UPLINK
              </Link>
            </Button>
          </div>
          {/* Corner Elements */}
          <div className="absolute top-0 right-0 p-8 h-12 w-12 border-t-2 border-r-2 border-secondary/30" />
          <div className="absolute bottom-0 left-0 p-8 h-12 w-12 border-b-2 border-l-2 border-secondary/30" />
        </div>
      </section>

      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </div>
  );
}
