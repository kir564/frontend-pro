import { useTranslation } from 'react-i18next';

import { FC } from 'react';

import { classNames } from '@/shared/lib';
import { Page } from '@/widgets/page/Page';

interface AboutPageProps {
  className?: string;
}

export const AboutPage: FC<AboutPageProps> = ({ className }) => {
  const { t } = useTranslation('about');
  return (
    <Page className={classNames('', {}, [className])}>{t('about-page')}</Page>
  );
};
