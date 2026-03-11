"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Camera, 
  Send,
  Save,
  CheckCircle2,
  AlertCircle,
  Eye,
  Plus,
  ArrowDownRight,
  Search,
  Type,
  Link as LinkIcon,
  Image as ImageIcon
} from 'lucide-react';
import { categories } from '@/lib/mockData';

export default function AddNewsPage() {
  const router = useRouter();
  const [notification, setNotification] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
      if (msg.includes('YAYINLANDI')) router.push('/admin/haberler');
    }, 2000);
  };

  const handlePublish = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast('HABER BAŞARIYLA YAYINLANDI! 🚀');
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-fade-in relative pb-20">
      {/* Toast Notification Simulation */}
      {notification && (
        <div className="fixed top-24 right-8 z-[100] bg-slate-900/90 backdrop-blur-md text-white px-8 py-5 rounded-[2.5rem] shadow-2xl border border-white/10 flex items-center gap-4 animate-slide-in">
          <CheckCircle2 className="h-6 w-6 text-green-400" />
          <p className="font-black text-sm uppercase tracking-widest">{notification}</p>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 text-red-600 font-black text-[10px] uppercase tracking-[0.3em] mb-2">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div> YENİ İÇERİK EDİTÖRÜ
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">HABER OLUŞTUR</h1>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => showToast('TASLAK KAYDEDİLDİ')}
            className="flex items-center gap-2 px-8 py-4 text-slate-500 font-black text-xs uppercase tracking-widest bg-white border-2 border-slate-100 hover:bg-slate-50 rounded-[1.5rem] transition-all"
          >
            <Save className="h-4 w-4" /> TASLAK
          </button>
          <button 
            onClick={handlePublish}
            disabled={loading}
            className="flex items-center gap-3 px-10 py-4 bg-red-600 text-white font-black text-xs uppercase tracking-widest hover:bg-red-700 rounded-[1.5rem] shadow-xl shadow-red-200 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <> <Send className="h-4 w-4" /> HABERİ YAYINLA </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Form Area */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] -rotate-12">
              <Type className="w-48 h-48" />
            </div>

            <div className="relative z-10">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">İÇERİK ANALİZİ / BAŞLIK</label>
              <input 
                type="text" 
                placeholder="Çarpıcı ve doğru bir başlık girin..."
                className="w-full text-2xl font-black border-2 border-slate-50 bg-slate-50/50 rounded-[2rem] p-6 focus:border-red-500 focus:bg-white focus:ring-8 ring-red-50 outline-none transition-all placeholder:text-slate-300 italic"
              />
            </div>

            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">KATEGORİ</label>
                <div className="relative">
                  <select className="w-full border-2 border-slate-50 bg-slate-50/50 rounded-2xl p-5 font-bold text-slate-700 focus:border-red-500 focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ArrowDownRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">YAYIN ZAMANI</label>
                <div className="relative">
                  <input 
                    type="datetime-local" 
                    className="w-full border-2 border-slate-50 bg-slate-50/50 rounded-2xl p-5 font-bold text-slate-700 focus:border-red-500 focus:bg-white outline-none transition-all"
                    defaultValue={new Date().toISOString().slice(0, 16)}
                  />
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">SPOT / ÖZET METİN</label>
              <textarea 
                placeholder="Okuyucuyu habere çekecek o can alıcı özeti yazın..."
                className="w-full border-2 border-slate-50 bg-slate-50/50 rounded-[2rem] p-6 focus:border-red-500 focus:bg-white outline-none transition-all h-40 resize-none font-medium leading-relaxed"
              />
            </div>

            <div className="relative z-10">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">HABER DETAYI / EDİTÖR</label>
              <div className="border-2 border-slate-50 rounded-[2.5rem] overflow-hidden bg-slate-50/30">
                <div className="bg-white p-3 border-b border-slate-50 flex items-center gap-2 flex-wrap px-6">
                  {['STİL', 'LİNK', 'GÖRSEL', 'ALINTI', 'VİDEO'].map(tool => (
                    <button key={tool} type="button" className="px-5 py-2 hover:bg-red-50 rounded-full text-[10px] font-black tracking-widest text-slate-500 hover:text-red-600 transition-all uppercase">
                      {tool}
                    </button>
                  ))}
                  <div className="ml-auto flex items-center gap-2">
                    <span className="text-[10px] font-black text-slate-300">0 KELİME</span>
                  </div>
                </div>
                <textarea 
                  placeholder="Haberin tüm detaylarını buraya işleyin..."
                  className="w-full bg-transparent p-8 outline-none min-h-[500px] resize-y font-medium text-lg leading-loose"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar / Media Upload */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 space-y-8 sticky top-28">
            <h3 className="font-black text-xl text-slate-900 tracking-tighter italic border-b border-slate-50 pb-6 uppercase">Medya Kütüphanesi</h3>
            
            <div className="space-y-6">
              <div className="group relative">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">ANA MANŞET GÖRSELİ</label>
                <div className="aspect-video bg-slate-50 border-4 border-dashed border-slate-100 rounded-[2rem] flex flex-col items-center justify-center text-slate-300 hover:bg-red-50 hover:border-red-200 transition-all cursor-pointer overflow-hidden p-6 relative">
                  <div className="bg-white p-5 rounded-full shadow-lg group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <Camera className="h-8 w-8" />
                  </div>
                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em]">Sürükle veya Seç</p>
                  <p className="mt-2 text-[10px] font-bold opacity-30 tracking-tight">JPG, PNG • MAK 5MB</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center gap-2 hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200">
                  <LinkIcon className="h-5 w-5 text-slate-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">GALERİDEN SEÇ</span>
                </button>
                <button className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center gap-2 hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200">
                  <ImageIcon className="h-5 w-5 text-slate-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">YAPAY ZEKA ÜRET</span>
                </button>
              </div>
            </div>

            <div className="pt-6 space-y-4 border-t border-slate-50">
              {[
                { label: 'Manşet Gridinde Göster', default: true },
                { label: 'Yorumlara Açık Tut', default: true },
                { label: 'Yazara Bildirim Gönder', default: false },
              ].map((toggle, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors uppercase tracking-tight">{toggle.label}</span>
                  <div className={`w-12 h-6 rounded-full p-1 transition-all ${toggle.default ? 'bg-red-600' : 'bg-slate-200'}`}>
                    <div className={`w-4 h-4 bg-white rounded-full transition-all ${toggle.default ? 'translate-x-6' : 'translate-x-0'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl text-white space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 scale-150 rotate-45 group-hover:scale-110 transition-transform duration-700">
              <Search className="w-48 h-48" />
            </div>
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Canlı SEO Testi</span>
            </div>
            <div className="relative z-10 space-y-3">
              <p className="text-blue-400 font-bold text-xs hover:underline cursor-pointer italic">https://canakkalehaber.com/...</p>
              <h4 className="font-black text-lg leading-tight uppercase italic tracking-tighter">Haber Başlığı Burada Önizlenecek...</h4>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-medium">Spot metnin Google arama sonuçlarındaki büyüleyici önizlemesi burada şekillenecek...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
