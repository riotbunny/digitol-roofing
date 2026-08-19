import { useRef, useCallback } from 'react';

/**
 * Custom hook for Bento Grid cards to inject dynamic CSS coordinates
 * for radial spotlight hover effects.
 */
export function useSpotlight() {
  const containerRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    containerRef.current.style.setProperty('--spotlight-x', `${x}px`);
    containerRef.current.style.setProperty('--spotlight-y', `${y}px`);
    containerRef.current.style.setProperty('--spotlight-opacity', '1');
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty('--spotlight-opacity', '0');
  }, []);

  return { containerRef, handleMouseMove, handleMouseLeave };
}
