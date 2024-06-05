import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  const { t } = useTranslation('main');
  return (
    <div className={classNames(cls.mainPage, {}, [className])}>
      {t('main-page')}
      <p>{t('new-key')}</p>
    </div>
  );
};
