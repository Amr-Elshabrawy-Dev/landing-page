import { useEffect, useRef, useState } from 'react';

/**
 * useVisibility Hook
 * Detects when an element becomes visible in the viewport.
 *
 * @param {Object} options - Options for the Intersection Observer.
 * @param {number} options.threshold - Visibility threshold (0-1).
 * @returns {[React.RefObject<HTMLElement>, boolean]} - Ref for the element and visibility status.
 */

export const useVisibility = ({ threshold = 0 } = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  // Function to handle the scroll
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) {
      console.warn('useVisibility: No element referenced');
      return;
    }

    const observerCallback = ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    };

    const observerOptions = {
      threshold,
      rootMargin: '0px',
    };

    try {
      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      observer.observe(currentRef);

      return () => {
        observer.unobserve(currentRef);
        observer.disconnect();
      };
    } catch (error) {
      console.error('useVisibility: Failed to create observer', error);
      return undefined;
    }
  }, [threshold]);

  return [ref, isVisible];
};
