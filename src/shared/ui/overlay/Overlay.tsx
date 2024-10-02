import { memo } from 'react';

import { classNames } from '@/shared/lib';
import cls from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo(function Overlay({
  className,
  onClick,
}: OverlayProps) {
  return (
    <div
      onClick={onClick}
      className={classNames(cls.overlay, {}, [className])}
    />
  );
});
