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

export const kayipIlanlari: KayipIlani[] = [
  { id: 'k1', tarih: '2026-10-02', tip: 'ogrenci-kimligi', bolge: 'Merkez', metin: 'Çanakkale Onsekiz Mart Üniversitesi öğrenci kimliğimi kaybettim. Hükümsüzdür. Mert Yıldız' },
  { id: 'k2', tarih: '2026-10-01', tip: 'surucu-belgesi', bolge: 'Biga', metin: 'Sürücü belgemi kaybettim. Hükümsüzdür. Zeynep Kara' },
  { id: 'k3', tarih: '2026-09-30', tip: 'tekne-ruhsati', bolge: 'Gökçeada', metin: 'Kuzu Limanı\'na kayıtlı balıkçı teknemin ruhsatını kaybettim. Hükümsüzdür. Hüseyin Ateş' },
  { id: 'k4', tarih: '2026-09-29', tip: 'kimlik-karti', bolge: 'Gelibolu', metin: 'T.C. kimlik kartımı kaybettim. Hükümsüzdür. Emre Aydın' },
  { id: 'k5', tarih: '2026-09-27', tip: 'vergi-levhasi', bolge: 'Merkez', metin: 'Kordon Gıda Ltd. Şti.\'ne ait vergi levhası kaybolmuştur. Hükümsüzdür.' },
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
