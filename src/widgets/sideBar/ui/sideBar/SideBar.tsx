import { memo, useState } from 'react';

import { classNames } from '@/shared/lib';
import cls from './SideBar.module.scss';
import { ThemeSwitcher } from '@/features/themeSwitcher';
import { LanguageSwitcher } from '@/features/languageSwitcher';
import { Button } from '@/shared/ui';

import { SideBarItem } from '../sideBarItem/SideBarItem';
import { useSelector } from 'react-redux';
import { getSideBarItems } from '../../model/selectors/getSideBarItems';

interface SideBarProps {
  className?: string;
}

export const SideBar = memo(function SideBar({ className }: SideBarProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const sideBarItemsList = useSelector(getSideBarItems);

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
        {sideBarItemsList.map((item) => (
          <SideBarItem item={item} key={item.path} collapsed={collapsed} />
        ))}
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
});
