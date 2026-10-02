import Link from 'next/link';
import { Plus } from 'lucide-react';
import { formatTarih, ilanTipiAdi, kayipIlanlari } from '@/lib/kayipIlanlari';

// Anasayfa için son kayıp ilanları özeti
export default function SonKayipIlanlari() {
  const sonIlanlar = [...kayipIlanlari].sort((a, b) => b.tarih.localeCompare(a.tarih)).slice(0, 6);

  return (
    <section className="py-8 container mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between gap-4">
          <h2 className="font-black text-xl text-red-600 italic tracking-tight uppercase">Kayıp İlanları</h2>
          <div className="flex items-center gap-4">
            <Link href="/kayip-ilanlari?ilan-ver" className="hidden sm:inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest transition-colors">
              <Plus className="h-3.5 w-3.5" /> İlan Ver
            </Link>
            <Link href="/kayip-ilanlari" className="text-sm font-semibold text-red-600 hover:text-red-800 uppercase tracking-wider">
              Tümünü Gör
            </Link>
          </div>
        </div>

        <div className="divide-y divide-gray-50">
          {sonIlanlar.map(ilan => (
            <Link
              key={ilan.id}
              href={`/kayip-ilanlari?tip=${ilan.tip}`}
              className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 px-6 py-3.5 hover:bg-red-50 transition-colors group"
            >
              <span className="text-red-600 font-black text-sm shrink-0 md:w-24">{formatTarih(ilan.tarih)}</span>
              <span className="flex-1 text-gray-800 text-sm group-hover:text-red-600 transition-colors line-clamp-1">{ilan.metin}</span>
              <span className="shrink-0 text-[10px] font-black uppercase tracking-wider text-gray-400">
                {ilanTipiAdi(ilan.tip)} • {ilan.bolge}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
