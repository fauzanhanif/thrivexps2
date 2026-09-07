import React, { useState } from 'react';
import { motion } from 'motion/react';
import { experienceCategories } from '../data/thriveData';
import { ArrowUpRight, Check, Compass, Sparkles } from 'lucide-react';

export const ExperienceCategories: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(experienceCategories[0].id);
  const activeCategory = experienceCategories.find((c) => c.id === selectedId) || experienceCategories[0];

  return (
    <section id="experiences" className="relative py-28 md:py-36 bg-[#050505] text-[#F5F5F0] overflow-hidden border-b border-[#F5F5F0]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-[#F27D26]" />
              <span className="text-[11px] font-display font-bold tracking-[0.3em] text-[#F27D26] uppercase italic">
                EXPERIENCE PORTFOLIO
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black uppercase tracking-tight text-[#F5F5F0] leading-none">
              WHAT WE CREATE
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#F5F5F0]/60 font-sans leading-relaxed font-light">
            Delapan fokus kategori pengalaman yang dirancang secara khusus untuk memenuhi karakter, sasaran, dan dinamika unik setiap kelompok peserta.
          </p>
        </div>

        {/* Categories Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Category Selector List */}
          <div className="lg:col-span-5 space-y-2.5">
            {experienceCategories.map((cat, idx) => {
              const isSelected = cat.id === selectedId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedId(cat.id)}
                  data-cursor="EXPLORE"
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group border ${
                    isSelected
                      ? 'bg-[#0f1014] border-[#F27D26]/70 shadow-xl text-[#F5F5F0]'
                      : 'bg-[#F5F5F0]/5 hover:bg-[#F5F5F0]/10 border-[#F5F5F0]/5 text-[#F5F5F0]/70'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono font-bold transition-colors ${
                        isSelected ? 'text-[#F27D26]' : 'text-[#F5F5F0]/30 group-hover:text-[#F5F5F0]/60'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-wide group-hover:text-[#F5F5F0] transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#F5F5F0]/40 font-sans line-clamp-1">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                      isSelected
                        ? 'text-[#F27D26] translate-x-0.5 -translate-y-0.5'
                        : 'text-[#F5F5F0]/30 group-hover:text-[#F5F5F0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Immersive Category Showcase */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="relative rounded-3xl overflow-hidden border border-[#F5F5F0]/10 bg-[#0d0e11] shadow-2xl">
              {/* Media Container */}
              <div className="aspect-[16/10] sm:aspect-[16/9] relative overflow-hidden">
                <img
                  key={activeCategory.id}
                  src={activeCategory.image}
                  alt={activeCategory.title}
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-105 animate-fadeIn"
                  referrerPolicy="no-referrer"
                  data-cursor="PREVIEW"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e11] via-[#0d0e11]/40 to-transparent" />

                {/* Badge */}
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#050505]/70 backdrop-blur-md border border-[#F5F5F0]/15 text-[10px] font-display font-bold tracking-widest text-[#F27D26] uppercase">
                    FEATURED EXPERIENCE
                  </span>
                </div>
              </div>

              {/* Detail Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#F27D26] mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{activeCategory.tagline}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tight text-[#F5F5F0]">
                    {activeCategory.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#F5F5F0]/70 font-sans leading-relaxed mt-2 font-light">
                    {activeCategory.description}
                  </p>
                </div>

                {/* Activities Highlights */}
                <div className="pt-2 border-t border-[#F5F5F0]/10">
                  <span className="text-[10px] font-display font-semibold uppercase tracking-widest text-[#F5F5F0]/40 block mb-3">
                    Aktivitas & Modul Unggulan
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeCategory.activities.map((act) => (
                      <div
                        key={act}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F5F5F0]/5 border border-[#F5F5F0]/5 text-xs text-[#F5F5F0]/80 font-sans"
                      >
                        <Check className="w-3.5 h-3.5 text-[#F27D26] shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#F5F5F0]/10">
                  <span className="text-xs text-[#F5F5F0]/50 font-sans">
                    Siap merancang konsep untuk kategori ini?
                  </span>
                  <a
                    href="#contact"
                    data-cursor="CONSULT ↗"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F27D26] text-black hover:bg-[#ff8f3d] font-display text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 group"
                  >
                    <span>KONSULTASIKAN AGENDA</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
