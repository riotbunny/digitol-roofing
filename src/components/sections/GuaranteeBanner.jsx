import React from 'react';
import { ShieldCheck, ArrowUpRight, Zap, CheckCircle2 } from 'lucide-react';

export function GuaranteeBanner({ onOpenAudit }) {
  return (
    <section className="py-16 relative bg-void-950 border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl glass-panel bg-void-900/90 border border-neon-emerald/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-neon-emerald/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Guarantee Info */}
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-neon-emerald/15 border border-neon-emerald flex items-center justify-center text-neon-emerald flex-shrink-0">
              <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-neon-emerald font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>THE DIGITOL ROOFER GUARANTEE</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
                5 BOOKED ESTIMATES IN 30 DAYS OR WE WORK FOR FREE.
              </h3>

              <p className="text-slate-300 font-sans text-xs sm:text-sm max-w-2xl leading-relaxed">
                If we do not put at least 5 qualified, in-person roof replacement estimate opportunities on your sales team&apos;s calendar within the first 30 days, we work 100% free of charge until we do. Month-to-month agreement. Zero long-term contracts.
              </p>
            </div>
          </div>

          {/* Right Action */}
          <button
            type="button"
            onClick={onOpenAudit}
            className="w-full lg:w-auto px-8 py-4 rounded-xl bg-neon-emerald text-void-950 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider hover:shadow-neon-emerald transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 flex-shrink-0 shadow-lg"
          >
            <span>CLAIM RISK-FREE AUDIT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
}
