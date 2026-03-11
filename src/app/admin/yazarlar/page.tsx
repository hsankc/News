"use client";

import { useState } from 'react';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Mail, 
  Search, 
  UserPlus,
  CheckCircle2,
  MoreVertical,
  ShieldCheck
} from 'lucide-react';
import { authors } from '@/lib/mockData';

export default function AuthorsPage() {
  const [authorList, setAuthorList] = useState(authors);
  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleDelete = (id: number, name: string) => {
    if (confirm(`${name} isimli yazarı silmek istediğinize emin misiniz?`)) {
      setAuthorList(authorList.filter(a => a.id !== id));
      showToast('YAZAR KAYDI SİLİNDİ');
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

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter uppercase italic">
            YAZAR <span className="text-red-600 underline decoration-slate-200 decoration-8 underline-offset-4">YÖNETİMİ</span>
          </h1>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Sistemde toplam {authorList.length} aktif yazar bulunuyor</p>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest hover:bg-red-600 rounded-2xl shadow-xl transition-all active:scale-95 shadow-slate-200">
          <UserPlus className="h-5 w-5 text-red-500 group-hover:text-white" /> YENİ YAZAR EKLE
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
        {authorList.map((author) => (
          <div key={author.id} className="bg-white p-6 md:p-10 rounded-[3rem] shadow-sm border border-slate-50 flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-10 group hover:shadow-2xl transition-all relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-slate-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-0 blur-2xl" />
            
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0 relative z-10 group-hover:scale-105 transition-transform">
              <img src={author.image || "/avatar.png"} alt={author.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors" />
            </div>

            <div className="flex-1 w-full relative z-10 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-50 pb-6 mb-6 gap-4">
                <div>
                  <h3 className="font-black text-xl md:text-2xl text-slate-900 tracking-tight italic group-hover:text-red-600 transition-colors uppercase leading-none">{author.name}</h3>
                  <p className="text-[10px] font-black text-red-600 uppercase tracking-widest flex items-center justify-center sm:justify-start gap-2 mt-3 bg-red-50 w-fit mx-auto sm:mx-0 px-3 py-1 rounded-full">
                    <ShieldCheck className="h-3 w-3" /> {author.role}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-4 bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white rounded-2xl transition-all shadow-sm">
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(author.id, author.name)}
                    className="p-4 bg-red-50 text-red-500 hover:bg-red-600 hover:text-white rounded-2xl transition-all shadow-sm"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start gap-8">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Popülerlik</span>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= 4 ? 'bg-red-500' : 'bg-slate-100'}`} />
                    ))}
                  </div>
                </div>
                <div className="h-8 w-px bg-slate-100 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Takipçi</span>
                  <span className="text-sm font-black text-slate-900 tracking-tighter italic">12.4K+</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-slate-50/50 rounded-2xl border border-slate-50 group-hover:bg-white group-hover:border-red-100 transition-all">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 truncate">Son İçerik:</p>
                <p className="text-xs font-bold text-slate-600 italic line-clamp-1">{author.lastArticle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
