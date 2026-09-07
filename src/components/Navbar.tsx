import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X, Compass } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCES', href: '#experiences' },
    { name: 'SERVICES', href: '#services' },
    { name: 'APPROACH', href: '#approach' },
    { name: 'TEAM', href: '#team' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#F5F5F0]/10 py-4 shadow-2xl'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo with Diamond Motif */}
          <a
            href="#"
            className="group flex items-center gap-3 text-[#F5F5F0] tracking-tighter"
            aria-label="THRIVE EXPERIENCE Home"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#F27D26] rotate-45 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110 shrink-0" />
            <div className="flex flex-col">
              <span className="font-bold tracking-widest text-lg sm:text-xl uppercase text-[#F5F5F0] group-hover:text-[#F27D26] transition-colors font-display">
                THRIVE <span className="font-light opacity-50">EXPERIENCE</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#F5F5F0]/40 font-sans -mt-0.5 hidden sm:block">
                Bogor • West Java
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[10px] tracking-[0.2em] font-semibold opacity-70">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-[#F5F5F0] hover:text-[#F27D26] hover:opacity-100 transition-all duration-200 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F27D26] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              data-cursor="TALK ↗"
              className="hidden sm:inline-flex items-center gap-2 border border-[#F5F5F0]/30 px-6 py-2.5 rounded-full text-[10px] tracking-[0.2em] font-bold text-[#F5F5F0] hover:bg-[#F5F5F0] hover:text-black transition-all duration-300 group"
            >
              <span>LET'S TALK</span>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-white/5 border border-[#F5F5F0]/10 text-[#F5F5F0] hover:bg-[#F5F5F0]/10 transition-colors lg:hidden focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 bg-[#050505]/98 backdrop-blur-xl flex flex-col justify-between px-8 pt-28 pb-12 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase font-display tracking-[0.3em] text-[#F27D26] font-bold">
                Navigation Index
              </span>
              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    className="font-display text-3xl font-bold text-[#F5F5F0] hover:text-[#F27D26] transition-colors flex items-center justify-between border-b border-[#F5F5F0]/10 pb-3"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#F5F5F0]/40 font-mono">0{idx + 1}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 pt-8 border-t border-[#F5F5F0]/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#F27D26] text-black font-display text-xs font-bold tracking-[0.2em] uppercase"
              >
                <span>LET'S TALK ↗</span>
              </a>
              <div className="flex justify-between items-center text-xs text-[#F5F5F0]/40 font-sans">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#F27D26]" />
                  Bogor, West Java — Indonesia
                </span>
                <span className="tracking-widest">CREATE • CONNECT • GROW</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
