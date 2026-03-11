import Image from 'next/image';
import Link from 'next/link';

interface NewsCardProps {
  id: number | string;
  title: string;
  summary: string;
  image: string;
  category: string;
  date: string;
}

export default function NewsCard({ id, title, summary, image, category, date }: NewsCardProps) {
  const imageUrl = image || "/placeholder.png";

  return (
    <div className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <Link href={`/haber/${id}`} className="block relative h-48 sm:h-56 overflow-hidden">
        <img 
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-sm shadow-md">
            {category}
          </span>
        </div>
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{date}</span>
        </div>
        <Link href={`/haber/${id}`} className="group-hover:text-red-600 transition-colors">
          <h3 className="text-lg font-bold text-gray-900 leading-snug line-clamp-2 mb-3">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 mt-auto">
          {summary}
        </p>
      </div>
    </div>
  );
}
