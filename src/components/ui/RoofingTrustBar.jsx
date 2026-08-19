import React from 'react';
import { ShieldCheck, Award, CheckCircle, Star } from 'lucide-react';

export function RoofingTrustBar() {
  const badges = [
    { title: 'GAF & OWENS CORNING', subtitle: 'Manufacturer Trained' },
    { title: 'GOOGLE GUARANTEED', subtitle: 'Local Service Ads Certified' },
    { title: 'NRCA INDUSTRY PARTNER', subtitle: 'Commercial & Residential' },
    { title: '100% EXCLUSIVE LEADS', subtitle: 'Zero Shared Angi Leads' },
    { title: 'BBB A+ ACCREDITED', subtitle: 'Top Tier Contractor Standard' },
  ];

  return (
    <div className="py-6 bg-void-950 border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 items-center">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-void-900/60 border border-white/5 group hover:border-amber-500/30 transition-all">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-xs font-bold text-white truncate group-hover:text-amber-400 transition-colors">
                  {badge.title}
                </div>
                <div className="text-[10px] text-slate-400 font-sans truncate">
                  {badge.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
