import React, { useState, useMemo } from 'react';
import { MagneticButton } from '../ui/MagneticButton';
import { BadgeHUD } from '../ui/BadgeHUD';
import { Calculator, ArrowUpRight, Zap, Target, Hammer, DollarSign, Home } from 'lucide-react';

export function ROASSimulator({ onLockInTarget }) {
  const [adBudget, setAdBudget] = useState(5000);
  const [avgTicket, setAvgTicket] = useState(14000);
  const [roofType, setRoofType] = useState('residential');

  const specialties = {
    residential: { name: 'Residential Shingle Re-Roofs', closeRate: 0.35, costPerLead: 75 },
    commercial: { name: 'Commercial TPO / Flat Roofs', closeRate: 0.25, costPerLead: 140 },
    storm: { name: 'Storm Damage Insurance Claims', closeRate: 0.45, costPerLead: 65 },
    metal: { name: 'Standing Seam Metal & Tile', closeRate: 0.30, costPerLead: 95 },
  };

  const calculation = useMemo(() => {
    const config = specialties[roofType];
    const estimatedLeads = Math.round(adBudget / config.costPerLead);
    const bookedEstimates = Math.round(estimatedLeads * 0.65);
    const closedJobs = Math.max(1, Math.round(bookedEstimates * config.closeRate));
    const projectedMonthlyRevenue = closedJobs * avgTicket;
    const projectedAnnualRevenue = projectedMonthlyRevenue * 12;
    const estimatedNetProfit = projectedMonthlyRevenue - adBudget;

    return {
      estimatedLeads,
      bookedEstimates,
      closedJobs,
      projectedMonthlyRevenue,
      projectedAnnualRevenue,
      estimatedNetProfit,
    };
  }, [adBudget, avgTicket, roofType]);

  return (
    <section id="calculator" className="py-28 relative bg-void-950 border-t border-white/10 overflow-hidden">
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-neon-emerald/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <BadgeHUD variant="emerald" icon={Calculator}>
              ROOFING REVENUE ESTIMATOR
            </BadgeHUD>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight mt-3">
              CALCULATE YOUR <span className="text-gradient-emerald">MONTHLY ROOF JOBS</span>.
            </h2>
          </div>
          <p className="text-slate-300 font-mono text-xs max-w-md">
            See how many signed roof replacements and in-person estimates your monthly ad budget can generate.
          </p>
        </div>

        {/* Tactical Simulator Shell */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Panel (Span 6) */}
          <div className="lg:col-span-6 p-7 sm:p-9 rounded-2xl glass-panel border border-white/15 shadow-2xl flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Roofing Specialty Selector */}
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-3">
                  1. SELECT YOUR PRIMARY ROOFING TYPE
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {Object.entries(specialties).map(([key, data]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setRoofType(key)}
                      className={`p-3 rounded-xl font-mono text-xs border text-left transition-all ${
                        roofType === key
                          ? 'bg-neon-emerald/15 border-neon-emerald text-white shadow-sm'
                          : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <div className="font-bold text-white">{data.name}</div>
                      <div className="text-[10px] text-neon-emerald mt-0.5">{Math.round(data.closeRate * 100)}% Avg Close Rate</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Ad Budget Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                    2. MONTHLY AD BUDGET
                  </label>
                  <span className="font-mono text-xl font-bold text-neon-cyan">
                    ${adBudget.toLocaleString('en-US')} / month
                  </span>
                </div>

                <input
                  type="range"
                  min="2500"
                  max="25000"
                  step="500"
                  value={adBudget}
                  onChange={(e) => setAdBudget(Number(e.target.value))}
                  className="w-full h-2 bg-void-900 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
                />

                <div className="flex justify-between font-mono text-[10px] text-slate-400">
                  <span>$2,500 / mo</span>
                  <span>$10,000 / mo</span>
                  <span>$25,000 / mo</span>
                </div>
              </div>

              {/* Average Job Ticket Size Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                    3. AVERAGE ROOF TICKET VALUE
                  </label>
                  <span className="font-mono text-xl font-bold text-neon-amber">
                    ${avgTicket.toLocaleString('en-US')} / job
                  </span>
                </div>

                <input
                  type="range"
                  min="8000"
                  max="35000"
                  step="1000"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full h-2 bg-void-900 rounded-lg appearance-none cursor-pointer accent-neon-amber"
                />

                <div className="flex justify-between font-mono text-[10px] text-slate-400">
                  <span>$8,000 (Small Re-Roof)</span>
                  <span>$15,000 (Standard)</span>
                  <span>$35,000+ (Large/Metal)</span>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-400">
              <Zap className="w-4 h-4 text-neon-emerald" />
              <span>Based on real closing averages from 14,000+ roofing estimates set nationwide</span>
            </div>
          </div>

          {/* Projection Output Card (Span 6) */}
          <div className="lg:col-span-6 p-7 sm:p-9 rounded-2xl glass-panel bg-void-900/90 border border-neon-emerald/30 shadow-neon-emerald/10 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            
            {/* Corner Badge */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-neon-emerald" />
                <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                  ESTIMATED MONTHLY ROOF PIPELINE
                </span>
              </div>
              <span className="px-2.5 py-1 rounded bg-neon-emerald/15 border border-neon-emerald/30 font-mono text-xs text-neon-emerald font-bold">
                {calculation.closedJobs} SIGNED JOBS / MO
              </span>
            </div>

            {/* Core Output Highlight */}
            <div className="my-6 space-y-6">
              
              {/* Projected Monthly & Annual Revenue */}
              <div className="p-5 rounded-xl bg-void-950 border border-white/10">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block mb-1">
                  PROJECTED MONTHLY REVENUE FROM ADS:
                </span>
                <div className="text-4xl sm:text-5xl font-mono font-black text-neon-emerald drop-shadow-[0_0_15px_rgba(5,255,161,0.4)]">
                  ${Math.round(calculation.projectedMonthlyRevenue).toLocaleString('en-US')} / mo
                </div>
                <div className="text-xs font-mono text-slate-300 mt-2">
                  Estimated Annual Added Revenue: <strong className="text-white">${Math.round(calculation.projectedAnnualRevenue).toLocaleString('en-US')} / yr</strong>
                </div>
              </div>

              {/* Step-by-Step Lead Breakdown Grid */}
              <div className="grid grid-cols-3 gap-3 font-mono text-center">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-400">INBOUND LEADS</div>
                  <div className="text-xl font-bold text-neon-cyan mt-0.5">{calculation.estimatedLeads}</div>
                  <div className="text-[9px] text-slate-400">Per Month</div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-400">INSPECTIONS SET</div>
                  <div className="text-xl font-bold text-neon-purple mt-0.5">{calculation.bookedEstimates}</div>
                  <div className="text-[9px] text-slate-400">On Calendar</div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-400">CLOSED ROOFS</div>
                  <div className="text-xl font-bold text-neon-emerald mt-0.5">{calculation.closedJobs}</div>
                  <div className="text-[9px] text-slate-400">Signed Jobs</div>
                </div>
              </div>

            </div>

            {/* Bottom CTA */}
            <div className="pt-6 border-t border-white/10">
              <MagneticButton
                variant="emerald"
                size="lg"
                onClick={() => onLockInTarget({ budget: adBudget, ticket: avgTicket, type: roofType })}
                icon={ArrowUpRight}
                className="w-full justify-center text-sm sm:text-base font-bold shadow-lg"
              >
                CLAIM YOUR EXCLUSIVE TERRITORY NOW
              </MagneticButton>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
