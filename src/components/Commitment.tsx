import React, { useState } from 'react';
import { commitments } from '../data/thriveData';
import { CheckCircle2, Shield, ArrowUpRight } from 'lucide-react';

export const Commitment: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('01');

  return (
    <section className="relative py-28 md:py-36 bg-[#050505] text-[#F5F5F0] border-t border-b border-[#F5F5F0]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Header */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#F27D26]" />
              <span className="text-[11px] font-display font-bold tracking-[0.3em] text-[#F27D26] uppercase italic">
                OUR COMMITMENT
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tight text-[#F5F5F0] leading-[0.98]">
              WE TAKE EVERY<br />DETAIL SERIOUSLY.
            </h2>

            <p className="text-base sm:text-lg text-[#F5F5F0]/60 font-sans leading-relaxed font-light">
              Integritas eksekusi kami berpijak pada lima komitmen nyata. Dari lembar RAB pertama hingga menit terakhir acara, kami menjaga kepercayaan Anda dengan profesionalisme tanpa kompromi.
            </p>

            <div className="p-6 rounded-2xl bg-[#0d0e11] border border-[#F5F5F0]/10 space-y-2">
              <div className="flex items-center gap-2 text-[#F27D26] font-display text-xs font-bold uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>Zero Compromise on Quality</span>
              </div>
              <p className="text-xs text-[#F5F5F0]/50 font-sans leading-relaxed font-light">
                Kami memastikan setiap rundown, vendor pendukung, dan tim fasilitator telah lolos uji kelayakan sebelum hari kegiatan.
              </p>
            </div>
          </div>

          {/* Right Column: Animated Vertical List */}
          <div className="lg:col-span-7 space-y-4">
            {commitments.map((item) => {
              const isActive = activeItem === item.id;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveItem(item.id)}
                  data-cursor="COMMIT"
                  className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#101115] border-[#F27D26]/60 shadow-xl'
                      : 'bg-[#0d0e11] hover:bg-[#101115] border-[#F5F5F0]/10 text-[#F5F5F0]/70'
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs font-bold ${
                            isActive ? 'text-[#F27D26]' : 'text-[#F5F5F0]/30'
                          }`}
                        >
                          {item.number}
                        </span>
                        <h3
                          className={`text-xl sm:text-2xl font-display font-black uppercase tracking-tight ${
                            isActive ? 'text-[#F5F5F0]' : 'text-[#F5F5F0]/70'
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base text-[#F5F5F0]/60 font-sans leading-relaxed pt-1 font-light">
                        {item.description}
                      </p>
                    </div>

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? 'bg-[#F27D26] text-black' : 'bg-[#F5F5F0]/5 text-[#F5F5F0]/30'
                      }`}
                    >
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
