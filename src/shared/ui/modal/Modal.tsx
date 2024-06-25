import { FC, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib';
import cls from './Modal.module.scss';
import { Portal } from '../portal/Portal';
import { useThemeContext } from 'app/providers/themeProvider';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
}) => {
  const { theme } = useThemeContext();

  const handleModal = useCallback(() => {
    if (onClose) {
      onClose();
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

  return (
    <Portal container={document.body}>
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
