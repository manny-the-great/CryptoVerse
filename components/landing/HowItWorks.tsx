import React from 'react';

export function HowItWorks() {
  return (
    <section className="py-24 px-6 flex justify-center">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">How it works</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Get started in minutes and begin your crypto journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-neutral-800/50 -translate-y-1/2 -z-10" />
          
          {[
            { step: '01', title: 'Create Account', desc: 'Sign up securely in seconds. No KYC required for the simulator.' },
            { step: '02', title: 'Get Demo Balance', desc: 'Receive $100,000 in virtual funds to start practicing immediately.' },
            { step: '03', title: 'Start Trading', desc: 'Access real-time markets and test your strategies risk-free.' }
          ].map((item, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xl font-bold text-primary mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
