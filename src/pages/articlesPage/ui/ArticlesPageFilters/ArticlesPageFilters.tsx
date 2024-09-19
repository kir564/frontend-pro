import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ArticlesPageFilters.module.scss';
import { useAppDispatch } from 'shared/lib/hooks';
import {
  ArticleSortSelector,
  ArticleTypeTabs,
  ArticleViewSelector,
} from 'entities/article';
import type {
  ArticleSortField,
  ArticleType,
  ArticleView,
} from 'entities/article';
import { articlesPageAction } from '../../model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView,
  getArticlesPageType,
} from '../../model/selectors/articlePageSelectors';
import { Card, Input } from 'shared/ui';
import type { SortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/articlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo(function ArticlesPageFilters({
  className,
}: ArticlesPageFiltersProps) {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ page: 1, replace: true }));
  }, [dispatch]);

  const debounceFetchData = useDebounce(fetchData, 1000);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageAction.setView(view));
    },
    [dispatch],
  );

  const onChangeOrder = useCallback(
    (order: SortOrder) => {
      dispatch(articlesPageAction.setOrder(order));
      dispatch(articlesPageAction.setPage(1));
      debounceFetchData();
    },
    [dispatch, debounceFetchData],
  );

  const onChangeSort = useCallback(
    (sort: ArticleSortField) => {
      dispatch(articlesPageAction.setSort(sort));
      dispatch(articlesPageAction.setPage(1));
      debounceFetchData();
    },
    [dispatch, debounceFetchData],
  );

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageAction.setSearch(search));
      dispatch(articlesPageAction.setPage(1));
      debounceFetchData();
    },
    [dispatch, debounceFetchData],
  );

  const onTabsClick = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageAction.setType(value));
      dispatch(articlesPageAction.setPage(1));
      debounceFetchData();
    },
    [dispatch, debounceFetchData],
  );

  return (
    <div className={classNames(cls.articlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input onChange={onChangeSearch} value={search} />
      </Card>
      <ArticleTypeTabs
        value={type}
        onChangeType={onTabsClick}
        className={cls.tabs}
      />
    </div>
  );
});
