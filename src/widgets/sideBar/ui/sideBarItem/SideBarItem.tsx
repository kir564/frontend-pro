import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './SideBarItem.module.scss';
import { AppLink } from 'shared/ui';
import { SideBarItemType } from 'widgets/sideBar/model/items';
import { classNames } from 'shared/lib';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/user';

interface SideBarItemProps {
  item: SideBarItemType;
  collapsed: boolean;
}

export const SideBarItem = memo(function SideBarItem({
  item,
  collapsed,
}: SideBarItemProps) {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (!isAuth && item.authOnly) {
    return null;
  }

  return (
    <AppLink
      theme="secondary"
      to={item.path}
      className={classNames(cls.link, { [cls.collapsed]: collapsed }, [])}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.item}>{t(item.text)}</span>
    </AppLink>
  );
});
