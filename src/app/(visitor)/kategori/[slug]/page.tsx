import Link from 'next/link';
import { latestNews } from '@/lib/mockData';
import NewsCard from '@/components/news/NewsCard';
import { ChevronRight } from 'lucide-react';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 py-6 mb-8 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-red-600 transition-colors">Anasayfa</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-red-600">{categoryName}</span>
          </nav>
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight">
            {categoryName} Haberleri
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {latestNews.map(item => (
            <NewsCard 
              key={item.id}
              {...item}
              category={categoryName}
            />
          ))}
          {/* Duplicate some for a fuller look */}
          {latestNews.map(item => (
            <NewsCard 
              key={item.id + 100}
              {...item}
              id={item.id + 100}
              category={categoryName}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
