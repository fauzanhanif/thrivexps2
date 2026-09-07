import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Lightbulb, Users2, TrendingUp } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const [activeMoment, setActiveMoment] = useState<number>(0);

  const pillars = [
    {
      word: 'CREATE',
      subtitle: 'Menciptakan konsep dan pengalaman yang menarik.',
      icon: Lightbulb,
      description: 'Setiap kegiatan dimulai dari eksplorasi ide yang segar. Kami merancang narasi, skenario interaksi, dan alur pengalaman yang memikat dan dirancang khusus sesuai identitas organisasi Anda.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=85&w=1600&auto=format&fit=crop',
      tag: 'Konsep & Narasi'
    },
    {
      word: 'CONNECT',
      subtitle: 'Menghubungkan orang melalui kebersamaan dan pengalaman.',
      icon: Users2,
      description: 'Event terbaik adalah yang meruntuhkan batasan hierarki dan membuka ruang dialog tulus. Melalui aktivitas kolaboratif, kami mempertemukan rasa saling percaya dan kekompakan sejati.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=85&w=1600&auto=format&fit=crop',
      tag: 'Ikatan & Kebersamaan'
    },
    {
      word: 'GROW',
      subtitle: 'Mendorong individu dan tim untuk berkembang bersama.',
      icon: TrendingUp,
      description: 'Pengalaman yang bermakna meninggalkan dampak positif yang bertahan lama. Kami membekali peserta dengan semangat baru, keberanian melangkah, dan sinergi tim yang terus bertumbuh.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=85&w=1600&auto=format&fit=crop',
      tag: 'Pertumbuhan Bersama'
    }
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#050505] border-t border-b border-[#F5F5F0]/10 overflow-hidden text-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#F27D26]" />
            <span className="text-[11px] font-display font-bold tracking-[0.3em] text-[#F27D26] uppercase italic">
              CORE PHILOSOPHY
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black uppercase tracking-tight text-[#F5F5F0] mb-6">
            WHY THRIVE?
          </h2>

          <div className="space-y-3 text-base sm:text-lg text-[#F5F5F0]/60 font-sans leading-relaxed font-light">
            <p className="text-[#F5F5F0] font-normal text-lg sm:text-xl">
              <span className="text-[#F27D26] font-semibold">THRIVE</span> berarti bertumbuh, berkembang, maju, dan menjadi lebih baik.
            </p>
            <p>
              Nama <strong className="text-[#F5F5F0] font-medium">THRIVE EXPERIENCE</strong> lahir dari sebuah keyakinan mendalam bahwa setiap kegiatan dapat menjadi kesempatan emas untuk menciptakan perubahan positif bagi individu maupun tim.
            </p>
          </div>
        </div>

        {/* Three Enormous Visual Moments */}
        <div className="space-y-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isHovered = activeMoment === idx;

            return (
              <div
                key={pillar.word}
                onMouseEnter={() => setActiveMoment(idx)}
                data-cursor="THRIVE"
                className={`relative group overflow-hidden rounded-3xl border transition-all duration-500 ${
                  isHovered
                    ? 'border-[#F27D26]/60 bg-[#101115] shadow-2xl'
                    : 'border-[#F5F5F0]/10 bg-[#0d0e11]'
                }`}
              >
                {/* Background Visual Layer with Gradient */}
                <div className="absolute inset-0 z-0 overflow-hidden opacity-30 group-hover:opacity-45 transition-opacity duration-700">
                  <img
                    src={pillar.image}
                    alt={`${pillar.word} - Thrive Experience`}
                    className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                </div>

                {/* Content Layout */}
                <div className="relative z-10 p-8 sm:p-12 md:p-16 flex flex-col justify-between min-h-[380px] lg:min-h-[420px]">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-display font-mono text-[#F27D26] px-3 py-1 rounded-full bg-[#F27D26]/10 border border-[#F27D26]/30 font-bold">
                        PHASE 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-display uppercase tracking-widest text-[#F5F5F0]/40">
                        {pillar.tag}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-full bg-white/5 border border-[#F5F5F0]/10 flex items-center justify-center text-[#F5F5F0] group-hover:bg-[#F27D26] group-hover:text-black transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Enormous Word Headline */}
                  <div className="my-8">
                    <h3 className="text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-tighter text-[#F5F5F0] uppercase leading-none group-hover:text-[#F27D26] transition-colors duration-500">
                      {pillar.word}
                    </h3>
                    <p className="text-xl sm:text-2xl md:text-3xl text-[#F5F5F0]/90 font-display font-medium mt-3">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Bottom Description */}
                  <div className="max-w-2xl pt-4 border-t border-[#F5F5F0]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-sm sm:text-base text-[#F5F5F0]/60 font-sans leading-relaxed">
                      {pillar.description}
                    </p>
                    <span className="hidden sm:flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-[#F5F5F0] group-hover:text-[#F27D26] shrink-0 transition-colors">
                      Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
