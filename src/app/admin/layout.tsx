"use client";

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  Users, 
  Settings, 
  LogOut,
  Bell,
  Search,
  CheckCircle2,
  Menu,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [notification, setNotification] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Demo Auth Guard
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    router.push('/admin/login');
  };

  if (pathname === '/admin/login') return <>{children}</>;

  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/haberler', label: 'Haberler', icon: FileText },
    { href: '/admin/galeri', label: 'Medya / Galeri', icon: ImageIcon },
    { href: '/admin/yazarlar', label: 'Yazarlar', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-x-hidden relative">
      {/* Toast Notification Simulation */}
      {notification && (
        <div className="fixed top-24 right-8 z-[100] bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-4 animate-slide-in">
          <CheckCircle2 className="h-6 w-6 text-green-400" />
          <p className="font-bold text-sm tracking-widest uppercase">{notification}</p>
        </div>
      )}

      {/* Sidebar Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[70] transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <aside className={`bg-slate-900 text-white flex flex-col fixed inset-y-0 left-0 w-72 shadow-2xl z-[80] transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <Link href="/" className="flex flex-col group overflow-hidden whitespace-nowrap">
            <span className="text-2xl font-black text-white tracking-tighter group-hover:text-red-600 transition-colors italic">TRUVA</span>
            <span className="text-[10px] font-black text-red-600 tracking-[0.4em] -mt-1 uppercase">Haber Admin</span>
          </Link>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="p-3 hover:bg-white/10 rounded-2xl transition-colors text-slate-400 hover:text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-4 px-6 py-5 rounded-2xl transition-all group ${
                pathname === item.href 
                  ? 'bg-red-600 text-white shadow-xl shadow-red-900/40' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon className={`h-6 w-6 flex-shrink-0 ${pathname === item.href ? 'text-white' : 'group-hover:text-red-500'} transition-colors`} />
              <span className="font-black text-sm uppercase tracking-widest">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-6 space-y-2 border-t border-white/5 bg-black/20">
          <Link 
            href="/admin/ayarlar" 
            onClick={() => setIsSidebarOpen(false)}
            className={`flex items-center gap-4 px-6 py-5 rounded-2xl transition-all group ${pathname === '/admin/ayarlar' ? 'bg-red-600 text-white shadow-xl shadow-red-900/40' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <Settings className="h-6 w-6 group-hover:rotate-45 transition-transform" />
            <span className="font-black text-sm uppercase tracking-widest">Ayarlar</span>
          </Link>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-6 py-5 text-red-500 hover:bg-red-500/10 rounded-2xl transition-all group"
          >
            <LogOut className="h-6 w-6" />
            <span className="font-black text-sm uppercase tracking-widest">Çıkış Yap</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 w-full transition-all duration-300 ease-in-out">
        <header className="h-16 md:h-24 bg-white/90 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-4 md:px-12 sticky top-0 z-50">
          <div className="flex items-center gap-3 md:gap-8 flex-1">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 md:p-3 bg-slate-50 hover:bg-slate-900 text-slate-900 hover:text-white rounded-xl md:rounded-2xl transition-all shadow-sm active:scale-95 border border-slate-100 md:border-transparent"
            >
              <Menu className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            
            <div className="relative flex-1 max-w-xl">
              <Search className="h-4 w-4 md:h-5 md:w-5 absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-slate-300" />
              <input 
                type="text" 
                placeholder="Arama..." 
                className="w-full bg-slate-50/50 border-2 border-transparent focus:border-red-500 rounded-full pl-10 md:pl-24 pr-4 md:pr-8 py-2 md:py-5 text-[10px] md:text-sm font-bold text-slate-600 outline-none transition-all placeholder:text-slate-300" 
              />
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-8">
            <button className="relative p-2 text-slate-400 hover:text-red-600 transition-colors">
              <Bell className="h-5 w-5 md:h-6 md:w-6" />
              <span className="absolute top-1 md:top-2 right-1 md:right-2 w-3.5 h-3.5 md:w-5 md:h-5 bg-red-500 text-white text-[7px] md:text-[10px] font-black flex items-center justify-center rounded-full border border-white">3</span>
            </button>
            <div className="flex items-center gap-3 md:gap-4 pl-3 md:pl-8 border-l border-slate-100">
              <div className="text-right hidden lg:block">
                <p className="text-sm font-black text-slate-900 uppercase italic tracking-tighter">Hasan Yılmaz</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Baş Editör</p>
              </div>
              <div className="w-9 h-9 md:w-12 md:h-12 bg-red-600 text-white rounded-xl md:rounded-2xl flex items-center justify-center text-xs md:text-sm font-black shadow-lg shadow-red-100 active:scale-95 transition-transform cursor-pointer">HY</div>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-12 max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
