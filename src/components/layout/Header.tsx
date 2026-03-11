"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, Sun, X, LogIn, Moon, ChevronRight, Share2, ChevronDown, Pill, Clock, Star, Trophy } from 'lucide-react';
import { categories } from '@/lib/mockData';
import Ticker from '../ui/Ticker';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
        {/* Desktop Top Bar */}
        <div className={`bg-slate-900 text-white text-[10px] px-4 hidden md:block uppercase font-black tracking-widest transition-all duration-300 origin-top ${isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'py-2 opacity-100'}`}>
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
        <div className={`container mx-auto px-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2 md:py-3' : 'py-4 md:py-6'}`}>
          <div className="flex items-center gap-6">
            <button 
                onClick={() => setIsMenuOpen(true)}
                className={`bg-slate-50 hover:bg-red-50 text-slate-900 hover:text-red-600 rounded-2xl transition-all active:scale-90 ${isScrolled ? 'p-2' : 'p-3'}`}
            >
              <Menu className={`transition-all duration-300 ${isScrolled ? 'h-5 w-5' : 'h-6 w-6'}`} />
            </button>
            <Link href="/" className="flex items-center gap-3 group">
              <img src="/logo.png" alt="Truva Haber" className={`rounded-2xl shadow-xl shadow-red-200 group-hover:scale-105 transition-all duration-300 object-cover ${isScrolled ? 'w-8 h-8 md:w-10 md:h-10' : 'w-12 h-12 md:w-16 md:h-16'}`} />
              <div className="flex flex-col justify-center">
                <span className={`font-black text-slate-900 leading-none tracking-tighter italic transition-all duration-300 ${isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-4xl'}`}>TRUVA</span>
                <span className={`font-bold text-red-600 tracking-[0.4em] leading-none transition-all duration-300 ${isScrolled ? 'text-[8px] md:text-[10px] mt-0.5' : 'text-xs md:text-sm mt-1'}`}>HABER</span>
              </div>
            </Link>
          </div>

          <div className={`hidden lg:flex items-center bg-slate-50 rounded-2xl border border-slate-100 focus-within:border-red-500 focus-within:bg-white transition-all shadow-inner ${isScrolled ? 'px-4 py-2 w-72' : 'px-6 py-3 w-96'}`}>
            <input 
              type="text" 
              placeholder="Haber ve içerik ara..." 
              className={`bg-transparent border-none outline-none w-full font-bold placeholder:text-slate-400 transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-sm'}`}
            />
            <button className="text-slate-400 hover:text-red-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-2">
             <button className={`bg-slate-50 hover:bg-red-50 text-slate-900 hover:text-red-600 rounded-2xl md:hidden transition-all ${isScrolled ? 'p-2' : 'p-3'}`}>
                <Search className={`transition-all duration-300 ${isScrolled ? 'h-5 w-5' : 'h-6 w-6'}`} />
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
        <nav className={`bg-white border-t border-slate-50 hidden md:block transition-all duration-500 origin-top ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-14 opacity-100'}`}>
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
        <div className={`transition-all duration-500 origin-top ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'opacity-100'}`}>
          <Ticker />
        </div>
      </header>
      {/* Spacer to absorb the fixed header's height and prevent layout shift jumps */}
      <div className="h-[112px] md:h-[234px] w-full shrink-0 pointer-events-none" />

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

                  {/* SERVİSLER */}
                  <div className="mt-8 border-t border-slate-100 pt-8">
                     <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] block mb-4">Servisler</span>
                     <div className="space-y-2">
                        
                        {/* Nöbetçi Eczaneler */}
                        <button 
                          onClick={() => setActiveService(activeService === 'eczane' ? null : 'eczane')}
                          className={`w-full flex items-center justify-between p-4 rounded-2xl group transition-all ${activeService === 'eczane' ? 'bg-green-50 border border-green-200' : 'bg-slate-50 hover:bg-green-50'}`}
                        >
                          <div className="flex items-center gap-3">
                            <Pill className="h-5 w-5 text-green-600" />
                            <span className="font-bold text-slate-700 uppercase text-sm tracking-widest">Nöbetçi Eczaneler</span>
                          </div>
                          <ChevronDown className={`h-4 w-4 text-slate-300 transition-transform ${activeService === 'eczane' ? 'rotate-180 text-green-600' : ''}`} />
                        </button>
                        {activeService === 'eczane' && (
                          <div className="bg-green-50/50 rounded-2xl p-4 space-y-3 border border-green-100">
                            {[
                              { name: "Merkez Eczanesi", adres: "Cevatpaşa Mah. No:12", tel: "0286 217 00 00" },
                              { name: "Güven Eczanesi", adres: "Barbaros Mah. No:45", tel: "0286 213 00 00" },
                              { name: "Kordon Eczanesi", adres: "Kemalpaşa Mah. No:78", tel: "0286 218 00 00" },
                              { name: "Yeni Eczane", adres: "İnönü Cad. No:33", tel: "0286 212 00 00" },
                            ].map((ecz, i) => (
                              <div key={i} className="bg-white rounded-xl p-3 shadow-sm">
                                <p className="font-bold text-green-800 text-sm">{ecz.name}</p>
                                <p className="text-xs text-gray-500 mt-1">{ecz.adres}</p>
                                <p className="text-xs text-green-600 font-bold mt-1">{ecz.tel}</p>
                              </div>
                            ))}
                            <p className="text-[9px] text-center text-gray-400 font-bold uppercase tracking-widest mt-2">Çanakkale Merkez • Bugün</p>
                          </div>
                        )}

                        {/* Namaz Vakitleri */}
                        <button 
                          onClick={() => setActiveService(activeService === 'namaz' ? null : 'namaz')}
                          className={`w-full flex items-center justify-between p-4 rounded-2xl group transition-all ${activeService === 'namaz' ? 'bg-blue-50 border border-blue-200' : 'bg-slate-50 hover:bg-blue-50'}`}
                        >
                          <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-blue-600" />
                            <span className="font-bold text-slate-700 uppercase text-sm tracking-widest">Namaz Vakitleri</span>
                          </div>
                          <ChevronDown className={`h-4 w-4 text-slate-300 transition-transform ${activeService === 'namaz' ? 'rotate-180 text-blue-600' : ''}`} />
                        </button>
                        {activeService === 'namaz' && (
                          <div className="bg-blue-50/50 rounded-2xl p-4 border border-blue-100">
                            <div className="grid grid-cols-2 gap-2">
                              {[
                                { vakit: "İmsak", saat: "05:42" },
                                { vakit: "Güneş", saat: "07:08" },
                                { vakit: "Öğle", saat: "13:15" },
                                { vakit: "İkindi", saat: "16:38" },
                                { vakit: "Akşam", saat: "19:12" },
                                { vakit: "Yatsı", saat: "20:32" },
                              ].map((v, i) => (
                                <div key={i} className="bg-white rounded-xl p-3 text-center shadow-sm">
                                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{v.vakit}</p>
                                  <p className="text-lg font-black text-blue-900 mt-1">{v.saat}</p>
                                </div>
                              ))}
                            </div>
                            <p className="text-[9px] text-center text-gray-400 font-bold uppercase tracking-widest mt-3">Çanakkale • {new Date().toLocaleDateString('tr-TR')}</p>
                          </div>
                        )}

                        {/* Burçlar */}
                        <button 
                          onClick={() => setActiveService(activeService === 'burc' ? null : 'burc')}
                          className={`w-full flex items-center justify-between p-4 rounded-2xl group transition-all ${activeService === 'burc' ? 'bg-purple-50 border border-purple-200' : 'bg-slate-50 hover:bg-purple-50'}`}
                        >
                          <div className="flex items-center gap-3">
                            <Star className="h-5 w-5 text-purple-600" />
                            <span className="font-bold text-slate-700 uppercase text-sm tracking-widest">Burçlar</span>
                          </div>
                          <ChevronDown className={`h-4 w-4 text-slate-300 transition-transform ${activeService === 'burc' ? 'rotate-180 text-purple-600' : ''}`} />
                        </button>
                        {activeService === 'burc' && (
                          <div className="bg-purple-50/50 rounded-2xl p-4 border border-purple-100">
                            <div className="grid grid-cols-4 gap-2">
                              {[
                                { name: "Koç", icon: "♈" }, { name: "Boğa", icon: "♉" },
                                { name: "İkizler", icon: "♊" }, { name: "Yengeç", icon: "♋" },
                                { name: "Aslan", icon: "♌" }, { name: "Başak", icon: "♍" },
                                { name: "Terazi", icon: "♎" }, { name: "Akrep", icon: "♏" },
                                { name: "Yay", icon: "♐" }, { name: "Oğlak", icon: "♑" },
                                { name: "Kova", icon: "♒" }, { name: "Balık", icon: "♓" },
                              ].map((b, i) => (
                                <button key={i} className="flex flex-col items-center gap-1 p-2 bg-white rounded-xl hover:bg-purple-100 transition-all shadow-sm">
                                  <span className="text-xl">{b.icon}</span>
                                  <span className="text-[8px] font-black uppercase tracking-wider text-purple-700">{b.name}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Puan Durumu */}
                        <button 
                          onClick={() => setActiveService(activeService === 'puan' ? null : 'puan')}
                          className={`w-full flex items-center justify-between p-4 rounded-2xl group transition-all ${activeService === 'puan' ? 'bg-emerald-50 border border-emerald-200' : 'bg-slate-50 hover:bg-emerald-50'}`}
                        >
                          <div className="flex items-center gap-3">
                            <Trophy className="h-5 w-5 text-emerald-600" />
                            <span className="font-bold text-slate-700 uppercase text-sm tracking-widest">Puan Durumu</span>
                          </div>
                          <ChevronDown className={`h-4 w-4 text-slate-300 transition-transform ${activeService === 'puan' ? 'rotate-180 text-emerald-600' : ''}`} />
                        </button>
                        {activeService === 'puan' && (
                          <div className="bg-emerald-50/50 rounded-2xl p-3 border border-emerald-100 overflow-x-auto">
                            <table className="w-full text-xs">
                              <thead>
                                <tr className="text-emerald-600 font-black text-[10px] uppercase">
                                  <th className="py-1 px-1 text-left">#</th>
                                  <th className="py-1 px-1 text-left">Takım</th>
                                  <th className="py-1 px-1 text-center">O</th>
                                  <th className="py-1 px-1 text-center">P</th>
                                </tr>
                              </thead>
                              <tbody>
                                {[
                                  { p: 1, n: "Galatasaray", o: 25, pt: 61 },
                                  { p: 2, n: "Fenerbahçe", o: 25, pt: 57 },
                                  { p: 3, n: "Trabzonspor", o: 25, pt: 54 },
                                  { p: 4, n: "Beşiktaş", o: 25, pt: 46 },
                                  { p: 5, n: "Başakşehir", o: 25, pt: 42 },
                                  { p: 6, n: "Göztepe", o: 25, pt: 42 },
                                ].map((t) => (
                                  <tr key={t.p} className="border-t border-emerald-100">
                                    <td className="py-2 px-1 font-bold text-gray-400">{t.p}</td>
                                    <td className="py-2 px-1 font-bold text-gray-800">{t.n}</td>
                                    <td className="py-2 px-1 text-center text-gray-500">{t.o}</td>
                                    <td className="py-2 px-1 text-center font-black text-gray-900">{t.pt}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                     </div>
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
