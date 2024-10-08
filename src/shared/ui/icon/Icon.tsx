import { FC } from 'react';

import { classNames } from '@/shared/lib';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon: FC<IconProps> = ({
  className,
  Svg,
  inverted,
  ...otherProps
}) => {
  return (
    <Svg
      {...otherProps}
      className={classNames(inverted ? cls.inverted : cls.icon, {}, [
        className,
      ])}
    />
  );
};
