import { useRef, useEffect, useState } from 'react';

/**
 * Custom hook that gives elements a physical magnetic pull towards the cursor.
 * Automatically disables on touch/mobile devices for optimal touch ergonomics.
 */
export function useMagnetic(strength = 0.35, activeDistance = 120) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check if device is touch-primary (mobile / tablet)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (isTouchDevice) return;

    const element = ref.current;
    if (!element) return;

    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

      if (dist < activeDistance) {
        targetX = (e.clientX - centerX) * strength;
        targetY = (e.clientY - centerY) * strength;
        setIsHovered(true);
      } else {
        targetX = 0;
        targetY = 0;
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
      setIsHovered(false);
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (Math.abs(currentX) > 0.01 || Math.abs(currentY) > 0.01 || isHovered) {
        setPosition({ x: currentX, y: currentY });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [strength, activeDistance, isHovered]);

  return { ref, position, isHovered };
}
