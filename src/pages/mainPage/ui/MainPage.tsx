import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './MainPage.module.scss';
import { Button } from 'shared/ui';

interface MainPageProps {
  className?: string;
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  const { t } = useTranslation('main');

  const [error, setError] = useState<boolean>(false);

  const onTHrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <div className={classNames(cls.mainPage, {}, [className])}>
      {t('main-page')}
      <p>{t('new-key')}</p>
      <Button onClick={onTHrow}>{t('throw')}</Button>
    </div>
  );
};
