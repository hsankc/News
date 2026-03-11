"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  TrendingUp, 
  Eye, 
  MessageSquare, 
  Users,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  Calendar,
  LayoutDashboard,
  Zap,
  X
} from 'lucide-react';
import { latestNews } from '@/lib/mockData';

export default function AdminDashboard() {
  const router = useRouter();
  const [notification, setNotification] = useState<string | null>(null);
  const [isFlashActive, setIsFlashActive] = useState(false);
  const [showFlashModal, setShowFlashModal] = useState(false);
  const [flashText, setFlashText] = useState('');

  const stats = [
    { label: 'Bugünkü Okunma', value: '42.850', trend: '+12.5%', isUp: true, icon: Eye, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Yeni Haberler', value: '18', trend: '+4', isUp: true, icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Toplam Yorum', value: '856', trend: '-2.1%', isUp: false, icon: MessageSquare, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Aktif Editörler', value: '12', trend: 'Sabit', isUp: true, icon: Users, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleFlashPublish = () => {
    if (!flashText) return;
    setIsFlashActive(true);
    setShowFlashModal(false);
    showToast('FLASH HABER YAYINLANDI! ⚡');
  };

  return (
    <div className="space-y-8 animate-fade-in relative">
      {/* Toast Notification Simulation */}
      {notification && (
        <div className="fixed top-24 right-8 z-[100] bg-slate-900/90 backdrop-blur-md text-white px-6 py-4 rounded-[2rem] shadow-2xl border border-white/10 flex items-center gap-4 animate-slide-in">
          <CheckCircle2 className="h-6 w-6 text-green-400" />
          <p className="font-black text-sm uppercase tracking-wide">{notification}</p>
        </div>
      )}

      {/* Flash Haber Banner */}
      {isFlashActive && (
        <div className="bg-red-600 text-white p-4 rounded-2xl md:rounded-[2rem] flex items-center justify-between animate-pulse shadow-xl shadow-red-200">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-2 rounded-lg"><Zap className="h-5 w-5 fill-white" /></div>
            <p className="font-black text-xs md:text-sm uppercase tracking-widest italic">{flashText || "SON DAKİKA: ÇANAKKALE'DE ÖNEMLİ GELİŞME!"}</p>
          </div>
          <button onClick={() => setIsFlashActive(false)} className="hover:rotate-90 transition-transform"><X className="h-5 w-5" /></button>
        </div>
      )}

      {/* Flash Haber Modal */}
      {showFlashModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
          <div className="bg-white rounded-[3rem] p-10 max-w-lg w-full shadow-2xl animate-slide-up border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-50 p-4 rounded-2xl text-red-600"><Zap className="h-8 w-8" /></div>
              <h3 className="text-3xl font-black tracking-tighter uppercase italic italic">Flaş <span className="text-red-600">Haber</span></h3>
            </div>
            <textarea 
              value={flashText}
              onChange={(e) => setFlashText(e.target.value)}
              placeholder="Flaş haber başlığını buraya girin..."
              className="w-full h-32 bg-slate-50 border-2 border-transparent focus:border-red-500 rounded-2xl p-6 font-bold text-slate-700 outline-none transition-all resize-none shadow-inner"
            />
            <div className="flex gap-4 mt-8">
              <button onClick={() => setShowFlashModal(false)} className="flex-1 py-4 font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Vazgeç</button>
              <button 
                onClick={handleFlashPublish}
                className="flex-1 bg-red-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg"
              >
                Yayınla
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 md:gap-6">
        <div>
          <h1 className="text-2xl md:text-5xl font-black text-gray-900 mb-1 tracking-tighter uppercase italic">
            HOŞGELDİN, <span className="text-red-600 underline decoration-red-100 decoration-4 md:decoration-8 underline-offset-4">HASAN</span>
          </h1>
          <div className="flex items-center gap-2 text-slate-400 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em]">
            <Calendar className="h-3 w-3 md:h-4 md:w-4 text-red-500" /> {new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase()} • MERKEZ OFİS
          </div>
        </div>
        <button 
          onClick={() => showToast('VERİLER GÜNCELLENDİ')}
          className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white border border-slate-100 font-black text-[9px] md:text-[10px] uppercase tracking-widest text-slate-500 rounded-xl md:rounded-2xl hover:bg-slate-900 hover:text-white transition-all active:scale-95 shadow-sm"
        >
          Verileri Yenile
        </button>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-4 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-slate-50 hover:shadow-2xl transition-all group relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 md:mb-8 relative z-10">
              <div className={`${stat.bg} ${stat.color} p-2 md:p-4 rounded-xl md:rounded-2xl shadow-inner`}>
                <stat.icon className="h-4 w-4 md:h-8 md:w-8" />
              </div>
              <div className={`flex items-center gap-1 px-1.5 py-1 rounded-full text-[8px] md:text-[10px] font-black tracking-tighter ${stat.isUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
                {stat.trend}
                {stat.isUp ? <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4" /> : <ArrowDownRight className="h-3 w-3 md:h-4 md:w-4" />}
              </div>
            </div>
            <p className="text-slate-400 text-[8px] md:text-[10px] font-black uppercase tracking-widest relative z-10">{stat.label}</p>
            <h3 className="text-xl md:text-5xl font-black text-slate-900 mt-1 tracking-tighter relative z-10">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-10">
        {/* News List */}
        <div className="xl:col-span-2 bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-sm border border-slate-50 overflow-hidden flex flex-col">
          <div className="p-6 md:p-12 pb-4 flex items-center justify-between border-b border-slate-50 bg-slate-50/30">
            <h3 className="font-black text-lg md:text-3xl text-slate-900 tracking-tighter italic">HIZLI İŞLEM BEKLEYEN</h3>
            <Link href="/admin/haberler" className="text-red-600 text-[8px] md:text-[10px] font-black uppercase tracking-widest hover:text-red-700 underline underline-offset-4 md:underline-offset-8">TÜMÜNÜ YÖNET</Link>
          </div>
          <div className="p-3 md:p-8 space-y-2">
            {latestNews.slice(0, 5).map((news) => (
              <div key={news.id} className="p-3 md:p-6 hover:bg-slate-50 rounded-[1.5rem] md:rounded-[2rem] transition-all flex items-center gap-3 md:gap-8 group border border-transparent hover:border-slate-100">
                <div className="w-20 h-14 md:w-40 md:h-24 rounded-xl md:rounded-[1.5rem] overflow-hidden flex-shrink-0 shadow-md relative">
                  <img src={news.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-black text-slate-900 text-[11px] md:text-2xl tracking-tight leading-tight group-hover:text-red-600 transition-colors uppercase italic truncate md:whitespace-normal">{news.title}</h4>
                  <div className="flex items-center gap-2 md:gap-6 mt-1 md:mt-3 overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="text-[7px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-2 md:px-3 py-0.5 md:py-1 rounded-full">{news.category}</span>
                    <span className="text-[7px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest">{news.date}</span>
                  </div>
                </div>
                <button 
                  onClick={() => showToast('İSTATİSTİKLER AÇILDI')}
                  className="p-2.5 md:p-5 bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white rounded-xl md:rounded-2xl transition-all shadow-sm flex-shrink-0"
                >
                  <TrendingUp className="h-3 w-3 md:h-6 md:w-6" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Chart */}
        <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 shadow-sm border border-slate-50 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-black text-xl text-slate-900 tracking-tighter uppercase italic">Haftalık Performans</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Ziyaretçi trafiği analizi</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Canlı</span>
            </div>
          </div>
          
          <div className="flex-1 flex items-end gap-2 md:gap-4 h-48 md:h-64 pt-4">
            {[
              { day: 'Pzt', val: 40, active: false },
              { day: 'Sal', val: 65, active: false },
              { day: 'Çar', val: 45, active: false },
              { day: 'Per', val: 85, active: false },
              { day: 'Cum', val: 70, active: false },
              { day: 'Cmt', val: 95, active: true },
              { day: 'Paz', val: 30, active: false },
            ].map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-full relative flex flex-col justify-end h-full">
                  <div 
                    style={{ height: `${d.val}%` }} 
                    className={`w-full rounded-t-xl md:rounded-t-2xl transition-all duration-1000 group-hover:opacity-80 ${d.active ? 'bg-red-600 shadow-lg shadow-red-200' : 'bg-slate-100'}`}
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] font-black px-2 py-1 rounded shadow-xl whitespace-nowrap z-20">
                      {d.val}K +
                    </div>
                  </div>
                </div>
                <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-tighter ${d.active ? 'text-red-600' : 'text-slate-300'}`}>{d.day}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-50 grid grid-cols-2 gap-4">
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">En Yoğun Gün</p>
              <p className="text-sm font-black text-slate-900 tracking-tighter italic">CUMARTESİ (95.4K)</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Ortalama Artış</p>
              <p className="text-sm font-black text-green-600 tracking-tighter italic">+18.4% 🔥</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group flex flex-col min-h-[400px]">
          <div className="absolute -top-10 -right-10 p-8 opacity-5 scale-150 rotate-12 group-hover:rotate-45 transition-transform duration-[2000ms]">
            <LayoutDashboard className="w-64 md:w-80 h-64 md:h-80" />
          </div>
          
          <div className="relative z-10 flex-1 flex flex-col">
            <h3 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 tracking-tighter italic leading-none uppercase">HIZLI<br/><span className="text-red-600">AKSİYONLAR</span></h3>
            <p className="text-slate-400 text-xs md:text-base mb-8 md:mb-12 font-medium leading-relaxed max-w-xs">Şehirde yeni bir gelişme mi var? Hemen duyur!</p>
            
            <div className="space-y-3 md:space-y-4 mt-auto">
              <Link 
                href="/admin/haber/yeni"
                className="w-full bg-red-600 text-white font-black py-4 md:py-6 rounded-2xl md:rounded-[2rem] hover:bg-white hover:text-red-600 transition-all shadow-xl shadow-red-900/20 text-center block text-[10px] md:text-sm tracking-widest uppercase"
              >
                HABER OLUŞTUR
              </Link>
              <button 
                onClick={() => setShowFlashModal(true)}
                className="w-full bg-slate-800 text-slate-300 font-black py-4 md:py-6 rounded-2xl md:rounded-[2rem] hover:bg-slate-700 transition-all text-[10px] md:text-sm tracking-widest border border-white/5 uppercase"
              >
                FLASH HABER
              </button>
            </div>

            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="flex -space-x-3 md:-space-x-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-slate-900 bg-red-600 flex items-center justify-center text-[8px] md:text-xs font-black tracking-tighter shadow-lg">ED</div>
                  ))}
                </div>
                <div>
                  <p className="text-[9px] md:text-xs font-black uppercase tracking-widest text-slate-200">4 EDİTÖR AKTİF</p>
                  <p className="text-[8px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1 flex items-center gap-1 md:gap-2">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-ping"></span> CANLI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-sm border border-slate-50 overflow-hidden">
        <div className="p-6 md:p-10 pb-4 flex items-center justify-between border-b border-slate-50 bg-slate-50/30">
          <h3 className="font-black text-lg md:text-2xl text-slate-900 tracking-tighter italic uppercase">Son Aktiviteler</h3>
          <Link href="/admin/bildirimler" className="text-red-600 text-[8px] md:text-[10px] font-black uppercase tracking-widest hover:text-red-700 underline underline-offset-4">TÜMÜNÜ GÖR</Link>
        </div>
        <div className="divide-y divide-slate-50">
          {[
            { time: '2 dk önce', text: 'Mehmet K. "1915 Çanakkale Köprüsü" haberine yorum yaptı', type: 'comment', color: 'bg-blue-500' },
            { time: '15 dk önce', text: '"Bağ Bozumu Festivali başladı" haberi yayınlandı', type: 'publish', color: 'bg-green-500' },
            { time: '1 saat önce', text: 'Galeri\'ye 4 yeni görsel eklendi', type: 'media', color: 'bg-purple-500' },
            { time: '2 saat önce', text: 'Ayşe D. "Çanakkale siyaseti" haberine yorum yaptı', type: 'comment', color: 'bg-blue-500' },
            { time: '3 saat önce', text: 'Sistem performans optimizasyonu tamamlandı', type: 'system', color: 'bg-amber-500' },
            { time: '5 saat önce', text: '"ÇOMÜ Öğretim Üyesine ödül" haberi güncellendi', type: 'edit', color: 'bg-sky-500' },
          ].map((item, i) => (
            <div key={i} className="p-4 md:p-6 flex items-center gap-4 hover:bg-slate-50/50 transition-all">
              <div className={`w-2.5 h-2.5 ${item.color} rounded-full flex-shrink-0`} />
              <p className="flex-1 text-sm text-slate-600 font-medium">{item.text}</p>
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest whitespace-nowrap">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
