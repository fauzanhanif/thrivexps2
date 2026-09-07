import React from 'react';
import { ArrowUp, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCES', href: '#experiences' },
    { name: 'SERVICES', href: '#services' },
    { name: 'APPROACH', href: '#approach' },
    { name: 'TEAM', href: '#team' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#050505] text-[#F5F5F0] pt-24 pb-12 border-t border-[#F5F5F0]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Massive Brand Wordmark */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#F27D26]">
              EVENT ORGANIZER & EXPERIENCE MANAGEMENT
            </span>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[#F5F5F0]/5 hover:bg-[#F27D26] hover:text-black border border-[#F5F5F0]/10 flex items-center justify-center transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black uppercase tracking-tighter text-[#F5F5F0] leading-none">
            THRIVE EXPERIENCE
          </h1>
        </div>

        {/* Brand Metadata & Navigation Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F5F5F0]/10">
          {/* Brand Philosophy & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="text-sm sm:text-base font-display font-black tracking-widest text-[#F27D26] uppercase">
              CREATE • CONNECT • GROW
            </div>
            <div className="text-xs sm:text-sm font-display font-bold tracking-widest text-[#F5F5F0]/70 uppercase">
              EVENT • GATHERING • TEAM BUILDING • ADVENTURE
            </div>
            <p className="text-[#F5F5F0]/60 font-sans text-xs sm:text-sm max-w-md leading-relaxed font-light">
              Mitra manajemen kegiatan dan perancang pengalaman yang berfokus pada apa yang dirasakan, diingat, dan dibawa pulang oleh peserta.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#F5F5F0]/40 font-sans pt-2">
              <Compass className="w-3.5 h-3.5 text-[#F27D26]" />
              <span>Bogor, West Java — Indonesia</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-6 flex flex-col sm:flex-row justify-end gap-10 sm:gap-16 text-xs font-display font-bold uppercase tracking-widest text-[#F5F5F0]/40">
            <div className="space-y-3">
              <span className="text-[#F27D26] block mb-4">Navigation</span>
              {navLinks.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block hover:text-[#F27D26] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="space-y-3">
              <span className="text-[#F27D26] block mb-4">Index</span>
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block hover:text-[#F27D26] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer Statement & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#F5F5F0]/40">
          <p className="font-display font-medium text-[#F5F5F0]/60 italic">
            "Designed for moments that matter."
          </p>

          <p>© 2026 THRIVE EXPERIENCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
