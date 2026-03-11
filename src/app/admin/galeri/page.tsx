"use client";

import { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  CheckCircle2,
  Download,
  Eye,
  Camera,
  Filter,

} from 'lucide-react';
import { gallery } from '@/lib/mockData';

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState(gallery);
  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleDelete = (id: number) => {
    if (confirm(`Bu medyayı silmek istediğinize emin misiniz?`)) {
      setGalleryItems(galleryItems.filter(item => item.id !== id));
      showToast('MEDYA DOSYASI SİLİNDİ');
    }
  };

  return (
    <div className="space-y-8 animate-fade-in relative">
      {notification && (
        <div className="fixed top-24 right-8 z-[100] bg-slate-900 text-white px-8 py-5 rounded-[2.5rem] shadow-2xl border border-white/10 flex items-center gap-4 animate-slide-in">
          <CheckCircle2 className="h-6 w-6 text-green-400" />
          <p className="font-black text-sm uppercase tracking-widest">{notification}</p>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tighter uppercase italic">
            MEDYA <span className="text-red-600 underline decoration-slate-200 decoration-8 underline-offset-4">KÜTÜPHANESİ</span>
          </h1>
          <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Sistemdeki toplam {galleryItems.length} medya dosyası</p>
        </div>
        <div className="flex items-center gap-4">
           <button 
            onClick={() => showToast('FİLTRELEME PANELİ AÇILDI')}
            className="flex items-center gap-3 px-8 py-5 bg-white border-2 border-slate-100 text-slate-500 font-black text-xs uppercase tracking-widest hover:bg-slate-50 rounded-[2rem] transition-all"
          >
            <Filter className="h-5 w-5" /> FİLTRELE
          </button>
          <button 
            onClick={() => showToast('DOSYA SEÇİCİ AÇILDI')}
            className="flex items-center gap-3 px-10 py-5 bg-red-600 text-white font-black text-xs uppercase tracking-widest hover:bg-red-700 rounded-[2rem] shadow-2xl shadow-red-200 transition-all hover:scale-105 active:scale-95"
          >
            <Plus className="h-5 w-5" /> MEDYA YÜKLE
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* Upload Box */}
        <div className="aspect-square bg-slate-50 border-4 border-dashed border-slate-100 rounded-[2.5rem] flex flex-col items-center justify-center text-slate-300 hover:bg-red-50 hover:border-red-200 transition-all cursor-pointer group p-6 text-center">
            <div className="bg-white p-4 rounded-full shadow-lg group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all mb-4">
              <Camera className="h-6 w-6" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] leading-tight">Yüklemek için sürükle veya seç</p>
        </div>

        {galleryItems.map((item) => (
          <div key={item.id} className="group relative aspect-square bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            
            {/* Overlay Actions */}
            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center gap-4 backdrop-blur-[2px]">
              <div className="flex items-center gap-2">
                 <button className="p-3 bg-white text-slate-900 rounded-2xl hover:bg-red-600 hover:text-white transition-all shadow-xl">
                    <Eye className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="p-3 bg-white text-red-600 rounded-2xl hover:bg-red-600 hover:text-white transition-all shadow-xl"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
              </div>
              <p className="text-[9px] font-black text-white uppercase tracking-widest px-4 text-center line-clamp-1">{item.title}</p>
            </div>

            <div className="absolute bottom-4 right-4 animate-slide-in opacity-0 group-hover:opacity-100 transition-all">
                <button className="p-2 bg-white/20 backdrop-blur-md text-white rounded-lg hover:bg-white/40">
                    <Download className="h-3 w-3" />
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
