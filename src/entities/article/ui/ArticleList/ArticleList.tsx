import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList = memo(function ArticleList({
  className,
  articles,
  isLoading,
  view = 'small',
}: ArticleListProps) {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        {new Array(view === 'small' ? 9 : 3).fill(0).map((_, index) => (
          <ArticleListItemSkeleton
            key={index}
            view={view}
            className={cls.card}
          />
        ))}
      </div>
    );
  }

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        isLoading={isLoading}
        className={cls.card}
        article={article}
        view={view}
        key={article.id}
      />
    );
  };

  return (
    <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
      {articles.length ? articles.map(renderArticle) : null}
    </div>
  );
});
