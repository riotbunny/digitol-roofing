import React from 'react';
import { PhoneCall, ArrowUpRight, Hammer } from 'lucide-react';

export function MobileStickyBar({ onOpenAudit }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-void-950/95 backdrop-blur-xl border-t border-white/15 shadow-2xl">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        
        {/* Direct Call Button */}
        <a
          href="tel:5558397663"
          className="flex-1 py-3 px-3.5 rounded-xl bg-void-900 border border-white/20 text-white font-mono text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all text-center"
        >
          <PhoneCall className="w-3.5 h-3.5 text-neon-emerald flex-shrink-0" />
          <span>CALL ROOFER DESK</span>
        </a>

        {/* Claim Territory / Audit CTA */}
        <button
          type="button"
          onClick={onOpenAudit}
          className="flex-[1.4] py-3 px-4 rounded-xl bg-neon-cyan text-void-950 font-mono text-xs font-black tracking-wide uppercase shadow-neon-cyan/50 shadow-md flex items-center justify-center gap-1.5 active:scale-95 transition-all"
        >
          <span>GET EXCLUSIVE LEADS</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
}
