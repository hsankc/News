import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-red-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1 border-r border-gray-800 pr-6">
            <Link href="/" className="inline-flex flex-col mb-6">
              <span className="font-extrabold text-3xl text-white leading-none">ÇANAKKALE</span>
              <span className="font-medium text-base text-red-500 tracking-[0.2em] leading-none mt-1">HABER</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Çanakkale ve ilçelerinin en güvenilir, tarafsız ve güncel haber kaynağı. Bölgenin nabzını tutmaya devam ediyoruz.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Kategoriler
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/gundem" className="hover:text-red-400 transition-colors">Gündem</Link></li>
              <li><Link href="/yerel" className="hover:text-red-400 transition-colors">Yerel Haberler</Link></li>
              <li><Link href="/asayis" className="hover:text-red-400 transition-colors">Asayiş</Link></li>
              <li><Link href="/spor" className="hover:text-red-400 transition-colors">Spor</Link></li>
              <li><Link href="/politika" className="hover:text-red-400 transition-colors">Politika</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Kurumsal
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/kunye" className="hover:text-red-400 transition-colors">Künye</Link></li>
              <li><Link href="/iletisim" className="hover:text-red-400 transition-colors">İletişim</Link></li>
              <li><Link href="/gizlilik" className="hover:text-red-400 transition-colors">Gizlilik İlkeleri</Link></li>
              <li><Link href="/cerez" className="hover:text-red-400 transition-colors">Çerez Politikası</Link></li>
              <li><Link href="/yayin-ilkeleri" className="hover:text-red-400 transition-colors">Yayın İlkeleri</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Bize Ulaşın
            </h3>
            <div className="text-sm space-y-4 text-gray-400">
              <p>Çanakkale Merkez, Türkiye</p>
              <p>Email: <a href="mailto:info@canakkalehaber.com" className="text-gray-300 hover:text-white">info@canakkalehaber.com</a></p>
              <p>Tel: <a href="tel:+902861234567" className="text-gray-300 hover:text-white">+90 (286) 123 45 67</a></p>
              
              <div className="pt-4 flex gap-4">
                {/* Social Placeholders */}
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all cursor-pointer">
                  f
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all cursor-pointer">
                  X
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all cursor-pointer">
                  in
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Çanakkale Haber. Tüm hakları saklıdır. İçerikler kaynak gösterilmeden kullanılamaz.</p>
        </div>
      </div>
    </footer>
  );
}
