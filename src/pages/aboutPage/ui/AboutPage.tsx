import { useTranslation } from 'react-i18next';

import { FC } from 'react';

import { classNames } from 'shared/lib';

interface AboutPageProps {
  className?: string;
}

export const AboutPage: FC<AboutPageProps> = ({ className }) => {
  const { t } = useTranslation('about');
  return (
    <div className={classNames('', {}, [className])}>{t('about-page')}</div>
  );
};
