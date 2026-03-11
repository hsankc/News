"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Demo Amaçlı Basit Kontrol
    setTimeout(() => {
      if (email === 'admin@canakkale.com' && password === '123456') {
        localStorage.setItem('isAdminLoggedIn', 'true');
        router.push('/admin');
      } else {
        setError('E-posta veya şifre hatalı. (Demo: admin@canakkale.com / 123456)');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo Area */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex flex-col">
            <span className="text-4xl font-black text-white tracking-tighter">TRUVA</span>
            <span className="text-sm font-bold text-red-500 tracking-[0.4em] -mt-1 uppercase">Haber Yönetim</span>
          </Link>
          <p className="text-slate-400 mt-4 font-medium uppercase tracking-widest text-xs">Editör Girişi</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-8 md:p-12 relative border border-white/10">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-2xl flex items-center gap-3 text-sm font-bold animate-shake">
                <AlertCircle className="h-5 w-5 shrink-0" />
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">E-POSTA ADRESİ</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-red-500 transition-colors" />
                <input 
                  type="email" 
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-red-500 rounded-2xl py-4 pl-12 pr-4 outline-none font-bold text-slate-700 transition-all placeholder:text-slate-200"
                  placeholder="admin@canakkale.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">ŞİFRE</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-red-500 transition-colors" />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="123456"
                    required
                    className="w-full bg-slate-50 border-2 border-slate-100 focus:border-red-500 rounded-2xl px-6 py-4 pl-12 pr-4 text-xs font-bold text-slate-900 outline-none transition-all placeholder:text-slate-200"
                  />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-red-200 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  SİSTEME GİRİŞ YAP <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-50 text-center">
            <button type="button" className="text-slate-400 text-xs font-bold hover:text-slate-600 transition-colors uppercase tracking-widest">
              Şifremi Unuttum
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-slate-500 text-xs font-medium">
          © 2026 Truva Haber Portal • Tüm Hakları Saklıdır
        </p>
      </div>
    </div>
  );
}
