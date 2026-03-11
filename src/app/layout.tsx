import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Truva Haber - Güncel, Haber, Son Dakika',
  description: "Truva Haber, Son Dakika Çanakkale Haberleri, Çanakkale'de ve ilçelerindeki güncel, gündem, siyaset, asayiş, spor haberlerinin güvenilir kaynağı.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
