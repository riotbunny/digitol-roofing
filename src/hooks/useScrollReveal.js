import { useState, useEffect, useRef } from 'react';

/**
 * Hook to trigger staggered cascading scroll reveals on entry.
 */
export function useScrollReveal(options = { threshold: 0.15, rootMargin: '0px' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(el);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}
