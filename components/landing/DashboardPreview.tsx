"use client";
import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Search, Bell, Menu, BarChart2, Briefcase, Activity, Hexagon, TrendingUp, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function DashboardPreview() {
  return (
    <section className="px-6 pb-24 w-full flex justify-center perspective-[2000px] mt-8">
      <motion.div 
        initial={{ opacity: 0, y: 40, rotateX: 5 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-5xl"
      >
        <div className="rounded-[1.5rem] border border-border bg-surface/90 shadow-xl dark:shadow-[0_0_80px_rgba(255,255,255,0.02)] backdrop-blur-2xl overflow-hidden flex flex-col md:flex-row ring-1 ring-black/5 dark:ring-white/5">
          
          {/* Sidebar */}
          <div className="w-full md:w-56 border-r border-border bg-background/50 p-4 hidden md:flex flex-col gap-6">
            <div className="flex items-center gap-2 px-2 text-primary font-bold mb-4">
              <Hexagon className="w-6 h-6 fill-border stroke-primary" />
              <span>CryptoVerse</span>
              <Menu className="w-4 h-4 ml-auto text-secondary" />
            </div>
            
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-neutral-500 px-2 mb-3 uppercase tracking-widest block">Main Menu</p>
              <div className="flex items-center gap-3 px-3 py-2.5 text-primary border border-border bg-background/40 rounded-xl text-sm font-medium shadow-sm">
                <BarChart2 className="w-4 h-4 opacity-80" /> Dashboard
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 text-neutral-400 hover:text-primary transition-colors cursor-pointer text-sm font-medium">
                <Briefcase className="w-4 h-4 opacity-70" /> Crypto Wallet
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 text-neutral-400 hover:text-primary transition-colors cursor-pointer text-sm font-medium">
                <Activity className="w-4 h-4 opacity-70" /> Transaction
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 text-neutral-400 hover:text-primary transition-colors cursor-pointer text-sm font-medium">
                <TrendingUp className="w-4 h-4 opacity-70" /> Analytics
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 p-5 md:p-6 flex flex-col gap-5">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-border gap-4 sm:gap-0">
              <h2 className="text-base font-semibold flex items-center gap-2 text-primary/80">
                <BarChart2 className="w-4 h-4 opacity-70"/> Dashboard
              </h2>
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                <div className="flex items-center gap-2 bg-background/50 rounded-full px-4 py-1.5 border border-border min-w-[200px]">
                  <Search className="w-4 h-4 text-neutral-500" />
                  <span className="text-xs text-neutral-500">Search anything...</span>
                </div>
                <div className="p-2 bg-background/50 rounded-full border border-border shrink-0">
                  <Bell className="w-4 h-4 text-neutral-400" />
                </div>
                <div className="flex items-center gap-2 text-primary bg-background/50 rounded-full px-4 py-1.5 border border-border text-xs font-semibold shrink-0">
                  <div className="w-4 h-4 rounded-full bg-accent-purple/20 flex items-center justify-center">
                     <div className="w-2 h-2 rounded-full bg-accent-purple" />
                  </div>
                  227,169.85 USD
                </div>
              </div>
            </div>
            
            {/* Mini Tickers */}
            <div className="flex gap-2 w-full overflow-x-auto border border-border rounded-xl bg-surface/50 p-1 text-[10px] md:text-xs font-mono hide-scrollbar">
              <div className="flex justify-between items-center px-4 py-1.5 border-r border-border min-w-[140px]">
                <span className="text-neutral-400">BTC</span>
                <span className="text-primary font-medium tracking-wide">63,719.90 USD</span>
              </div>
              <div className="flex justify-between items-center px-4 py-1.5 border-r border-border min-w-[140px]">
                <span className="text-neutral-400">ETH</span>
                <span className="text-primary font-medium tracking-wide">3,077.53 USD</span>
              </div>
              <div className="flex justify-between items-center px-4 py-1.5 border-r border-border min-w-[140px]">
                <span className="text-neutral-400">LTC</span>
                <span className="text-primary font-medium tracking-wide">80.44 USD</span>
              </div>
              <div className="flex justify-between items-center px-4 py-1.5 border-r border-border min-w-[140px]">
                <span className="text-neutral-400">DASH</span>
                <span className="text-primary font-medium tracking-wide">28.84 USD</span>
              </div>
              <div className="flex justify-between items-center px-4 py-1.5 min-w-[140px]">
                <span className="text-neutral-400">NEO</span>
                <span className="text-primary font-medium tracking-wide">16.18 USD</span>
              </div>
            </div>
            
            {/* Balances */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-5 flex flex-col justify-between bg-background/80 col-span-1 border-border rounded-2xl">
                <p className="text-neutral-400 text-xs mb-2 flex items-center gap-2 font-medium uppercase tracking-wider"><Briefcase className="w-3.5 h-3.5"/> Wallet Balance</p>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">$227,169<span className="text-neutral-500 font-medium">.85</span> <span className="text-[10px] font-medium text-neutral-500 tracking-widest uppercase ml-1">USD</span></h3>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-white text-black py-2 rounded-lg text-xs font-bold hover:bg-neutral-200 transition-colors shadow-sm">Topup</button>
                  <button className="flex-1 bg-neutral-900 border border-neutral-800/80 text-primary py-2 rounded-lg text-xs font-bold hover:bg-neutral-800 transition-colors shadow-sm">More</button>
                </div>
              </Card>
              
              <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
                 <Card className="p-5 border-border bg-background/80 flex flex-col justify-between relative overflow-hidden rounded-2xl group">
                    <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F7931A]/10 flex items-center justify-center border border-[#F7931A]/20 transition-transform group-hover:scale-110">
                      <span className="text-[#F7931A] font-bold text-sm">₿</span>
                    </div>
                    <div>
                      <div className="w-1 h-3 bg-[#F7931A] rounded-full mb-3 shadow-[0_0_10px_#F7931A]" />
                      <p className="text-neutral-400 text-xs mb-1 font-medium tracking-wide">BTC Balance</p>
                      <h4 className="text-xl sm:text-2xl font-bold text-primary">0.34545 <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest">BTC</span></h4>
                    </div>
                    <p className="text-neutral-400 text-[10px] mt-3 font-mono">≈ 21,900.84 USD</p>
                 </Card>
                 <Card className="p-5 border-border bg-background/80 flex flex-col justify-between relative overflow-hidden rounded-2xl group">
                    <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#627EEA]/10 flex items-center justify-center border border-[#627EEA]/20 transition-transform group-hover:scale-110">
                      <span className="text-[#627EEA] font-bold text-sm">Ξ</span>
                    </div>
                    <div>
                      <div className="w-1 h-3 bg-[#627EEA] rounded-full mb-3 shadow-[0_0_10px_#627EEA]" />
                      <p className="text-neutral-400 text-xs mb-1 font-medium tracking-wide">ETH Balance</p>
                      <h4 className="text-xl sm:text-2xl font-bold text-primary">12.345 <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest">ETH</span></h4>
                    </div>
                    <p className="text-neutral-400 text-[10px] mt-3 font-mono">≈ 37,870.88 USD</p>
                 </Card>
              </div>
            </div>

            {/* Chart and Exchange */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {/* Mock Chart Area */}
               <Card className="col-span-1 md:col-span-2 p-5 border-border bg-background/80 min-h-[260px] flex flex-col rounded-2xl">
                  <div className="flex justify-between items-center mb-6">
                    <h5 className="text-sm font-semibold flex items-center gap-2 text-primary">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent-green shadow-[0_0_8px_#10B981]" /> 
                      BTC Overview
                    </h5>
                    <div className="flex gap-1 bg-surface p-1 rounded-lg border border-border">
                      <span className="px-3 py-1 text-[10px] font-semibold rounded-md bg-primary text-background shadow-sm">1D</span>
                      <span className="px-3 py-1 text-[10px] font-semibold rounded-md text-neutral-500 hover:text-primary cursor-pointer transition-colors">7D</span>
                      <span className="px-3 py-1 text-[10px] font-semibold rounded-md text-neutral-500 hover:text-primary cursor-pointer transition-colors">1M</span>
                      <span className="px-3 py-1 text-[10px] font-semibold rounded-md text-neutral-500 hover:text-primary cursor-pointer transition-colors">ALL</span>
                    </div>
                  </div>
                  {/* Fake Candlestick Chart */}
                  <div className="flex-1 flex items-end gap-[4px] sm:gap-[6px] justify-between mx-1 pt-6 relative border-t border-dashed border-border">
                    {/* Grid lines */}
                    <div className="absolute top-0 right-0 w-full h-full pointer-events-none flex flex-col justify-between pb-6 opacity-20">
                      <div className="w-full border-t border-neutral-700"/>
                      <div className="w-full border-t border-neutral-700"/>
                    </div>
                     {Array.from({ length: 40 }).map((_, i) => {
                       const isUp = Math.random() > 0.45;
                       const height = 15 + Math.random() * 70;
                       return (
                         <div key={i} className="group relative w-full h-full flex flex-col justify-end items-center cursor-crosshair">
                           <div 
                             className={`w-1 sm:w-1.5 md:w-2 rounded-t-sm transition-all duration-300 group-hover:opacity-100 opacity-80 ${isUp ? 'bg-accent-green' : 'bg-accent-red'} group-hover:scale-y-[1.1] origin-bottom shadow-sm ${isUp ? 'shadow-[#10B981]/20' : 'shadow-[#EF4444]/20'}`} 
                             style={{ height: `${height}%` }} 
                           />
                         </div>
                       )
                     })}
                  </div>
               </Card>

               {/* Exchange */}
               <Card className="col-span-1 p-5 border-border bg-background/80 flex flex-col rounded-2xl">
                  <div className="flex justify-between items-center mb-5">
                    <h5 className="text-sm font-semibold text-primary">Exchange</h5>
                    <div className="p-1.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 cursor-pointer hover:text-primary">
                      <Activity className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="bg-background border border-border rounded-xl p-3 flex justify-between items-center group hover:border-neutral-700 transition-colors">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-neutral-500 font-medium mb-1">You Pay</span>
                        <input className="text-xl sm:text-2xl font-bold bg-transparent border-none outline-none text-primary w-full max-w-[120px]" defaultValue="12,000" />
                      </div>
                      <div className="flex items-center gap-2 bg-surface border border-border px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                        <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-[8px]">$</div>
                        USD <ChevronRight className="w-3 h-3 text-neutral-500" />
                      </div>
                    </div>
                    <div className="flex justify-center -my-4 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-neutral-400 hover:text-primary hover:border-neutral-400 cursor-pointer transition-colors shadow-md dark:shadow-black">
                        <Activity className="w-3.5 h-3.5 rotate-90" />
                      </div>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-3 flex justify-between items-center group hover:border-neutral-700 transition-colors">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-neutral-500 font-medium mb-1">You Receive</span>
                        <span className="text-xl sm:text-2xl font-bold text-primary">0.1883</span>
                      </div>
                      <div className="flex items-center gap-2 bg-surface border border-border px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                        <span className="text-[#F7931A] text-sm">₿</span> BTC <ChevronRight className="w-3 h-3 text-neutral-500" />
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="w-full text-xs py-5 rounded-xl bg-primary text-background font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]">Express Exchange</Button>
               </Card>
            </div>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
}
