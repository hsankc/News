import Link from 'next/link';
import type { Metadata } from 'next';
import { ChevronRight, Search } from 'lucide-react';
import { searchNews } from '@/lib/mockData';
import NewsCard from '@/components/news/NewsCard';

export const metadata: Metadata = { title: 'Haber Ara - Truva Haber' };

export default function AraPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = (searchParams.q ?? '').trim();
  const results = searchNews(query);

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 py-6 mb-8 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-red-600 transition-colors">Anasayfa</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-red-600">Arama</span>
          </nav>
          <form action="/ara" className="flex items-center max-w-2xl bg-slate-50 rounded-2xl border border-slate-100 focus-within:border-red-500 focus-within:bg-white transition-all px-6 py-3">
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Haber ve içerik ara..."
              className="bg-transparent border-none outline-none w-full font-bold placeholder:text-slate-400"
              autoFocus
            />
            <button type="submit" aria-label="Ara" className="text-slate-400 hover:text-red-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </form>
          {query && (
            <p className="mt-4 text-sm text-gray-500">
              <span className="font-bold text-gray-900">&ldquo;{query}&rdquo;</span> için {results.length} sonuç bulundu
            </p>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4">
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map(item => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-500 font-medium">
            {query ? 'Aramanızla eşleşen haber bulunamadı.' : 'Aramak istediğiniz kelimeyi yazın.'}
          </div>
        )}
      </div>
    </main>
  );
}
