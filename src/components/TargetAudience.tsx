import React from 'react';
import { targetAudiences } from '../data/thriveData';
import { Building2, Landmark, GraduationCap, Users } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const audienceIcons: Record<string, React.ElementType> = {
    corporate: Building2,
    organization: Landmark,
    education: GraduationCap,
    'community-family': Users
  };

  return (
    <section className="relative py-28 md:py-36 bg-[#050505] text-[#F5F5F0] border-t border-b border-[#F5F5F0]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-[#F27D26]" />
            <span className="text-[11px] font-display font-bold tracking-[0.3em] text-[#F27D26] uppercase italic">
              WHO WE SERVE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight text-[#F5F5F0] mb-6 leading-[0.98]">
            BUILT FOR DIFFERENT PEOPLE.<br />
            DESIGNED AROUND THEIR NEEDS.
          </h2>

          <p className="text-base sm:text-xl text-[#F5F5F0]/60 font-sans leading-relaxed font-light">
            Setiap segmen memiliki dinamika, ekspektasi, dan ukuran keberhasilan yang berlainan. Kami menyesuaikan pendekatan agar tujuan spesifik Anda tercapai optimal.
          </p>
        </div>

        {/* Four Minimal Editorial Cards with Documentary Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {targetAudiences.map((aud, idx) => {
            const Icon = audienceIcons[aud.id] || Users;

            return (
              <div
                key={aud.id}
                data-cursor="AUDIENCE"
                className="group relative rounded-3xl overflow-hidden bg-[#0d0e11] border border-[#F5F5F0]/10 hover:border-[#F27D26]/50 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                {/* Documentary Photography */}
                <div className="aspect-[16/9] sm:aspect-[16/10] overflow-hidden relative">
                  <img
                    src={aud.image}
                    alt={aud.title}
                    className="w-full h-full object-cover object-center filter brightness-85 contrast-105 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e11] via-[#0d0e11]/40 to-transparent" />

                  <div className="absolute top-6 left-6 flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#050505]/75 backdrop-blur-md border border-[#F5F5F0]/15 text-[10px] font-display font-bold uppercase tracking-wider text-[#F5F5F0] flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-[#F27D26]" />
                      0{idx + 1} • {aud.title}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tight text-[#F5F5F0] group-hover:text-[#F27D26] transition-colors">
                    {aud.title}
                  </h3>

                  <div className="p-3.5 rounded-xl bg-[#F5F5F0]/5 border border-[#F5F5F0]/5 text-xs text-[#F5F5F0]/70 font-sans leading-relaxed">
                    <strong className="text-[#F5F5F0] font-medium block mb-1">Target Persona / Pemangku Kepentingan:</strong>
                    {aud.members}
                  </div>

                  <p className="text-sm sm:text-base text-[#F5F5F0]/60 font-sans leading-relaxed font-light">
                    {aud.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
