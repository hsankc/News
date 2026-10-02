import Link from 'next/link';
import { allNews } from '@/lib/mockData';

const sonEklenenler = [...allNews].sort((a, b) => b.yayin.localeCompare(a.yayin)).slice(0, 12);

export default function SonEklenenler() {
  return (
    <section className="py-8 container mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-black text-xl text-red-600 italic tracking-tight uppercase">SON EKLENENLER</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {sonEklenenler.map((item, idx) => (
            <Link
              key={item.id}
              href={`/haber/${item.id}`}
              className={`flex items-start gap-3 px-6 py-4 hover:bg-red-50 transition-colors border-b border-gray-50 group ${
                idx % 2 === 0 ? 'md:border-r' : ''
              }`}
            >
              <span className="text-red-600 font-black text-sm shrink-0 mt-0.5 min-w-[45px]">
                {item.saat}
              </span>
              <span className="text-gray-800 font-medium text-sm group-hover:text-red-600 transition-colors line-clamp-1">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
