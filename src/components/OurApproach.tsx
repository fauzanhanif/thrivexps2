import React, { useState } from 'react';
import { approachSteps } from '../data/thriveData';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export const OurApproach: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = approachSteps[activeStepIndex];

  return (
    <section id="approach" className="relative py-28 md:py-36 bg-[#050505] text-[#F5F5F0] border-t border-b border-[#F5F5F0]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-[#F27D26]" />
            <span className="text-[11px] font-display font-bold tracking-[0.3em] text-[#F27D26] uppercase italic">
              5-STEP WORKFLOW
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black uppercase tracking-tight text-[#F5F5F0] mb-6 leading-[0.95]">
            FROM IDEA<br />TO EXPERIENCE.
          </h2>

          <p className="text-base sm:text-xl text-[#F5F5F0]/60 font-sans leading-relaxed font-light">
            Metodologi terstruktur yang menjamin setiap kegiatan berjalan sesuai visi, terkontrol secara budgeting, dan memberikan dampak emosional yang nyata bagi peserta.
          </p>
        </div>

        {/* Progress Timeline Header Buttons */}
        <div className="relative mb-12">
          {/* Background Track Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-[#F5F5F0]/10 -translate-y-1/2 z-0" />
          {/* Active Track Line */}
          <div
            className="hidden md:block absolute top-1/2 left-0 h-[2px] bg-[#F27D26] -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeStepIndex / (approachSteps.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 relative z-10">
            {approachSteps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPassed = activeStepIndex > idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  data-cursor="STEP"
                  className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between min-h-[110px] sm:min-h-[130px] ${
                    isActive
                      ? 'bg-[#F27D26] border-[#F27D26] text-black shadow-xl shadow-[#F27D26]/20 scale-102'
                      : isPassed
                      ? 'bg-[#0e0f13] border-[#F5F5F0]/20 text-[#F5F5F0]'
                      : 'bg-[#F5F5F0]/5 hover:bg-[#F5F5F0]/10 border-[#F5F5F0]/10 text-[#F5F5F0]/50'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isActive ? 'text-black' : 'text-[#F27D26]'
                      }`}
                    >
                      {step.step}
                    </span>
                    {isPassed && !isActive && (
                      <Check className="w-3.5 h-3.5 text-[#F27D26]" />
                    )}
                  </div>

                  <div>
                    <h3
                      className={`text-base sm:text-lg font-display font-black uppercase tracking-tight ${
                        isActive ? 'text-black' : 'text-[#F5F5F0]'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <span className="text-[10px] font-sans opacity-70 line-clamp-1">
                      {step.description}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Focused Active Step Detail Card */}
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#0d0e11] border border-[#F5F5F0]/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F27D26]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Step Number & Definition */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl sm:text-6xl md:text-7xl font-mono font-black text-[#F27D26]">
                  {currentStep.step}
                </span>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-display text-[#F5F5F0]/40 font-bold block">
                    STAGE OVERVIEW
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-display font-black uppercase text-[#F5F5F0]">
                    {currentStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-xl sm:text-2xl text-[#F5F5F0]/90 font-display font-medium leading-snug">
                {currentStep.description}
              </p>

              <div className="pt-4 flex items-center gap-3">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-5 py-2.5 rounded-full bg-[#F5F5F0]/5 hover:bg-[#F5F5F0]/10 text-xs font-display font-bold uppercase tracking-wider text-[#F5F5F0] disabled:opacity-30 transition-all border border-[#F5F5F0]/10"
                >
                  ← PREV STEP
                </button>
                <button
                  disabled={activeStepIndex === approachSteps.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(approachSteps.length - 1, prev + 1))}
                  className="px-6 py-2.5 rounded-full bg-[#F27D26] hover:bg-[#ff8f3d] text-xs font-display font-bold uppercase tracking-[0.15em] disabled:opacity-30 transition-all text-black flex items-center gap-2"
                >
                  <span>NEXT STEP</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#050505]/60 border border-[#F5F5F0]/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#F27D26]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Rangkaian Eksekusi Tahap Ini</span>
              </div>

              <div className="space-y-3">
                {currentStep.actions.map((act, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0f1014] border border-[#F5F5F0]/5 text-sm text-[#F5F5F0]/80 font-sans"
                  >
                    <Check className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
