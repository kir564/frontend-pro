import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import cls from './PageError.module.scss';
import { Button } from '@/shared/ui';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation('error');

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <div>{t('error')}</div>
      <div>{t('reload')}</div>
      <Button onClick={reload}>{t('btn')}</Button>
    </div>
  );
};
