import React from 'react';
import { teamMembers } from '../data/thriveData';
import { Sparkles, Briefcase, Award } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <section id="team" className="relative py-28 md:py-36 bg-[#050505] text-[#F5F5F0] border-t border-b border-[#F5F5F0]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-[#F27D26]" />
            <span className="text-[11px] font-display font-bold tracking-[0.3em] text-[#F27D26] uppercase italic">
              LEADERSHIP & OPERATIONS
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black uppercase tracking-tight text-[#F5F5F0] mb-6 leading-[0.95]">
            THE PEOPLE<br />BEHIND THRIVE.
          </h2>

          <p className="text-base sm:text-xl text-[#F5F5F0]/60 font-sans leading-relaxed font-light">
            Didukung oleh dedikasi pengalaman operasional lapangan, perencanaan matang, dan jejaring strategis untuk membangun ekosistem event yang profesional dan berkelanjutan.
          </p>
        </div>

        {/* Editorial Team Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          {teamMembers.map((member, idx) => (
            <div
              key={member.id}
              data-cursor="LEADER"
              className="rounded-3xl overflow-hidden bg-[#0d0e11] border border-[#F5F5F0]/10 hover:border-[#F27D26]/50 transition-all duration-500 shadow-2xl flex flex-col justify-between group"
            >
              {/* Editorial Portrait */}
              <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden relative">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e11] via-[#0d0e11]/30 to-transparent" />

                <div className="absolute top-6 left-6">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#050505]/75 backdrop-blur-md border border-[#F5F5F0]/15 text-[10px] font-display font-bold uppercase tracking-wider text-[#F27D26]">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Biography Block */}
              <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tight text-[#F5F5F0] group-hover:text-[#F27D26] transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#F27D26] font-bold block mt-1">
                    THRIVE EXPERIENCE {member.role}
                  </span>

                  <div className="space-y-4 text-sm sm:text-base text-[#F5F5F0]/70 font-sans leading-relaxed mt-6 font-light">
                    {member.bio.map((paragraph, pIdx) => (
                      <p key={pIdx}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#F5F5F0]/10 flex items-center justify-between text-xs text-[#F5F5F0]/40 font-display">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#F27D26]" />
                    Operational & Strategic Foundation
                  </span>
                  <span className="font-mono">LEADERSHIP 0{idx + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
