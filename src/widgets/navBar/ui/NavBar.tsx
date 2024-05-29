import { FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './NavBar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui';

interface NavBar {
  className?: string;
}

export const NavBar: FC<NavBar> = ({ className }) => {
  return (
    <div className={classNames(cls.navBar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
