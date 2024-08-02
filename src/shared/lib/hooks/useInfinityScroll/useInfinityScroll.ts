import { MutableRefObject, useEffect } from 'react';

export interface UseInfinityScrollProps {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLDivElement>;
  wrapperRef: MutableRefObject<HTMLDivElement>;
}

export const useInfinityScroll = ({
  callback,
  wrapperRef,
  triggerRef,
}: UseInfinityScrollProps) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const triggerElement = triggerRef.current;
    const wrapperElement = wrapperRef.current;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: [0, 0.5, 1],
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer) {
        // eslint-disable-next-line
        observer.unobserve(triggerElement);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
};
