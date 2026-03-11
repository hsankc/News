"use client";

const teams = [
  { pos: 1, name: "Galatasaray", logo: "🦁", o: 25, g: 19, m: 2, av: 41, p: 61 },
  { pos: 2, name: "Fenerbahçe", logo: "🟡", o: 25, g: 16, m: 0, av: 32, p: 57 },
  { pos: 3, name: "Trabzonspor", logo: "🔵", o: 25, g: 16, m: 3, av: 22, p: 54 },
  { pos: 4, name: "Beşiktaş", logo: "🦅", o: 25, g: 13, m: 5, av: 15, p: 46 },
  { pos: 5, name: "Başakşehir", logo: "🟠", o: 25, g: 12, m: 7, av: 17, p: 42 },
  { pos: 6, name: "Göztepe", logo: "🔴", o: 25, g: 11, m: 5, av: 10, p: 42 },
  { pos: 7, name: "Kocaelispor", logo: "🟢", o: 25, g: 9, m: 10, av: -3, p: 33 },
  { pos: 8, name: "Samsunspor", logo: "🔴", o: 25, g: 7, m: 7, av: -3, p: 30 },
];

export default function PuanDurumu() {
  return (
    <section className="py-8 container mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-2xl mx-auto">
        <div className="bg-emerald-700 px-6 py-4">
          <h2 className="text-white font-black text-xl italic tracking-tight">PUAN DURUMU</h2>
        </div>
        
        <div className="px-4 py-3 bg-gray-50 border-b">
          <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 font-bold text-sm text-gray-700 outline-none">
            <option>Süper Lig</option>
            <option>1. Lig</option>
            <option>2. Lig</option>
          </select>
        </div>

        <div className="overflow-x-auto flex-1">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-emerald-600 text-white text-xs font-black uppercase">
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Takım</th>
                <th className="py-3 px-2 text-center">O</th>
                <th className="py-3 px-2 text-center">G</th>
                <th className="py-3 px-2 text-center">M</th>
                <th className="py-3 px-2 text-center">Av</th>
                <th className="py-3 px-2 text-center font-black">P</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, idx) => (
                <tr key={team.pos} className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${idx < 3 ? 'bg-emerald-50/50' : ''}`}>
                  <td className="py-3 px-4 font-black text-gray-400">{team.pos}</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <span className="text-lg">{team.logo}</span>
                    <span className="font-bold text-gray-800">{team.name}</span>
                  </td>
                  <td className="py-3 px-2 text-center text-gray-600">{team.o}</td>
                  <td className="py-3 px-2 text-center text-gray-600">{team.g}</td>
                  <td className="py-3 px-2 text-center text-gray-600">{team.m}</td>
                  <td className="py-3 px-2 text-center text-gray-600">{team.av > 0 ? `+${team.av}` : team.av}</td>
                  <td className="py-3 px-2 text-center font-black text-gray-900 text-base">{team.p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
