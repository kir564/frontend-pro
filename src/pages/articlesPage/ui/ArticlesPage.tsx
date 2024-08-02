import { useTranslation } from 'react-i18next';

import { classNames, DynamicModuleLoader, ReducersList } from 'shared/lib';
import cls from './ArticlesPage.module.scss';
import { memo, useCallback } from 'react';
import {
  ArticleList,
  ArticleView,
  ArticleViewSelector,
} from 'entities/article';
import {
  articlesPageAction,
  articlesPageReducer,
  getArticles,
} from '../model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';
import {
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
  getArticlesPageView,
} from '../model/selectors/articlePageSelectors';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';

import { Page } from 'shared/ui/page/Page';
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

export const ArticlesPage = memo(function ArticlesPage({
  className,
}: ArticlesPageProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const view = useSelector(getArticlesPageView);
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const page = useSelector(getArticlesPageNum);
  const hasMore = useSelector(getArticlesPageHasMore);

  useInitialEffect(() => {
    dispatch(articlesPageAction.initView());
    dispatch(fetchArticlesList({ page }));
  });

  const onLoadNextPath = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageAction.setView(view));
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <Page
        onScrollEnd={onLoadNextPath}
        className={classNames(cls.articlesPage, {}, [className])}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList view={view} isLoading={isLoading} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  );
});
