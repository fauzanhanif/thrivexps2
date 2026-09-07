import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDown, MapPin, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#050505] text-[#F5F5F0] pt-28 pb-10 px-6 md:px-12">
      {/* Background Visual Layer with Mix-Blend-Luminosity & Cinematic Film Gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.38 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full mix-blend-luminosity overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
            alt="Thrive Experience Real Event Connection and Celebration"
            className="w-full h-full object-cover object-center filter contrast-110"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Sophisticated Dark Gradient Fades */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.85)_100%)]" />

        {/* Ambient subtle warm terracotta glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F27D26]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Center */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 sm:py-12">
        {/* Eyebrow with horizontal orange rule */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 text-[#F27D26] mb-8"
        >
          <div className="h-[1px] w-12 bg-[#F27D26]" />
          <span className="text-[11px] tracking-[0.4em] font-bold uppercase italic font-display">
            Event • Gathering • Team Building • Adventure
          </span>
        </motion.div>

        {/* Main Editorial Headline with Outlined Text */}
        <div className="space-y-1 mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[48px] sm:text-[76px] md:text-[96px] lg:text-[108px] leading-[0.85] font-black tracking-tighter uppercase font-display text-[#F5F5F0]"
          >
            WE DON'T JUST<br />
            ORGANIZE EVENTS.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-[48px] sm:text-[76px] md:text-[96px] lg:text-[108px] leading-[0.85] font-black tracking-tighter uppercase italic font-display outline-text-bright text-transparent"
            style={{ WebkitTextStroke: '1.5px #F5F5F0' }}
          >
            WE CREATE
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[48px] sm:text-[76px] md:text-[96px] lg:text-[108px] leading-[0.85] font-black tracking-tighter uppercase font-display text-[#F5F5F0]"
          >
            EXPERIENCES.
          </motion.h2>
        </div>

        {/* Supporting Copy & Action Button Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-8"
          >
            <p className="text-base sm:text-lg md:text-xl text-[#F5F5F0] opacity-60 font-sans font-light leading-relaxed max-w-2xl">
              <strong className="text-[#F5F5F0] opacity-100 font-medium">THRIVE EXPERIENCE</strong> membantu
              perusahaan, organisasi, komunitas, dan kelompok menciptakan kegiatan yang profesional,
              kreatif, terencana rapi, dan memberikan dampak emosional yang berkesan bagi setiap peserta.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                data-cursor="START ↗"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#F27D26] text-black font-display text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#ff8f3d] transition-all duration-300 shadow-xl shadow-[#F27D26]/20 group"
              >
                <span>START YOUR EXPERIENCE</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="#services"
                data-cursor="SERVICES ↓"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border border-[#F5F5F0]/30 hover:border-[#F5F5F0] text-[#F5F5F0] font-display text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-sm group"
              >
                <span>EXPLORE OUR SERVICES</span>
                <ArrowDown className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>
          </motion.div>

          {/* Right Column Highlights / Philosophy Pill with Circular Action */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex items-center lg:justify-end gap-6"
          >
            <div className="p-6 rounded-2xl bg-[#0e0f12] border border-[#F5F5F0]/10 backdrop-blur-md w-full sm:w-auto">
              <p className="text-[10px] tracking-widest uppercase opacity-40 mb-2 font-display">Philosophy</p>
              <p className="text-sm font-semibold flex items-center gap-3 tracking-tighter text-[#F5F5F0]">
                <span>CREATE</span>
                <span className="text-[#F27D26]">•</span>
                <span>CONNECT</span>
                <span className="text-[#F27D26]">•</span>
                <span>GROW</span>
              </p>
              <p className="text-[#F5F5F0] opacity-50 text-xs mt-2 font-sans font-light">
                Merancang pengalaman bermakna yang menghubungkan orang dan mendorong pertumbuhan.
              </p>
            </div>

            <a
              href="#contact"
              data-cursor="START ↗"
              className="hidden xl:flex w-24 h-24 rounded-full bg-[#F27D26] text-black flex-col items-center justify-center group hover:scale-105 transition-transform shrink-0 shadow-2xl shadow-[#F27D26]/30"
            >
              <span className="text-[10px] font-bold tracking-widest uppercase font-display">START</span>
              <span className="text-2xl mt-[-4px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.95 }}
        className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-[#F5F5F0]/10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-xs font-display tracking-widest uppercase"
      >
        <div className="flex gap-12 sm:gap-20">
          <div>
            <p className="text-[10px] tracking-widest uppercase opacity-40 mb-1">Base Office</p>
            <p className="text-xs sm:text-sm font-medium text-[#F5F5F0]">Bogor, West Java — Indonesia</p>
          </div>
          <div className="hidden sm:block">
            <p className="text-[10px] tracking-widest uppercase opacity-40 mb-1">Specialization</p>
            <p className="text-xs sm:text-sm font-medium text-[#F5F5F0]">Experience Management & EO</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <p className="text-[10px] tracking-widest uppercase opacity-40 mb-1">Scroll to explore</p>
            <div className="h-6 w-[1px] bg-gradient-to-b from-[#F27D26] to-transparent" />
          </div>
          <a
            href="#belief"
            className="inline-flex items-center gap-1.5 text-[#F5F5F0] opacity-70 hover:opacity-100 hover:text-[#F27D26] transition-colors"
          >
            <ArrowDown className="w-4 h-4 animate-bounce text-[#F27D26]" />
          </a>
        </div>
      </motion.div>

      {/* Subtle bottom gradient rule from theme */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#F27D26] via-transparent to-transparent opacity-20" />
    </section>
  );
};
