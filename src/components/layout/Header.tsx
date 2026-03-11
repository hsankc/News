"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, Sun, X, LogIn, Moon, ChevronRight, Share2 } from 'lucide-react';
import { categories } from '@/lib/mockData';
import Ticker from '../ui/Ticker';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
        {/* Desktop Top Bar */}
        <div className="bg-slate-900 text-white text-[10px] py-2 px-4 hidden md:block uppercase font-black tracking-widest">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex gap-8 items-center">
              <span>{new Date().toLocaleDateString('tr-TR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <div className="flex items-center gap-2 text-slate-400">
                <Sun className="h-3 w-3" />
                <span>Çanakkale: 18°C Güneşli</span>
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <Link href="/kunye" className="hover:text-red-500 transition-colors">Künye</Link>
              <Link href="/iletisim" className="hover:text-red-500 transition-colors">İletişim</Link>
              <Link href="/reklam" className="hover:text-red-500 transition-colors border-l border-white/10 pl-6">Reklam Ver</Link>
            </div>
          </div>
        </div>

        {/* Main Logo & Action Bar */}
        <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button 
                onClick={() => setIsMenuOpen(true)}
                className="p-3 bg-slate-50 hover:bg-red-50 text-slate-900 hover:text-red-600 rounded-2xl transition-all active:scale-90"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link href="/" className="flex items-center gap-3 group">
              <img src="/logo.png" alt="Truva Haber" className="w-12 h-12 md:w-16 md:h-16 rounded-2xl shadow-xl shadow-red-200 group-hover:scale-105 transition-transform object-cover" />
              <div className="flex flex-col">
                <span className="font-black text-2xl md:text-4xl text-slate-900 leading-none tracking-tighter italic">TRUVA</span>
                <span className="font-bold text-xs md:text-sm text-red-600 tracking-[0.4em] leading-none mt-1">HABER</span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center bg-slate-50 rounded-2xl px-6 py-3 border border-slate-100 focus-within:border-red-500 focus-within:bg-white transition-all w-96 shadow-inner">
            <input 
              type="text" 
              placeholder="Haber ve içerik ara..." 
              className="bg-transparent border-none outline-none w-full text-sm font-bold placeholder:text-slate-400"
            />
            <button className="text-slate-400 hover:text-red-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-2">
             <button className="p-3 bg-slate-50 hover:bg-red-50 text-slate-900 hover:text-red-600 rounded-2xl md:hidden">
                <Search className="h-6 w-6" />
             </button>
             <Link 
                href="/admin" 
                className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-600 transition-all shadow-lg active:scale-95"
             >
                <LogIn className="h-4 w-4" />
                GİRİŞ
             </Link>
          </div>
        </div>

        {/* Categories Bar - Desktop Only */}
        <nav className="bg-white border-t border-slate-50 hidden md:block">
          <div className="container mx-auto px-4">
            <ul className="flex items-center justify-between font-black text-[13px] text-slate-600 w-full uppercase tracking-widest py-1">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    href={cat.href} 
                    className="block py-4 px-2 border-b-4 border-transparent hover:border-red-600 hover:text-red-600 transition-all"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Ticker integration */}
        <Ticker />
      </header>

      {/* Premium Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100]"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white z-[101] shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Truva Haber" className="w-10 h-10 rounded-xl object-cover" />
                    <span className="font-black text-lg tracking-tighter">MENÜ</span>
                </div>
                <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-3 bg-white text-slate-400 hover:text-red-600 rounded-xl shadow-sm active:scale-90"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="p-6 grid grid-cols-2 gap-4">
                 <button 
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="flex flex-col items-center gap-2 p-4 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors group"
                 >
                    <div className="p-3 bg-white rounded-2xl shadow-sm text-amber-500 group-hover:scale-110 transition-transform">
                        {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Gece Modu</span>
                 </button>
                 <Link 
                    href="/admin/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex flex-col items-center gap-2 p-4 rounded-3xl bg-slate-900 text-white hover:bg-red-600 transition-colors group shadow-xl shadow-slate-200"
                 >
                    <div className="p-3 bg-white/10 rounded-2xl text-white group-hover:scale-110 transition-transform">
                        <LogIn className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/70">Giriş Yap</span>
                 </Link>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-4">
                  <div className="mb-4">
                     <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] block mb-4">Kategoriler</span>
                     <ul className="space-y-2">
                        {categories.map((cat) => (
                           <li key={cat.id}>
                              <Link 
                                href={cat.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center justify-between p-4 bg-slate-50 hover:bg-red-50 rounded-2xl group transition-all"
                              >
                                 <span className="font-bold text-slate-700 group-hover:text-red-600 uppercase text-sm tracking-widest">{cat.name}</span>
                                 <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-8">
                     <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] block mb-4">Kurumsal</span>
                     <div className="grid grid-cols-1 gap-2">
                        <Link href="/kunye" className="text-sm font-bold text-slate-500 hover:text-red-600 transition-colors p-2">Künye</Link>
                        <Link href="/iletisim" className="text-sm font-bold text-slate-500 hover:text-red-600 transition-colors p-2">İletişim</Link>
                        <Link href="/reklam" className="text-sm font-bold text-slate-500 hover:text-red-600 transition-colors p-2">Reklam Ver</Link>
                     </div>
                  </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-8 bg-slate-50 border-t border-slate-100">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="flex-1 h-px bg-slate-200"></div>
                     <Share2 className="h-5 w-5 text-slate-300" />
                     <div className="flex-1 h-px bg-slate-200"></div>
                  </div>
                  <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
                     © 2026 Truva Haber
                  </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
