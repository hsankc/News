"use client";

import { useState } from 'react';

const burclar = [
  { name: "Koç", icon: "♈", date: "21 Mar - 19 Nis", yorum: "Bugün enerjiniz yüksek, yeni başlangıçlar için uygun bir gün." },
  { name: "Boğa", icon: "♉", date: "20 Nis - 20 May", yorum: "Maddi konularda dikkatli olun, beklenmedik gelişmeler kapıda." },
  { name: "İkizler", icon: "♊", date: "21 May - 20 Haz", yorum: "İletişim becerileriniz ön planda, sosyal çevreniz genişleyecek." },
  { name: "Yengeç", icon: "♋", date: "21 Haz - 22 Tem", yorum: "Aile ilişkilerinize önem verin, duygusal bağlar güçlenecek." },
  { name: "Aslan", icon: "♌", date: "23 Tem - 22 Ağu", yorum: "Liderlik özellikleriniz parıldıyor, cesaret gerektiren kararlar alabilirsiniz." },
  { name: "Başak", icon: "♍", date: "23 Ağu - 22 Eyl", yorum: "Detaylara dikkat edin, iş hayatında önemli fırsatlar doğacak." },
  { name: "Terazi", icon: "♎", date: "23 Eyl - 22 Eki", yorum: "Denge arayışınız sonuç verecek, ilişkilerde uyum artacak." },
  { name: "Akrep", icon: "♏", date: "23 Eki - 21 Kas", yorum: "Sezgileriniz güçlü, gizemli konulara ilgi artıyor." },
  { name: "Yay", icon: "♐", date: "22 Kas - 21 Ara", yorum: "Macera ve keşif ruhunuz harekete geçiyor, seyahat fırsatları var." },
  { name: "Oğlak", icon: "♑", date: "22 Ara - 19 Oca", yorum: "Kararlılığınız ödüllendirilecek, sabırlı olmaya devam edin." },
  { name: "Kova", icon: "♒", date: "20 Oca - 18 Şub", yorum: "Yenilikçi fikirleriniz ilgi görecek, farklı düşünün." },
  { name: "Balık", icon: "♓", date: "19 Şub - 20 Mar", yorum: "Hayalleriniz gerçekleşmeye yakın, sezgilerinize güvenin." },
];

export default function Burclar() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="py-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-black text-xl text-gray-900 italic tracking-tight uppercase">BURÇLAR</h2>
        </div>
        
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 md:gap-3">
            {burclar.map((burc, idx) => (
              <button
                key={burc.name}
                onClick={() => setSelected(selected === idx ? null : idx)}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl transition-all hover:scale-105 active:scale-95 ${
                  selected === idx 
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' 
                    : 'bg-gray-50 hover:bg-purple-50 text-gray-700'
                }`}
              >
                <span className="text-2xl md:text-3xl">{burc.icon}</span>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-wider">{burc.name}</span>
              </button>
            ))}
          </div>
          
          {selected !== null && (
            <div className="mt-4 p-5 bg-purple-50 rounded-2xl border border-purple-100 animate-fade-in">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{burclar[selected].icon}</span>
                <div>
                  <h3 className="font-black text-purple-900">{burclar[selected].name}</h3>
                  <p className="text-xs text-purple-500 font-medium">{burclar[selected].date}</p>
                </div>
              </div>
              <p className="text-sm text-purple-800 leading-relaxed">{burclar[selected].yorum}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
