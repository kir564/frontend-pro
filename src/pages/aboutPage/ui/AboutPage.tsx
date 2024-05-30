import { useTranslation } from 'react-i18next';

import { FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './AboutPage.module.scss';

interface AboutPageProps {
  className?: string;
}

export const AboutPage: FC<AboutPageProps> = ({ className }) => {
  const { t } = useTranslation('about');
  return (
    <div className={classNames(cls.aboutPage, {}, [className])}>
      {t('about-page')}
    </div>
  );
};
