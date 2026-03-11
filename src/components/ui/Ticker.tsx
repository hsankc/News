"use client";

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Sun, Cloud, CloudRain } from 'lucide-react';

const financeData = [
  { label: 'BIST', value: '13.177', change: '+0,01%', isUp: true },
  { label: 'DOLAR', value: '44,0830', change: '+0,04%', isUp: true },
  { label: 'EURO', value: '51,2315', change: '-0,04%', isUp: false },
  { label: 'ALTIN', value: '7.364,71', change: '+0,12%', isUp: true },
];

export default function Ticker() {
  const marqueeItems = [...financeData, ...financeData, ...financeData]; // Duplicate for seamless scroll

  return (
    <div className="bg-white border-y border-slate-100 overflow-hidden py-1.5 md:py-2.5">
      <div className="container mx-auto px-4 flex items-center gap-4 md:gap-8">
        {/* News Flash Tag */}
        <div className="flex items-center gap-2 bg-red-600 text-white px-3 md:px-5 py-1 md:py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-lg shadow-red-200 flex-shrink-0 z-10 relative">
            <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-white"></span>
            </span>
            CANLI BORSA
        </div>

        {/* Infinite Marquee Container */}
        <div className="flex-1 overflow-hidden relative group">
          <motion.div 
            className="flex items-center gap-4 md:gap-8 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
            }}
          >
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 md:gap-3 bg-slate-50/50 px-3 md:px-5 py-1.5 md:py-2 rounded-xl border border-slate-100 transition-all hover:bg-white hover:shadow-md cursor-default">
                <div className={`p-1 md:p-1.5 rounded-lg ${item.isUp ? 'text-green-600' : 'text-red-600'}`}>
                  {item.isUp ? <TrendingUp className="h-3 w-3 md:h-4 md:w-4" /> : <TrendingDown className="h-3 w-3 md:h-4 md:w-4" />}
                </div>
                <div className="flex flex-col">
                  <span className="text-[7px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">{item.label}</span>
                  <div className="flex items-center gap-1.5 md:gap-2">
                      <span className="text-[10px] md:text-sm font-black text-slate-900 tracking-tighter leading-none">{item.value}</span>
                      <span className={`text-[8px] md:text-[10px] font-black leading-none ${item.isUp ? 'text-green-500' : 'text-red-500'}`}>
                          {item.change}
                      </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Weather Item integrated into marquee */}
            <div className="flex items-center gap-3 md:gap-5 bg-blue-50/30 px-4 md:px-6 py-1.5 md:py-2 rounded-xl border border-blue-50 flex-shrink-0">
                <Sun className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />
                <div className="flex flex-col">
                    <span className="text-[7px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">Çanakkale</span>
                    <span className="text-[10px] md:text-sm font-black text-slate-900 tracking-tight leading-none">18°C</span>
                </div>
            </div>
          </motion.div>

          {/* Gradient Overlays for smooth entry/exit */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
}
