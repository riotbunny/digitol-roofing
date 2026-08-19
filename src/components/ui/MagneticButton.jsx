import React from 'react';
import { useMagnetic } from '../../hooks/useMagnetic';

export function MagneticButton({
  children,
  onClick,
  variant = 'cyan', // 'cyan' | 'emerald' | 'purple' | 'outline' | 'glass'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  icon: Icon = null,
  badge = null,
  strength = 0.35,
  disabled = false,
  type = 'button'
}) {
  const { ref, position, isHovered } = useMagnetic(strength, 100);

  const variantStyles = {
    cyan: 'bg-neon-cyan text-void-950 hover:shadow-neon-cyan border-neon-cyan font-bold',
    emerald: 'bg-neon-emerald text-void-950 hover:shadow-neon-emerald border-neon-emerald font-bold',
    purple: 'bg-neon-purple text-white hover:shadow-neon-purple border-neon-purple font-bold',
    outline: 'bg-void-900/80 text-white border-white/20 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-neon-cyan/30',
    glass: 'bg-white/5 backdrop-blur-md text-slate-100 border-white/10 hover:bg-white/10 hover:border-white/30'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3.5 text-sm',
    lg: 'px-8 py-4 text-base'
  };

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
        transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`
        relative group inline-flex items-center justify-center gap-2.5 font-mono uppercase tracking-wider
        rounded-lg border transition-all duration-300 select-none cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant] || variantStyles.cyan}
        ${sizeStyles[size] || sizeStyles.md}
        ${className}
      `}
    >
      {/* Dynamic background glow pulse on hover */}
      <span 
        className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300 -z-10 bg-current pointer-events-none"
      />

      {badge && (
        <span className="px-1.5 py-0.5 text-[9px] rounded bg-void-950/80 text-neon-cyan border border-neon-cyan/40 font-mono tracking-normal">
          {badge}
        </span>
      )}

      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </button>
  );
}
