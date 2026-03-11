export const categories = [
  { id: 'gundem', name: 'Gündem', href: '/kategori/gundem' },
  { id: 'yerel', name: 'Yerel', href: '/kategori/yerel' },
  { id: 'asayis', name: 'Asayiş', href: '/kategori/asayis' },
  { id: 'spor', name: 'Spor', href: '/kategori/spor' },
  { id: 'politika', name: 'Politika', href: '/kategori/politika' },
  { id: 'kultur-sanat', name: 'Kültür Sanat', href: '/kategori/kultur-sanat' },
  { id: 'dunya', name: 'Dünya', href: '/kategori/dunya' },
];

export const breakingNews = [
  "Çanakkale Boğazı'nda gemi trafiği çift yönlü askıya alındı.",
  "Kepez'de yeni sosyal yaşam projesinin temelleri atıldı.",
  "ÇOMÜ'de yapay zeka araştırma merkezi açılıyor.",
  "Meteoroloji'den Çanakkale ve çevre iller için fırtına uyarısı."
];

export const heroNews = [
  {
    id: 1,
    title: "1915 Çanakkale Köprüsü'nde Yeni Vizyon Işıklandırması",
    summary: "Dünyanın en uzun orta açıklıklı asma köprüsü olan 1915 Çanakkale Köprüsü, Cumhuriyetimizin yeni yılına özel ışıklandırmasıyla göz kamaştırıyor.",
    image: "/bridge.png",
    category: "Gündem",
    date: "11 Mart 2026",
    isMain: true,
  },
  {
    id: 2,
    title: "Troya Müzesi'ne Avrupa'dan Büyük Ödül",
    summary: "Çanakkale Troya Müzesi, Avrupa Yılın Müzesi Ödülleri'nde özel takdire layık görüldü.",
    image: "/museum.png",
    category: "Kültür Sanat",
    date: "11 Mart 2026",
    isMain: false,
  },
  {
    id: 3,
    title: "Gelibolu Maratunu İçin Kayıtlar Başladı",
    summary: "Tarihi Gelibolu Yarımadasında düzenlenecek olan uluslararası maraton için geri sayım başladı.",
    image: "/maraton.png",
    category: "Spor",
    date: "11 Mart 2026",
    isMain: false,
  }
];

export const latestNews = [
  {
    id: 4,
    title: "Çanakkale Belediyesi'nden Yeni Toplu Taşıma Düzenlemesi",
    summary: "Şehir içi ulaşımı rahatlatmayı hedefleyen yeni hatlar pazartesi gününden itibaren devreye giriyor.",
    image: "/transport.png",
    category: "Yerel",
    date: "10 Mart 2026",
  },
  {
    id: 5,
    title: "Biga OSB'ye Yabancı Yatırımcı İlgisi",
    summary: "Biga Organize Sanayi Bölgesinde yeni kurulacak fabrika ile 500 kişiye istihdam sağlanacağı açıklandı.",
    image: "/factory.png",
    category: "Ekonomi",
    date: "10 Mart 2026",
  },
  {
    id: 6,
    title: "Çanakkale'de Trafik Denetimleri Sıkılaştırıldı",
    summary: "İl Emniyet Müdürlüğü ekipleri tarafından yapılan asayiş ve trafik uygulamalarında yüzlerce araç kontrol edildi.",
    image: "/police.png",
    category: "Asayiş",
    date: "9 Mart 2026",
  },
  {
    id: 7,
    title: "Kordon Boyunda Bahar Şenliği Coşkusu",
    summary: "Havaların ısınmasıyla beraber kordon boyunda düzenlenen bahar etkinlikleri vatandaşlardan yoğun ilgi gördü.",
    image: "/park.png",
    category: "Genel",
    date: "9 Mart 2026",
  }
];

export const columnists = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    title: "Çanakkale'nin Geleceği ve Turizm",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    name: "Ayşe Demir",
    title: "Ege Kıvılcımı: Gastronomi Durakları",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    name: "Mehmet Kaya",
    title: "Yerel Siyasetin Nabzı",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 4,
    name: "Zeynep Çelik",
    title: "Kültür Sanatın Başkenti Çanakkale",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
];

export const galleryItems = [
  {
    id: 1,
    title: "Çanakkale Gece Manzaraları",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=400",
    type: "photo",
  },
  {
    id: 2,
    title: "1915 Köprüsü İnşaat Süreci",
    image: "https://images.unsplash.com/photo-1449156059431-787c5b763b14?auto=format&fit=crop&q=80&w=400",
    type: "video",
  },
  {
    id: 3,
    title: "Assos Antik Kenti",
    image: "https://images.unsplash.com/photo-1516483642144-73862217833a?auto=format&fit=crop&q=80&w=400",
    type: "photo",
  },
  {
    id: 4,
    title: "Aynalı Çarşı Yenileme",
    image: "https://images.unsplash.com/photo-1555392859-5b1b34ad7b3d?auto=format&fit=crop&q=80&w=400",
    type: "photo",
  },
];

export const authors = columnists.map(c => ({
  ...c,
  role: "Köşe Yazarı",
  lastArticle: c.title
}));

export const gallery = galleryItems;
