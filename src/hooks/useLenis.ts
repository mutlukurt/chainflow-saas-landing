import { useEffect, useRef } from 'react';
import { useReducedMotionSafe } from './useReducedMotionSafe';

export const useLenis = () => {
  const lenisRef = useRef<null>(null);
  const { prefersReducedMotion } = useReducedMotionSafe();

  useEffect(() => {
    // Lenis disabled - using native browser scroll for better performance
    // and immediate response to user input
    return () => {
      // No cleanup needed
    };
  }, [prefersReducedMotion]);

  return lenisRef.current;
};