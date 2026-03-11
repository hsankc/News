import Image from 'next/image';
import Link from 'next/link';
import { columnists } from '@/lib/mockData';

export default function ColumnistsSection() {
  return (
    <section className="py-12 bg-gray-900 border-y border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-8 bg-red-600 rounded-sm"></span>
          <h2 className="text-2xl font-black text-white tracking-tight uppercase">
            Köşe Yazarları
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {columnists.map((author) => (
            <Link 
              key={author.id} 
              href={`/yazar/${author.id}`}
              className="group flex flex-col items-center bg-gray-800/50 p-6 rounded-2xl hover:bg-gray-800 transition-all duration-300 border border-gray-700/50 hover:border-red-600/50 text-center"
            >
              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-red-600 transition-colors">
                <Image
                  src={author.image || "/placeholder.png"}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-white font-bold text-lg group-hover:text-red-500 transition-colors">
                {author.name}
              </h3>
              <p className="text-gray-400 text-sm mt-2 line-clamp-2 italic leading-relaxed">
                "{author.title}"
              </p>
              <div className="mt-4 text-xs font-bold text-red-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Yazıyı Oku
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
