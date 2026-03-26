"use client";
import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const floatingIcons = [
  { src: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/btc.png", alt: "Bitcoin", size: "w-16 h-16", position: "top-[15%] left-[10%] md:left-[15%]", delay: 0 },
  { src: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/eth.png", alt: "Ethereum", size: "w-20 h-20", position: "bottom-[20%] left-[5%] md:left-[20%]", delay: 1 },
  { src: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/sol.png", alt: "Solana", size: "w-14 h-14", position: "top-[25%] right-[10%] md:right-[15%]", delay: 0.5 },
  { src: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/bnb.png", alt: "BNB", size: "w-16 h-16", position: "bottom-[25%] right-[5%] md:right-[20%]", delay: 1.5 },
];

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-16 px-6 text-center min-h-[80vh]">
      {floatingIcons.map((icon, idx) => (
        <motion.div
          key={idx}
          initial={{ y: 0 }}
          animate={{ y: [-15, 15, -15] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: icon.delay }}
          className={`absolute ${icon.position} ${icon.size} opacity-60 blur-[3px] z-0 pointer-events-none hover:blur-none transition-all duration-300`}
        >
          <img src={icon.src} alt={icon.alt} className="w-full h-full object-contain" />
        </motion.div>
      ))}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center max-w-4xl relative z-10"
      >
        <Badge className="mb-8 hover:bg-surface/80 cursor-pointer transition-colors border-border flex items-center gap-2 pr-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface border border-border">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
            </span>
            <span className="text-xs font-semibold text-primary">New</span>
          </div>
          <span className="text-secondary">Introducing CryptoVerse AI Learning Platform</span>
          <ChevronRight className="w-3 h-3 text-secondary" />
        </Badge>
        
        <h1 className="font-bricolage text-5xl md:text-7xl font-extrabold tracking-tight text-gradient-grey-gold mb-6 leading-tight flex flex-col gap-2 drop-shadow-sm">
          <span>The Risk-Free Platform for a</span> 
          <span>Smarter Crypto Future</span>
        </h1>
        
        <p className="text-lg md:text-xl text-secondary max-w-2xl mb-10 tracking-wide font-light drop-shadow-sm">
          Trade and grow your assets on a platform built for speed, trust, and complete reliability so you never worry about security.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button size="lg" className="w-full sm:w-auto px-8 transition-all hover:scale-105 active:scale-95">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 transition-all bg-background/50 backdrop-blur-sm">
            Book Demo <ChevronRight className="w-4 h-4 ml-1 opacity-70" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
