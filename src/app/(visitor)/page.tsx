import HeroSection from '@/components/news/HeroSection';
import CategorySection from '@/components/news/CategorySection';
import ColumnistsSection from '@/components/news/ColumnistsSection';
import GallerySection from '@/components/news/GallerySection';
import SonEklenenler from '@/components/news/SonEklenenler';
import ServicesBar from '@/components/news/ServicesBar';
import SonKayipIlanlari from '@/components/ilan/SonKayipIlanlari';
import { getLiveData } from '@/lib/liveData';

export default async function Home() {
  const live = await getLiveData();

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />

      <div className="py-3">
        <ServicesBar live={live} />
      </div>
      
      <CategorySection categoryName="Son Haberler" />

      <SonEklenenler />

      <SonKayipIlanlari />

      <ColumnistsSection />
      
      <GallerySection />
    </main>
  );
}
