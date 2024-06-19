import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './SideBar.module.scss';
import { ThemeSwitcher } from 'features/themeSwitcher';
import { LanguageSwitcher } from 'features/languageSwitcher';
import { AppLink, Button } from 'shared/ui';
import { routePath } from 'shared/config/router/routePath';

import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();

  const toggleWith = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.items}>
        <AppLink theme="secondary" to={routePath.main} className={cls.link}>
          <HomeIcon className={cls.icon} />
          <span className={cls.item}>{t('nav-main')}</span>
        </AppLink>
        <AppLink theme="secondary" to={routePath.about} className={cls.link}>
          <AboutIcon className={cls.icon} />
          <span className={cls.item}>{t('nav-about')}</span>
        </AppLink>
      </div>
      <Button
        data-testid="sidebar-toggle"
        onClick={toggleWith}
        className={cls.collapseBtn}
        theme="backgroundInverted"
        square
        size="l"
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher collapsed={collapsed} />
      </div>
    </div>
  );
};
