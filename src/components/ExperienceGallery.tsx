import React, { useState } from 'react';
import { galleryImages } from '../data/thriveData';
import { GalleryImage } from '../types';
import { Sparkles, Maximize2, X, Compass, Filter } from 'lucide-react';

export const ExperienceGallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedFilter === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedFilter);

  const filterOptions = [
    { label: 'ALL MOMENTS', value: 'all' },
    { label: 'ADVENTURE', value: 'adventure' },
    { label: 'GATHERING', value: 'gathering' },
    { label: 'TEAM BUILDING', value: 'team-building' },
    { label: 'BEHIND THE SCENES', value: 'production' },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#050505] text-[#F5F5F0] border-t border-b border-[#F5F5F0]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-[#F27D26]" />
              <span className="text-[11px] font-display font-bold tracking-[0.3em] text-[#F27D26] uppercase italic">
                EXPERIENTIAL ARCHIVE
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black uppercase tracking-tight text-[#F5F5F0] leading-none">
              EXPERIENCE GALLERY
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#F5F5F0]/60 font-sans leading-relaxed font-light">
            Koleksi visual autentik momen kebersamaan, ledakan tawa, tantangan jeram liar, dan presisi koordinasi kru di balik layar.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-[#F5F5F0]/10">
          <span className="text-xs text-[#F5F5F0]/40 font-display uppercase tracking-widest mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" />
            FILTER:
          </span>
          {filterOptions.map((opt) => {
            const isActive = selectedFilter === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => setSelectedFilter(opt.value)}
                data-cursor="FILTER"
                className={`px-4 py-2 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-[#F27D26] text-black font-black shadow-md'
                    : 'bg-[#F5F5F0]/5 hover:bg-[#F5F5F0]/10 text-[#F5F5F0]/50 hover:text-[#F5F5F0]'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Editorial Bleed Gallery Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {filteredImages.map((img, idx) => {
            const isSpanEight = idx === 0 || idx === 3 || idx === 7;

            return (
              <div
                key={img.id}
                onClick={() => setLightboxImage(img)}
                data-cursor="VIEW ↗"
                className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-[#0d0e11] border border-[#F5F5F0]/10 transition-all duration-500 hover:border-[#F27D26]/60 ${
                  isSpanEight ? 'md:col-span-8 min-h-[340px] sm:min-h-[440px]' : 'md:col-span-4 min-h-[300px] sm:min-h-[440px]'
                }`}
              >
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-105 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#F5F5F0]/10 text-[10px] font-display font-bold uppercase tracking-widest text-[#F27D26]">
                      {img.category}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#F5F5F0]/10 backdrop-blur-md flex items-center justify-center text-[#F5F5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-[#F5F5F0] group-hover:text-[#F27D26] transition-colors">
                      {img.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F5F5F0]/70 font-sans mt-1 line-clamp-2 font-light">
                      {img.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#0d0e11] rounded-3xl overflow-hidden border border-[#F5F5F0]/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#050505]/70 text-[#F5F5F0] hover:bg-[#F27D26] hover:text-black flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] overflow-hidden bg-black">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0d0e11]">
              <div>
                <span className="text-xs font-display font-bold text-[#F27D26] uppercase tracking-widest block mb-1">
                  {lightboxImage.category}
                </span>
                <h3 className="text-2xl font-display font-black uppercase text-[#F5F5F0]">
                  {lightboxImage.title}
                </h3>
                <p className="text-sm text-[#F5F5F0]/70 font-sans mt-1 font-light">
                  {lightboxImage.caption}
                </p>
              </div>

              <span className="text-xs font-mono text-[#F5F5F0]/40 uppercase tracking-widest shrink-0">
                THRIVE ARCHIVE
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
