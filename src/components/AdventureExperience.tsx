import React, { useState } from 'react';
import { adventureActivities } from '../data/thriveData';
import { Compass, Flame, ArrowUpRight, ShieldCheck, Mountain } from 'lucide-react';

export const AdventureExperience: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<string>(adventureActivities[0].id);
  const current = adventureActivities.find((a) => a.id === selectedActivity) || adventureActivities[0];

  return (
    <section className="relative py-28 md:py-36 bg-[#050505] text-[#F5F5F0] overflow-hidden border-b border-[#F5F5F0]/10">
      {/* Dynamic Dramatic Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={current.image}
          alt="Adventure Background"
          className="w-full h-full object-cover filter blur-xs brightness-40 contrast-110 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-[#F27D26]" />
            <span className="text-[11px] font-display font-bold tracking-[0.3em] text-[#F27D26] uppercase italic flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5" />
              OUTDOOR & ADRENALINE
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight text-[#F5F5F0] mb-6 leading-[0.95]">
            GO BEYOND<br />THE ORDINARY.
          </h2>

          <p className="text-lg sm:text-xl text-[#F5F5F0]/60 font-sans leading-relaxed font-light">
            Menggabungkan perjalanan dan aktivitas outdoor menjadi pengalaman yang lebih berkesan. Menjelajahi lanskap alam Bogor dan Jawa Barat dengan standar keselamatan prima.
          </p>
        </div>

        {/* Activity Quick Selector Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {adventureActivities.map((act) => {
            const isActive = act.id === selectedActivity;
            return (
              <button
                key={act.id}
                onClick={() => setSelectedActivity(act.id)}
                data-cursor="SELECT"
                className={`px-6 py-3 rounded-full text-xs font-display font-bold uppercase tracking-[0.15em] transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#F27D26] text-black border-[#F27D26] shadow-xl shadow-[#F27D26]/20'
                    : 'bg-[#F5F5F0]/5 hover:bg-[#F5F5F0]/10 text-[#F5F5F0]/70 border-[#F5F5F0]/10'
                }`}
              >
                {act.name}
              </button>
            );
          })}
        </div>

        {/* Cinematic Main Feature Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl overflow-hidden bg-[#0d0e11] border border-[#F5F5F0]/10 shadow-2xl">
          {/* Left Column: Media with High Impact */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px] overflow-hidden group">
            <img
              key={current.id}
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover object-center filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              data-cursor="ADVENTURE"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />

            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#050505]/75 backdrop-blur-md border border-[#F5F5F0]/15 text-[10px] font-display font-bold text-[#F5F5F0] uppercase tracking-wider flex items-center gap-1.5">
                <Mountain className="w-3.5 h-3.5 text-[#F27D26]" />
                {current.category}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase font-mono tracking-widest text-[#F27D26] font-bold block mb-1">
                ADVENTURE MODULE
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-black uppercase text-[#F5F5F0]">
                {current.name}
              </h3>
            </div>
          </div>

          {/* Right Column: Description, Safety & Highlights */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-[#0f1014]">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-display font-semibold uppercase tracking-widest text-[#F5F5F0]/40">
                  Ringkasan Pengalaman
                </span>
                <p className="text-base sm:text-lg text-[#F5F5F0]/80 font-sans leading-relaxed mt-2 font-light">
                  {current.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3 pt-4 border-t border-[#F5F5F0]/10">
                <span className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#F5F5F0]/40 block">
                  Standar & Keunggulan
                </span>
                <div className="space-y-2">
                  {current.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F5F0]/5 border border-[#F5F5F0]/5 text-xs text-[#F5F5F0]/80 font-sans"
                    >
                      <ShieldCheck className="w-4 h-4 text-[#F27D26] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-[#F5F5F0]/10">
              <a
                href="#contact"
                data-cursor="INQUIRE ↗"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-full bg-[#F27D26] hover:bg-[#ff8f3d] text-black font-display text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl shadow-[#F27D26]/20 group"
              >
                <span>BOOK THIS ADVENTURE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
