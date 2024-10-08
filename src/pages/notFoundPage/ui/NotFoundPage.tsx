import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import cls from './NotFoundPage.module.scss';

import { Page } from '@/widgets/page/Page';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation('notFound');
  return (
    <Page className={classNames(cls.notFoundPage, {}, [className])}>
      {t('NotFoundPage')}
    </Page>
  );
};
