import { FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './Text.module.scss';

type VariantText = 'primary' | 'error';

type AlignText = 'left' | 'right' | 'center';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: VariantText;
  align?: AlignText;
}

export const Text: FC<TextProps> = ({
  className,
  text,
  title,
  variant = 'primary',
  align = 'left',
}) => {
  return (
    <div
      className={classNames(cls.textContainer, {}, [
        className,
        cls[variant],
        cls[align],
      ])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
