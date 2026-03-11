"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Share2, Clock } from 'lucide-react';
import Link from 'next/link';
import { heroNews, latestNews } from '@/lib/mockData';

// Combine hero and latest to get 20 items for the demo slider
const allSliderNews = [...heroNews, ...latestNews, ...latestNews.map(n => ({ ...n, id: n.id + 100 }))].slice(0, 20);

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % allSliderNews.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + allSliderNews.length) % allSliderNews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const currentNews = allSliderNews[currentIndex];

  return (
    <section className="py-2 md:py-6 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Slider Container */}
        <div className="relative h-[450px] md:h-[600px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-slate-900 border-4 border-white">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0"
            >
              <img 
                src={currentNews.image || "/placeholder.png"}
                alt={currentNews.title}
                className="w-full h-full object-cover"
              />

              {/* Top-Left Category & Date Badge */}
              <div className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-2 z-10">
                <span className="bg-red-600 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.3em] py-2 px-4 rounded-full shadow-lg shadow-red-900/40">
                  {currentNews.category || "GÜNDEM"}
                </span>
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-[10px] md:text-xs font-bold py-2 px-3 rounded-full">
                    <Clock className="h-3 w-3" />
                    {currentNews.date}
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-4xl"
                >
                  <Link href={`/haber/${currentNews.id}`}>
                    <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] md:leading-[1.05] tracking-tighter mb-6 hover:text-red-500 transition-colors cursor-pointer drop-shadow-2xl italic">
                      {currentNews.title}
                    </h2>
                  </Link>
                  <p className="text-white/80 text-sm md:text-lg font-medium leading-relaxed mb-8 line-clamp-2 md:line-clamp-3 max-w-2xl drop-shadow-md">
                    {currentNews.summary}
                  </p>
                  
                  <div className="flex items-center gap-4">
                     <Link href={`/haber/${currentNews.id}`} className="bg-white text-slate-900 px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95">
                        HABERİ OKU
                     </Link>
                     <button 
                       onClick={async () => {
                         const shareData = {
                           title: currentNews.title,
                           text: currentNews.summary,
                           url: `${window.location.origin}/haber/${currentNews.id}`
                         };
                         try {
                           if (navigator.share) {
                             await navigator.share(shareData);
                           } else {
                             await navigator.clipboard.writeText(shareData.url);
                             alert('Link kopyalandı!');
                           }
                         } catch (e) { /* user cancelled */ }
                       }}
                       className="p-5 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all border border-white/10"
                     >
                        <Share2 className="h-5 w-5" />
                     </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center px-4 md:px-8 pointer-events-none z-20">
            <button 
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="p-4 md:p-6 bg-white/10 hover:bg-red-600 backdrop-blur-[1px] text-white rounded-full transition-all pointer-events-auto border border-white/20 group active:scale-90 shadow-2xl"
            >
              <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 md:px-8 pointer-events-none z-20">
            <button 
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="p-4 md:p-6 bg-white/10 hover:bg-red-600 backdrop-blur-[1px] text-white rounded-full transition-all pointer-events-auto border border-white/20 group active:scale-90 shadow-2xl"
            >
              <ChevronRight className="h-6 w-6 md:h-8 md:w-8 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Index Navigation (1-20) */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-xl border-t border-white/10 z-30 hidden sm:block">
            <div className="flex items-center overflow-x-auto no-scrollbar">
                {allSliderNews.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`flex-1 min-w-[50px] py-4 text-sm font-black transition-all border-r border-white/5 ${
                            currentIndex === idx 
                                ? 'bg-red-600 text-white border-b-4 border-b-white' 
                                : 'text-white/40 hover:bg-white/5 active:bg-white/10'
                        }`}
                    >
                        {idx + 1}
                    </button>
                ))}
                <button className="min-w-[50px] py-4 text-xs font-black text-white bg-slate-800 border-l border-white/20">T</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
