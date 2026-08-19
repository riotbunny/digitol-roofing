import React, { useState, useEffect } from 'react';
import { MagneticButton } from '../ui/MagneticButton';
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
    { label: 'CALCULATOR', href: '#calculator' },
    { label: 'HOW IT WORKS', href: '#how-it-works' },
    { label: 'ROOFER RESULTS', href: '#case-studies' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-2.5' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`
          flex items-center justify-between px-5 py-3 rounded-2xl
          transition-all duration-300 border
          ${scrolled
            ? 'glass-panel bg-void-900/95 shadow-2xl border-white/15' 
            : 'bg-void-900/70 backdrop-blur-md border-white/10'}
        `}>
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 border border-amber-400/50 shadow-md text-void-950 flex-shrink-0 group-hover:scale-105 transition-transform">
              <Hammer className="w-5 h-5 font-black text-void-950 fill-void-950" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-lg font-black tracking-wider text-white">DIGITOL</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              </div>
              <span className="text-[9px] font-mono tracking-widest text-amber-400 font-bold uppercase -mt-0.5">
                ROOFING LEAD &amp; AD ENGINE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-xl bg-void-950/80 border border-white/5 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone Call & Exclusive Territory Pill */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:5558397663"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-void-950/80 border border-white/10 text-[11px] font-mono text-slate-300 hover:border-amber-400/40 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-white font-bold">(555) 839-ROOF</span>
            </a>

            <MagneticButton
              variant="amber"
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
              variant="amber"
              size="sm"
              onClick={onOpenAudit}
              className="px-3 py-1.5 text-xs font-bold"
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
                  className="px-3 py-2.5 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 mt-2 space-y-2">
                <a
                  href="tel:5558397663"
                  className="w-full py-2.5 px-4 rounded-xl bg-void-950 border border-white/15 text-white font-mono text-xs font-bold flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>CALL (555) 839-ROOF</span>
                </a>
                <MagneticButton
                  variant="amber"
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
