"use client";

import { useEffect, useState } from 'react';
import { Facebook, Twitter, MessageCircle } from 'lucide-react';

export default function ShareButtons({ id, title }: { id: number; title: string }) {
  // URL tarayıcıda hesaplanır; sunucuda boş kalıp hydration uyuşmazlığı yaratmasın
  const [shareUrl, setShareUrl] = useState('');
  useEffect(() => {
    setShareUrl(`${window.location.origin}/haber/${id}`);
  }, [id]);

  const url = encodeURIComponent(shareUrl);
  const text = encodeURIComponent(title);

  return (
    <div className="flex gap-2">
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer" aria-label="Facebook'ta paylaş" className="p-2 bg-blue-600 text-white rounded-full hover:opacity-80 transition-opacity">
        <Facebook className="h-4 w-4" />
      </a>
      <a href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`} target="_blank" rel="noopener noreferrer" aria-label="X'te paylaş" className="p-2 bg-sky-500 text-white rounded-full hover:opacity-80 transition-opacity">
        <Twitter className="h-4 w-4" />
      </a>
      <a href={`https://wa.me/?text=${text}%20${url}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp'ta paylaş" className="p-2 bg-green-500 text-white rounded-full hover:opacity-80 transition-opacity">
        <MessageCircle className="h-4 w-4" />
      </a>
    </div>
  );
}
