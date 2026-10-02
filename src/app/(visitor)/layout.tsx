import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getLiveData } from '@/lib/liveData';

export default async function VisitorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const live = await getLiveData();

  return (
    <>
      <Header live={live} />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </>
  );
}
