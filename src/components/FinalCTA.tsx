import React from 'react';
import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] py-28 md:py-36 flex items-center justify-center overflow-hidden bg-[#050505] text-[#F5F5F0]">
      {/* Full-Screen High-Impact Event Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=85&w=2400&auto=format&fit=crop"
          alt="Emotional celebration and human connection"
          className="w-full h-full object-cover object-center filter brightness-35 contrast-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.9)_100%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#050505]/80 border border-[#F5F5F0]/20 text-[10px] font-display font-bold uppercase tracking-widest text-[#F5F5F0] mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#F27D26]" />
          <span>YOUR NEXT CHAPTER</span>
        </div>

        {/* Climax Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight text-[#F5F5F0] mb-8 leading-[0.95]">
          WHAT WILL<br />
          YOUR NEXT<br />
          <span className="text-[#F27D26]">EXPERIENCE BE?</span>
        </h2>

        <div className="space-y-2 text-lg sm:text-2xl text-[#F5F5F0]/70 font-sans font-light max-w-xl mx-auto mb-12">
          <p>Punya ide, kebutuhan, atau rencana kegiatan?</p>
          <p className="text-[#F5F5F0] font-medium">Mari mulai dari sebuah percakapan.</p>
        </div>

        {/* Dual CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href="#contact"
            data-cursor="CREATE ↗"
            className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-[#F27D26] hover:bg-[#e06d19] text-black font-display text-sm sm:text-base font-black tracking-wider transition-all duration-300 shadow-2xl shadow-[#F27D26]/30 group"
          >
            <span>LET'S CREATE SOMETHING MEMORABLE</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a
            href="#contact"
            data-cursor="CHAT"
            className="inline-flex items-center gap-3 px-7 py-4 sm:px-8 sm:py-5 rounded-full bg-[#F5F5F0]/10 hover:bg-[#F5F5F0]/20 text-[#F5F5F0] font-display text-sm sm:text-base font-semibold tracking-wider border border-[#F5F5F0]/15 transition-all duration-300 backdrop-blur-md group"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#F27D26]" />
            <span>WHATSAPP US</span>
          </a>
        </div>
      </div>
    </section>
  );
};
