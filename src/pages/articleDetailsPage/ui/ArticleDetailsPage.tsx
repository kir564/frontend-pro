import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from 'entities/article';
import { useParams } from 'react-router-dom';

interface articleDetailsPageProps {
  className?: string;
}

export const ArticleDetailsPage = memo(function ArticleDetailsPage({
  className,
}: articleDetailsPageProps) {
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('articl-nf')}
      </div>
    );
  }

  return (
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
});
