import React, { useState } from 'react';
import { services } from '../data/thriveData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const activeService = services[hoveredIndex] || services[0];

  return (
    <section id="services" className="relative py-28 md:py-36 bg-[#050505] text-[#F5F5F0] border-t border-b border-[#F5F5F0]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-[#F27D26]" />
            <span className="text-[11px] font-display font-bold tracking-[0.3em] text-[#F27D26] uppercase italic">
              END-TO-END MANAGEMENT
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black uppercase tracking-tight text-[#F5F5F0] mb-6 leading-[0.95]">
            FROM IDEA<br />TO EXECUTION.
          </h2>

          <p className="text-base sm:text-xl text-[#F5F5F0]/60 font-sans leading-relaxed font-light">
            THRIVE EXPERIENCE dapat membantu dari tahap awal hingga event selesai. Kami menangani setiap detail perencanaan, perizinan, logistik, operasional, hingga evaluasi akhir.
          </p>
        </div>

        {/* Dynamic Split Layout: Numbered List on Left, Live Ambient Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Services Numbered List */}
          <div className="lg:col-span-7 space-y-1">
            {services.map((srv, idx) => {
              const isHovered = hoveredIndex === idx;

              return (
                <div
                  key={srv.id}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className={`group relative py-6 px-4 sm:px-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isHovered
                      ? 'bg-[#0e0f13] border-[#F27D26]/50 shadow-xl'
                      : 'bg-transparent border-transparent hover:border-[#F5F5F0]/10'
                  }`}
                  data-cursor="SERVICE"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-baseline gap-6 sm:gap-8">
                      {/* Large Animated Number */}
                      <span
                        className={`font-display font-mono text-2xl sm:text-4xl font-black transition-all duration-300 ${
                          isHovered
                            ? 'text-[#F27D26] scale-110 sm:scale-125 translate-x-1'
                            : 'text-[#F5F5F0]/30 group-hover:text-[#F5F5F0]/60'
                        }`}
                      >
                        {srv.number}
                      </span>

                      {/* Title */}
                      <h3
                        className={`text-xl sm:text-2xl md:text-3xl font-display font-black uppercase tracking-tight transition-colors duration-200 ${
                          isHovered ? 'text-[#F5F5F0]' : 'text-[#F5F5F0]/60 group-hover:text-[#F5F5F0]'
                        }`}
                      >
                        {srv.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <ArrowUpRight
                        className={`w-6 h-6 transition-all duration-300 ${
                          isHovered
                            ? 'text-[#F27D26] opacity-100 translate-x-0 -translate-y-0'
                            : 'text-[#F5F5F0]/20 opacity-0 group-hover:opacity-60 -translate-x-2 translate-y-2'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expandable description on active */}
                  {isHovered && (
                    <div className="mt-4 pt-4 border-t border-[#F5F5F0]/10 space-y-3 sm:pl-16 animate-fadeIn">
                      <p className="text-sm sm:text-base text-[#F5F5F0]/70 font-sans leading-relaxed font-light">
                        {srv.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {srv.details.map((item, dIdx) => (
                          <span
                            key={dIdx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F5F5F0]/5 border border-[#F5F5F0]/10 text-xs text-[#F5F5F0]/80 font-sans"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#F27D26]" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sticky Visual Preview Card */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden border border-[#F5F5F0]/15 bg-[#0d0e11] shadow-2xl">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-105 animate-fadeIn transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  data-cursor="EXPLORE"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />

                {/* Floating Service Badge */}
                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-[#050505]/85 backdrop-blur-md border border-[#F5F5F0]/15">
                  <div className="flex items-center gap-2 text-[#F27D26] font-mono text-xs font-bold mb-1">
                    <span>SERVICE STAGE {activeService.number}</span>
                  </div>
                  <h4 className="text-2xl font-display font-black uppercase text-[#F5F5F0]">
                    {activeService.title}
                  </h4>
                  <p className="text-xs text-[#F5F5F0]/70 font-sans mt-2 line-clamp-2 font-light">
                    {activeService.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
