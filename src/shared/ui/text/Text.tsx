import { FC } from 'react';

import { classNames } from '@/shared/lib';
import cls from './Text.module.scss';

type VariantText = 'primary' | 'error' | 'inverted';

type AlignText = 'left' | 'right' | 'center';

type SizeText = 's' | 'm' | 'l';

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<SizeText, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
};

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: VariantText;
  align?: AlignText;
  size?: SizeText;
  'data-testid'?: string;
}

export const Text: FC<TextProps> = ({
  className,
  text,
  title,
  variant = 'primary',
  align = 'left',
  size = 'm',
  'data-testid': dataTestId = 'Text',
}) => {
  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div
      className={classNames(cls.textContainer, {}, [
        className,
        cls[variant],
        cls[align],
        cls[size],
      ])}
    >
      {title && (
        <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
          {text}
        </p>
      )}
    </div>
  );
};
