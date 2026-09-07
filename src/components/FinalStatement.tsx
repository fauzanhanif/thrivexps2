import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const FinalStatement: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] py-32 md:py-44 bg-[#050505] text-[#F5F5F0] flex flex-col justify-center overflow-hidden border-t border-b border-[#F5F5F0]/10">
      {/* Subtle Ambient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,125,38,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Small Label */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="w-12 h-[1px] bg-[#F27D26]" />
          <span className="text-[11px] font-display font-bold tracking-[0.3em] text-[#F27D26] uppercase italic">
            WHY WE EXIST
          </span>
          <span className="w-12 h-[1px] bg-[#F27D26]" />
        </div>

        {/* Huge Typography */}
        <div className="max-w-5xl mx-auto space-y-6 mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight text-[#F5F5F0]/40 leading-[1.05]">
            AN EVENT MAY LAST<br />
            <span className="text-[#F5F5F0]/25">ONE OR SEVERAL DAYS.</span>
          </h2>

          <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight text-[#F5F5F0] leading-[0.95] pt-4">
            THE EXPERIENCE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F0] via-[#F5F5F0] to-[#F27D26]">
              CAN LAST MUCH LONGER.
            </span>
          </h3>

          <p className="text-lg sm:text-2xl text-[#F5F5F0]/60 font-sans font-light max-w-2xl mx-auto pt-6 leading-relaxed">
            THRIVE EXPERIENCE hadir untuk menciptakan pengalaman tersebut.
          </p>
        </div>

        {/* Sequential Declarations */}
        <div className="max-w-4xl mx-auto pt-10 border-t border-[#F5F5F0]/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-[#0d0e11] border border-[#F5F5F0]/10 hover:border-[#F27D26]/40 transition-all duration-300">
            <span className="text-xs font-mono text-[#F27D26] font-bold block mb-2">01</span>
            <p className="text-lg sm:text-xl font-display font-black uppercase text-[#F5F5F0] tracking-wide">
              WE CREATE EXPERIENCES.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0d0e11] border border-[#F5F5F0]/10 hover:border-[#F27D26]/40 transition-all duration-300">
            <span className="text-xs font-mono text-[#F27D26] font-bold block mb-2">02</span>
            <p className="text-lg sm:text-xl font-display font-black uppercase text-[#F5F5F0] tracking-wide">
              WE BUILD CONNECTIONS.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0d0e11] border border-[#F5F5F0]/10 hover:border-[#F27D26]/40 transition-all duration-300">
            <span className="text-xs font-mono text-[#F27D26] font-bold block mb-2">03</span>
            <p className="text-lg sm:text-xl font-display font-black uppercase text-[#F5F5F0] tracking-wide">
              WE GROW TOGETHER.
            </p>
          </div>
        </div>

        {/* Brand End Motto */}
        <div className="mt-16">
          <span className="inline-block text-xs sm:text-sm font-display font-black tracking-[0.4em] text-[#F27D26] uppercase px-6 py-2.5 rounded-full border border-[#F27D26]/30 bg-[#F27D26]/10">
            CREATE • CONNECT • GROW
          </span>
        </div>
      </div>
    </section>
  );
};
