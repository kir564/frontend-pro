import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, DynamicModuleLoader, ReducersList } from 'shared/lib';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails, ArticleList } from 'entities/article';
import { useParams } from 'react-router-dom';

import { CommentList } from 'entities/comment';

import { useSelector } from 'react-redux';
import { getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../model/selectors/comments';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
// import { getArticleDetailsError } from 'entities/article';
import { Page } from 'widgets/page/Page';
import { getArticleRecommendations } from '../model/slice/articleDetailsPageRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../model/selectors/recommendations';
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../model/slice';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { Text } from 'shared/ui';

interface articleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

export const ArticleDetailsPage = memo(function ArticleDetailsPage({
  className,
}: articleDetailsPageProps) {
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const isLoadingRecommendations = useSelector(
    getArticleRecommendationsIsLoading,
  );
  // const errorArticleDetails = useSelector(getArticleDetailsError);
  const dispatch = useAppDispatch();

  // const text = useSelector(getCommentFormText);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  if (!id) {
    return (
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('articl-nf')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text title={t('recommendations')} className={cls.commentsTitle} />
        <ArticleList
          target={`_blank`}
          articles={recommendations}
          isLoading={isLoadingRecommendations}
          className={cls.recommendations}
        />
        <Text title={t('comments')} className={cls.commentsTitle} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={isLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
});
