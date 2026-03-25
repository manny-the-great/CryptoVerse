"use client";
import React, { useState } from 'react';
import { faqs } from '@/lib/mockData';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 flex justify-center bg-black">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">Got Questions?</h2>
          <p className="text-secondary text-lg">Everything you need to know about the platform.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-neutral-800/80 rounded-2xl overflow-hidden bg-[#0A0A0A]/80 shadow-md">
              <button 
                className="w-full px-6 py-5 flex justify-between items-center bg-transparent text-left hover:bg-neutral-900/80 transition-colors outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-semibold text-primary text-lg">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center transition-transform duration-300 ${openIdx === idx ? 'bg-primary text-black rotate-180' : 'bg-transparent text-secondary'}`}>
                   <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 pt-0 text-secondary border-t border-neutral-800/40 text-base leading-relaxed"
                  >
                    <p className="pt-4">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
