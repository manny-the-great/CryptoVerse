import React from 'react';
import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section className="py-32 px-6 flex justify-center border-t border-border relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/40 via-background to-background pointer-events-none" />
      <div className="w-full max-w-4xl text-center flex flex-col items-center relative z-10">
        <div className="w-20 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 mb-8 rounded-full opacity-50" />
        <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight drop-shadow-lg">Start Your Crypto Journey Today</h2>
        <p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto mb-10 font-light">
          Join thousands of other traders who are learning, practicing, and mastering the cryptocurrency markets risk-free.
        </p>
        <div className="p-1.5 rounded-2xl bg-gradient-to-r from-border via-surface to-border shadow-xl dark:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-2xl transition-shadow">
          <Button size="lg" className="px-10 py-6 text-lg bg-background text-primary hover:bg-surface border border-border rounded-xl font-bold tracking-wide w-full h-full flex items-center justify-center">
            Get Started For Free
          </Button>
        </div>
      </div>
    </section>
  );
}
