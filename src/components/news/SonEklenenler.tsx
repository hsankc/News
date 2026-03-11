import Link from 'next/link';
import { latestNews } from '@/lib/mockData';

const sonEklenenler = [
  { saat: "17:44", title: "Web Sitelerinde Performans ve Güvenlik İçin Altyapı Seçimi...", id: 8 },
  { saat: "16:56", title: "ÇOMÜ öğrencilerinden tarihe saygı etkinliği", id: 9 },
  { saat: "14:41", title: "Turan: 'Türkiye ayağa kalktığında tüm bölge ayağa kalkar'", id: 10 },
  { saat: "13:54", title: "31 kaçak yapı yıkıldı", id: 11 },
  { saat: "11:17", title: "Çanakkale'den umut oldular: Örnek organ bağışı!", id: 12 },
  { saat: "10:36", title: "Sanal bahisle mücadelede farkındalık", id: 13 },
  { saat: "10:21", title: "MÜSİAD'dan iftar programı", id: 14 },
  { saat: "09:48", title: "ÇOMÜ Öğretim Üyesine Japonya'dan ödül", id: 15 },
  { saat: "09:44", title: "Kadın Etkinlik Merkezi törenle hizmete açıldı", id: 16 },
  { saat: "09:27", title: "Çanakkale'de huzur uygulaması", id: 17 },
  { saat: "09:43", title: "Çanakkale siyasetinin önemli isimleri iftarda buluştu", id: 18 },
  { saat: "08:30", title: "Bağ Bozumu Festivali başladı", id: 19 },
];

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
              key={idx} 
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
