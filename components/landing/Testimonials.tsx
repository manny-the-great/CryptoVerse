import React from 'react';
import { Card } from '@/components/ui/Card';
import { testimonials } from '@/lib/mockData';

export function Testimonials() {
  return (
    <section className="py-24 px-6 flex justify-center border-t border-neutral-800/30 bg-[#0A0A0A]/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-neutral-900/[0.02] bg-grid-overlay pointer-events-none" />
      <div className="w-full max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">Loved by traders worldwide</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            See what our community has to say about learning and trading with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <Card key={idx} className="p-8 border-neutral-800/80 bg-[#050505]/80 flex flex-col justify-between hover:bg-neutral-900/60 transition-colors shadow-2xl backdrop-blur-3xl rounded-2xl group">
              <p className="text-neutral-300 mb-8 text-lg leading-relaxed font-light italic opacity-90 group-hover:opacity-100 transition-opacity">
                "{test.feedback}"
              </p>
              <div className="flex items-center gap-4 border-t border-neutral-800/50 pt-5">
                <div className="w-12 h-12 rounded-full bg-neutral-800 border-2 border-neutral-700 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-neutral-600 to-neutral-900" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">{test.name}</h4>
                  <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">{test.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
