import React from 'react';
import { Hexagon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800/50 py-12 px-6 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Hexagon className="w-6 h-6 fill-neutral-800 stroke-primary" />
          <span className="text-xl font-bold tracking-tight text-primary">CryptoVerse</span>
        </div>
        
        <div className="flex items-center gap-8 text-sm text-secondary">
          <a href="#" className="hover:text-primary transition-colors">Features</a>
          <a href="#" className="hover:text-primary transition-colors">Docs</a>
          <a href="#" className="hover:text-primary transition-colors">Support</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
        </div>
        
        <div className="text-secondary text-xs">
          © {new Date().getFullYear()} CryptoVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
