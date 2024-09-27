import { useCallback, useEffect, useState } from 'react';

interface UseModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const useModal = ({ isOpen, onClose }: UseModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  // const [isOpening, setIsOpening] = useState(false);
  // const timerRef = useRef<number>(null);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);

      // timerRef.current = setIsOpening(true);
      // setTimeout(() => {
      //   setIsOpening(true);
      // }, 300);
    }

    // return () => {
    //   clearTimeout(timerRef.current);
    // };
  }, [isOpen]);

  const close = useCallback(() => {
    if (onClose) {
      onClose();
      // setIsOpening(false);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return {
    close,
    isMounted,
  };
};
