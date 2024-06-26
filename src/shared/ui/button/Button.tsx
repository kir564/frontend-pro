import React, { FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './Button.module.scss';

export type TButtonTheme =
  | 'clean'
  | 'cleanInverted'
  | 'outline'
  | 'background'
  | 'backgroundInverted';

export type TButtonSize = 'm' | 'l' | 'xl';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: TButtonTheme;
  square?: boolean;
  size?: TButtonSize;
}

export const Button: FC<IButtonProps> = ({
  className,
  children,
  theme,
  square,
  size = 'm',
  disabled,
  ...otherProps
}) => {
  return (
    <button
      disabled={disabled}
      {...otherProps}
      className={classNames(
        cls.button,
        { [cls.square]: square, [cls.disabled]: disabled },
        [className, cls[theme], cls[size]],
      )}
    >
      {children}
    </button>
  );
};
