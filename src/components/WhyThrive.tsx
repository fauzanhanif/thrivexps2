import React from 'react';
import { whyThrivePillars } from '../data/thriveData';
import { HeartHandshake, Sliders, ShieldCheck, Palette, Network } from 'lucide-react';

export const WhyThrive: React.FC = () => {
  const pillarIcons: Record<string, React.ElementType> = {
    'experience-driven': HeartHandshake,
    'flexible': Sliders,
    'professional': ShieldCheck,
    'creative': Palette,
    'partner-network': Network
  };

  return (
    <section className="relative py-28 md:py-36 bg-[#050505] text-[#F5F5F0] border-t border-b border-[#F5F5F0]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-[#F27D26]" />
            <span className="text-[11px] font-display font-bold tracking-[0.3em] text-[#F27D26] uppercase italic">
              DISTINCTIVE VALUE
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black uppercase tracking-tight text-[#F5F5F0] mb-6 leading-[0.95]">
            WHY THRIVE?
          </h2>

          <p className="text-base sm:text-xl text-[#F5F5F0]/60 font-sans leading-relaxed font-light">
            Lima pilar fundamental yang membedakan THRIVE EXPERIENCE dari sekadar penyedia jasa teknis acara.
          </p>
        </div>

        {/* Five Editorial Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyThrivePillars.map((pillar, idx) => {
            const Icon = pillarIcons[pillar.id] || ShieldCheck;

            return (
              <div
                key={pillar.id}
                data-cursor="VALUE"
                className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${
                  idx === 0
                    ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#121318] via-[#0d0e11] to-[#050505] border-[#F27D26]/60 shadow-2xl'
                    : 'bg-[#0d0e11] hover:bg-[#101115] border-[#F5F5F0]/10 hover:border-[#F27D26]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#F5F5F0]/5 border border-[#F5F5F0]/10 flex items-center justify-center text-[#F27D26] group-hover:scale-110 group-hover:bg-[#F27D26] group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#F5F5F0]/40 group-hover:text-[#F5F5F0]/70">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tight text-[#F5F5F0] group-hover:text-[#F27D26] transition-colors duration-200">
                    {pillar.title}
                  </h3>

                  <p className="text-xs uppercase tracking-wider font-display font-semibold text-[#F27D26] mt-1 mb-4">
                    {pillar.coreValue}
                  </p>

                  <p className="text-sm sm:text-base text-[#F5F5F0]/70 font-sans leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-[#F5F5F0]/10 flex items-center justify-between text-xs text-[#F5F5F0]/40 font-display">
                  <span>THRIVE PILLAR 0{idx + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-[#F27D26] opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
