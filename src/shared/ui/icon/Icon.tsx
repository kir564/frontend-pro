import { FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon: FC<IconProps> = ({ className, Svg }) => {
  return <Svg className={classNames(cls.icon, {}, [className])} />;
};
