// Servis çubuğu ve menüdeki servislerin ortak verileri.
// *Fallback verileri, canlı API'lere ulaşılamadığında gösterilir (bkz. liveData.ts).

export type HavaDurumu = {
  derece: number;
  durum: string;
  icon: string;
  tahmin: { gun: string; icon: string; derece: string }[];
};

export type DovizKuru = {
  birim: string;
  etiket: string;
  kur: string;
  degisim: string;
  yukselis: boolean;
};

export type NamazVakti = { vakit: string; saat: string };

export const havaFallback: HavaDurumu = {
  derece: 18,
  durum: 'Açık',
  icon: '☀️',
  tahmin: [
    { gun: "Sal", icon: "⛅", derece: "16°" },
    { gun: "Çar", icon: "🌧️", derece: "14°" },
    { gun: "Per", icon: "☁️", derece: "15°" },
    { gun: "Cum", icon: "☀️", derece: "19°" },
  ],
};

export const dovizFallback: DovizKuru[] = [
  { birim: "USD/TRY", etiket: "DOLAR", kur: "44,0830", degisim: "+0,04%", yukselis: true },
  { birim: "EUR/TRY", etiket: "EURO", kur: "51,2315", degisim: "-0,04%", yukselis: false },
  { birim: "GBP/TRY", etiket: "STERLİN", kur: "59,1000", degisim: "-0,12%", yukselis: false },
  { birim: "Altın/gr", etiket: "ALTIN", kur: "7.364,71", degisim: "+0,12%", yukselis: true },
  { birim: "Bitcoin", etiket: "BITCOIN", kur: "4.233.606", degisim: "+1,24%", yukselis: true },
];

export const namazFallback: NamazVakti[] = [
  { vakit: "İmsak", saat: "05:42" },
  { vakit: "Güneş", saat: "07:08" },
  { vakit: "Öğle", saat: "13:15" },
  { vakit: "İkindi", saat: "16:38" },
  { vakit: "Akşam", saat: "19:12" },
  { vakit: "Yatsı", saat: "20:32" },
];

export const eczaneler = [
  { name: "Merkez Eczanesi", adres: "Cevatpaşa Mah. No:12", tel: "0286 217 00 00" },
  { name: "Güven Eczanesi", adres: "Barbaros Mah. No:45", tel: "0286 213 00 00" },
  { name: "Kordon Eczanesi", adres: "Kemalpaşa Mah. No:78", tel: "0286 218 00 00" },
  { name: "Yeni Eczane", adres: "İnönü Cad. No:33", tel: "0286 212 00 00" },
];

export const burclar = [
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

export const puanDurumu = [
  { p: 1, n: "Galatasaray", o: 25, g: 19, av: "+41", pt: 61 },
  { p: 2, n: "Fenerbahçe", o: 25, g: 16, av: "+32", pt: 57 },
  { p: 3, n: "Trabzonspor", o: 25, g: 16, av: "+22", pt: 54 },
  { p: 4, n: "Beşiktaş", o: 25, g: 13, av: "+15", pt: 46 },
  { p: 5, n: "Başakşehir", o: 25, g: 12, av: "+17", pt: 42 },
  { p: 6, n: "Göztepe", o: 25, g: 11, av: "+10", pt: 42 },
];

export const fikstur = [
  { tarih: "15 Mar", saat: "20:00", ev: "Galatasaray", deplasman: "Fenerbahçe", lig: "Süper Lig" },
  { tarih: "16 Mar", saat: "19:00", ev: "Beşiktaş", deplasman: "Trabzonspor", lig: "Süper Lig" },
  { tarih: "16 Mar", saat: "17:00", ev: "Başakşehir", deplasman: "Göztepe", lig: "Süper Lig" },
  { tarih: "22 Mar", saat: "20:00", ev: "Fenerbahçe", deplasman: "Beşiktaş", lig: "Süper Lig" },
  { tarih: "23 Mar", saat: "19:00", ev: "Trabzonspor", deplasman: "Galatasaray", lig: "Süper Lig" },
];

export const mansetler = [
  { gazete: "Hürriyet", baslik: "Ekonomide yeni paket bekleniyor" },
  { gazete: "Sabah", baslik: "Çanakkale'de turizm sezonu erken başladı" },
  { gazete: "Milliyet", baslik: "Süper Lig'de kritik hafta" },
  { gazete: "Sözcü", baslik: "Bahar yağmurları geliyor" },
  { gazete: "Posta", baslik: "Akaryakıt fiyatlarında son durum" },
];

export const gestasSeferleri = [
  { kalkis: "Çanakkale", varis: "Eceabat", saatler: ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00"] },
  { kalkis: "Eceabat", varis: "Çanakkale", saatler: ["07:15", "08:15", "09:15", "10:15", "11:15", "12:15", "13:15", "14:15"] },
  { kalkis: "Çanakkale", varis: "Kilitbahir", saatler: ["07:30", "08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30"] },
];

export const otobusSaatleri = [
  { hat: "Ç9", guzergah: "SSK - İskele - Kepez", sure: "15 dk", durum: "Yaklaşıyor" },
  { hat: "Ç11", guzergah: "Esenler - İskele - Kampüs", sure: "5 dk", durum: "Durakta" },
  { hat: "Ç3", guzergah: "Kepez - Hastane - Kampüs", sure: "20 dk", durum: "Yolda" },
  { hat: "Ç8", guzergah: "Sanayi - İskele - Hastane", sure: "12 dk", durum: "Yaklaşıyor" },
];
