import React, { useState } from 'react';
import { brandInfo, experienceCategories } from '../data/thriveData';
import { ContactFormData } from '../types';
import { ArrowUpRight, CheckCircle2, MessageSquare, MapPin, Mail, Instagram, Phone, Globe, User, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    eventType: 'Team Building',
    estimatedParticipants: '50-100 Orang',
    preferredDate: '',
    idea: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Halo THRIVE EXPERIENCE!\n\nNama: ${formData.name || '-'}\nInstansi: ${formData.company || '-'}\nEvent: ${formData.eventType}\nEstimasi Peserta: ${formData.estimatedParticipants}\nTanggal: ${formData.preferredDate || 'Tentatif'}\nCatatan: ${formData.idea || 'Ingin konsultasi konsep event.'}\n\nMohon info ketersediaan dan proposal.`
    );
    // Open whatsapp with placeholder or general phone link
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[#050505] text-[#F5F5F0] border-t border-[#F5F5F0]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-[#F27D26]" />
            <span className="text-[11px] font-display font-bold tracking-[0.3em] text-[#F27D26] uppercase italic">
              INITIATE A CONVERSATION
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black uppercase tracking-tight text-[#F5F5F0] mb-6 leading-[0.95]">
            LET'S CREATE<br />SOMETHING MEMORABLE.
          </h2>

          <p className="text-base sm:text-xl text-[#F5F5F0]/60 font-sans leading-relaxed font-light">
            Ceritakan rencana, visi, atau pertanyaan Anda. Tim THRIVE EXPERIENCE siap menyusun konsep, alokasi anggaran, dan rundown awal untuk Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-10 rounded-3xl bg-[#0d0e11] border border-[#F27D26]/40 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#F27D26]/20 text-[#F27D26] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-[#F5F5F0]">
                  PESAN ANDA TELAH DITERIMA
                </h3>
                <p className="text-[#F5F5F0]/70 text-sm sm:text-base font-sans leading-relaxed max-w-md mx-auto font-light">
                  Terima kasih telah menghubungi THRIVE EXPERIENCE. Tim kami akan segera meninjau kebutuhan agenda Anda.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F27D26] hover:bg-[#e06d19] text-black font-display text-xs font-black uppercase tracking-wider transition-all"
                  >
                    <span>Teruskan via WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#F5F5F0]/40 hover:text-[#F5F5F0] font-display uppercase tracking-wider"
                  >
                    Kirim Form Baru
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 sm:p-10 rounded-3xl bg-[#0d0e11] border border-[#F5F5F0]/10 shadow-2xl space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-display font-bold uppercase tracking-wider text-[#F5F5F0]/70 block">
                      Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Nama Lengkap Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#050505] border border-[#F5F5F0]/10 text-[#F5F5F0] placeholder-[#F5F5F0]/30 text-sm focus:outline-hidden focus:border-[#F27D26] transition-colors"
                    />
                  </div>

                  {/* Company / Organization */}
                  <div className="space-y-2">
                    <label className="text-xs font-display font-bold uppercase tracking-wider text-[#F5F5F0]/70 block">
                      Company / Organization *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Nama Perusahaan / Komunitas"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#050505] border border-[#F5F5F0]/10 text-[#F5F5F0] placeholder-[#F5F5F0]/30 text-sm focus:outline-hidden focus:border-[#F27D26] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-display font-bold uppercase tracking-wider text-[#F5F5F0]/70 block">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="nama@perusahaan.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#050505] border border-[#F5F5F0]/10 text-[#F5F5F0] placeholder-[#F5F5F0]/30 text-sm focus:outline-hidden focus:border-[#F27D26] transition-colors"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <label className="text-xs font-display font-bold uppercase tracking-wider text-[#F5F5F0]/70 block">
                      WhatsApp Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="0812-xxxx-xxxx"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#050505] border border-[#F5F5F0]/10 text-[#F5F5F0] placeholder-[#F5F5F0]/30 text-sm focus:outline-hidden focus:border-[#F27D26] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Event Type */}
                  <div className="space-y-2">
                    <label className="text-xs font-display font-bold uppercase tracking-wider text-[#F5F5F0]/70 block">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#050505] border border-[#F5F5F0]/10 text-[#F5F5F0] text-sm focus:outline-hidden focus:border-[#F27D26] transition-colors"
                    >
                      {experienceCategories.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                      <option value="Custom Outbound & Adventure">Custom Adventure</option>
                      <option value="Other">Lainnya</option>
                    </select>
                  </div>

                  {/* Estimated Participants */}
                  <div className="space-y-2">
                    <label className="text-xs font-display font-bold uppercase tracking-wider text-[#F5F5F0]/70 block">
                      Estimated Participants
                    </label>
                    <select
                      value={formData.estimatedParticipants}
                      onChange={(e) => setFormData({ ...formData, estimatedParticipants: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#050505] border border-[#F5F5F0]/10 text-[#F5F5F0] text-sm focus:outline-hidden focus:border-[#F27D26] transition-colors"
                    >
                      <option value="20-50 Orang">20 - 50 Orang</option>
                      <option value="50-100 Orang">50 - 100 Orang</option>
                      <option value="100-250 Orang">100 - 250 Orang</option>
                      <option value="250-500 Orang">250 - 500 Orang</option>
                      <option value="> 500 Orang">&gt; 500 Orang</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <label className="text-xs font-display font-bold uppercase tracking-wider text-[#F5F5F0]/70 block">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#050505] border border-[#F5F5F0]/10 text-[#F5F5F0] text-sm focus:outline-hidden focus:border-[#F27D26] transition-colors"
                    />
                  </div>
                </div>

                {/* Tell us about your idea */}
                <div className="space-y-2">
                  <label className="text-xs font-display font-bold uppercase tracking-wider text-[#F5F5F0]/70 block">
                    Tell us about your idea *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Sampaikan konsep awal, destinasi yang diminati, atau objektif utama yang ingin dicapai..."
                    value={formData.idea}
                    onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#050505] border border-[#F5F5F0]/10 text-[#F5F5F0] placeholder-[#F5F5F0]/30 text-sm focus:outline-hidden focus:border-[#F27D26] transition-colors resize-none"
                  />
                </div>

                {/* Submit & WhatsApp Shortcut */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    data-cursor="SUBMIT ↗"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#F27D26] hover:bg-[#e06d19] text-black font-display text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#F27D26]/25 group"
                  >
                    <span>START A CONVERSATION</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#F5F5F0]/10 hover:bg-[#F5F5F0]/20 text-[#F5F5F0] font-display text-sm font-semibold tracking-wider border border-[#F5F5F0]/10 transition-all"
                  >
                    <Send className="w-4 h-4 text-[#F27D26]" />
                    <span>Kirim via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Source of Truth Official Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0d0e11] border border-[#F5F5F0]/10 space-y-8">
              <div>
                <span className="text-xs font-display font-bold uppercase tracking-widest text-[#F27D26] block mb-2">
                  OFFICIAL COMPANY DIRECTORY
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-[#F5F5F0]">
                  {brandInfo.contact.company}
                </h3>
                <p className="text-xs text-[#F5F5F0]/50 font-sans mt-1">
                  {brandInfo.contact.role}
                </p>
              </div>

              {/* Leadership */}
              <div className="space-y-4 pt-4 border-t border-[#F5F5F0]/10">
                <div className="flex items-start gap-3.5">
                  <User className="w-4 h-4 text-[#F27D26] shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] font-display font-bold text-[#F5F5F0]/40 uppercase tracking-widest block">
                      FOUNDER
                    </span>
                    <span className="text-sm font-display font-bold text-[#F5F5F0] uppercase">
                      {brandInfo.contact.founder}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <User className="w-4 h-4 text-[#F27D26] shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] font-display font-bold text-[#F5F5F0]/40 uppercase tracking-widest block">
                      CO-FOUNDER
                    </span>
                    <span className="text-sm font-display font-bold text-[#F5F5F0] uppercase">
                      {brandInfo.contact.coFounder}
                    </span>
                  </div>
                </div>
              </div>

              {/* Channel Placeholders (Truthful as per company profile) */}
              <div className="space-y-4 pt-4 border-t border-[#F5F5F0]/10">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="flex items-center gap-2.5 text-[#F5F5F0]/60">
                    <Instagram className="w-4 h-4 text-[#F5F5F0]/40" />
                    Instagram
                  </span>
                  <span className="text-[#F5F5F0]/40 font-mono italic">
                    {brandInfo.contact.instagram}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="flex items-center gap-2.5 text-[#F5F5F0]/60">
                    <Phone className="w-4 h-4 text-[#F5F5F0]/40" />
                    WhatsApp
                  </span>
                  <span className="text-[#F5F5F0]/40 font-mono italic">
                    {brandInfo.contact.whatsapp}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="flex items-center gap-2.5 text-[#F5F5F0]/60">
                    <Mail className="w-4 h-4 text-[#F5F5F0]/40" />
                    Email
                  </span>
                  <span className="text-[#F5F5F0]/40 font-mono italic">
                    {brandInfo.contact.email}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="flex items-center gap-2.5 text-[#F5F5F0]/60">
                    <Globe className="w-4 h-4 text-[#F5F5F0]/40" />
                    Website
                  </span>
                  <span className="text-[#F5F5F0]/40 font-mono italic">
                    {brandInfo.contact.website}
                  </span>
                </div>
              </div>

              {/* Geographic Base */}
              <div className="pt-4 border-t border-[#F5F5F0]/10 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-display font-bold text-[#F5F5F0]/40 uppercase tracking-widest block">
                    BASE OF OPERATIONS
                  </span>
                  <p className="text-sm font-display font-bold text-[#F5F5F0]">
                    {brandInfo.contact.location}
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
