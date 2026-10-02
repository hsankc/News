import type { Metadata } from 'next';
import GallerySection from '@/components/news/GallerySection';

export const metadata: Metadata = { title: 'Foto & Video Galeri - Truva Haber' };

export default function GaleriPage() {
  return (
    <main className="min-h-screen bg-white pb-12">
      <GallerySection showAllLink={false} />
    </main>
  );
}
