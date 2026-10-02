"use client";

import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { bolgeler, ilanTipleri, type IlanTipi, type KayipIlani } from '@/lib/kayipIlanlari';

// "...kaybettim" -> "...kaybettim. Hükümsüzdür. Ad Soyad"
const buildMetin = (metin: string, adSoyad: string) => {
  const govde = metin.trim().replace(/\.?$/, '.');
  const tam = /hükümsüzdür/i.test(govde) ? govde : `${govde} Hükümsüzdür.`;
  return `${tam} ${adSoyad.trim()}`.trim();
};

export default function IlanVerForm({ onSubmit, onClose }: { onSubmit: (ilan: KayipIlani) => void; onClose: () => void }) {
  const [tip, setTip] = useState<IlanTipi>('ogrenci-kimligi');
  const [bolge, setBolge] = useState('Merkez');
  const [metin, setMetin] = useState('');
  const [adSoyad, setAdSoyad] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (metin.trim().length < 10) return setError('Lütfen kaybettiğiniz belgeyi kısaca yazın.');
    if (!adSoyad.trim()) return setError('Ad soyad veya firma adı gerekli.');
    onSubmit({
      id: `u${Date.now()}`,
      tarih: new Date().toLocaleDateString('sv-SE'), // YYYY-MM-DD, yerel saat
      tip,
      bolge,
      metin: buildMetin(metin, adSoyad),
    });
  };

  const fieldClass = 'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 outline-none focus:border-red-500 focus:bg-white transition-colors';
  const labelClass = 'block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2';

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-5 animate-slide-up">
      <div className="flex items-center justify-between">
        <h2 className="font-black text-xl text-gray-900 uppercase tracking-tight">Kayıp İlanı Ver</h2>
        <button type="button" onClick={onClose} aria-label="Kapat" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
          <X className="h-5 w-5 text-gray-400" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="ilan-tip">İlan Tipi</label>
          <select id="ilan-tip" value={tip} onChange={(e) => setTip(e.target.value as IlanTipi)} className={fieldClass}>
            {ilanTipleri.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="ilan-bolge">Yayın Bölgesi</label>
          <select id="ilan-bolge" value={bolge} onChange={(e) => setBolge(e.target.value)} className={fieldClass}>
            {bolgeler.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="ilan-metin">Kaybettiğiniz Belge</label>
        <textarea
          id="ilan-metin"
          value={metin}
          onChange={(e) => setMetin(e.target.value)}
          placeholder="Örn: Çanakkale Onsekiz Mart Üniversitesi öğrenci kimliğimi kaybettim"
          className={`${fieldClass} h-24 resize-none`}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="ilan-ad">Ad Soyad / Firma</label>
        <input id="ilan-ad" value={adSoyad} onChange={(e) => setAdSoyad(e.target.value)} placeholder="Örn: Ali Veli" className={fieldClass} />
      </div>

      {metin.trim() && (
        <div className="bg-gray-50 border-l-4 border-red-600 rounded-xl p-4">
          <p className={labelClass}>Önizleme</p>
          <p className="text-sm text-gray-800">{buildMetin(metin, adSoyad)}</p>
        </div>
      )}

      {error && <p className="text-sm font-bold text-red-600">{error}</p>}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-gray-400">Demo: ilanınız yalnızca bu tarayıcıda görünür, gazeteye gönderilmez.</p>
        <button type="submit" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95">
          <Send className="h-4 w-4" /> İlanı Yayınla
        </button>
      </div>
    </form>
  );
}
