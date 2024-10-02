import { memo, ReactNode, useCallback, useEffect } from 'react';

import { classNames } from '@/shared/lib';
import cls from './Drawer.module.scss';
import { Portal } from '../portal/Portal';
import { useThemeContext } from '@/app/providers/themeProvider';
import { Overlay } from '../overlay/Overlay';
import { useAnimationLibs } from '@/shared/lib/components/animationProvider';
// import { useModal } from 'shared/lib/hooks/useModal/useModal';

// import { useDrag } from '@use-gesture/react';
// import { a, useSpring, config } from '@react-spring/web';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const height = window.innerHeight - 100;

export const DrawerContent = memo(function Drawer({
  className,
  children,
  isOpen,
  onClose,
  lazy,
}: DrawerProps) {
  const { theme } = useThemeContext();
  // const { close: closed, isMounted } = useModal({ isOpen, onClose });
  const { Gesture, Spring } = useAnimationLibs();

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const open = useCallback(() => {
    api.start({
      y: 0,
      immediate: false,
    });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      open();
    }
  }, [open, isOpen]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        my > height * 0.5 || (vy > 0.5 && dy > 0) ? close() : open();
      } else api.start({ y: my, immediate: true });
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  // if (!isOpen) {
  //   return null;
  // }

  const display = y.to((py) => {
    return py < height ? 'block' : 'none';
  });

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
        {/* <div className={cls.content}>{children}</div> */}
        <Spring.a.div
          className={cls.content}
          {...bind()}
          style={{
            display,
            bottom: `calc(-100vh + ${height - 100}px)`,
            y,
            touchAction: 'none',
          }}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
});

export const Drawer = memo(function Drawer(props: DrawerProps) {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
});
