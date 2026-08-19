import React from 'react';
import { useSpotlight } from '../../hooks/useSpotlight';

export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(0, 242, 254, 0.15)',
  borderColor = 'rgba(255, 255, 255, 0.08)',
  accentColor = 'cyan', // 'cyan' | 'emerald' | 'purple' | 'amber'
  onClick = null
}) {
  const { containerRef, handleMouseMove, handleMouseLeave } = useSpotlight();

  const accentMap = {
    cyan: 'rgba(0, 242, 254, 0.18)',
    emerald: 'rgba(5, 255, 161, 0.18)',
    purple: 'rgba(168, 85, 247, 0.18)',
    amber: 'rgba(255, 184, 0, 0.18)',
  };

  const finalSpotlight = spotlightColor || accentMap[accentColor] || accentMap.cyan;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        '--spotlight-x': '0px',
        '--spotlight-y': '0px',
        '--spotlight-opacity': '0',
      }}
      className={`
        relative rounded-xl overflow-hidden glass-panel
        transition-all duration-300 group
        border border-white/10 hover:border-white/20
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 -z-0 opacity-[var(--spotlight-opacity)]"
        style={{
          background: `radial-gradient(450px circle at var(--spotlight-x) var(--spotlight-y), ${finalSpotlight}, transparent 70%)`
        }}
      />

      {/* Cyber Corner Marker Elements */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/20 group-hover:border-neon-cyan transition-colors pointer-events-none" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/20 group-hover:border-neon-cyan transition-colors pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/20 group-hover:border-neon-cyan transition-colors pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/20 group-hover:border-neon-cyan transition-colors pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
