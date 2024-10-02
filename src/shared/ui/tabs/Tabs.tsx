import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import cls from './Tabs.module.scss';
import { Card } from '../card/Card';

export interface TabItem<T> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T> {
  className?: string;
  tabs: TabItem<T>[];
  value: string;
  onTabClick: (_: TabItem<T>) => void;
}

export const Tabs = <T extends string>({
  className,
  tabs,
  value,
  onTabClick,
}: TabsProps<T>) => {
  const { t } = useTranslation();

  const clickHandle = (tab: TabItem<T>) => {
    return () => {
      onTabClick(tab);
    };
  };

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          className={cls.tab}
          key={tab.value}
          theme={tab.value === value ? 'normal' : 'outlined'}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
