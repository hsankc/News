"use client";

import { useState } from 'react';
import { Pill, Clock, Star, Trophy, X, CloudSun, TrendingUp, Calendar, Newspaper, Ship, Bus } from 'lucide-react';

const services = [
  { id: 'gestas', name: 'Gestaş Seferleri', icon: Ship, colorFrom: 'from-blue-500', colorTo: 'to-cyan-600', activeBg: 'bg-blue-50', activeBorder: 'border-blue-200' },
  { id: 'otobus', name: 'Otobüs Saatleri', icon: Bus, colorFrom: 'from-yellow-500', colorTo: 'to-amber-600', activeBg: 'bg-yellow-50', activeBorder: 'border-yellow-200' },
  { id: 'hava', name: 'Hava Durumu', icon: CloudSun, colorFrom: 'from-sky-500', colorTo: 'to-blue-600', activeBg: 'bg-sky-50', activeBorder: 'border-sky-200' },
  { id: 'eczane', name: 'Nöbetçi Eczane', icon: Pill, colorFrom: 'from-green-500', colorTo: 'to-emerald-600', activeBg: 'bg-green-50', activeBorder: 'border-green-200' },
  { id: 'namaz', name: 'Namaz Vakitleri', icon: Clock, colorFrom: 'from-indigo-500', colorTo: 'to-blue-600', activeBg: 'bg-indigo-50', activeBorder: 'border-indigo-200' },
  { id: 'doviz', name: 'Döviz Kurları', icon: TrendingUp, colorFrom: 'from-amber-500', colorTo: 'to-orange-600', activeBg: 'bg-amber-50', activeBorder: 'border-amber-200' },
  { id: 'burc', name: 'Burçlar', icon: Star, colorFrom: 'from-purple-500', colorTo: 'to-violet-600', activeBg: 'bg-purple-50', activeBorder: 'border-purple-200' },
  { id: 'puan', name: 'Puan Durumu', icon: Trophy, colorFrom: 'from-emerald-500', colorTo: 'to-teal-600', activeBg: 'bg-emerald-50', activeBorder: 'border-emerald-200' },
  { id: 'fikstur', name: 'Fikstür', icon: Calendar, colorFrom: 'from-rose-500', colorTo: 'to-red-600', activeBg: 'bg-rose-50', activeBorder: 'border-rose-200' },
  { id: 'manset', name: 'Manşetler', icon: Newspaper, colorFrom: 'from-slate-600', colorTo: 'to-gray-800', activeBg: 'bg-slate-50', activeBorder: 'border-slate-200' },
];

const eczaneler = [
  { name: "Merkez Eczanesi", adres: "Cevatpaşa Mah. No:12", tel: "0286 217 00 00" },
  { name: "Güven Eczanesi", adres: "Barbaros Mah. No:45", tel: "0286 213 00 00" },
  { name: "Kordon Eczanesi", adres: "Kemalpaşa Mah. No:78", tel: "0286 218 00 00" },
  { name: "Yeni Eczane", adres: "İnönü Cad. No:33", tel: "0286 212 00 00" },
];

const namazVakitleri = [
  { vakit: "İmsak", saat: "05:42" },
  { vakit: "Güneş", saat: "07:08" },
  { vakit: "Öğle", saat: "13:15" },
  { vakit: "İkindi", saat: "16:38" },
  { vakit: "Akşam", saat: "19:12" },
  { vakit: "Yatsı", saat: "20:32" },
];

const burclar = [
  { name: "Koç", icon: "♈", yorum: "Enerjiniz yüksek, yeni başlangıçlar için ideal." },
  { name: "Boğa", icon: "♉", yorum: "Maddi konularda dikkatli olun." },
  { name: "İkizler", icon: "♊", yorum: "Sosyal çevreniz genişleyecek." },
  { name: "Yengeç", icon: "♋", yorum: "Aile bağlarınıza önem verin." },
  { name: "Aslan", icon: "♌", yorum: "Liderlik özellikleriniz parıldıyor." },
  { name: "Başak", icon: "♍", yorum: "İş hayatında fırsatlar doğacak." },
  { name: "Terazi", icon: "♎", yorum: "İlişkilerde uyum artacak." },
  { name: "Akrep", icon: "♏", yorum: "Sezgileriniz güçlü bugün." },
  { name: "Yay", icon: "♐", yorum: "Seyahat fırsatları kapınızda." },
  { name: "Oğlak", icon: "♑", yorum: "Sabırlı olmaya devam edin." },
  { name: "Kova", icon: "♒", yorum: "Yenilikçi fikirleriniz ilgi görecek." },
  { name: "Balık", icon: "♓", yorum: "Hayalleriniz gerçekleşmeye yakın." },
];

const puanDurumu = [
  { p: 1, n: "Galatasaray", o: 25, g: 19, av: "+41", pt: 61 },
  { p: 2, n: "Fenerbahçe", o: 25, g: 16, av: "+32", pt: 57 },
  { p: 3, n: "Trabzonspor", o: 25, g: 16, av: "+22", pt: 54 },
  { p: 4, n: "Beşiktaş", o: 25, g: 13, av: "+15", pt: 46 },
  { p: 5, n: "Başakşehir", o: 25, g: 12, av: "+17", pt: 42 },
  { p: 6, n: "Göztepe", o: 25, g: 11, av: "+10", pt: 42 },
];

const fikstur = [
  { tarih: "15 Mar", saat: "20:00", ev: "Galatasaray", deplasman: "Fenerbahçe", lig: "Süper Lig" },
  { tarih: "16 Mar", saat: "19:00", ev: "Beşiktaş", deplasman: "Trabzonspor", lig: "Süper Lig" },
  { tarih: "16 Mar", saat: "17:00", ev: "Başakşehir", deplasman: "Göztepe", lig: "Süper Lig" },
  { tarih: "22 Mar", saat: "20:00", ev: "Fenerbahçe", deplasman: "Beşiktaş", lig: "Süper Lig" },
  { tarih: "23 Mar", saat: "19:00", ev: "Trabzonspor", deplasman: "Galatasaray", lig: "Süper Lig" },
];

const dovizKurlari = [
  { birim: "USD/TRY", alis: "38.42", satis: "38.56", degisim: "+0.32%", yukselis: true },
  { birim: "EUR/TRY", alis: "41.18", satis: "41.35", degisim: "+0.18%", yukselis: true },
  { birim: "GBP/TRY", alis: "48.72", satis: "48.95", degisim: "-0.12%", yukselis: false },
  { birim: "Altın/gr", alis: "3.245", satis: "3.262", degisim: "+0.45%", yukselis: true },
  { birim: "Bitcoin", alis: "82.450", satis: "82.650", degisim: "+1.24%", yukselis: true },
];

const mansetler = [
  { gazete: "Hürriyet", baslik: "Ekonomide yeni paket bekleniyor" },
  { gazete: "Sabah", baslik: "Çanakkale'de turizm sezonu erken başladı" },
  { gazete: "Milliyet", baslik: "Süper Lig'de kritik hafta" },
  { gazete: "Sözcü", baslik: "Bahar yağmurları geliyor" },
  { gazete: "Posta", baslik: "Akaryakıt fiyatlarında son durum" },
];

const gestasSeferleri = [
  { kalkis: "Çanakkale", varis: "Eceabat", saatler: ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00"] },
  { kalkis: "Eceabat", varis: "Çanakkale", saatler: ["07:15", "08:15", "09:15", "10:15", "11:15", "12:15", "13:15", "14:15"] },
  { kalkis: "Çanakkale", varis: "Kilitbahir", saatler: ["07:30", "08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30"] },
];

const otobusSaatleri = [
  { hat: "Ç9", guzergah: "SSK - İskele - Kepez", sure: "15 dk", durum: "Yaklaşıyor" },
  { hat: "Ç11", guzergah: "Esenler - İskele - Kampüs", sure: "5 dk", durum: "Durakta" },
  { hat: "Ç3", guzergah: "Kepez - Hastane - Kampüs", sure: "20 dk", durum: "Yolda" },
  { hat: "Ç8", guzergah: "Sanayi - İskele - Hastane", sure: "12 dk", durum: "Yaklaşıyor" },
];

export default function ServicesBar() {
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const [selectedBurc, setSelectedBurc] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4">
      {/* Services Icons Bar */}
      <div className="flex items-center gap-2 md:gap-2.5 overflow-x-auto pb-4 pt-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        {services.map((svc) => {
          const Icon = svc.icon;
          const isActive = activePanel === svc.id;
          return (
            <button
              key={svc.id}
              onClick={() => {
                setActivePanel(isActive ? null : svc.id);
                setSelectedBurc(null);
              }}
              className={`flex items-center gap-1.5 px-3 py-2 md:px-4 md:py-2.5 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all shrink-0 border-2 ${
                isActive 
                  ? `bg-gradient-to-r ${svc.colorFrom} ${svc.colorTo} border-transparent text-white shadow-xl scale-[1.02] -translate-y-0.5` 
                  : `bg-white border-red-500/40 text-slate-700 hover:border-red-600 hover:bg-red-50 hover:text-red-700 hover:shadow-md hover:-translate-y-0.5`
              }`}
            >
              <Icon className={`h-4 w-4 md:h-5 md:w-5 ${isActive ? 'text-white' : 'text-red-500'}`} />
              {svc.name}
            </button>
          );
        })}
      </div>

      {/* Expandable Panel */}
      {activePanel && (
        <div className="mt-3 mb-2">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-50">
              <h3 className="font-black text-sm text-gray-800 uppercase tracking-wider">
                {services.find(s => s.id === activePanel)?.name}
              </h3>
              <button onClick={() => setActivePanel(null)} className="p-1.5 hover:bg-gray-100 rounded-xl transition-colors">
                <X className="h-4 w-4 text-gray-400" />
              </button>
            </div>

            <div className="p-4">
              {/* Hava Durumu */}
              {activePanel === 'hava' && (
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl flex-1 w-full">
                    <div className="text-5xl">☀️</div>
                    <div>
                      <p className="text-3xl font-black text-gray-900">18°C</p>
                      <p className="text-sm text-gray-500 font-medium">Açık, Güneşli</p>
                      <p className="text-xs text-sky-600 font-bold mt-1">Çanakkale</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 flex-1 w-full">
                    {[
                      { gun: "Sal", icon: "⛅", derece: "16°" },
                      { gun: "Çar", icon: "🌧️", derece: "14°" },
                      { gun: "Per", icon: "☁️", derece: "15°" },
                      { gun: "Cum", icon: "☀️", derece: "19°" },
                    ].map((g, i) => (
                      <div key={i} className="text-center p-3 bg-gray-50 rounded-xl">
                        <p className="text-[10px] font-bold text-gray-400 uppercase">{g.gun}</p>
                        <p className="text-xl my-1">{g.icon}</p>
                        <p className="text-sm font-black text-gray-700">{g.derece}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Nöbetçi Eczaneler */}
              {activePanel === 'eczane' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {eczaneler.map((ecz, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-green-50/50 rounded-xl">
                      <div className="p-2 bg-green-100 rounded-lg shrink-0">
                        <Pill className="h-4 w-4 text-green-700" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-gray-800 text-sm">{ecz.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{ecz.adres}</p>
                        <a href={`tel:${ecz.tel.replace(/\s/g, '')}`} className="text-xs text-green-600 font-bold mt-0.5 inline-block hover:underline">{ecz.tel}</a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Namaz Vakitleri */}
              {activePanel === 'namaz' && (
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {namazVakitleri.map((v, i) => (
                    <div key={i} className="text-center p-3 bg-indigo-50/50 rounded-xl">
                      <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">{v.vakit}</p>
                      <p className="text-base font-black text-indigo-900 mt-1">{v.saat}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Döviz Kurları */}
              {activePanel === 'doviz' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-amber-600 text-[10px] font-black uppercase border-b border-gray-100">
                        <th className="py-2 px-3 text-left">Birim</th>
                        <th className="py-2 px-3 text-center">Alış</th>
                        <th className="py-2 px-3 text-center">Satış</th>
                        <th className="py-2 px-3 text-right">Değişim</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dovizKurlari.map((d, i) => (
                        <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                          <td className="py-2.5 px-3 font-bold text-gray-800">{d.birim}</td>
                          <td className="py-2.5 px-3 text-center text-gray-600">{d.alis}</td>
                          <td className="py-2.5 px-3 text-center text-gray-600">{d.satis}</td>
                          <td className={`py-2.5 px-3 text-right font-bold ${d.yukselis ? 'text-green-600' : 'text-red-600'}`}>{d.degisim}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Burçlar */}
              {activePanel === 'burc' && (
                <div>
                  <div className="grid grid-cols-6 md:grid-cols-12 gap-1.5">
                    {burclar.map((b, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedBurc(selectedBurc === i ? null : i)}
                        className={`flex flex-col items-center gap-0.5 p-2 rounded-xl transition-all ${
                          selectedBurc === i ? 'bg-purple-100 ring-2 ring-purple-300' : 'bg-gray-50 hover:bg-purple-50'
                        }`}
                      >
                        <span className="text-lg md:text-xl">{b.icon}</span>
                        <span className="text-[7px] md:text-[8px] font-black uppercase text-gray-600">{b.name}</span>
                      </button>
                    ))}
                  </div>
                  {selectedBurc !== null && (
                    <div className="mt-3 p-3 bg-purple-50 rounded-xl flex items-start gap-3">
                      <span className="text-2xl">{burclar[selectedBurc].icon}</span>
                      <div>
                        <p className="font-black text-purple-900 text-sm">{burclar[selectedBurc].name}</p>
                        <p className="text-xs text-purple-700 mt-0.5">{burclar[selectedBurc].yorum}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Puan Durumu */}
              {activePanel === 'puan' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="text-emerald-600 text-[10px] font-black uppercase border-b border-gray-100">
                        <th className="py-2 px-2 text-left">#</th>
                        <th className="py-2 px-2 text-left">Takım</th>
                        <th className="py-2 px-2 text-center">O</th>
                        <th className="py-2 px-2 text-center">G</th>
                        <th className="py-2 px-2 text-center">Av</th>
                        <th className="py-2 px-2 text-center">P</th>
                      </tr>
                    </thead>
                    <tbody>
                      {puanDurumu.map((t) => (
                        <tr key={t.p} className="border-b border-gray-50 hover:bg-gray-50">
                          <td className="py-2 px-2 font-bold text-gray-400">{t.p}</td>
                          <td className="py-2 px-2 font-bold text-gray-800">{t.n}</td>
                          <td className="py-2 px-2 text-center text-gray-500">{t.o}</td>
                          <td className="py-2 px-2 text-center text-gray-500">{t.g}</td>
                          <td className="py-2 px-2 text-center text-gray-500">{t.av}</td>
                          <td className="py-2 px-2 text-center font-black text-gray-900">{t.pt}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Fikstür */}
              {activePanel === 'fikstur' && (
                <div className="space-y-2">
                  {fikstur.map((mac, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-rose-50/50 rounded-xl">
                      <div className="text-center shrink-0">
                        <p className="text-[10px] font-black text-rose-400 uppercase">{mac.tarih}</p>
                        <p className="text-sm font-black text-rose-700">{mac.saat}</p>
                      </div>
                      <div className="flex-1 flex items-center justify-center gap-2 text-sm">
                        <span className="font-bold text-gray-800 text-right flex-1">{mac.ev}</span>
                        <span className="text-xs font-black text-gray-300 px-2">vs</span>
                        <span className="font-bold text-gray-800 text-left flex-1">{mac.deplasman}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Manşetler */}
              {activePanel === 'manset' && (
                <div className="space-y-2">
                  {mansetler.map((m, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                      <span className="text-[10px] font-black text-white bg-gray-800 px-2 py-1 rounded-lg uppercase tracking-wider shrink-0">{m.gazete}</span>
                      <p className="text-sm font-medium text-gray-700">{m.baslik}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Gestaş Seferleri */}
              {activePanel === 'gestas' && (
                <div className="space-y-3">
                  {gestasSeferleri.map((sefer, i) => (
                    <div key={i} className="bg-blue-50/80 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-black text-blue-900 text-sm uppercase tracking-tight">{sefer.kalkis}</span>
                        <div className="h-px bg-blue-200 flex-1 relative">
                          <Ship className="h-4 w-4 text-blue-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-50 px-0.5" />
                        </div>
                        <span className="font-black text-blue-900 text-sm uppercase tracking-tight">{sefer.varis}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {sefer.saatler.map((saat, j) => (
                          <span key={j} className="text-[11px] font-bold bg-white text-blue-700 px-2.5 py-1.5 rounded-lg border border-blue-100 shadow-sm">{saat}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center mt-4 flex items-center justify-center gap-1">
                    <CloudSun className="h-3 w-3" /> Hava muhalefeti nedeniyle seferlerde değişiklik olabilir.
                  </p>
                </div>
              )}

              {/* Otobüs Saatleri */}
              {activePanel === 'otobus' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {otobusSaatleri.map((bus, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 bg-yellow-50/80 rounded-xl border border-yellow-100">
                      <div className="p-2 bg-yellow-400 text-yellow-900 rounded-xl shrink-0 font-black text-sm w-12 flex items-center justify-center shadow-sm">
                        {bus.hat}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-gray-800 text-xs md:text-sm truncate">{bus.guzergah}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-[10px] font-black text-amber-700 bg-amber-100/50 px-2 py-1 rounded-lg uppercase tracking-wider flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {bus.sure}
                          </span>
                          <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-lg flex items-center gap-1 ${
                            bus.durum === 'Durakta' ? 'text-green-700 bg-green-100' : 
                            bus.durum === 'Yaklaşıyor' ? 'text-amber-700 bg-amber-100' : 'text-gray-500 bg-gray-100'
                          }`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${bus.durum === 'Durakta' ? 'bg-green-500 animate-pulse' : bus.durum === 'Yaklaşıyor' ? 'bg-amber-500' : 'bg-gray-400'}`}></div>
                            {bus.durum}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
