import React from 'react';
import { motion } from 'motion/react';
import { brandInfo } from '../data/thriveData';

export const BrandStatement: React.FC = () => {
  return (
    <section id="belief" className="relative py-28 md:py-36 bg-[#050505] text-[#F5F5F0] overflow-hidden border-b border-[#F5F5F0]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Label with horizontal rule */}
        <div className="flex items-center gap-4 mb-8">
          <span className="w-12 h-[1px] bg-[#F27D26]" />
          <span className="text-[11px] font-display font-bold tracking-[0.3em] text-[#F27D26] uppercase italic">
            {brandInfo.belief.label}
          </span>
        </div>

        {/* Huge Editorial Headline */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight text-[#F5F5F0] leading-[0.95] max-w-5xl">
            {brandInfo.belief.title}
          </h2>
        </div>

        {/* Editorial Split: Body Copy & Powerful Emotional Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xl sm:text-2xl md:text-3xl text-[#F5F5F0] font-display font-semibold leading-relaxed">
              {brandInfo.belief.lead}
            </p>

            <div className="space-y-4 text-base sm:text-lg text-[#F5F5F0]/70 font-sans leading-relaxed font-light border-l-2 border-[#F27D26]/60 pl-6 my-8">
              {brandInfo.belief.paragraphs.map((p, index) => (
                <p key={index} className="text-[#F5F5F0]/80">
                  {p}
                </p>
              ))}
            </div>

            <div className="pt-6">
              <span className="inline-block text-xs font-display font-bold tracking-[0.25em] text-[#F27D26] uppercase">
                {brandInfo.belief.motto}
              </span>
              <p className="text-xs text-[#F5F5F0]/40 font-sans mt-1">
                Fondasi setiap pengalaman yang kami rancang bersama Anda.
              </p>
            </div>
          </div>

          {/* Powerful Emotional Photograph */}
          <div className="lg:col-span-6">
            <div className="relative group overflow-hidden rounded-2xl bg-[#0d0e11] border border-[#F5F5F0]/10 shadow-2xl">
              <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=85&w=1600&auto=format&fit=crop"
                  alt="Authentic Human Connection at Thrive Experience Event"
                  className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  data-cursor="MOMENT"
                />
              </div>

              {/* Minimal caption badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#050505]/85 backdrop-blur-md border border-[#F5F5F0]/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-display font-bold block">
                    Human Connection
                  </span>
                  <span className="text-xs text-[#F5F5F0]/80 font-sans font-normal">
                    Momen kebersamaan yang menjadi kenangan bermakna.
                  </span>
                </div>
                <span className="text-[10px] font-display font-bold tracking-widest text-[#F5F5F0] px-3 py-1 bg-[#F5F5F0]/10 rounded-full">
                  THRIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
