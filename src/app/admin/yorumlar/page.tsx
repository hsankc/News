"use client";

import { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Trash2, 
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Clock,
  User,
  Filter
} from 'lucide-react';

const mockComments = [
  { id: 1, user: "Mehmet K.", avatar: "MK", date: "11 Mar 2026 • 14:32", article: "1915 Çanakkale Köprüsü'nde Yeni Vizyon Işıklandırması", content: "Harika bir proje olmuş, Çanakkale'nin gururu! 👏", status: "pending" },
  { id: 2, user: "Ayşe D.", avatar: "AD", date: "11 Mar 2026 • 13:15", article: "Web Sitelerinde Performans ve Güvenlik İçin Altyapı Seçimi", content: "Çok faydalı bir yazı, bilgilendirici olmuş teşekkürler.", status: "approved" },
  { id: 3, user: "Ali Y.", avatar: "AY", date: "11 Mar 2026 • 12:48", article: "Çanakkale Boğazı'nda Sıra Dışı Gün Batımı", content: "bu fotoğraf gerçekten muhteşem, çanakkale çok güzel bir şehir", status: "pending" },
  { id: 4, user: "Fatma S.", avatar: "FS", date: "11 Mar 2026 • 11:22", article: "ÇOMÜ Öğretim Üyesine Japonya'dan ödül", content: "Çok gurur verici! Tebrikler hocamıza.", status: "approved" },
  { id: 5, user: "Emre T.", avatar: "ET", date: "11 Mar 2026 • 10:05", article: "Bağ Bozumu Festivali başladı", content: "spam link burada - silinmeli", status: "rejected" },
  { id: 6, user: "Zeynep A.", avatar: "ZA", date: "10 Mar 2026 • 23:44", article: "Kadın Etkinlik Merkezi törenle hizmete açıldı", content: "Çok güzel bir haber, tebrikler belediyemize!", status: "pending" },
  { id: 7, user: "Burak M.", avatar: "BM", date: "10 Mar 2026 • 22:10", article: "MÜSİAD'dan iftar programı", content: "Güzel bir organizasyon olmuş.", status: "approved" },
  { id: 8, user: "Selin K.", avatar: "SK", date: "10 Mar 2026 • 20:30", article: "Çanakkale siyasetinin önemli isimleri iftarda buluştu", content: "Bu tür birliktelikler çok önemli, devamını diliyorum.", status: "pending" },
];

export default function YorumlarPage() {
  const [comments, setComments] = useState(mockComments);
  const [notification, setNotification] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleApprove = (id: number) => {
    setComments(comments.map(c => c.id === id ? { ...c, status: 'approved' } : c));
    showToast('YORUM ONAYLANDI ✅');
  };

  const handleReject = (id: number) => {
    setComments(comments.map(c => c.id === id ? { ...c, status: 'rejected' } : c));
    showToast('YORUM REDDEDİLDİ ❌');
  };

  const handleDelete = (id: number) => {
    if (confirm('Bu yorumu silmek istediğinize emin misiniz?')) {
      setComments(comments.filter(c => c.id !== id));
      showToast('YORUM SİLİNDİ');
    }
  };

  const handleBulkApprove = () => {
    setComments(comments.map(c => c.status === 'pending' ? { ...c, status: 'approved' } : c));
    showToast('BEKLEYEN TÜM YORUMLAR ONAYLANDI');
  };

  const filteredComments = activeFilter === 'all' 
    ? comments 
    : comments.filter(c => c.status === activeFilter);

  const pendingCount = comments.filter(c => c.status === 'pending').length;
  const approvedCount = comments.filter(c => c.status === 'approved').length;
  const rejectedCount = comments.filter(c => c.status === 'rejected').length;

  return (
    <div className="space-y-8 animate-fade-in relative">
      {notification && (
        <div className="fixed top-24 right-8 z-[100] bg-slate-900 text-white px-8 py-5 rounded-[2.5rem] shadow-2xl border border-white/10 flex items-center gap-4 animate-slide-in">
          <CheckCircle2 className="h-6 w-6 text-green-400" />
          <p className="font-black text-sm uppercase tracking-widest">{notification}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter uppercase italic">
            YORUM <span className="text-red-600 underline decoration-slate-200 decoration-8 underline-offset-4">YÖNETİMİ</span>
          </h1>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Toplam {comments.length} yorum • {pendingCount} onay bekliyor</p>
        </div>
        <button 
          onClick={handleBulkApprove}
          className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 bg-green-600 text-white font-black text-[10px] uppercase tracking-widest hover:bg-green-700 rounded-2xl shadow-xl shadow-green-100 transition-all active:scale-95"
        >
          <ThumbsUp className="h-5 w-5" /> TÜMÜNÜ ONAYLA ({pendingCount})
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-center">
          <p className="text-3xl font-black text-amber-600">{pendingCount}</p>
          <p className="text-[9px] font-black text-amber-400 uppercase tracking-widest mt-1">Bekliyor</p>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-2xl p-5 text-center">
          <p className="text-3xl font-black text-green-600">{approvedCount}</p>
          <p className="text-[9px] font-black text-green-400 uppercase tracking-widest mt-1">Onaylı</p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-2xl p-5 text-center">
          <p className="text-3xl font-black text-red-600">{rejectedCount}</p>
          <p className="text-[9px] font-black text-red-400 uppercase tracking-widest mt-1">Reddedildi</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto">
        {[
          { id: 'all', label: 'Tümü', count: comments.length },
          { id: 'pending', label: 'Bekleyen', count: pendingCount },
          { id: 'approved', label: 'Onaylı', count: approvedCount },
          { id: 'rejected', label: 'Reddedilen', count: rejectedCount },
        ].map(f => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all whitespace-nowrap ${
              activeFilter === f.id 
                ? 'bg-slate-900 text-white shadow-lg' 
                : 'bg-white text-slate-400 border border-slate-100 hover:bg-slate-50'
            }`}
          >
            {f.label} ({f.count})
          </button>
        ))}
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {filteredComments.map((comment) => (
          <div key={comment.id} className={`bg-white rounded-[2rem] shadow-sm border p-6 md:p-8 transition-all hover:shadow-md ${
            comment.status === 'pending' ? 'border-amber-200 border-l-4 border-l-amber-400' 
            : comment.status === 'rejected' ? 'border-red-200 border-l-4 border-l-red-400 opacity-60' 
            : 'border-slate-50'
          }`}>
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-2xl flex items-center justify-center font-black text-sm flex-shrink-0">
                {comment.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <span className="font-black text-slate-900 text-sm">{comment.user}</span>
                  <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${
                    comment.status === 'pending' ? 'bg-amber-100 text-amber-600' 
                    : comment.status === 'approved' ? 'bg-green-100 text-green-600' 
                    : 'bg-red-100 text-red-600'
                  }`}>
                    {comment.status === 'pending' ? 'Bekliyor' : comment.status === 'approved' ? 'Onaylı' : 'Reddedildi'}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-bold flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {comment.date}
                </p>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">{comment.content}</p>
                <p className="mt-2 text-[10px] text-slate-300 font-bold italic truncate">
                  📰 {comment.article}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {comment.status === 'pending' && (
                  <>
                    <button onClick={() => handleApprove(comment.id)} className="p-3 bg-green-50 text-green-600 hover:bg-green-600 hover:text-white rounded-xl transition-all" title="Onayla">
                      <ThumbsUp className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleReject(comment.id)} className="p-3 bg-red-50 text-red-500 hover:bg-red-600 hover:text-white rounded-xl transition-all" title="Reddet">
                      <ThumbsDown className="h-4 w-4" />
                    </button>
                  </>
                )}
                <button onClick={() => handleDelete(comment.id)} className="p-3 bg-slate-50 text-slate-400 hover:bg-red-600 hover:text-white rounded-xl transition-all" title="Sil">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
        {filteredComments.length === 0 && (
          <div className="text-center py-20">
            <MessageSquare className="h-16 w-16 text-slate-100 mx-auto mb-4" />
            <p className="text-slate-400 font-black text-xs uppercase tracking-widest">Bu kategoride yorum bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
}
