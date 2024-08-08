import { FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './Text.module.scss';

type VariantText = 'primary' | 'error' | 'inverted';

type AlignText = 'left' | 'right' | 'center';

type SizeText = 'm' | 'l';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: VariantText;
  align?: AlignText;
  size?: SizeText;
}

export const Text: FC<TextProps> = ({
  className,
  text,
  title,
  variant = 'primary',
  align = 'left',
  size = 'm',
}) => {
  return (
    <div
      className={classNames(cls.textContainer, {}, [
        className,
        cls[variant],
        cls[align],
        cls[size],
      ])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
