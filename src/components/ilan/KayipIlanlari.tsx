"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, Plus, X, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  bolgeler,
  formatTarih,
  ilanTipiAdi,
  ilanTipleri,
  kayipIlanlari,
  type IlanTipi,
  type KayipIlani,
} from '@/lib/kayipIlanlari';
import IlanVerForm from './IlanVerForm';

// Demo: ziyaretçinin verdiği ilanlar yalnızca kendi tarayıcısında saklanır
const STORAGE_KEY = 'kayipIlanlari';

const loadSaved = (): KayipIlani[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
  } catch {
    return [];
  }
};

const isIlanTipi = (value?: string): value is IlanTipi => ilanTipleri.some(t => t.id === value);

const SAYFA_BASINA = 50;

// 1 … 4 5 6 … 12 biçiminde sayfa numaraları
const sayfaNumaralari = (current: number, total: number): (number | '…')[] => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | '…')[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) pages.push('…');
  for (let p = start; p <= end; p++) pages.push(p);
  if (end < total - 1) pages.push('…');
  pages.push(total);
  return pages;
};

export default function KayipIlanlari({ initialTip, initialFormOpen = false }: { initialTip?: string; initialFormOpen?: boolean }) {
  const [saved, setSaved] = useState<KayipIlani[]>([]);
  const [query, setQuery] = useState('');
  const [tip, setTip] = useState<IlanTipi | ''>(isIlanTipi(initialTip) ? initialTip : '');
  const [bolge, setBolge] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(initialFormOpen);
  const [success, setSuccess] = useState(false);

  useEffect(() => setSaved(loadSaved()), []);

  const savedIds = useMemo(() => new Set(saved.map(i => i.id)), [saved]);

  const ilanlar = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('tr');
    return [...saved, ...kayipIlanlari]
      .filter(i => (!tip || i.tip === tip) && (!bolge || i.bolge === bolge) && (!q || i.metin.toLocaleLowerCase('tr').includes(q)))
      .sort((a, b) => b.tarih.localeCompare(a.tarih));
  }, [saved, query, tip, bolge]);

  const hasFilter = Boolean(query || tip || bolge);

  const [page, setPage] = useState(1);
  const listTopRef = useRef<HTMLDivElement>(null);
  useEffect(() => setPage(1), [query, tip, bolge, saved]);

  const pageCount = Math.max(1, Math.ceil(ilanlar.length / SAYFA_BASINA));
  const sayfadakiIlanlar = ilanlar.slice((page - 1) * SAYFA_BASINA, page * SAYFA_BASINA);
  const ilkSira = ilanlar.length ? (page - 1) * SAYFA_BASINA + 1 : 0;
  const sonSira = (page - 1) * SAYFA_BASINA + sayfadakiIlanlar.length;

  const goToPage = (p: number) => {
    setPage(p);
    listTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleAdd = (ilan: KayipIlani) => {
    const next = [ilan, ...saved];
    setSaved(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* depolama kapalıysa ilan sadece bu oturumda görünür */
    }
    setIsFormOpen(false);
    setSuccess(true);
    setQuery('');
    setTip('');
    setBolge('');
    setTimeout(() => setSuccess(false), 4000);
  };

  const selectClass = 'bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 outline-none focus:border-red-500 transition-colors';

  return (
    <div className="space-y-6">
      {success && (
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 px-5 py-4 rounded-2xl font-bold text-sm animate-slide-up">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          İlanınız alındı ve listenin en üstüne eklendi.
        </div>
      )}

      {isFormOpen ? (
        <IlanVerForm onSubmit={handleAdd} onClose={() => setIsFormOpen(false)} />
      ) : (
        <button
          onClick={() => setIsFormOpen(true)}
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-red-200 transition-all active:scale-95"
        >
          <Plus className="h-4 w-4" /> Kayıp İlanı Ver
        </button>
      )}

      {/* Filtreler */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col lg:flex-row gap-3">
        <div className="flex-1 flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 focus-within:border-red-500 focus-within:bg-white transition-colors">
          <Search className="h-4 w-4 text-gray-400 shrink-0" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="İlan metninde ara (isim, okul, belge...)"
            className="w-full bg-transparent py-3 text-sm font-bold text-gray-700 outline-none placeholder:text-gray-400"
          />
        </div>
        <select value={tip} onChange={(e) => setTip(e.target.value as IlanTipi | '')} className={selectClass} aria-label="İlan tipi">
          <option value="">Tüm İlan Tipleri</option>
          {ilanTipleri.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
        </select>
        <select value={bolge} onChange={(e) => setBolge(e.target.value)} className={selectClass} aria-label="Yayın bölgesi">
          <option value="">Tüm Bölgeler</option>
          {bolgeler.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      <div ref={listTopRef} className="flex items-center justify-between text-sm scroll-mt-32">
        <p className="text-gray-500">
          Toplam <span className="font-black text-gray-900">{ilanlar.length}</span> ilan
          {ilanlar.length > 0 && <> • {ilkSira}–{sonSira} arası gösteriliyor</>}
        </p>
        {hasFilter && (
          <button onClick={() => { setQuery(''); setTip(''); setBolge(''); }} className="inline-flex items-center gap-1 font-bold text-red-600 hover:text-red-800">
            <X className="h-4 w-4" /> Filtreleri temizle
          </button>
        )}
      </div>

      {ilanlar.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-500 font-medium">
          Aramanızla eşleşen ilan bulunamadı.
        </div>
      ) : (
        <>
          {/* Masaüstü: tablo */}
          <div className="hidden md:block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-red-600 text-white text-left">
                  <th className="py-4 px-5 font-black whitespace-nowrap">Yayın Tarihi</th>
                  <th className="py-4 px-5 font-black">İlan Metni</th>
                  <th className="py-4 px-5 font-black whitespace-nowrap">İlan Tipi</th>
                  <th className="py-4 px-5 font-black whitespace-nowrap">Yayın Bölgesi</th>
                </tr>
              </thead>
              <tbody>
                {sayfadakiIlanlar.map((ilan, idx) => (
                  <tr key={ilan.id} className={`border-t border-gray-100 hover:bg-red-50/40 transition-colors ${idx % 2 ? 'bg-gray-50/60' : ''}`}>
                    <td className="py-3.5 px-5 text-gray-700 whitespace-nowrap align-top">
                      {formatTarih(ilan.tarih)}
                      {savedIds.has(ilan.id) && (
                        <span className="ml-2 bg-green-100 text-green-700 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">Yeni</span>
                      )}
                    </td>
                    <td className="py-3.5 px-5 text-gray-800 align-top">{ilan.metin}</td>
                    <td className="py-3.5 px-5 align-top whitespace-nowrap">
                      <button onClick={() => setTip(ilan.tip)} className="text-blue-600 hover:text-red-600 hover:underline transition-colors">
                        {ilanTipiAdi(ilan.tip)} Kayıp İlanı
                      </button>
                    </td>
                    <td className="py-3.5 px-5 text-gray-700 align-top">{ilan.bolge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobil: kartlar */}
          <div className="md:hidden space-y-3">
            {sayfadakiIlanlar.map(ilan => (
              <div key={ilan.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                <div className="flex items-center justify-between gap-2 mb-2 text-[11px] font-black uppercase tracking-wider">
                  <span className="text-red-600">
                    {formatTarih(ilan.tarih)}
                    {savedIds.has(ilan.id) && <span className="ml-2 bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Yeni</span>}
                  </span>
                  <span className="text-gray-400">{ilan.bolge}</span>
                </div>
                <p className="text-sm text-gray-800 leading-relaxed">{ilan.metin}</p>
                <button onClick={() => setTip(ilan.tip)} className="mt-3 text-xs font-bold text-blue-600">
                  {ilanTipiAdi(ilan.tip)} Kayıp İlanı
                </button>
              </div>
            ))}
          </div>

          {pageCount > 1 && (
            <nav aria-label="Sayfalar" className="flex items-center justify-center gap-1.5 pt-2">
              <button
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                aria-label="Önceki sayfa"
                className="p-2.5 rounded-xl bg-white border border-gray-200 text-gray-600 hover:border-red-500 hover:text-red-600 disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {sayfaNumaralari(page, pageCount).map((p, i) =>
                p === '…' ? (
                  <span key={`bosluk-${i}`} className="px-1 text-gray-400 font-bold">…</span>
                ) : (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    aria-current={p === page ? 'page' : undefined}
                    className={`min-w-[40px] h-10 px-3 rounded-xl text-sm font-black transition-colors ${
                      p === page
                        ? 'bg-red-600 text-white shadow-lg shadow-red-200'
                        : 'bg-white border border-gray-200 text-gray-600 hover:border-red-500 hover:text-red-600'
                    }`}
                  >
                    {p}
                  </button>
                )
              )}
              <button
                onClick={() => goToPage(page + 1)}
                disabled={page === pageCount}
                aria-label="Sonraki sayfa"
                className="p-2.5 rounded-xl bg-white border border-gray-200 text-gray-600 hover:border-red-500 hover:text-red-600 disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          )}
        </>
      )}
    </div>
  );
}
