"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Calendar, User, MapPin, ArrowRight, Terminal, Share2, Eye, MessageSquare, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
import { mockBlogs } from "@/lib/data";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <div className="cinematic-container">

      {/* Hero Section - Intelligence Archive */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center space-y-6"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/5 mb-12"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-white/70 font-mono text-[10px] tracking-[0.2em] uppercase">
                <BookOpen className="h-3 w-3 text-secondary" />
                Latest reports
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-black tracking-tight text-white">
                Recent decrypts
              </h2>
              <p className="text-muted-foreground/80 text-sm md:text-base font-light max-w-2xl">
                Clean, readable field logs with high-resolution imagery and structured metadata.
              </p>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono text-muted-foreground/60 tracking-[0.2em] uppercase">
              <span className="px-3 py-2 rounded-lg glass border border-white/10 flex items-center gap-2">
                <Activity className="h-3 w-3 text-primary animate-pulse" />
                Total_Records: {mockBlogs.length.toString().padStart(2, "0")}
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {mockBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="overflow-hidden glass-card border border-white/5 hover:border-primary/40 transition-all duration-700 group flex flex-col lg:flex-row h-auto lg:h-[320px]"
                >
                  {/* Media Container */}
                  <div className="relative w-full lg:w-[40%] h-[240px] lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5 group-hover:border-primary/20 transition-all">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      priority={index < 2}
                      sizes="(min-width: 1024px) 20vw, (min-width: 768px) 40vw, 100vw"
                      quality={92}
                      className="object-cover grayscale-[0.25] group-hover:grayscale-0 group-hover:scale-[1.08] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/55 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#020617]/40" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md glass-glow text-[10px] font-mono font-bold tracking-widest text-primary border border-primary/30">
                        <MapPin className="h-3 w-3" />
                        {blog.place}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Container */}
                  <div className="flex-1 p-6 flex flex-col justify-between relative overflow-hidden">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-mono text-primary/60 tracking-widest uppercase">
                        <div className="flex items-center gap-1.5 whitespace-nowrap">
                          <User className="h-3 w-3" />
                          <span>OPERATIVE: {blog.author.split(' ')[0]}</span>
                        </div>
                        <div className="flex items-center gap-1.5 whitespace-nowrap">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(blog.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1.5 whitespace-nowrap text-secondary/70">
                          <span className="h-3 w-3 rounded-sm border border-secondary/40" />
                          <span>{blog.readTime}</span>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission CTA */}
      <section className="w-full py-24 px-4 bg-white/[0.01]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center glass-card p-12 md:p-20 rounded-[40px] border border-secondary/20 relative overflow-hidden"
        >
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
        </motion.div>
      </section>

    </div>
  );
}

