import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { galleryItems } from '@/lib/mockData';

export default function GallerySection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-600 rounded-sm"></span>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight uppercase">
              Foto & Video Galeri
            </h2>
          </div>
          <Link href="/galeri" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wider">
            Tümünü Gör
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="relative group h-64 rounded-xl overflow-hidden shadow-md cursor-pointer"
            >
              <Image
                src={item.image || "/placeholder.png"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 fill-current" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-bold text-sm leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
