import { FC, useState } from 'react';

import { classNames } from 'shared/lib';
import cls from './SideBar.module.scss';
import { ThemeSwitcher } from 'shared/ui';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleWith = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={toggleWith}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
