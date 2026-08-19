import React from 'react';
import { useOdometer } from '../../hooks/useOdometer';

export function OdometerMetric({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  label,
  subtext,
  status = 'ONLINE',
  color = 'neon-cyan', // 'neon-cyan' | 'neon-emerald' | 'neon-purple' | 'neon-amber'
  duration = 2000
}) {
  const { containerRef, formatted } = useOdometer({
    endValue: value,
    duration,
    decimals,
    prefix,
    suffix
  });

  const colorClasses = {
    'neon-cyan': 'text-neon-cyan drop-shadow-[0_0_12px_rgba(0,242,254,0.4)]',
    'neon-emerald': 'text-neon-emerald drop-shadow-[0_0_12px_rgba(5,255,161,0.4)]',
    'neon-purple': 'text-neon-purple drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]',
    'neon-amber': 'text-neon-amber drop-shadow-[0_0_12px_rgba(255,184,0,0.4)]',
  };

  const borderPulse = {
    'neon-cyan': 'bg-neon-cyan',
    'neon-emerald': 'bg-neon-emerald',
    'neon-purple': 'bg-neon-purple',
    'neon-amber': 'bg-neon-amber',
  };

  return (
    <div
      ref={containerRef}
      className="p-6 rounded-xl glass-panel relative overflow-hidden group border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      {/* Top telemetry status line */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${borderPulse[color] || 'bg-neon-cyan'} animate-ping`} />
          <span className={`w-1.5 h-1.5 rounded-full ${borderPulse[color] || 'bg-neon-cyan'}`} />
          <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
            {status}
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-500">
          HUD.TELEMETRY
        </span>
      </div>

      {/* Main Odometer Readout */}
      <div className="my-2">
        <div className={`font-mono text-4xl sm:text-5xl font-black tracking-tight ${colorClasses[color] || colorClasses['neon-cyan']}`}>
          {formatted}
        </div>
      </div>

      {/* Label and Subtext */}
      <div className="mt-3 pt-3 border-t border-white/5">
        <h4 className="text-sm font-semibold text-slate-200 tracking-wide">
          {label}
        </h4>
        {subtext && (
          <p className="text-xs text-slate-400 mt-0.5 font-mono">
            {subtext}
          </p>
        )}
      </div>

      {/* Subtle background glow */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-10 blur-xl pointer-events-none bg-white" />
    </div>
  );
}
