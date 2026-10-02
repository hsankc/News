import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center bg-gray-50 px-4 py-24">
      <div className="text-center">
        <p className="text-7xl font-black text-red-600 tracking-tighter italic">404</p>
        <h1 className="mt-4 text-2xl font-black text-gray-900 uppercase tracking-tight">Sayfa bulunamadı</h1>
        <p className="mt-2 text-gray-500">Aradığınız haber veya sayfa kaldırılmış ya da hiç var olmamış olabilir.</p>
        <Link
          href="/"
          className="inline-block mt-8 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-600 transition-colors"
        >
          Anasayfaya Dön
        </Link>
      </div>
    </main>
  );
}
