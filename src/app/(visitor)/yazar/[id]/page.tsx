import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ChevronRight } from 'lucide-react';
import { columnists } from '@/lib/mockData';

const getColumnist = (id: string) => columnists.find(c => c.id.toString() === id);

export const dynamicParams = false;

export function generateStaticParams() {
  return columnists.map(c => ({ id: c.id.toString() }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const author = getColumnist(params.id);
  return { title: author ? `${author.name} - Truva Haber` : 'Truva Haber' };
}

export default function YazarPage({ params }: { params: { id: string } }) {
  const author = getColumnist(params.id);
  if (!author) notFound();

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-gray-900 py-12 mb-8">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-red-500 transition-colors">Anasayfa</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-red-500">Köşe Yazarları</span>
          </nav>
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-red-600 shrink-0">
              <Image src={author.image} alt={author.name} fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">{author.name}</h1>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-2">Köşe Yazarı</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <article className="max-w-3xl bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-6">{author.title}</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Çanakkale, tarihi ve doğal güzellikleriyle her geçen gün daha fazla ilgi gören bir şehir. Bu yazıda kentin
              gündemindeki gelişmeleri ve önümüzdeki dönemde bizi nelerin beklediğini değerlendirmek istiyorum.
            </p>
            <p>
              Yerel yönetimlerin, üniversitenin ve sivil toplumun birlikte hareket etmesi, şehrin geleceği açısından
              belirleyici olacak. Önümüzdeki haftalarda bu konuyu farklı başlıklar altında ele almaya devam edeceğim.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
