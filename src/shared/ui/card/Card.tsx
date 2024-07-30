import { HTMLAttributes, memo, ReactNode } from 'react';

import { classNames } from 'shared/lib';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = memo(function Card({
  className,
  children,
  ...otherProps
}: CardProps) {
  return (
    <div {...otherProps} className={classNames(cls.card, {}, [className])}>
      {children}
    </div>
  );
});
