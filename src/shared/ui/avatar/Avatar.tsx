import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
}

export const Avatar: FC<AvatarProps> = ({ className, src, size = 100 }) => {
  const { t } = useTranslation();

  return (
    <img
      className={classNames(cls.avatar, {}, [className])}
      src={src}
      height={size}
      width={size}
      alt={`avatar`}
    />
  );
};
