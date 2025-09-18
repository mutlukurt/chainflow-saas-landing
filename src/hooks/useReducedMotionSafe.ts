import { useState, useEffect } from 'react';

export const useReducedMotionSafe = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    // Check for mobile viewport
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mobileQuery.matches);

    const handleMobileChange = () => setIsMobile(mobileQuery.matches);
    mobileQuery.addEventListener('change', handleMobileChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      mobileQuery.removeEventListener('change', handleMobileChange);
    };
  }, []);

  return {
    prefersReducedMotion: prefersReducedMotion || isMobile,
    isMobile,
  };
};