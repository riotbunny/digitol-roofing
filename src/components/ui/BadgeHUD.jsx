import React from 'react';

export function BadgeHUD({
  children,
  variant = 'cyan', // 'cyan' | 'emerald' | 'purple' | 'amber' | 'neutral'
  className = '',
  pulse = true,
  icon: Icon = null
}) {
  const variantStyles = {
    cyan: 'border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan',
    emerald: 'border-neon-emerald/40 bg-neon-emerald/10 text-neon-emerald',
    purple: 'border-neon-purple/40 bg-neon-purple/10 text-neon-purple',
    amber: 'border-neon-amber/40 bg-neon-amber/10 text-neon-amber',
    neutral: 'border-white/20 bg-white/5 text-slate-300',
  };

  const dotColors = {
    cyan: 'bg-neon-cyan',
    emerald: 'bg-neon-emerald',
    purple: 'bg-neon-purple',
    amber: 'bg-neon-amber',
    neutral: 'bg-slate-400',
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border font-mono text-xs uppercase tracking-wider backdrop-blur-sm ${variantStyles[variant] || variantStyles.cyan} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant] || dotColors.cyan}`} />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColors[variant] || dotColors.cyan}`} />
        </span>
      )}
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span className="font-semibold">{children}</span>
    </div>
  );
}
