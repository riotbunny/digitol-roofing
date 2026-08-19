import React, { useState } from 'react';
import { CASE_STUDIES } from '../../data/agencyData';
import { BadgeHUD } from '../ui/BadgeHUD';
import { MagneticButton } from '../ui/MagneticButton';
import { Trophy, ArrowUpRight, MapPin, CheckCircle2 } from 'lucide-react';

export function CaseStudyVault({ onOpenAudit }) {
  const [selectedCase, setSelectedCase] = useState(CASE_STUDIES[0]);

  return (
    <section id="case-studies" className="py-28 relative bg-void-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <BadgeHUD variant="purple" icon={Trophy}>
            REAL ROOFING CONTRACTOR RESULTS
          </BadgeHUD>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            ROOFING COMPANIES WE HAVE <br />
            <span className="text-gradient-purple">SCALED WITH EXCLUSIVE LEADS</span>.
          </h2>

          <p className="text-slate-300 font-sans text-base sm:text-lg">
            Real roofing companies. Real ad spends. Verified signed replacement contracts in residential, commercial, and storm restoration.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {CASE_STUDIES.map((study) => (
            <button
              key={study.id}
              type="button"
              onClick={() => setSelectedCase(study)}
              className={`px-5 py-3 rounded-xl font-mono text-xs border transition-all ${
                selectedCase.id === study.id
                  ? 'bg-neon-purple/20 border-neon-purple text-white shadow-neon-purple/20 shadow-md font-bold'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
              }`}
            >
              <span>{study.client}</span>
              <span className="ml-2 text-[10px] text-neon-purple">({study.afterMetric})</span>
            </button>
          ))}
        </div>

        {/* Detailed Case Card */}
        <div className="p-8 sm:p-12 rounded-2xl glass-panel bg-void-900/90 border border-white/15 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info (Span 7) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neon-cyan" />
                  {selectedCase.location}
                </span>
                <span className="px-3 py-1 rounded bg-neon-emerald/15 border border-neon-emerald/30 text-xs font-mono text-neon-emerald font-bold">
                  {selectedCase.specialty}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug">
                {selectedCase.tagline}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                {selectedCase.summary}
              </p>

              {/* Channels Deployed */}
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase mb-2">CAMPAIGNS DEPLOYED:</div>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.channels.map((ch) => (
                    <span key={ch} className="px-2.5 py-1 rounded-md bg-void-950 border border-white/10 font-mono text-xs text-neon-cyan">
                      + {ch}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <MagneticButton
                  variant="purple"
                  size="md"
                  onClick={onOpenAudit}
                  icon={ArrowUpRight}
                >
                  GET SIMILAR RESULTS IN YOUR CITY
                </MagneticButton>
              </div>

            </div>

            {/* Right Comparison Box (Span 5) */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-void-950 border border-white/10 space-y-6">
              
              <div className="font-mono text-xs text-slate-400 uppercase tracking-widest pb-3 border-b border-white/10 flex justify-between items-center">
                <span>CONTRACTOR SCORECARD</span>
                <span className="text-neon-emerald">VERIFIED</span>
              </div>

              {/* Before vs After */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 font-mono">
                  <div className="text-xs text-slate-400">BEFORE DIGITOL</div>
                  <div className="text-2xl font-bold text-slate-400 mt-1 line-through">{selectedCase.beforeMetric}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Junk Shared Leads</div>
                </div>

                <div className="p-4 rounded-lg bg-neon-purple/10 border border-neon-purple/40 font-mono">
                  <div className="text-xs text-neon-purple font-bold">AFTER DIGITOL</div>
                  <div className="text-3xl font-black text-white mt-1 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]">{selectedCase.afterMetric}</div>
                  <div className="text-[10px] text-neon-purple mt-0.5">Consistent Jobs</div>
                </div>
              </div>

              {/* Cost per inspection & avg ticket */}
              <div className="grid grid-cols-2 gap-4 font-mono">
                <div className="p-3.5 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-400">COST PER INSPECTION</div>
                  <div className="text-lg font-bold text-neon-cyan mt-0.5">{selectedCase.costPerEstimate}</div>
                </div>

                <div className="p-3.5 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-400">AVERAGE TICKET</div>
                  <div className="text-lg font-bold text-neon-emerald mt-0.5">{selectedCase.avgTicket}</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
