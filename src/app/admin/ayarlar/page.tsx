"use client";

import { useState } from 'react';
import { 
  Save, 
  Settings as SettingsIcon, 
  Globe, 
  Mail, 
  Bell, 
  Lock,
  CheckCircle2,
  Smartphone,
  Camera,
  Filter,
  UserPlus,
  Layout
} from 'lucide-react';

export default function SettingsPage() {
  const [notification, setNotification] = useState<string | null>(null);
  const [maintenance, setMaintenance] = useState(false);
  const [toggles, setToggles] = useState([true, true, false]);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-fade-in relative pb-20">
      {notification && (
        <div className="fixed top-24 right-8 z-[100] bg-slate-900 text-white px-8 py-5 rounded-[2.5rem] shadow-2xl border border-white/10 flex items-center gap-4 animate-slide-in">
          <CheckCircle2 className="h-6 w-6 text-green-400" />
          <p className="font-black text-sm uppercase tracking-widest">{notification}</p>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tighter uppercase italic">
            SİSTEM <span className="text-red-600 underline decoration-slate-200 decoration-8 underline-offset-4">AYARLARI</span>
          </h1>
          <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Portal'ın genel konfigürasyonunu buradan yönetin</p>
        </div>
        <button 
          onClick={() => showToast('AYARLAR BAŞARIYLA KAYDEDİLDİ')}
          className="flex items-center gap-3 px-10 py-5 bg-red-600 text-white font-black text-xs uppercase tracking-widest hover:bg-red-700 rounded-[2rem] shadow-2xl shadow-red-200 transition-all hover:scale-105 active:scale-95"
        >
          <Save className="h-5 w-5" /> TÜMÜNÜ KAYDET
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Site Identity */}
        <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex gap-10">
          <div className="w-1/3 space-y-4">
             <div className="bg-slate-50 p-4 rounded-3xl w-fit">
                <Globe className="h-8 w-8 text-blue-600" />
             </div>
             <h3 className="font-black text-xl text-slate-900 uppercase tracking-tighter">Site Kimliği</h3>
             <p className="text-xs text-slate-400 font-medium leading-relaxed">Sitenin başlık, açıklama ve SEO ayarlarının merkezi.</p>
          </div>
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">SİTE BAŞLIĞI (TITLE)</label>
                <input type="text" defaultValue="Çanakkale Haber - Şehrin Bir Numaralı Haber Kaynağı" className="w-full bg-slate-50 border-2 border-transparent focus:border-red-500 rounded-2xl p-4 font-bold text-slate-700 outline-none transition-all" />
            </div>
             <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">SİTE SLOGANI</label>
                <input type="text" defaultValue="Hızlı, Tarafsız, İlkeli Habercilik" className="w-full bg-slate-50 border-2 border-transparent focus:border-red-500 rounded-2xl p-4 font-bold text-slate-700 outline-none transition-all" />
            </div>
          </div>
        </div>

        {/* Maintenance Mode */}
        <div className="bg-slate-900 p-10 rounded-[3rem] shadow-2xl flex items-center justify-between group">
           <div className="flex items-center gap-8">
                <div className={`p-5 rounded-3xl transition-colors ${maintenance ? 'bg-red-600' : 'bg-white/10'}`}>
                    <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div>
                   <h3 className="text-white font-black text-xl uppercase tracking-tighter">Bakım Modu</h3>
                   <p className={`text-xs font-bold uppercase tracking-widest mt-1 ${maintenance ? 'text-red-500 animate-pulse' : 'text-slate-400'}`}>
                    {maintenance ? 'SİTE ŞU AN BAKIMDA' : 'SİTE ŞU AN AKTİF'}
                   </p>
                </div>
           </div>
           <div
            onClick={() => { setMaintenance(!maintenance); showToast(maintenance ? 'SİTE YAYINA ALINDI' : 'SİTE BAKIMA ALINDI'); }}
            className={`w-16 h-8 rounded-full p-1 relative cursor-pointer transition-all ${maintenance ? 'bg-red-600' : 'bg-slate-700'}`}
           >
                <div className={`w-6 h-6 bg-white rounded-full absolute transition-all ${maintenance ? 'right-1' : 'left-1'}`}></div>
           </div>
        </div>

        {/* Footer Info */}
        <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex gap-10">
          <div className="w-1/3 space-y-4">
             <div className="bg-slate-50 p-4 rounded-3xl w-fit">
                <Layout className="h-8 w-8 text-purple-600" />
             </div>
             <h3 className="font-black text-xl text-slate-900 uppercase tracking-tighter">İletişim & Footer</h3>
             <p className="text-xs text-slate-400 font-medium leading-relaxed">İletişim bilgileri ve kurumsal bölümler.</p>
          </div>
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">E-POSTA</label>
                    <input type="text" defaultValue="info@canakkalehaber.com" className="w-full bg-slate-50 border-2 border-transparent focus:border-red-500 rounded-2xl p-4 font-bold text-slate-700 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">TELEFON</label>
                    <input type="text" defaultValue="0286 212 00 00" className="w-full bg-slate-50 border-2 border-transparent focus:border-red-500 rounded-2xl p-4 font-bold text-slate-700 outline-none transition-all" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
