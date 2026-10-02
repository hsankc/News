import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ChevronRight } from 'lucide-react';

// Kurumsal sayfalar (demo içerik)
const pages: Record<string, { title: string; paragraphs: string[] }> = {
  kunye: {
    title: 'Künye',
    paragraphs: [
      'Yayın Adı: Truva Haber',
      'Yayın Türü: Yaygın süreli, internet haber sitesi',
      'Yönetim Yeri: Çanakkale Merkez, Türkiye',
      'E-posta: info@truvahaber.com • Telefon: +90 (286) 123 45 67',
    ],
  },
  iletisim: {
    title: 'İletişim',
    paragraphs: [
      'Haber ihbarları, düzeltme talepleri ve her türlü görüşünüz için bize ulaşabilirsiniz.',
      'Adres: Çanakkale Merkez, Türkiye',
      'E-posta: info@truvahaber.com',
      'Telefon: +90 (286) 123 45 67',
    ],
  },
  reklam: {
    title: 'Reklam Ver',
    paragraphs: [
      'Truva Haber, Çanakkale ve ilçelerinde yerel okuyucuya ulaşmanın en etkili yoludur.',
      'Banner, sponsorlu içerik ve bülten reklamları hakkında bilgi almak için reklam@truvahaber.com adresine yazabilirsiniz.',
    ],
  },
  gizlilik: {
    title: 'Gizlilik İlkeleri',
    paragraphs: [
      'Truva Haber, ziyaretçilerinin kişisel verilerinin gizliliğine önem verir.',
      'Sitemizde toplanan veriler yalnızca hizmet kalitesini artırmak amacıyla, 6698 sayılı KVKK kapsamında işlenir ve üçüncü kişilerle paylaşılmaz.',
    ],
  },
  cerez: {
    title: 'Çerez Politikası',
    paragraphs: [
      'Sitemiz, kullanıcı deneyimini iyileştirmek ve ziyaret istatistiklerini ölçmek için çerezler kullanır.',
      'Tarayıcınızın ayarlarından çerezleri dilediğiniz zaman silebilir veya engelleyebilirsiniz.',
    ],
  },
  'yayin-ilkeleri': {
    title: 'Yayın İlkeleri',
    paragraphs: [
      'Truva Haber; doğruluk, tarafsızlık ve kamu yararı ilkelerini esas alır.',
      'Haberlerimizde kaynak gösterir, hatalı bilgileri fark ettiğimizde açıkça düzeltiriz. Kişilik haklarına ve özel hayatın gizliliğine saygı gösteririz.',
    ],
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(pages).map(sayfa => ({ sayfa }));
}

export function generateMetadata({ params }: { params: { sayfa: string } }): Metadata {
  const page = pages[params.sayfa];
  return { title: page ? `${page.title} - Truva Haber` : 'Truva Haber' };
}

export default function KurumsalPage({ params }: { params: { sayfa: string } }) {
  const page = pages[params.sayfa];
  if (!page) notFound();

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 py-6 mb-8 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-red-600 transition-colors">Anasayfa</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-red-600">{page.title}</span>
          </nav>
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight">{page.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 space-y-4 text-gray-700 leading-relaxed">
          {page.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
