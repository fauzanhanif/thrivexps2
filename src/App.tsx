import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { About } from './components/About';
import { Philosophy } from './components/Philosophy';
import { ExperienceCategories } from './components/ExperienceCategories';
import { Services } from './components/Services';
import { AdventureExperience } from './components/AdventureExperience';
import { OurApproach } from './components/OurApproach';
import { WhyThrive } from './components/WhyThrive';
import { TargetAudience } from './components/TargetAudience';
import { AreaOfService } from './components/AreaOfService';
import { Team } from './components/Team';
import { Commitment } from './components/Commitment';
import { ExperienceGallery } from './components/ExperienceGallery';
import { FinalStatement } from './components/FinalStatement';
import { FinalCTA } from './components/FinalCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F0] selection:bg-[#F27D26] selection:text-black font-sans relative">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Floating Navigation */}
      <Navbar />

      {/* Main Continuous Editorial Story Sequence */}
      <main>
        {/* 01. Hero */}
        <Hero />

        {/* 02. Brand Statement */}
        <BrandStatement />

        {/* 03. About */}
        <About />

        {/* 04. Philosophy */}
        <Philosophy />

        {/* 05. Experience Categories */}
        <ExperienceCategories />

        {/* 06. Services */}
        <Services />

        {/* 07. Adventure Experience */}
        <AdventureExperience />

        {/* 08. Our Approach */}
        <OurApproach />

        {/* 09. Why Thrive */}
        <WhyThrive />

        {/* 10. Target Audience */}
        <TargetAudience />

        {/* 11. Area of Service */}
        <AreaOfService />

        {/* 12. Team */}
        <Team />

        {/* 13. Our Commitment */}
        <Commitment />

        {/* 14. Experience Gallery */}
        <ExperienceGallery />

        {/* 15. Final Brand Statement */}
        <FinalStatement />

        {/* 16. Final CTA */}
        <FinalCTA />

        {/* 17. Contact */}
        <Contact />
      </main>

      {/* 18. Footer */}
      <Footer />

      {/* Quick WhatsApp Concierge Button */}
      <WhatsAppFloating />
    </div>
  );
}
