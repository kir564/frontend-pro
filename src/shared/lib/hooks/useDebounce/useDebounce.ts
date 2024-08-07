import { useCallback, useEffect, useRef } from 'react';

export const useDebounce = (cb: (...args: any[]) => void, delay: number) => {
  const timerRef = useRef<any>();

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  const debounceCallBack = useCallback(
    (...args: any[]) => {
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        cb(...args);
      }, delay);
    },
    [cb, delay],
  );

  return debounceCallBack;
};
