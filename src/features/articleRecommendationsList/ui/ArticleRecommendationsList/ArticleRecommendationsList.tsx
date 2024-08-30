import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ArticleRecommendationsList.module.scss';
import { Text } from 'shared/ui';
import { ArticleList } from 'entities/article';
import { useGetArticlesRecommendationsQuery } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  function ArticleRecommendationsList({
    className,
  }: ArticleRecommendationsListProps) {
    const { t } = useTranslation('article');
    const {
      data: articles,
      isLoading,
      error,
    } = useGetArticlesRecommendationsQuery(4);

    if (isLoading || error || !articles) {
      return null;
    }

    return (
      <div
        className={classNames(cls.articleRecommendationsList, {}, [className])}
      >
        <Text title={t('recommendations')} className={cls.commentsTitle} />
        <ArticleList
          target={`_blank`}
          articles={articles}
          className={cls.recommendations}
        />
      </div>
    );
  },
);
