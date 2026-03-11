import HeroSection from '@/components/news/HeroSection';
import CategorySection from '@/components/news/CategorySection';
import ColumnistsSection from '@/components/news/ColumnistsSection';
import GallerySection from '@/components/news/GallerySection';
import SonEklenenler from '@/components/news/SonEklenenler';
import ServicesBar from '@/components/news/ServicesBar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      
      <div className="py-3">
        <ServicesBar />
      </div>
      
      <CategorySection categoryName="Son Haberler" />

      <SonEklenenler />
      
      <ColumnistsSection />
      
      <GallerySection />
    </main>
  );
}
