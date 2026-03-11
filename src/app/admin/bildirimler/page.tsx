"use client";

import { useState } from 'react';
import { 
  Bell, 
  CheckCircle2,
  MessageSquare,
  FileText,
  AlertTriangle,
  Settings,
  User,
  Eye,
  Trash2,
  CheckCheck
} from 'lucide-react';

const mockNotifications = [
  { id: 1, type: 'comment', title: 'Yeni Yorum', desc: 'Mehmet K. "1915 Çanakkale Köprüsü" haberine yorum yaptı.', time: '2 dakika önce', read: false },
  { id: 2, type: 'article', title: 'Haber Yayınlandı', desc: '"Bağ Bozumu Festivali başladı" haberi başarıyla yayınlandı.', time: '15 dakika önce', read: false },
  { id: 3, type: 'system', title: 'Sistem Güncellemesi', desc: 'Site performans optimizasyonu tamamlandı. Sayfa yüklenme süresi %23 iyileşti.', time: '1 saat önce', read: false },
  { id: 4, type: 'comment', title: 'Yorum Onay Bekliyor', desc: 'Ayşe D. "Çanakkale siyaseti" haberine yorum yaptı. Onayınızı bekliyor.', time: '2 saat önce', read: true },
  { id: 5, type: 'warning', title: 'Uyarı: Disk Alanı', desc: 'Medya dosyaları disk alanının %78\'ini kullanıyor. Temizlik yapmanız önerilir.', time: '3 saat önce', read: true },
  { id: 6, type: 'article', title: 'Haber Düzenlendi', desc: 'Editör "ÇOMÜ Öğretim Üyesine ödül" haberini güncelledi.', time: '5 saat önce', read: true },
  { id: 7, type: 'user', title: 'Yeni Kullanıcı', desc: 'Yeni editör hesabı: ali.yilmaz@truvahaber.com aktif edildi.', time: '6 saat önce', read: true },
  { id: 8, type: 'system', title: 'Otomatik Yedekleme', desc: 'Günlük yedekleme başarıyla tamamlandı. 142 içerik yedeklendi.', time: '12 saat önce', read: true },
  { id: 9, type: 'comment', title: '5 Yeni Yorum', desc: '"Huzur uygulaması" haberi için 5 yeni yorum onay bekliyor.', time: 'Dün', read: true },
  { id: 10, type: 'warning', title: 'Bozuk Link Tespit Edildi', desc: '3 haberde dış kaynak bağlantıları artık çalışmıyor.', time: 'Dün', read: true },
];

const typeConfig: Record<string, { icon: any; bg: string; color: string }> = {
  comment: { icon: MessageSquare, bg: 'bg-blue-50', color: 'text-blue-600' },
  article: { icon: FileText, bg: 'bg-green-50', color: 'text-green-600' },
  system: { icon: Settings, bg: 'bg-purple-50', color: 'text-purple-600' },
  warning: { icon: AlertTriangle, bg: 'bg-amber-50', color: 'text-amber-600' },
  user: { icon: User, bg: 'bg-sky-50', color: 'text-sky-600' },
};

export default function BildirimlerPage() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    showToast('TÜM BİLDİRİMLER OKUNDU OLARAK İŞARETLENDİ');
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
    showToast('BİLDİRİM SİLİNDİ');
  };

  const clearAll = () => {
    if (confirm('Tüm bildirimleri silmek istediğinize emin misiniz?')) {
      setNotifications([]);
      showToast('TÜM BİLDİRİMLER TEMİZLENDİ');
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-8 animate-fade-in relative">
      {toast && (
        <div className="fixed top-24 right-8 z-[100] bg-slate-900 text-white px-8 py-5 rounded-[2.5rem] shadow-2xl border border-white/10 flex items-center gap-4 animate-slide-in">
          <CheckCircle2 className="h-6 w-6 text-green-400" />
          <p className="font-black text-sm uppercase tracking-widest">{toast}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter uppercase italic">
            <span className="text-red-600 underline decoration-slate-200 decoration-8 underline-offset-4">BİLDİRİMLER</span>
          </h1>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{unreadCount} okunmamış bildirim</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={markAllRead}
            className="flex items-center gap-2 px-6 py-4 bg-white border border-slate-100 text-slate-500 font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 rounded-2xl transition-all"
          >
            <CheckCheck className="h-4 w-4" /> Tümünü Okundu Yap
          </button>
          <button 
            onClick={clearAll}
            className="flex items-center gap-2 px-6 py-4 bg-red-600 text-white font-black text-[10px] uppercase tracking-widest hover:bg-red-700 rounded-2xl shadow-lg transition-all active:scale-95"
          >
            <Trash2 className="h-4 w-4" /> Temizle
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-50 overflow-hidden">
        {notifications.length === 0 ? (
          <div className="text-center py-20">
            <Bell className="h-16 w-16 text-slate-100 mx-auto mb-4" />
            <p className="text-slate-400 font-black text-xs uppercase tracking-widest">Bildirim bulunmuyor.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-50">
            {notifications.map((n) => {
              const config = typeConfig[n.type] || typeConfig.system;
              const Icon = config.icon;
              return (
                <div 
                  key={n.id} 
                  onClick={() => markAsRead(n.id)}
                  className={`p-6 md:p-8 flex items-start gap-4 md:gap-6 cursor-pointer transition-all hover:bg-slate-50/50 group ${
                    !n.read ? 'bg-blue-50/30' : ''
                  }`}
                >
                  <div className={`p-3 md:p-4 rounded-2xl flex-shrink-0 ${config.bg}`}>
                    <Icon className={`h-5 w-5 md:h-6 md:w-6 ${config.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {!n.read && <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse flex-shrink-0" />}
                      <h4 className={`font-black text-sm uppercase tracking-tight ${!n.read ? 'text-slate-900' : 'text-slate-500'}`}>{n.title}</h4>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{n.desc}</p>
                    <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest mt-2">{n.time}</p>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); deleteNotification(n.id); }}
                    className="p-3 bg-transparent text-slate-200 hover:bg-red-50 hover:text-red-500 rounded-xl transition-all opacity-0 group-hover:opacity-100 flex-shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
