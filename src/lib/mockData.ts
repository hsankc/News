import { heroNews, latestNews } from './haberler';

export const categories = [
  { id: 'gundem', name: 'Gündem', href: '/kategori/gundem' },
  { id: 'yerel', name: 'Yerel', href: '/kategori/yerel' },
  { id: 'asayis', name: 'Asayiş', href: '/kategori/asayis' },
  { id: 'spor', name: 'Spor', href: '/kategori/spor' },
  { id: 'politika', name: 'Politika', href: '/kategori/politika' },
  { id: 'ekonomi', name: 'Ekonomi', href: '/kategori/ekonomi' },
  { id: 'kultur-sanat', name: 'Kültür Sanat', href: '/kategori/kultur-sanat' },
  { id: 'dunya', name: 'Dünya', href: '/kategori/dunya' },
];

export { heroNews, latestNews };

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

export const allNews = [...heroNews, ...latestNews];

export const getNewsById = (id: string | number) =>
  allNews.find(n => n.id.toString() === id.toString());

export const getCategoryBySlug = (slug: string) =>
  categories.find(c => c.id === slug);

export const getNewsByCategory = (categoryName: string) =>
  allNews.filter(n => n.category === categoryName);

export const searchNews = (query: string) => {
  const q = query.trim().toLocaleLowerCase('tr');
  if (!q) return [];
  return allNews.filter(n =>
    `${n.title} ${n.summary} ${n.category}`.toLocaleLowerCase('tr').includes(q)
  );
};

export const authors = columnists.map(c => ({
  ...c,
  role: "Köşe Yazarı",
  lastArticle: c.title
}));

export const gallery = galleryItems;
