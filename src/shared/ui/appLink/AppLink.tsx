import { forwardRef, memo, ReactNode, Ref } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib';
import cls from './AppLink.module.scss';

export type AppLinkTheme = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = forwardRef(function AppLink(
  props: AppLinkProps,
  ref: Ref<HTMLAnchorElement>,
) {
  const { className, to, children, theme = 'primary', ...otherProps } = props;
  return (
    <Link
      ref={ref}
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
