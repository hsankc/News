"use client";

import { useState } from 'react';
import { 
  Save, 
  Globe, 
  CheckCircle2,
  Smartphone,
  Layout,
  Shield,
  Palette,
  Bell,
  Database,
  Mail
} from 'lucide-react';

export default function SettingsPage() {
  const [notification, setNotification] = useState<string | null>(null);
  const [maintenance, setMaintenance] = useState(false);
  const [toggles, setToggles] = useState({
    comments: true,
    notifications: true,
    darkMode: false,
    analytics: true,
    autoBackup: true,
    emailAlerts: true,
  });

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles({ ...toggles, [key]: !toggles[key] });
    showToast(`${key.toUpperCase()} AYARI GÜNCELLENDİ`);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in relative pb-20">
      {notification && (
        <div className="fixed top-24 right-8 z-[100] bg-slate-900 text-white px-8 py-5 rounded-[2.5rem] shadow-2xl border border-white/10 flex items-center gap-4 animate-slide-in">
          <CheckCircle2 className="h-6 w-6 text-green-400" />
          <p className="font-black text-sm uppercase tracking-widest">{notification}</p>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter uppercase italic">
            SİSTEM <span className="text-red-600 underline decoration-slate-200 decoration-8 underline-offset-4">AYARLARI</span>
          </h1>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Portal&apos;ın genel konfigürasyonunu buradan yönetin</p>
        </div>
        <button 
          onClick={() => showToast('AYARLAR BAŞARIYLA KAYDEDİLDİ ✅')}
          className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-red-600 text-white font-black text-xs uppercase tracking-widest hover:bg-red-700 rounded-2xl shadow-2xl shadow-red-200 transition-all hover:scale-105 active:scale-95"
        >
          <Save className="h-5 w-5" /> TÜMÜNÜ KAYDET
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Site Identity */}
        <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-slate-100">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/3 space-y-3">
              <div className="bg-slate-50 p-4 rounded-2xl w-fit">
                <Globe className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="font-black text-lg text-slate-900 uppercase tracking-tighter">Site Kimliği</h3>
              <p className="text-xs text-slate-400 font-medium leading-relaxed">Başlık, açıklama ve SEO ayarları.</p>
            </div>
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">SİTE BAŞLIĞI</label>
                <input type="text" defaultValue="Truva Haber - Şehrin Bir Numaralı Haber Kaynağı" className="w-full bg-slate-50 border-2 border-transparent focus:border-red-500 rounded-2xl p-4 font-bold text-slate-700 outline-none transition-all text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">SİTE SLOGANI</label>
                <input type="text" defaultValue="Hızlı, Tarafsız, İlkeli Habercilik" className="w-full bg-slate-50 border-2 border-transparent focus:border-red-500 rounded-2xl p-4 font-bold text-slate-700 outline-none transition-all text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">META AÇIKLAMA (SEO)</label>
                <textarea defaultValue="Truva Haber - Çanakkale'nin en güvenilir ve hızlı haber kaynağı. Güncel haberler, spor, ekonomi, kültür ve daha fazlası." className="w-full bg-slate-50 border-2 border-transparent focus:border-red-500 rounded-2xl p-4 font-bold text-slate-700 outline-none transition-all text-sm h-24 resize-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Maintenance Mode */}
        <div className="bg-slate-900 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className={`p-4 rounded-2xl transition-colors flex-shrink-0 ${maintenance ? 'bg-red-600' : 'bg-white/10'}`}>
              <Smartphone className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="text-white font-black text-lg uppercase tracking-tighter">Bakım Modu</h3>
              <p className={`text-xs font-bold uppercase tracking-widest mt-1 ${maintenance ? 'text-red-500 animate-pulse' : 'text-slate-400'}`}>
                {maintenance ? 'SİTE ŞU AN BAKIMDA' : 'SİTE ŞU AN AKTİF'}
              </p>
            </div>
          </div>
          <div
            onClick={() => { setMaintenance(!maintenance); showToast(maintenance ? 'SİTE YAYINA ALINDI ✅' : 'SİTE BAKIMA ALINDI ⚠️'); }}
            className={`w-16 h-8 rounded-full p-1 relative cursor-pointer transition-all flex-shrink-0 ${maintenance ? 'bg-red-600' : 'bg-slate-700'}`}
          >
            <div className={`w-6 h-6 bg-white rounded-full absolute transition-all ${maintenance ? 'right-1' : 'left-1'}`}></div>
          </div>
        </div>

        {/* Quick Toggles */}
        <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-slate-100">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/3 space-y-3">
              <div className="bg-slate-50 p-4 rounded-2xl w-fit">
                <Shield className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="font-black text-lg text-slate-900 uppercase tracking-tighter">Genel Ayarlar</h3>
              <p className="text-xs text-slate-400 font-medium leading-relaxed">Hızlı aç/kapa ayarları.</p>
            </div>
            <div className="flex-1 space-y-4">
              {[
                { key: 'comments' as const, label: 'Yorum Sistemi', desc: 'Haberlere yorum yapılabilsin', icon: '💬' },
                { key: 'notifications' as const, label: 'Push Bildirimleri', desc: 'Önemli haberler için bildirim gönder', icon: '🔔' },
                { key: 'darkMode' as const, label: 'Gece Modu', desc: 'Ziyaretçiler için gece modu aktif', icon: '🌙' },
                { key: 'analytics' as const, label: 'Analitik Takibi', desc: 'Ziyaretçi istatistiklerini topla', icon: '📊' },
                { key: 'autoBackup' as const, label: 'Otomatik Yedekleme', desc: 'Günlük otomatik yedekleme', icon: '💾' },
                { key: 'emailAlerts' as const, label: 'E-posta Uyarıları', desc: 'Önemli olaylar için e-posta gönder', icon: '📧' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl hover:bg-slate-50 transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="font-bold text-slate-700 text-sm">{item.label}</p>
                      <p className="text-[10px] text-slate-400 font-medium">{item.desc}</p>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleToggle(item.key)}
                    className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-all flex-shrink-0 ${toggles[item.key] ? 'bg-red-600' : 'bg-slate-200'}`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-all ${toggles[item.key] ? 'translate-x-6' : 'translate-x-0'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact & Footer */}
        <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-slate-100">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/3 space-y-3">
              <div className="bg-slate-50 p-4 rounded-2xl w-fit">
                <Layout className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="font-black text-lg text-slate-900 uppercase tracking-tighter">İletişim & Footer</h3>
              <p className="text-xs text-slate-400 font-medium leading-relaxed">İletişim bilgileri ve kurumsal.</p>
            </div>
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">E-POSTA</label>
                  <input type="text" defaultValue="info@truvahaber.com" className="w-full bg-slate-50 border-2 border-transparent focus:border-red-500 rounded-2xl p-4 font-bold text-slate-700 outline-none transition-all text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">TELEFON</label>
                  <input type="text" defaultValue="0286 212 00 00" className="w-full bg-slate-50 border-2 border-transparent focus:border-red-500 rounded-2xl p-4 font-bold text-slate-700 outline-none transition-all text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">ADRES</label>
                  <input type="text" defaultValue="Cevatpaşa Mah. Çanakkale Merkez" className="w-full bg-slate-50 border-2 border-transparent focus:border-red-500 rounded-2xl p-4 font-bold text-slate-700 outline-none transition-all text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">SOSYAL MEDYA</label>
                  <input type="text" defaultValue="@truvahaber" className="w-full bg-slate-50 border-2 border-transparent focus:border-red-500 rounded-2xl p-4 font-bold text-slate-700 outline-none transition-all text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-2 border-red-200">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/3 space-y-3">
              <div className="bg-red-100 p-4 rounded-2xl w-fit">
                <Database className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="font-black text-lg text-red-900 uppercase tracking-tighter">Tehlikeli Alan</h3>
              <p className="text-xs text-red-400 font-medium leading-relaxed">Bu işlemler geri alınamaz.</p>
            </div>
            <div className="flex-1 space-y-4">
              <button 
                onClick={() => showToast('ÖNBELLEK TEMİZLENDİ ✅')}
                className="w-full p-4 bg-white text-slate-700 font-bold text-sm border border-red-200 rounded-2xl hover:bg-red-100 transition-all text-left"
              >
                Önbelleği Temizle
                <span className="block text-[10px] text-slate-400 font-medium mt-1">Tüm cache verilerini temizler</span>
              </button>
              <button 
                onClick={() => { if(confirm('Tüm verileri sıfırlamak istediğinize emin misiniz?')) showToast('VERİLER SIFIRLANDI'); }}
                className="w-full p-4 bg-white text-red-600 font-bold text-sm border border-red-200 rounded-2xl hover:bg-red-100 transition-all text-left"
              >
                Fabrika Ayarlarına Sıfırla
                <span className="block text-[10px] text-red-400 font-medium mt-1">Bu işlem geri alınamaz!</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
