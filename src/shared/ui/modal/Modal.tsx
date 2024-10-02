import { FC } from 'react';
import { classNames } from '@/shared/lib';
import cls from './Modal.module.scss';
import { Portal } from '../portal/Portal';
import { useThemeContext } from '@/app/providers/themeProvider';
import { Overlay } from '../overlay/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

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
  const { isMounted, close } = useModal({ isOpen, onClose });

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
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
