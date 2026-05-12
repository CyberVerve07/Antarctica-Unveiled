import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { BackToTop } from "@/components/back-to-top";
import { PageTransition } from "@/components/page-transition";
import { TacticalCursor } from "@/components/layout/tactical-cursor";
import { HUDOverlay } from "@/components/layout/hud-overlay";

export const metadata: Metadata = {
  title: 'Extreme Explorers - World\'s Most Dangerous & Beautiful Places',
  description: 'Discover the world\'s most extreme destinations - from the Amazon Rainforest to Mount Everest. Share your adventures, read deep insights, and connect with fellow explorers.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

import { SmoothScroll } from "@/components/smooth-scroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{colorScheme: 'dark'}}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-[#020617] text-foreground antialiased relative selection:bg-primary/30 selection:text-white">
          <TacticalCursor />
          <HUDOverlay />
          <div className="noise-overlay opacity-[0.03]"></div>
          <div className="crt-overlay opacity-[0.05]"></div>
          <div className="aurora-background opacity-20"></div>
          
          <SmoothScroll>
            <div className="flex flex-col min-h-screen relative z-10">
              <Header />
              <main className="flex-grow">
                <PageTransition>
                  {children}
                </PageTransition>
              </main>
              <Footer />
            </div>
          </SmoothScroll>

          <BackToTop />
          <Toaster />
          
          {/* Global Scanline Effect */}
          <div className="fixed inset-0 pointer-events-none z-[9999] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
      </body>
    </html>
  );
}
