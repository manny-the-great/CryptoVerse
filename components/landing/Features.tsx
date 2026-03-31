import React from 'react';
import { Card } from '@/components/ui/Card';
import { features } from '@/lib/mockData';
import { Activity, LineChart, BookOpen, Brain, Wallet, Trophy } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-6 h-6" />,
  LineChart: <LineChart className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Wallet: <Wallet className="w-6 h-6" />,
  Trophy: <Trophy className="w-6 h-6" />
};

export function Features() {
  return (
    <section className="py-24 px-6 flex justify-center border-t border-border bg-surface/20">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">Everything you need to succeed</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Master the markets with our comprehensive suite of educational and simulation tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} className="p-6 border-border bg-surface/40 hover:bg-surface/60 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-lg dark:shadow-black/50">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-secondary leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
