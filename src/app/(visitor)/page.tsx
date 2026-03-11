import HeroSection from '@/components/news/HeroSection';
import CategorySection from '@/components/news/CategorySection';
import ColumnistsSection from '@/components/news/ColumnistsSection';
import GallerySection from '@/components/news/GallerySection';
import Ticker from '@/components/ui/Ticker';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      
      <div className="py-2"></div>
      
      <CategorySection categoryName="Son Haberler" />
      
      <ColumnistsSection />
      
      <CategorySection categoryName="Gündem" />
      <CategorySection categoryName="Çanakkale Yerel" />
      
      <GallerySection />

      {/* Banner Reklam Alanı (Placeholder) */}
      <section className="py-8 container mx-auto px-4">
        <div className="w-full h-32 md:h-48 bg-gray-200 flex items-center justify-center border border-dashed border-gray-400 rounded-lg text-gray-500 font-medium">
          Reklam Alanı Formatı (728x90 veya uyarlanabilir)
        </div>
      </section>

      <CategorySection categoryName="Spor" />
    </main>
  );
}
