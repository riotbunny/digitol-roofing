import React, { useState } from 'react';
import { MapPin, CheckCircle2, ArrowUpRight, Lock } from 'lucide-react';

export function TerritoryChecker({ onClaimTerritory }) {
  const [query, setQuery] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsChecking(true);
    setResult(null);

    setTimeout(() => {
      setIsChecking(false);
      setResult({
        location: query.toUpperCase(),
        available: true,
        radius: '35-Mile Radius',
        status: 'TERRITORY OPEN - 1 ROOFER SLOT REMAINING'
      });
    }, 1000);
  };

  return (
    <section className="py-20 relative bg-void-950 border-t border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-8 sm:p-12 rounded-3xl glass-panel bg-void-900/90 border border-white/20 shadow-2xl relative overflow-hidden text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan font-mono text-xs font-bold uppercase mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>TERRITORY LOCK SYSTEM</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black font-display text-white tracking-tight mb-3">
            CHECK IF YOUR CITY IS <span className="text-gradient-cyan">STILL AVAILABLE</span>.
          </h2>

          <p className="text-slate-300 font-sans text-sm sm:text-base max-w-2xl mx-auto mb-8">
            To ensure zero competition between our partners, we strictly work with <strong className="text-white font-semibold">ONE roofing company per 35-mile radius</strong>. Enter your city or zip code below to check availability.
          </p>

          <form onSubmit={handleCheck} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="Enter city, state or zip (e.g. Austin, TX)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-void-950 border border-white/20 font-mono text-xs text-white placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none min-h-[48px]"
              />
            </div>

            <button
              type="submit"
              disabled={isChecking}
              className="px-6 py-3.5 rounded-xl bg-neon-cyan text-void-950 font-mono font-black text-xs uppercase tracking-wider hover:shadow-neon-cyan transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 flex-shrink-0 min-h-[48px]"
            >
              {isChecking ? 'SCANNING RADIUS...' : 'CHECK AVAILABILITY'}
            </button>
          </form>

          {/* Dynamic Result State */}
          {result && (
            <div className="p-5 rounded-2xl bg-void-950 border border-neon-emerald/40 max-w-xl mx-auto text-left animate-scaleUp font-mono text-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-neon-emerald font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{result.status}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-neon-emerald/20 text-neon-emerald font-bold text-[10px]">
                  OPEN
                </span>
              </div>

              <div className="text-slate-300 text-xs">
                Market: <strong className="text-white">{result.location}</strong> ({result.radius})
              </div>

              <button
                type="button"
                onClick={() => onClaimTerritory({ city: result.location })}
                className="w-full py-3 rounded-xl bg-neon-emerald text-void-950 font-mono font-bold text-xs uppercase tracking-wider hover:shadow-neon-emerald transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>LOCK IN {result.location} TERRITORY NOW</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
