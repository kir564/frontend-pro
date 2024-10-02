import { FC, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib';
import cls from './Button.module.scss';

export type TButtonTheme =
  | 'clean'
  | 'cleanInverted'
  | 'outline'
  | 'outline_red'
  | 'background'
  | 'backgroundInverted';

export type TButtonSize = 'm' | 'l' | 'xl';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: TButtonTheme;
  square?: boolean;
  size?: TButtonSize;
  children?: ReactNode;
}

export const Button: FC<IButtonProps> = memo(function Button({
  className,
  children,
  theme = 'outline',
  square,
  size = 'm',
  disabled,
  ...otherProps
}: IButtonProps) {
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
});
