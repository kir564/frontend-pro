import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './NavBar.module.scss';
import { AppLink } from 'shared/ui';
import { routePath } from 'shared/config/router/routePath';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.navBar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme="secondary" to={routePath.main} className={cls.mainLink}>
          {t('nav-main')}
        </AppLink>
      </div>
    </div>
  );
};
