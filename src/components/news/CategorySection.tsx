import Link from 'next/link';
import { latestNews } from '@/lib/mockData';
import NewsCard from './NewsCard';

export default function CategorySection({ categoryName }: { categoryName: string }) {
  // Use mock data for now, filtering can be added later
  const news = latestNews;

  return (
    <section className="py-8 border-t border-gray-100 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-8 bg-red-600 rounded-sm"></span>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight uppercase">
              {categoryName}
            </h2>
          </div>
          <Link href={`/${categoryName.toLowerCase()}`} className="text-sm font-semibold text-red-600 hover:text-red-800 transition-colors uppercase tracking-wider flex items-center">
            Tümünü Gör
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map(item => (
            <NewsCard 
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
