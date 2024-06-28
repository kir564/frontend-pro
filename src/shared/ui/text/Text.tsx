import { FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './Text.module.scss';

type Variant = 'primary' | 'error';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: Variant;
}

export const Text: FC<TextProps> = ({
  className,
  text,
  title,
  variant = 'primary',
}) => {
  return (
    <div
      className={classNames(cls.textContainer, {}, [className, cls[variant]])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
