import { useCallback, useEffect, useRef } from 'react';

export const useThrottle = (cb: (...args: any[]) => void, delay: number) => {
  const throttleRef = useRef<boolean>(false);
  const timerRef = useRef<any>();

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  const throttleCallBack = useCallback(
    (...args: any[]) => {
      if (!throttleRef.current) {
        cb(...args);
        throttleRef.current = true;

        timerRef.current = setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [cb, delay],
  );

  return throttleCallBack;
};
