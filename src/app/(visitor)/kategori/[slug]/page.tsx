import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { categories, allNews, getCategoryBySlug, getNewsByCategory } from '@/lib/mockData';
import NewsCard from '@/components/news/NewsCard';
import { ChevronRight } from 'lucide-react';

// "son-haberler" kategori değil, tüm haberlerin listesi
const getPageData = (slug: string) => {
  if (slug === 'son-haberler') return { name: 'Son Haberler', news: allNews };
  const category = getCategoryBySlug(slug);
  if (!category) return null;
  return { name: category.name, news: getNewsByCategory(category.name) };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: 'son-haberler' }, ...categories.map(c => ({ slug: c.id }))];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = getPageData(params.slug);
  return { title: data ? `${data.name} Haberleri - Truva Haber` : 'Truva Haber' };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const data = getPageData(params.slug);
  if (!data) notFound();

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 py-6 mb-8 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-red-600 transition-colors">Anasayfa</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-red-600">{data.name}</span>
          </nav>
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight">
            {data.name} Haberleri
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {data.news.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.news.map(item => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
            <p className="text-gray-500 font-medium mb-4">Bu kategoride henüz haber bulunmuyor.</p>
            <Link href="/kategori/son-haberler" className="text-sm font-bold text-red-600 hover:text-red-800 uppercase tracking-wider">
              Son Haberlere Göz At
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
