import React from 'react';
import { brandInfo } from '../data/thriveData';
import { MapPin, Compass, ArrowRight, Mountain, Trees, Waves } from 'lucide-react';

export const AreaOfService: React.FC = () => {
  const regions = [
    {
      title: 'BOGOR & PUNCAK',
      type: 'Home Base & Primary Hub',
      desc: 'Pusat operasional dan eksekusi utama — resort pegunungan, glamping pine forest, trekking, rafting Cisadane, dan offroad track.',
      icon: Mountain,
      active: true
    },
    {
      title: 'JABODETABEK',
      type: 'Primary Market Foundation',
      desc: 'Melayani kebutuhan gathering corporate, kick-off meeting, dan school events untuk klien Jakarta, Depok, Tangerang, dan Bekasi.',
      icon: Trees,
      active: true
    },
    {
      title: 'JAWA BARAT & SEKITARNYA',
      type: 'Active Expansion Region',
      desc: 'Eksplorasi destinasi alam Sukabumi (Citarik), Bandung, Subang, hingga Kepulauan Seribu.',
      icon: Waves,
      active: true
    },
    {
      title: 'INDONESIA',
      type: 'Long-Term Vision Trajectory',
      desc: 'Arah pengembangan bertahap untuk menghadirkan pengalaman tak terlupakan di berbagai destinasi nusantara.',
      icon: Compass,
      active: false
    }
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#050505] text-[#F5F5F0] border-t border-b border-[#F5F5F0]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-[#F27D26]" />
            <span className="text-[11px] font-display font-bold tracking-[0.3em] text-[#F27D26] uppercase italic">
              GEOGRAPHIC HORIZON
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black uppercase tracking-tight text-[#F5F5F0] mb-6 leading-[0.95]">
            {brandInfo.areaOfService.headline}
          </h2>

          <p className="text-base sm:text-xl text-[#F5F5F0]/60 font-sans leading-relaxed font-light">
            {brandInfo.areaOfService.copy}
          </p>
        </div>

        {/* Development Vector: JABODETABEK → JAWA BARAT → INDONESIA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0d0e11] border border-[#F5F5F0]/10 mb-12 shadow-2xl">
          <span className="text-[10px] font-display font-bold uppercase tracking-widest text-[#F5F5F0]/40 block mb-6">
            Peta Arah Pengembangan Layanan (Strategic Development Direction)
          </span>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative">
            {brandInfo.areaOfService.stages.map((stage, idx) => (
              <React.Fragment key={stage}>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#F27D26]/15 border border-[#F27D26]/40 flex items-center justify-center text-[#F27D26] font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-black tracking-wider text-[#F5F5F0]">
                      {stage}
                    </h3>
                    <span className="text-[11px] text-[#F5F5F0]/50 font-sans block">
                      {idx === 0
                        ? 'Pasar Inti Terintegrasi'
                        : idx === 1
                        ? 'Jangkauan Operasional Aktif'
                        : 'Arah Pengembangan Bertahap'}
                    </span>
                  </div>
                </div>

                {idx < brandInfo.areaOfService.stages.length - 1 && (
                  <ArrowRight className="hidden sm:block w-6 h-6 text-[#F27D26]/70 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Key Operational Destinational Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((reg) => {
            const Icon = reg.icon;
            return (
              <div
                key={reg.title}
                className="p-6 rounded-2xl bg-[#0d0e11] border border-[#F5F5F0]/10 hover:border-[#F27D26]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F5F0]/5 border border-[#F5F5F0]/10 flex items-center justify-center text-[#F27D26]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-display font-bold px-2 py-0.5 rounded-full ${
                        reg.active
                          ? 'bg-[#F27D26]/15 text-[#F27D26] border border-[#F27D26]/30'
                          : 'bg-[#F5F5F0]/5 text-[#F5F5F0]/40 border border-[#F5F5F0]/10'
                      }`}
                    >
                      {reg.active ? 'OPERATIONAL' : 'DEVELOPMENT'}
                    </span>
                  </div>

                  <h4 className="text-lg font-display font-black uppercase text-[#F5F5F0] mb-1">
                    {reg.title}
                  </h4>
                  <span className="text-xs text-[#F27D26] font-sans font-medium block mb-3">
                    {reg.type}
                  </span>

                  <p className="text-xs text-[#F5F5F0]/60 font-sans leading-relaxed font-light">
                    {reg.desc}
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
