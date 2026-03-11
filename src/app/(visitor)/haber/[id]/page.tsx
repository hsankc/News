import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Share2, Facebook, Twitter, MessageCircle, Clock } from 'lucide-react';
import { heroNews, latestNews } from '@/lib/mockData';

export default function HaberDetay({ params }: { params: { id: string } }) {
  // Combine all news to find the right one
  const allNews = [...heroNews, ...latestNews];
  const news = allNews.find(n => n.id.toString() === params.id) || allNews[0];

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
                    <span>{news.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-gray-700">Paylaş:</span>
                  <div className="flex gap-2">
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:opacity-80 transition-opacity">
                      <Facebook className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-sky-500 text-white rounded-full hover:opacity-80 transition-opacity">
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-green-500 text-white rounded-full hover:opacity-80 transition-opacity">
                      <MessageCircle className="h-4 w-4" />
                    </button>
                  </div>
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
              <p className="mb-4">
                Çanakkale'nin nabzını tutan haber merkezimize ulaşan bilgilere göre, {news.title} konusu bugün kentin en çok konuşulan başlıkları arasında yer aldı. Yerel kaynaklardan edinilen detaylar, bölge halkı için büyük önem taşıyor.
              </p>
              <p className="mb-4">
                Olayın ardından yetkililer tarafından yapılan açıklamalarda, sürecin titizlikle takip edildiği ve gerekli tüm önlemlerin alındığı belirtildi. Özellikle {news.category} alanında yaşanan bu gelişme, ilerleyen günlerde de gündemi meşgul etmeye devam edecek gibi görünüyor.
              </p>
              <div className="my-8 p-6 bg-gray-50 rounded-xl border-l-4 border-red-600">
                <p className="font-medium text-gray-900 mb-0 italic">
                  "Haberin en doğru ve hızlı kaynağı olarak gelişmeleri takip etmeye devam ediyoruz. Ayrıntılar için bizi takipte kalın."
                </p>
              </div>
              <p>
                Konuyla ilgili olarak bölgedeki sivil toplum kuruluşları ve vatandaşların görüşleri de alınmaya başlandı. Çanakkale Haber ekibi olarak sahada yaptığımız incelemelerde, halkın bu gelişmeye yönelik tepkilerini ve beklentilerini yakından gözlemledik. Detaylı raporumuz çok yakında burada olacak.
              </p>
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
