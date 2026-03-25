import React from 'react';
import { Card } from '@/components/ui/Card';
import { trendingCoins } from '@/lib/mockData';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function Trending() {
  return (
    <section className="py-24 px-6 flex justify-center bg-[#050505] border-t border-neutral-800/30 relative">
      <div className="absolute inset-0 bg-gradient-radial from-neutral-800/20 to-transparent pointer-events-none opacity-30" />
      <div className="w-full max-w-6xl relative z-10">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800/50 pb-6">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Trending Market</h2>
            <p className="text-secondary">Track the top performing assets in real-time.</p>
          </div>
          <button className="text-primary text-sm hover:underline hover:text-white transition-colors">View All Markets</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingCoins.map((coin, idx) => (
            <Card key={idx} className="p-5 flex flex-col justify-between hover:bg-neutral-900/50 transition-colors border-neutral-800 bg-[#080808]">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${coin.symbol === 'BTC' ? 'bg-[#F7931A]/20 text-[#F7931A]' : coin.symbol === 'ETH' ? 'bg-[#627EEA]/20 text-[#627EEA]' : coin.symbol === 'SOL' ? 'bg-[#14F195]/20 text-[#14F195]' : 'bg-[#F3BA2F]/20 text-[#F3BA2F]'}`}>
                    {coin.symbol[0]}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary">{coin.symbol}</h3>
                    <p className="text-xs text-secondary">{coin.name}</p>
                  </div>
                </div>
                {coin.isPositive ? <TrendingUp className="w-4 h-4 text-accent-green" /> : <TrendingDown className="w-4 h-4 text-accent-red" />}
              </div>
              <div className="flex justify-between items-end">
                <h4 className="text-xl font-bold text-primary tracking-tight">{coin.price}</h4>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${coin.isPositive ? 'text-accent-green bg-accent-green/10' : 'text-accent-red bg-accent-red/10'}`}>
                  {coin.change}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
