import React from 'react';

export function BadgeHUD({
  children,
  variant = 'amber', // 'amber' | 'emerald' | 'cyan' | 'neutral'
  className = '',
  pulse = true,
  icon: Icon = null
}) {
  const variantStyles = {
    amber: 'border-amber-500/40 bg-amber-500/10 text-amber-400',
    emerald: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
    cyan: 'border-sky-500/40 bg-sky-500/10 text-sky-400',
    neutral: 'border-white/20 bg-white/5 text-slate-300',
  };

  const dotColors = {
    amber: 'bg-amber-400',
    emerald: 'bg-emerald-400',
    cyan: 'bg-sky-400',
    neutral: 'bg-slate-400',
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg border font-mono text-xs uppercase tracking-wider backdrop-blur-md ${variantStyles[variant] || variantStyles.amber} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant] || dotColors.amber}`} />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColors[variant] || dotColors.amber}`} />
        </span>
      )}
      {Icon && <Icon className="w-3.5 h-3.5 flex-shrink-0" />}
      <span className="font-bold">{children}</span>
    </div>
  );
}
