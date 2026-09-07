import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const handleClick = () => {
    const defaultMsg = encodeURIComponent(
      'Halo THRIVE EXPERIENCE! Saya ingin berkonsultasi mengenai rencana event / gathering / team building.'
    );
    window.open(`https://wa.me/?text=${defaultMsg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleClick}
        data-cursor="CHAT"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#F27D26] hover:bg-[#e06d19] text-black shadow-2xl shadow-[#F27D26]/40 transition-all duration-300 hover:scale-105 group border border-[#F5F5F0]/20"
        aria-label="Direct WhatsApp Consultation"
      >
        <MessageCircle className="w-5 h-5 fill-black text-[#F27D26]" />
        <span className="text-xs font-display font-black uppercase tracking-wider hidden sm:inline-block">
          WhatsApp Us
        </span>
      </button>
    </div>
  );
};
