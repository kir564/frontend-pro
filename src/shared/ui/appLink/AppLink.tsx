import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib';
import cls from './AppLink.module.scss';

export type AppLinkTheme = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  to,
  children,
  theme = 'primary',
}) => {
  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  );
};
