import Link from 'next/link';
import type { Metadata } from 'next';
import { ChevronRight } from 'lucide-react';
import KayipIlanlari from '@/components/ilan/KayipIlanlari';

export const metadata: Metadata = {
  title: 'Kayıp İlanları - Truva Haber',
  description: 'Çanakkale ve ilçelerinde yayınlanan öğrenci kimliği, kimlik kartı, ehliyet, ruhsat ve diğer kayıp (zayi) ilanları.',
};

export default function KayipIlanlariPage({ searchParams }: { searchParams: { tip?: string; 'ilan-ver'?: string } }) {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 py-6 mb-8 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-red-600 transition-colors">Anasayfa</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-red-600">Kayıp İlanları</span>
          </nav>
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight">Kayıp İlanları</h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Öğrenci kimliği, kimlik kartı, sürücü belgesi, araç ve tekne ruhsatı, fatura ve benzeri belgeleriniz için
            Truva Haber&apos;de kayıp (zayi) ilanı verebilirsiniz. Aşağıda Çanakkale ve ilçelerinde yayınlanan son ilanları
            görebilir, ilan tipine veya bölgeye göre filtreleyebilirsiniz.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <KayipIlanlari initialTip={searchParams.tip} initialFormOpen={searchParams['ilan-ver'] !== undefined} />
      </div>
    </main>
  );
}
