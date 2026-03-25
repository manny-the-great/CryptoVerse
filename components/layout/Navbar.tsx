import React from 'react';
import { Button } from '@/components/ui/Button';
import { Hexagon } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center border-b border-neutral-800/50 bg-background/60 backdrop-blur-md h-20 px-6">
      <div className="w-full max-w-6xl flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-primary flex items-center justify-center">
             <Hexagon className="w-8 h-8 fill-neutral-800 stroke-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">CryptoVerse</span>
        </div>
        
        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
          <a href="#" className="text-primary transition-colors hover:text-primary">Home</a>
          <a href="#" className="transition-colors hover:text-primary">How it Works</a>
          <a href="#" className="transition-colors hover:text-primary">Trending</a>
          <a href="#" className="transition-colors hover:text-primary">Features</a>
          <a href="#" className="transition-colors hover:text-primary">Testimonials</a>
          <a href="#" className="transition-colors hover:text-primary">FAQs</a>
        </div>
        
        {/* Primary CTA */}
        <div>
          <Button variant="outline" className="text-sm">
            Try for Free
          </Button>
        </div>
      </div>
    </nav>
  );
}
