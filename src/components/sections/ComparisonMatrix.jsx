import React from 'react';
import { BadgeHUD } from '../ui/BadgeHUD';
import { Check, X, ShieldAlert, Zap, ArrowUpRight } from 'lucide-react';

export function ComparisonMatrix({ onOpenAudit }) {
  const comparisonData = [
    {
      feature: 'Lead Exclusivity',
      angi: 'Shared with 5 to 7 other local roofers',
      digitol: '100% Exclusive to YOUR company only',
      angiBad: true,
      digitolGood: true
    },
    {
      feature: 'Pricing & Margins',
      angi: 'Race-to-the-bottom price war on bids',
      digitol: 'Full $14,000–$25,000 retail replacement margins',
      angiBad: true,
      digitolGood: true
    },
    {
      feature: 'Lead Pre-Screening',
      angi: 'Unvetted renters & $100 tiny patch seekers',
      digitol: 'Pre-screened homeowners with 15+ year roofs',
      angiBad: true,
      digitolGood: true
    },
    {
      feature: 'Speed to Lead',
      angi: 'Manual call attempts hours later',
      digitol: 'Instant automated text & call in < 45 seconds',
      angiBad: true,
      digitolGood: true
    },
    {
      feature: 'Territory Protection',
      angi: 'Zero protection (floods your area with competitors)',
      digitol: 'Exclusive 35-mile radius territory lock',
      angiBad: true,
      digitolGood: true
    },
    {
      feature: 'Contract Terms',
      angi: '6 to 12 month binding contracts',
      digitol: 'Month-to-Month with 30-day performance guarantee',
      angiBad: true,
      digitolGood: true
    }
  ];

  return (
    <section className="py-28 relative bg-void-900 bg-cyber-grid border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <BadgeHUD variant="cyan" icon={ShieldAlert}>
            THE HONEST COMPARISON
          </BadgeHUD>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            TIRED OF JUNK LEADS FROM <br />
            <span className="text-gradient-cyan">ANGI &amp; HOMEADVISOR?</span>
          </h2>

          <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
            See the exact difference between buying recycled leads that 6 other roofers are fighting over versus having your own exclusive inbound customer acquisition system.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="rounded-3xl glass-panel bg-void-950/90 border border-white/20 shadow-2xl overflow-hidden">
          
          {/* Table Headers */}
          <div className="grid grid-cols-12 p-5 sm:p-7 border-b border-white/10 bg-void-900 text-xs sm:text-sm font-mono font-bold">
            <div className="col-span-4 sm:col-span-4 text-slate-400 uppercase tracking-wider">
              CRITICAL FACTOR
            </div>
            <div className="col-span-4 sm:col-span-4 text-rose-400 uppercase tracking-wider text-center">
              ANGI / SHARED LEADS
            </div>
            <div className="col-span-4 sm:col-span-4 text-neon-emerald uppercase tracking-wider text-center flex items-center justify-center gap-1.5">
              <span>DIGITOL SYSTEM</span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-neon-emerald/20 text-[9px] text-neon-emerald">EXCLUSIVE</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/5">
            {comparisonData.map((row, i) => (
              <div key={i} className="grid grid-cols-12 p-4 sm:p-6 text-xs sm:text-sm font-sans items-center hover:bg-white/[0.02] transition-colors">
                
                {/* Feature Name */}
                <div className="col-span-4 sm:col-span-4 font-mono font-bold text-white pr-2">
                  {row.feature}
                </div>

                {/* Angi / Shared */}
                <div className="col-span-4 sm:col-span-4 text-center px-2">
                  <div className="inline-flex items-center gap-1.5 text-slate-400 text-xs leading-snug">
                    <X className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <span>{row.angi}</span>
                  </div>
                </div>

                {/* Digitol Exclusive */}
                <div className="col-span-4 sm:col-span-4 text-center px-2">
                  <div className="inline-flex items-center gap-1.5 text-neon-emerald font-semibold text-xs leading-snug">
                    <Check className="w-4 h-4 text-neon-emerald flex-shrink-0" />
                    <span>{row.digitol}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Table Bottom CTA */}
          <div className="p-6 sm:p-8 bg-void-900 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-300 text-center sm:text-left">
              <strong className="text-white">Ready to stop sharing leads with competitors?</strong> Every inbound call belongs 100% to you.
            </div>
            <button
              type="button"
              onClick={onOpenAudit}
              className="px-6 py-3 rounded-xl bg-neon-cyan text-void-950 font-mono font-bold text-xs uppercase tracking-wider hover:shadow-neon-cyan transition-all hover:scale-105 active:scale-95 flex items-center gap-2 flex-shrink-0"
            >
              SWITCH TO EXCLUSIVE LEADS <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
