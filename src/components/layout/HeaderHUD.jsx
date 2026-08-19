import React, { useState, useEffect } from 'react';
import { MagneticButton } from '../ui/MagneticButton';
import { BadgeHUD } from '../ui/BadgeHUD';
import { PhoneCall, ShieldCheck, ArrowUpRight, Menu, X, Hammer } from 'lucide-react';

export function HeaderHUD({ onOpenAudit }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'SERVICES', href: '#services' },
    { label: 'JOB CALCULATOR', href: '#calculator' },
    { label: 'HOW IT WORKS', href: '#how-it-works' },
    { label: 'ROOFER RESULTS', href: '#case-studies' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-2.5' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`
          flex items-center justify-between px-5 py-3 rounded-2xl
          transition-all duration-300 border
          ${scrolled
            ? 'glass-panel bg-void-900/90 shadow-2xl border-white/15' 
            : 'bg-void-900/50 backdrop-blur-md border-white/10'}
        `}>
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-void-950 border border-white/20 group-hover:border-neon-cyan transition-colors overflow-hidden">
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(0,242,254,0.4)_360deg)] animate-radar opacity-70" />
              <Hammer className="w-5 h-5 text-neon-cyan relative z-10 transition-transform group-hover:scale-110" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-lg font-black tracking-wider text-white">DIGITOL</span>
                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
              </div>
              <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5">
                ROOFING LEAD &amp; AD ENGINE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-xl bg-void-950/70 border border-white/5 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-slate-300 hover:text-neon-cyan hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Exclusive Territory & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-void-950/80 border border-white/10 text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-neon-emerald animate-ping" />
              <span className="text-neon-emerald font-semibold">EXCLUSIVE TERRITORIES</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400">1 ROOFER / CITY</span>
            </div>

            <MagneticButton
              variant="cyan"
              size="sm"
              onClick={onOpenAudit}
              icon={ArrowUpRight}
              badge="FREE AUDIT"
            >
              GET ROOFING LEADS
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <MagneticButton
              variant="cyan"
              size="sm"
              onClick={onOpenAudit}
              className="px-3 py-1.5 text-xs"
            >
              FREE AUDIT
            </MagneticButton>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl glass-panel bg-void-900/95 border border-white/15 animate-fadeIn">
            <div className="flex flex-col gap-2 font-mono text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-slate-300 hover:text-neon-cyan hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 mt-2">
                <MagneticButton
                  variant="cyan"
                  size="md"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAudit();
                  }}
                  className="w-full justify-center"
                >
                  GET YOUR FREE ROOFING AD AUDIT
                </MagneticButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
