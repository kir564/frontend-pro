import { memo, ReactNode } from 'react';

import { classNames } from 'shared/lib';
import cls from './Drawer.module.scss';
import { Portal } from '../portal/Portal';
import { useThemeContext } from 'app/providers/themeProvider';
import { Overlay } from '../overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal/useModal';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer = memo(function Drawer({
  className,
  children,
  isOpen,
  onClose,
  lazy,
}: DrawerProps) {
  const { theme } = useThemeContext();
  const { close, isMounted } = useModal({ isOpen, onClose });

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.drawer, { [cls.opened]: isOpen }, [
          className,
          theme,
          'app-drawer',
        ])}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
