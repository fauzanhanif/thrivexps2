import React from 'react';
import { brandInfo } from '../data/thriveData';
import { CheckCircle2, Users, Flame } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#050505] text-[#F5F5F0] overflow-hidden border-b border-[#F5F5F0]/10">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-4 mb-6">
          <span className="w-12 h-[1px] bg-[#F27D26]" />
          <span className="text-[11px] font-display font-bold tracking-[0.3em] text-[#F27D26] uppercase italic">
            ABOUT THRIVE EXPERIENCE
          </span>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Typography & Positioning Statement */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight text-[#F5F5F0] leading-[0.98]">
              {brandInfo.about.headline}
            </h2>

            <div className="p-6 rounded-2xl bg-[#0d0e11] border border-[#F5F5F0]/10 backdrop-blur-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#F27D26]">
                <Flame className="w-4 h-4" />
                <span>EXPERIENCE MANAGEMENT PARTNER</span>
              </div>
              <p className="text-sm sm:text-base text-[#F5F5F0]/80 font-sans leading-relaxed font-light">
                Kami tidak sekadar menjadi vendor pelaksana acara. Kami memposisikan diri sebagai mitra strategis yang peduli pada apa yang sesungguhnya dirasakan, diingat, dan dibawa pulang oleh peserta.
              </p>
            </div>

            {/* Visual Keywords */}
            <div className="pt-2">
              <span className="text-[10px] font-display font-semibold uppercase tracking-widest text-[#F5F5F0]/40 block mb-3">
                Core Execution DNA
              </span>
              <div className="flex flex-wrap gap-2.5">
                {brandInfo.about.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F5F5F0]/5 hover:bg-[#F27D26] hover:text-black text-[#F5F5F0] text-xs font-display font-bold tracking-wider transition-all duration-200 border border-[#F5F5F0]/10 hover:border-[#F27D26] group"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F27D26] group-hover:text-black" />
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Body Copy + High End Agency Visual */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6 text-base sm:text-lg text-[#F5F5F0]/70 font-sans leading-relaxed font-light">
              <p className="text-[#F5F5F0] text-lg sm:text-xl font-normal">
                {brandInfo.about.p1}
              </p>
              <p className="text-[#F5F5F0]/60">
                {brandInfo.about.p2}
              </p>
            </div>

            {/* High-Impact Visual Card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#F5F5F0]/10 group shadow-2xl bg-[#0d0e11]">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=85&w=1200&auto=format&fit=crop"
                  alt="Team collaboration and genuine interaction designed by Thrive Experience"
                  className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  data-cursor="PEOPLE"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/30 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-[#F27D26] text-xs font-display font-bold uppercase tracking-wider mb-1">
                  <Users className="w-4 h-4" />
                  <span>Participant-Centric Approach</span>
                </div>
                <p className="text-[#F5F5F0] font-display text-lg font-bold">
                  Merancang Setiap Detil Berdasarkan Karakter Peserta
                </p>
                <p className="text-[#F5F5F0]/60 text-xs mt-1 font-sans">
                  Dari penyusunan alur energi kegiatan hingga interaksi antar tim di lapangan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
