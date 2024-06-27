import { FC, useCallback, useEffect, useState } from 'react';
import { classNames } from 'shared/lib';
import cls from './Modal.module.scss';
import { Portal } from '../portal/Portal';
import { useThemeContext } from 'app/providers/themeProvider';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
  lazy,
}) => {
  const { theme } = useThemeContext();

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

  const handleModal = useCallback(() => {
    if (onClose) {
      onClose();
      // setIsOpening(false);
    }
  }, [onClose]);

  const handleContent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleModal();
      }
    },
    [handleModal],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(
          cls.modal,
          {
            [cls.opened]: isOpen,
          },
          [className, theme],
        )}
      >
        <div className={cls.overlay} onClick={handleModal}>
          <div className={cls.content} onClick={handleContent}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
