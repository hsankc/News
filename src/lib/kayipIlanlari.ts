// Kayıp (zayi) ilanları — demo veri, isimler uydurmadır.

export const ilanTipleri = [
  { id: 'ogrenci-kimligi', name: 'Öğrenci Kimliği' },
  { id: 'kimlik-karti', name: 'Kimlik Kartı' },
  { id: 'surucu-belgesi', name: 'Sürücü Belgesi' },
  { id: 'arac-ruhsati', name: 'Araç Ruhsatı' },
  { id: 'tekne-ruhsati', name: 'Tekne Ruhsatı' },
  { id: 'pasaport', name: 'Pasaport' },
  { id: 'diploma', name: 'Diploma' },
  { id: 'vergi-levhasi', name: 'Vergi Levhası' },
  { id: 'fatura', name: 'Fatura' },
  { id: 'kase', name: 'Kaşe' },
] as const;

export type IlanTipi = (typeof ilanTipleri)[number]['id'];

export const bolgeler = [
  'Merkez', 'Ayvacık', 'Bayramiç', 'Biga', 'Bozcaada', 'Çan',
  'Eceabat', 'Ezine', 'Gelibolu', 'Gökçeada', 'Lapseki', 'Yenice',
];

export type KayipIlani = {
  id: string;
  tarih: string; // YYYY-MM-DD
  metin: string;
  tip: IlanTipi;
  bolge: string;
};

export const ilanTipiAdi = (tip: IlanTipi) => ilanTipleri.find(t => t.id === tip)?.name ?? tip;

// Tarih ve saat dilimine bağlı kaymayı önlemek için elle biçimlenir: 2026-10-02 -> 02.10.2026
export const formatTarih = (tarih: string) => tarih.split('-').reverse().join('.');

const seciliIlanlar: KayipIlani[] = [
  { id: 'k1', tarih: '2026-10-02', tip: 'ogrenci-kimligi', bolge: 'Merkez', metin: 'Çanakkale Onsekiz Mart Üniversitesi öğrenci kimliğimi kaybettim. Hükümsüzdür. Mert Yıldız' },
  { id: 'k2', tarih: '2026-10-01', tip: 'surucu-belgesi', bolge: 'Biga', metin: 'Sürücü belgemi kaybettim. Hükümsüzdür. Zeynep Kara' },
  { id: 'k3', tarih: '2026-09-30', tip: 'tekne-ruhsati', bolge: 'Gökçeada', metin: 'Kuzu Limanı\'na kayıtlı balıkçı teknemin ruhsatını kaybettim. Hükümsüzdür. Hüseyin Ateş' },
  { id: 'k4', tarih: '2026-09-29', tip: 'kimlik-karti', bolge: 'Gelibolu', metin: 'T.C. kimlik kartımı kaybettim. Hükümsüzdür. Emre Aydın' },
  { id: 'k5', tarih: '2026-09-27', tip: 'vergi-levhasi', bolge: 'Merkez', metin: 'Kordon Gıda Ltd. Şti.\'ne ait vergi levhası kaybolmuştur. Hükümsüzdür.' },
  { id: 'k23', tarih: '2026-09-25', tip: 'ogrenci-kimligi', bolge: 'Merkez', metin: 'Çanakkale Onsekiz Mart Üniversitesi öğrenci kimlik kartımı kaybettim. Hükümsüzdür. Hasan Kaşıkcı' },
  { id: 'k6', tarih: '2026-09-26', tip: 'ogrenci-kimligi', bolge: 'Biga', metin: 'ÇOMÜ Biga İktisadi ve İdari Bilimler Fakültesi öğrenci kimliğimi kaybettim. Hükümsüzdür. Selin Koç' },
  { id: 'k7', tarih: '2026-09-24', tip: 'arac-ruhsati', bolge: 'Çan', metin: '17 plakalı aracıma ait ruhsatı kaybettim. Hükümsüzdür. Burak Şahin' },
  { id: 'k8', tarih: '2026-09-22', tip: 'diploma', bolge: 'Ezine', metin: 'Ezine Anadolu Lisesi\'nden 2015 yılında aldığım lise diplomamı kaybettim. Hükümsüzdür. Elif Çetin' },
  { id: 'k9', tarih: '2026-09-20', tip: 'pasaport', bolge: 'Merkez', metin: 'Umuma mahsus pasaportumu kaybettim. Hükümsüzdür. Can Öztürk' },
  { id: 'k10', tarih: '2026-09-18', tip: 'kase', bolge: 'Lapseki', metin: 'Lapseki Tarım Ürünleri Kooperatifi\'ne ait kaşe kaybolmuştur. Hükümsüzdür.' },
  { id: 'k11', tarih: '2026-09-15', tip: 'ogrenci-kimligi', bolge: 'Merkez', metin: 'ÇOMÜ Tıp Fakültesi öğrenci kimliğimi kaybettim. Hükümsüzdür. Deniz Arslan' },
  { id: 'k12', tarih: '2026-09-12', tip: 'fatura', bolge: 'Bayramiç', metin: 'Bayramiç Elma Pazarlama\'ya ait 0001-0050 sıra numaralı fatura koçanı kaybolmuştur. Hükümsüzdür.' },
  { id: 'k13', tarih: '2026-09-10', tip: 'surucu-belgesi', bolge: 'Ayvacık', metin: 'B sınıfı sürücü belgemi Assos\'ta kaybettim. Hükümsüzdür. Ayşe Polat' },
  { id: 'k14', tarih: '2026-09-07', tip: 'kimlik-karti', bolge: 'Eceabat', metin: 'Feribot iskelesinde kimlik kartımı kaybettim. Hükümsüzdür. Oğuz Demirtaş' },
  { id: 'k15', tarih: '2026-09-04', tip: 'ogrenci-kimligi', bolge: 'Çan', metin: 'ÇOMÜ Çan Uygulamalı Bilimler Yüksekokulu öğrenci kimliğimi kaybettim. Hükümsüzdür. Gizem Ateş' },
  { id: 'k16', tarih: '2026-09-01', tip: 'arac-ruhsati', bolge: 'Merkez', metin: 'Motosikletime ait araç ruhsatını kaybettim. Hükümsüzdür. Kaan Erdem' },
  { id: 'k17', tarih: '2026-08-28', tip: 'tekne-ruhsati', bolge: 'Bozcaada', metin: 'Gezi teknemize ait ruhsat ve bağlama kütüğü belgesini kaybettim. Hükümsüzdür. Ece Tunç' },
  { id: 'k18', tarih: '2026-08-25', tip: 'diploma', bolge: 'Merkez', metin: 'Çanakkale Onsekiz Mart Üniversitesi lisans diplomamı kaybettim. Hükümsüzdür. Serkan Yalçın' },
  { id: 'k19', tarih: '2026-08-21', tip: 'vergi-levhasi', bolge: 'Biga', metin: 'Biga Yapı Malzemeleri\'ne ait vergi levhası kaybolmuştur. Hükümsüzdür.' },
  { id: 'k20', tarih: '2026-08-18', tip: 'ogrenci-kimligi', bolge: 'Gelibolu', metin: 'ÇOMÜ Gelibolu Piri Reis MYO öğrenci kimliğimi kaybettim. Hükümsüzdür. Merve Doğan' },
  { id: 'k21', tarih: '2026-08-14', tip: 'kimlik-karti', bolge: 'Yenice', metin: 'T.C. kimlik kartımı kaybettim. Hükümsüzdür. İsmail Kurt' },
  { id: 'k22', tarih: '2026-08-10', tip: 'pasaport', bolge: 'Gökçeada', metin: 'Hususi pasaportumu kaybettim. Hükümsüzdür. Nihal Akın' },
];

// --- Otomatik üretilen ilanlar ---------------------------------------------
// Sabit tohumlu üretici: sunucu ve tarayıcı her seferinde aynı ilanları üretir (hydration uyumu)
const mulberry32 = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const rand = mulberry32(1915);
const pick = <T>(items: readonly T[]): T => items[Math.floor(rand() * items.length)];
const between = (min: number, max: number) => min + Math.floor(rand() * (max - min + 1));
const weighted = <T>(entries: readonly (readonly [T, number])[]): T => {
  let r = rand() * entries.reduce((sum, [, w]) => sum + w, 0);
  for (const [value, w] of entries) if ((r -= w) < 0) return value;
  return entries[entries.length - 1][0];
};

// Okul adına ayrılma eki: Lisesi'nden, Yüksekokulu'ndan
const den = (s: string) => `${s}'${/[aıou]$/.test(s) ? 'ndan' : 'nden'}`;

const erkekAdlari = ['Ahmet', 'Mehmet', 'Mustafa', 'Ali', 'Hüseyin', 'Hasan', 'İbrahim', 'Murat', 'Emre', 'Burak', 'Can', 'Mert', 'Kaan', 'Oğuzhan', 'Furkan', 'Yusuf', 'Ömer', 'Serkan', 'Tolga', 'Barış', 'Onur', 'Cem', 'Eren', 'Arda', 'Berk', 'Alper', 'Volkan', 'Uğur', 'Halil', 'Recep', 'Kemal', 'Sinan', 'Gökhan', 'Umut', 'Batuhan', 'Enes', 'Yiğit', 'Doğukan', 'Taha', 'Kerem', 'Osman', 'Ramazan', 'Erkan', 'Levent', 'Cengiz'];
const kadinAdlari = ['Ayşe', 'Fatma', 'Zeynep', 'Elif', 'Merve', 'Büşra', 'Esra', 'Selin', 'Ece', 'Deniz', 'Gizem', 'Derya', 'Seda', 'Hande', 'İrem', 'Dilara', 'Melike', 'Buse', 'Sena', 'Nur', 'Kübra', 'Tuğba', 'Özge', 'Pınar', 'Cansu', 'Aslı', 'Ebru', 'Emine', 'Hatice', 'Sevgi', 'Nihal', 'Gamze', 'Yasemin', 'Ceren', 'Damla', 'Beyza', 'Ezgi', 'Simge', 'Duygu', 'Şeyma', 'Hülya', 'Songül', 'Filiz', 'Gülay', 'Meltem'];
const soyadlari = ['Yılmaz', 'Kaya', 'Demir', 'Çelik', 'Şahin', 'Yıldız', 'Yıldırım', 'Öztürk', 'Aydın', 'Özdemir', 'Arslan', 'Doğan', 'Kılıç', 'Aslan', 'Çetin', 'Kara', 'Koç', 'Kurt', 'Özkan', 'Şimşek', 'Polat', 'Erdoğan', 'Korkmaz', 'Karaca', 'Güneş', 'Aksoy', 'Bulut', 'Tekin', 'Ateş', 'Akın', 'Erdem', 'Yalçın', 'Güler', 'Uçar', 'Turan', 'Sarı', 'Bozkurt', 'Tunç', 'Keskin', 'Aktaş', 'Kalkan', 'Ekinci', 'Avcı', 'Tuncer', 'Duman', 'Karataş', 'Coşkun', 'Uysal', 'Gündüz', 'Başaran', 'Eren', 'Altun', 'Işık', 'Toprak', 'Ergün', 'Bayram', 'Sönmez', 'Uzun', 'Topal', 'Çakır', 'Akgül', 'Ekici', 'Yavuz', 'Bilgin', 'Oral'];

const adSoyad = () => {
  const adlar = rand() < 0.5 ? erkekAdlari : kadinAdlari;
  const ilk = pick(adlar);
  const ikinci = pick(adlar);
  const ad = rand() < 0.12 && ikinci !== ilk ? `${ilk} ${ikinci}` : ilk;
  const soyad = pick(soyadlari);
  // Gazete ilanlarında soyad sık sık büyük harfle yazılır
  return `${ad} ${rand() < 0.3 ? soyad.toLocaleUpperCase('tr') : soyad}`;
};

const bolgeAgirliklari = [
  ['Merkez', 38], ['Biga', 12], ['Çan', 7], ['Gelibolu', 7], ['Ezine', 6], ['Ayvacık', 5],
  ['Bayramiç', 5], ['Lapseki', 5], ['Yenice', 4], ['Eceabat', 4], ['Gökçeada', 4], ['Bozcaada', 3],
] as const;
const rastgeleBolge = (): string => weighted(bolgeAgirliklari);

type Yer = readonly [ad: string, bolge: string];

const fakulteler: Yer[] = [
  ['Çanakkale Onsekiz Mart Üniversitesi', 'Merkez'],
  ['ÇOMÜ Tıp Fakültesi', 'Merkez'],
  ['ÇOMÜ Mühendislik Fakültesi', 'Merkez'],
  ['ÇOMÜ Eğitim Fakültesi', 'Merkez'],
  ['ÇOMÜ Fen Fakültesi', 'Merkez'],
  ['ÇOMÜ Turizm Fakültesi', 'Merkez'],
  ['ÇOMÜ Ziraat Fakültesi', 'Merkez'],
  ['ÇOMÜ İlahiyat Fakültesi', 'Merkez'],
  ['ÇOMÜ Güzel Sanatlar Fakültesi', 'Merkez'],
  ['ÇOMÜ Spor Bilimleri Fakültesi', 'Merkez'],
  ['ÇOMÜ Deniz Bilimleri ve Teknolojisi Fakültesi', 'Merkez'],
  ['ÇOMÜ Biga İktisadi ve İdari Bilimler Fakültesi', 'Biga'],
];
const meslekYuksekokullari: Yer[] = [
  ['ÇOMÜ Biga Meslek Yüksekokulu', 'Biga'],
  ['ÇOMÜ Gelibolu Piri Reis Meslek Yüksekokulu', 'Gelibolu'],
  ['ÇOMÜ Çan Meslek Yüksekokulu', 'Çan'],
  ['ÇOMÜ Lapseki Meslek Yüksekokulu', 'Lapseki'],
  ['ÇOMÜ Ezine Meslek Yüksekokulu', 'Ezine'],
  ['ÇOMÜ Bayramiç Meslek Yüksekokulu', 'Bayramiç'],
  ['ÇOMÜ Yenice Meslek Yüksekokulu', 'Yenice'],
  ['ÇOMÜ Ayvacık Meslek Yüksekokulu', 'Ayvacık'],
  ['ÇOMÜ Gökçeada Uygulamalı Bilimler Yüksekokulu', 'Gökçeada'],
];
const liseler: Yer[] = [
  ['Çanakkale Anadolu Lisesi', 'Merkez'],
  ['Çanakkale Fen Lisesi', 'Merkez'],
  ['Çanakkale Lisesi', 'Merkez'],
  ['Kepez Anadolu Lisesi', 'Merkez'],
  ['Çanakkale Mesleki ve Teknik Anadolu Lisesi', 'Merkez'],
  ...bolgeler.filter(b => b !== 'Merkez').map((b): Yer => [`${b} Anadolu Lisesi`, b]),
];

const kayipYerleri = ['Kordon boyunda', 'Feribot iskelesinde', 'Çarşı içinde', 'Otogarda', 'Pazar yerinde', 'Hastane çevresinde', 'Otobüste', 'Sahilde'];
const ehliyetSiniflari = ['B', 'B', 'B', 'B', 'B', 'A2', 'A', 'C', 'CE', 'D', 'B ve A2'];
const araclar = ['otomobilime', 'otomobilime', 'otomobilime', 'motosikletime', 'kamyonetime', 'traktörüme', 'minibüsüme'];
const PLAKA_HARFLERI = 'ABCDEFGHJKLMNPRSTUVYZ'.split('');
const plaka = () => {
  const harfSayisi = between(1, 3);
  const harfler = Array.from({ length: harfSayisi }, () => pick(PLAKA_HARFLERI)).join('');
  const rakam = harfSayisi === 1 ? between(1000, 9999) : harfSayisi === 2 ? between(100, 9999) : between(10, 999);
  return `17 ${harfler} ${rakam}`;
};

const limanlar: Yer[] = [
  ['Kuzu Limanı', 'Gökçeada'], ['Bozcaada Limanı', 'Bozcaada'], ['Çanakkale Balıkçı Barınağı', 'Merkez'],
  ['Kabatepe Limanı', 'Eceabat'], ['Gelibolu Balıkçı Barınağı', 'Gelibolu'], ['Assos Limanı', 'Ayvacık'],
  ['Küçükkuyu Limanı', 'Ayvacık'], ['Lapseki Balıkçı Barınağı', 'Lapseki'], ['Karabiga Balıkçı Barınağı', 'Biga'],
];
const tekneAdlari = ['Deniz Yıldızı', 'Poyraz', 'Lodos', 'Yakamoz', 'Martı', 'Kaptan Ali', 'Hamsi', 'Mavi Rüya', 'Ege Yıldızı', 'Kılıç', 'Dardanel', 'Akıncı'];
const tekneTurleri = ['balıkçı', 'balıkçı', 'gezi', 'özel'];

const firmaOnekleri = ['Kordon', 'Truva', 'Boğaz', 'Dardanel', 'Assos', 'Troya', 'Kepez', 'Kaz Dağı', 'Ege', 'Marmara', 'Anafartalar', 'Kilitbahir', 'Gökçe', 'İda', 'Karabiga', 'Güzelyalı'];
const sektorler = ['Gıda', 'İnşaat', 'Turizm', 'Otomotiv', 'Tarım Ürünleri', 'Yapı Malzemeleri', 'Nakliyat', 'Tekstil', 'Elektrik', 'Mobilya', 'Zeytincilik', 'Su Ürünleri', 'Lojistik', 'Akaryakıt', 'Peyzaj'];
const sirketTurleri = ['Ltd. Şti.', 'Ltd. Şti.', 'San. ve Tic. Ltd. Şti.', 'A.Ş.'];
const isletmeTurleri = ['Market', 'Kafe', 'Fırın', 'Kasap', 'Berber', 'Kuaför', 'Lokanta', 'Pansiyon', 'Balıkçısı', 'Oto Yıkama', 'Emlak', 'Kırtasiye', 'Tuhafiye', 'Nalbur'];
const firma = () => `${pick(firmaOnekleri)} ${pick(sektorler)} ${pick(sirketTurleri)}`;
const isletme = () => `${pick(firmaOnekleri)} ${pick(isletmeTurleri)}`;
const kocanNo = () => {
  const n = between(1, 400) * 50 + 1;
  return `${n}-${n + 49}`;
};

type Uretici = () => { metin: string; bolge: string };

const ureticiler: Record<IlanTipi, Uretici> = {
  'kimlik-karti': () => ({
    bolge: rastgeleBolge(),
    metin: pick([
      () => `T.C. kimlik kartımı kaybettim. Hükümsüzdür. ${adSoyad()}`,
      () => `Nüfus cüzdanımı kaybettim. Hükümsüzdür. ${adSoyad()}`,
      () => `${pick(kayipYerleri)} T.C. kimlik kartımı kaybettim. Hükümsüzdür. ${adSoyad()}`,
      () => `Cüzdanımla birlikte T.C. kimlik kartımı kaybettim. Hükümsüzdür. ${adSoyad()}`,
      () => `T.C. kimlik kartım kaybolmuştur. Hükümsüzdür. ${adSoyad()}`,
    ])(),
  }),
  'surucu-belgesi': () => ({
    bolge: rastgeleBolge(),
    metin: pick([
      () => `${pick(ehliyetSiniflari)} sınıfı sürücü belgemi kaybettim. Hükümsüzdür. ${adSoyad()}`,
      () => `Sürücü belgemi kaybettim. Hükümsüzdür. ${adSoyad()}`,
      () => `Cüzdanımla birlikte sürücü belgemi kaybettim. Hükümsüzdür. ${adSoyad()}`,
      () => `${pick(kayipYerleri)} ${pick(ehliyetSiniflari)} sınıfı sürücü belgemi kaybettim. Hükümsüzdür. ${adSoyad()}`,
      () => `Sürücü belgem kaybolmuştur. Hükümsüzdür. ${adSoyad()}`,
      () => `T.C. kimlik kartımı ve ${pick(ehliyetSiniflari)} sınıfı sürücü belgemi kaybettim. Hükümsüzdür. ${adSoyad()}`,
    ])(),
  }),
  'ogrenci-kimligi': () => {
    const [okul, bolge] = weighted<Yer>([
      [pick(fakulteler), 6],
      [pick(meslekYuksekokullari), 3],
      [pick(liseler), 2],
      [['Anadolu Üniversitesi Açıköğretim Fakültesi', rastgeleBolge()], 1],
    ]);
    const no = `${between(19, 26)}${between(1000000, 9999999)}`;
    return {
      bolge,
      metin: pick([
        () => `${okul} öğrenci kimliğimi kaybettim. Hükümsüzdür. ${adSoyad()}`,
        () => `${okul} öğrenci kimlik kartımı kaybettim. Hükümsüzdür. ${adSoyad()}`,
        () => `${okul} ${no} numaralı öğrenci kimliğimi kaybettim. Hükümsüzdür. ${adSoyad()}`,
        () => `${okul} öğrenci kimliğim kaybolmuştur. Hükümsüzdür. ${adSoyad()}`,
      ])(),
    };
  },
  'arac-ruhsati': () => ({
    bolge: rastgeleBolge(),
    metin: pick([
      () => `17 plakalı ${pick(araclar)} ait araç ruhsatını kaybettim. Hükümsüzdür. ${adSoyad()}`,
      () => `${plaka()} plakalı ${pick(araclar)} ait ruhsatı kaybettim. Hükümsüzdür. ${adSoyad()}`,
      () => `${plaka()} plakalı aracımın tescil belgesini (ruhsat) kaybettim. Hükümsüzdür. ${adSoyad()}`,
      () => `Adıma kayıtlı ${plaka()} plakalı ${pick(araclar)} ait ruhsatı kaybettim. Hükümsüzdür. ${adSoyad()}`,
    ])(),
  }),
  'tekne-ruhsati': () => {
    const [liman, bolge] = pick(limanlar);
    return {
      bolge,
      metin: pick([
        () => `${liman}'na kayıtlı ${pick(tekneTurleri)} teknemin ruhsatını kaybettim. Hükümsüzdür. ${adSoyad()}`,
        () => `${liman}'na bağlı "${pick(tekneAdlari)}" isimli ${pick(tekneTurleri)} teknemin ruhsatını kaybettim. Hükümsüzdür. ${adSoyad()}`,
        () => `"${pick(tekneAdlari)}" isimli teknemize ait bağlama kütüğü ruhsatnamesini kaybettim. Hükümsüzdür. ${adSoyad()}`,
      ])(),
    };
  },
  pasaport: () => ({
    bolge: rastgeleBolge(),
    metin: `${pick(['Umuma mahsus pasaportumu', 'Pasaportumu', 'Hususi pasaportumu', 'Yurt dışı dönüşü pasaportumu'])} kaybettim. Hükümsüzdür. ${adSoyad()}`,
  }),
  diploma: () => {
    const yil = between(1988, 2024);
    const tur = weighted([['lise', 5], ['lisans', 3], ['onlisans', 2]] as const);
    const [okul, bolge] = pick(tur === 'lise' ? liseler : tur === 'lisans' ? fakulteler : meslekYuksekokullari);
    const metin =
      tur === 'lise'
        ? `${den(okul)} ${yil} yılında aldığım lise diplomamı kaybettim. Hükümsüzdür. ${adSoyad()}`
        : tur === 'lisans'
          ? `${den(okul)} ${yil} yılında aldığım lisans diplomamı kaybettim. Hükümsüzdür. ${adSoyad()}`
          : `${den(okul)} aldığım önlisans diplomamı kaybettim. Hükümsüzdür. ${adSoyad()}`;
    return { metin, bolge };
  },
  'vergi-levhasi': () => ({
    bolge: rastgeleBolge(),
    metin: pick([
      () => `${firma()}'ne ait vergi levhası kaybolmuştur. Hükümsüzdür.`,
      () => `${isletme()} işletmeme ait vergi levhasını kaybettim. Hükümsüzdür. ${adSoyad()}`,
      () => `Adıma kayıtlı vergi levhasını kaybettim. Hükümsüzdür. ${adSoyad()}`,
    ])(),
  }),
  fatura: () => ({
    bolge: rastgeleBolge(),
    metin: pick([
      () => `${firma()}'ne ait ${pick(['A', 'B', 'C', 'D'])} seri ${kocanNo()} sıra numaralı fatura koçanı kaybolmuştur. Hükümsüzdür.`,
      () => `${firma()}'ne ait ${kocanNo()} sıra numaralı sevk irsaliyesi koçanı kaybolmuştur. Hükümsüzdür.`,
      () => `${isletme()} işletmesine ait ${kocanNo()} sıra numaralı fatura koçanı kaybolmuştur. Hükümsüzdür.`,
    ])(),
  }),
  kase: () => ({
    bolge: rastgeleBolge(),
    metin: pick([
      () => `${firma()}'ne ait kaşe kaybolmuştur. Hükümsüzdür.`,
      () => `${isletme()} işletmeme ait kaşemi kaybettim. Hükümsüzdür. ${adSoyad()}`,
      () => `Şahsıma ait kaşemi kaybettim. Hükümsüzdür. ${adSoyad()}`,
    ])(),
  }),
};

// Gerçekçi dağılım: en çok kimlik kartı ve ehliyet kaybolur
const tipAgirliklari: readonly (readonly [IlanTipi, number])[] = [
  ['kimlik-karti', 30], ['surucu-belgesi', 28], ['ogrenci-kimligi', 6], ['arac-ruhsati', 10], ['diploma', 6],
  ['pasaport', 5], ['vergi-levhasi', 4], ['fatura', 4], ['kase', 3], ['tekne-ruhsati', 3],
];

const URETILECEK_ILAN = 300;
const BASLANGIC = Date.UTC(2026, 9, 2);
const GUN_MS = 24 * 60 * 60 * 1000;

const uretilenIlanlar: KayipIlani[] = [];
for (let i = 0, gunOnce = 0; i < URETILECEK_ILAN; i++) {
  if (rand() < 0.4) gunOnce++; // günde ortalama 2-3 ilan
  const tip = weighted(tipAgirliklari);
  uretilenIlanlar.push({
    id: `g${i + 1}`,
    tarih: new Date(BASLANGIC - gunOnce * GUN_MS).toISOString().slice(0, 10),
    tip,
    ...ureticiler[tip](),
  });
}

export const kayipIlanlari: KayipIlani[] = [...seciliIlanlar, ...uretilenIlanlar].sort((a, b) =>
  b.tarih.localeCompare(a.tarih)
);
