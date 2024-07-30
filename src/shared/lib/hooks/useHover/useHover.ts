import { useCallback, useMemo, useState } from 'react';

export interface UseHoverBind {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export type UseHoverResult = [boolean, UseHoverBind];

export const useHover = (): UseHoverResult => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return useMemo(
    () => [
      isHover,
      {
        onMouseEnter,
        onMouseLeave,
      },
    ],
    [isHover, onMouseEnter, onMouseLeave],
  );
};
