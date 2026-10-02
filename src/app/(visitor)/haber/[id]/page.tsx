import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ChevronLeft, Clock } from 'lucide-react';
import { allNews, latestNews, getNewsById } from '@/lib/mockData';
import ShareButtons from '@/components/news/ShareButtons';

export const dynamicParams = false;

export function generateStaticParams() {
  return allNews.map(n => ({ id: n.id.toString() }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const news = getNewsById(params.id);
  if (!news) return { title: 'Haber bulunamadı - Truva Haber' };
  return {
    title: `${news.title} - Truva Haber`,
    description: news.summary,
    openGraph: { title: news.title, description: news.summary, images: [news.image] },
  };
}

export default function HaberDetay({ params }: { params: { id: string } }) {
  const news = getNewsById(params.id);
  if (!news) notFound();

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Article Header */}
      <div className="bg-white border-b border-gray-200 py-4 mb-8">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-red-600 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Anasayfaya Dön
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-8 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <div className="mb-6">
              <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-sm mb-4 inline-block">
                {news.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                {news.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-between gap-4 border-y border-gray-100 py-4 text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{news.date}, {news.saat}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-gray-700">Paylaş:</span>
                  <ShareButtons id={news.id} title={news.title} />
                </div>
              </div>
            </div>

            <div className="relative aspect-video w-full mb-8 rounded-xl overflow-hidden shadow-lg">
              <Image 
                src={news.image}
                alt={news.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="font-bold text-xl text-gray-900 mb-6 italic border-l-4 border-red-600 pl-4">
                {news.summary}
              </p>
              {news.icerik.map((paragraf, i) => (
                <p key={i} className="mb-4">{paragraf}</p>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Popüler Haberler */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-black text-gray-900 mb-6 border-b-2 border-red-600 pb-2 inline-block">
                En Çok Okunanlar
              </h3>
              <div className="space-y-6">
                {latestNews.slice(0, 4).map((item, idx) => (
                  <Link key={item.id} href={`/haber/${item.id}`} className="flex gap-4 group">
                    <span className="text-3xl font-black text-gray-200 group-hover:text-red-600 transition-colors shrink-0 leading-none">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <span className="text-[10px] uppercase font-bold text-gray-400">
                        {item.category}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Reklam Alanı */}
            <div className="w-full aspect-[3/4] bg-gray-200 flex items-center justify-center border border-dashed border-gray-400 rounded-2xl text-gray-500 font-medium">
              300x600 Reklam Alanı
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
