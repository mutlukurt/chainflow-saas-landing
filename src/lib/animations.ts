import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = (prefersReducedMotion: boolean) => {
  if (prefersReducedMotion) return;

  // Fade in sections
  gsap.utils.toArray('.fade-in-section').forEach((section: any) => {
    gsap.fromTo(section, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          once: true,
        }
      }
    );
  });

  // Stagger animations for feature cards
  gsap.utils.toArray('.stagger-item').forEach((item: any, index) => {
    gsap.fromTo(item,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          once: true,
        }
      }
    );
  });

  // Gradient text animation
  gsap.utils.toArray('.gradient-text').forEach((text: any) => {
    gsap.fromTo(text,
      { backgroundPosition: '0% 50%' },
      {
        backgroundPosition: '100% 50%',
        duration: 2,
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'top 80%',
          once: true,
        }
      }
    );
  });
};

export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};