import { FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  return (
    <h1 className={classNames(cls.mainPage, {}, [className])}>MainPage</h1>
  );
};
