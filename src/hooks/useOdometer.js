import { useState, useEffect, useRef } from 'react';

/**
 * Custom odometer hook that counts from 0 to target number
 * with a high-performance easing friction curve once entering viewport.
 */
export function useOdometer({
  endValue = 100,
  duration = 2200,
  decimals = 0,
  prefix = '',
  suffix = '',
  threshold = 0.2
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated, threshold]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime = null;
    let animationFrameId;

    // Quartic ease-out curve (fast initial acceleration, smooth tactile friction deceleration)
    const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuart(progress);
      
      const current = easedProgress * endValue;
      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasAnimated, endValue, duration]);

  const formatted = `${prefix}${displayValue.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })}${suffix}`;

  return { containerRef, displayValue, formatted, hasAnimated };
}
