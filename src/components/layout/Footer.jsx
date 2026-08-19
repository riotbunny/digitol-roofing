import React, { useState, useEffect } from 'react';
import { Hammer, ArrowUpRight, ShieldCheck } from 'lucide-react';

export function Footer({ onOpenAudit }) {
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <footer className="bg-void-950 border-t border-white/10 relative overflow-hidden">
      
      {/* Top CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/10 relative z-10">
        <div className="rounded-3xl glass-panel bg-void-900/90 border border-white/20 p-8 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 text-center lg:text-left">
            <span className="font-mono text-xs text-neon-cyan tracking-widest uppercase">
              // READY TO FILL YOUR ROOFING CALENDAR?
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
              STOP BUYING SHARED LEADS. <br />
              <span className="text-gradient-cyan">OWN YOUR ENTIRE SERVICE AREA</span>.
            </h3>
            <p className="text-slate-300 font-sans text-sm sm:text-base max-w-xl">
              Get a free 15-minute video teardown of your roofing market. We will show you exactly what keywords and video ads will get you more $14,000+ roof replacements every month.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenAudit}
            className="px-8 py-4 rounded-xl bg-neon-cyan text-void-950 font-mono font-bold text-sm tracking-wider uppercase hover:shadow-neon-cyan transition-all hover:scale-105 active:scale-95 flex items-center gap-2 flex-shrink-0"
          >
            CLAIM YOUR FREE AUDIT <ArrowUpRight className="w-4 h-4" />
          </button>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-void-900 border border-white/20 flex items-center justify-center text-neon-cyan">
                <Hammer className="w-4 h-4" />
              </div>
              <span className="font-mono text-lg font-black text-white">DIGITOL</span>
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              The premier lead generation and growth partner for residential and commercial roofing contractors.
            </p>
            <div className="flex items-center gap-2 font-mono text-[11px] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-neon-emerald animate-ping" />
              <span>TERRITORY LOCK: 1 ROOFER PER CITY</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-white font-bold tracking-wider uppercase mb-3">ROOFER SERVICES</div>
            <div className="space-y-2 text-slate-400">
              <a href="#services" className="block hover:text-neon-cyan transition-colors">Google Ads for Roof Replacements</a>
              <a href="#services" className="block hover:text-neon-cyan transition-colors">Facebook &amp; Instagram Video Ads</a>
              <a href="#services" className="block hover:text-neon-cyan transition-colors">45-Second Speed-to-Lead System</a>
              <a href="#services" className="block hover:text-neon-cyan transition-colors">Drone Job Showcases</a>
              <a href="#services" className="block hover:text-neon-cyan transition-colors">High-Converting Roofing Websites</a>
            </div>
          </div>

          {/* Col 3: Tools */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-white font-bold tracking-wider uppercase mb-3">CONTRACTOR TOOLS</div>
            <div className="space-y-2 text-slate-400">
              <a href="#calculator" className="block hover:text-neon-emerald transition-colors">Roof Revenue Calculator</a>
              <a href="#how-it-works" className="block hover:text-neon-emerald transition-colors">4-Step Booking Process</a>
              <a href="#case-studies" className="block hover:text-neon-emerald transition-colors">Real Contractor Case Studies</a>
              <button type="button" onClick={onOpenAudit} className="block text-left hover:text-neon-emerald transition-colors">Free Video Audit</button>
            </div>
          </div>

          {/* Col 4: Guarantee */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-white font-bold tracking-wider uppercase mb-3">OUR GUARANTEE</div>
            <div className="p-3.5 rounded-lg bg-void-900 border border-white/10 space-y-2 text-slate-300">
              <div className="flex items-center gap-1.5 text-neon-emerald font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>100% EXCLUSIVE LEADS</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-400">
                Your leads are never shared with Angi, Thumbtack, or your local competitors. Every phone call and estimate request belongs 100% to your roofing company.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-slate-400 gap-4">
          <div>&copy; {currentYear} DIGITOL ROOFING MEDIA LLC. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-200 cursor-pointer">PRIVACY POLICY</span>
            <span>&bull;</span>
            <span className="hover:text-slate-200 cursor-pointer">TERMS OF SERVICE</span>
            <span>&bull;</span>
            <span className="hover:text-slate-200 cursor-pointer">EXCLUSIVE TERRITORY POLICY</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
