"use client";

import { useState } from 'react';
import { 
  Plus, 
  ChevronLeft, 
  ChevronRight, 
  Edit2, 
  Trash2, 
  Search,
  Filter,
  Eye,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import Link from 'next/link';
import { latestNews } from '@/lib/mockData';

export default function NewsListPage() {
  const [newsList, setNewsList] = useState(latestNews);
  const [notification, setNotification] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleDelete = (id: number, title: string) => {
    if (confirm(`'${title}' başlıklı haberi silmek istediğinize emin misiniz?`)) {
      setNewsList(newsList.filter(n => n.id !== id));
      showToast('HABER BAŞARIYLA SİLİNDİ');
    }
  };

  const filteredNews = newsList.filter(n => 
    n.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fade-in relative">
      {/* Toast Notification Simulation */}
      {notification && (
        <div className="fixed top-24 right-8 z-[100] bg-slate-900 text-white px-8 py-5 rounded-[2.5rem] shadow-2xl border border-white/10 flex items-center gap-4 animate-slide-in">
          <CheckCircle2 className="h-6 w-6 text-green-400" />
          <p className="font-black text-sm uppercase tracking-widest">{notification}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter uppercase italic">
            HABER <span className="text-red-600 underline decoration-slate-200 decoration-8 underline-offset-4">YÖNETİMİ</span>
          </h1>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Sistemdeki toplam {newsList.length} kayıtlı içerik</p>
        </div>
        <Link 
          href="/admin/haber/yeni" 
          className="flex items-center justify-center gap-3 px-8 py-5 bg-red-600 text-white font-black text-[10px] uppercase tracking-widest hover:bg-slate-900 rounded-2xl shadow-xl shadow-red-100 transition-all active:scale-95 whitespace-nowrap"
        >
          <Plus className="h-5 w-5" /> YENİ HABER EKLE
        </Link>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-50 overflow-hidden">
        {/* Filters */}
        <div className="p-6 md:p-8 border-b border-slate-50 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-slate-50/20">
          <div className="flex flex-col sm:flex-row items-center gap-4 flex-1 w-full">
            <div className="relative flex-1 w-full">
              <Search className="h-5 w-5 absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" />
              <input 
                type="text" 
                placeholder="Haber başlığı veya ID ile ara..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-2 border-slate-50 focus:border-red-500 rounded-2xl pl-16 pr-6 py-4 text-xs font-bold text-slate-700 outline-none transition-all placeholder:text-slate-300 shadow-inner"
              />
            </div>
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 text-slate-500 hover:text-red-600 font-black text-[10px] uppercase tracking-widest bg-white border-2 border-slate-50 rounded-2xl transition-all shadow-sm">
              <Filter className="h-5 w-5" /> FİLTRELE
            </button>
          </div>
        </div>

        {/* Table Wrapper */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] p-8 pb-4">İÇERİK BİLGİSİ</th>
                <th className="text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] p-8 pb-4">KATEGORİ</th>
                <th className="text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] p-8 pb-4">TARİH</th>
                <th className="text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] p-8 pb-4">DURUM</th>
                <th className="text-right text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] p-8 pb-4">EYLEMLER</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredNews.map((news) => (
                <tr key={news.id} className="hover:bg-slate-50/50 transition-all group">
                  <td className="p-6 md:p-8">
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-16 rounded-[1.2rem] overflow-hidden flex-shrink-0 shadow-lg border border-white relative group-hover:scale-105 transition-transform">
                        <img src={news.image} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 group-hover:text-red-600 transition-colors uppercase italic tracking-tight leading-tight max-w-sm">{news.title}</h4>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5 ring-1 ring-slate-100 px-3 py-1 rounded-full bg-slate-50">
                            <Eye className="h-3 w-3 text-blue-500" /> 1.2K
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 md:p-8">
                    <span className="px-4 py-2 bg-slate-900 text-white text-[9px] font-black rounded-lg uppercase tracking-widest italic group-hover:bg-red-600 transition-all">
                      {news.category}
                    </span>
                  </td>
                  <td className="p-6 md:p-8">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{news.date}</span>
                  </td>
                  <td className="p-6 md:p-8">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 text-[9px] font-black rounded-full uppercase tracking-widest border border-green-100">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                      Yayında
                    </span>
                  </td>
                  <td className="p-6 md:p-8">
                    <div className="flex items-center justify-end gap-2 md:opacity-0 group-hover:opacity-100 transition-all">
                      <Link 
                        href={`/admin/haber/yeni`}
                        className="p-4 bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white rounded-[1.2rem] transition-all shadow-sm"
                      >
                        <Edit2 className="h-4 w-4" />
                      </Link>
                      <button 
                        onClick={() => handleDelete(news.id, news.title)}
                        className="p-4 bg-red-50 text-red-400 hover:bg-red-600 hover:text-white rounded-[1.2rem] transition-all shadow-sm"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredNews.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-20 text-center bg-slate-50/10">
                    <AlertTriangle className="h-16 w-16 text-slate-100 mx-auto mb-6" />
                    <p className="text-slate-400 font-black text-xs uppercase tracking-[0.3em]">Haber bulunamadı.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 md:p-10 bg-slate-50/30 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] italic">
            YÜKLÜ {newsList.length} KAYIT • 1-10 GÖSTERİLİYOR
          </p>
          <div className="flex items-center gap-3">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 border-2 border-slate-100 rounded-[1.2rem] bg-white text-slate-200 cursor-not-allowed font-black text-[10px] uppercase tracking-widest shadow-sm">
              <ChevronLeft className="h-4 w-4" /> GERİ
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 border-2 border-slate-100 rounded-[1.2rem] bg-white text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all font-black text-[10px] uppercase tracking-widest shadow-lg">
              İLERİ <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
