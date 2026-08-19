import React from 'react';
import { OdometerMetric } from '../ui/OdometerMetric';
import { AGENCY_METRICS } from '../../data/agencyData';
import { Hammer, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function LiveTelemetryMetrics() {
  return (
    <section id="telemetry" className="py-20 relative bg-void-950 border-y border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-dots opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-neon-emerald/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Hammer className="w-4 h-4 text-neon-emerald animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-neon-emerald uppercase">
                ROOFER BENCHMARKS // REAL RESULTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight">
              PROVEN ROOFING CONTRACTS <span className="text-gradient-emerald">IN NUMBERS</span>.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
              <span>100% EXCLUSIVE LEADS</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-slate-400">
              U.S. ROOFERS
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AGENCY_METRICS.map((metric) => (
            <OdometerMetric
              key={metric.id}
              value={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
              decimals={metric.decimals}
              label={metric.label}
              subtext={metric.subtext}
              status={metric.status}
              color={metric.color}
              duration={2400}
            />
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-neon-cyan" />
            <span>NO FLUFF. NO LAZY ALGORITHMS. REAL ADS MANAGED BY REAL PEOPLE.</span>
          </div>
          <div>MONTH-TO-MONTH AGREEMENTS // NO LONG-TERM LOCK-IN</div>
        </div>
      </div>
    </section>
  );
}
