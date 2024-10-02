import { HTMLAttributes, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib';
import cls from './Card.module.scss';

export type CardTheme = 'normal' | 'outlined';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
}

export const Card = memo(function Card({
  className,
  children,
  theme = 'normal',
  ...otherProps
}: CardProps) {
  return (
    <div
      {...otherProps}
      className={classNames(cls.card, {}, [className, cls[theme]])}
    >
      {children}
    </div>
  );
});
