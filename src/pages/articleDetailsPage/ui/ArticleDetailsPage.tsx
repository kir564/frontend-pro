import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, DynamicModuleLoader, ReducersList } from 'shared/lib';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from 'entities/article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui';
import { CommentList } from 'entities/comment';

import { articleDetailsCommentsReducer } from '../model/slice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../model/selectors/comments';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { fetchCommentsByArticleId } from '../model/services/fetchCommenByArticleId/fetchCommentsByArticleId';

interface articleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

export const ArticleDetailsPage = memo(function ArticleDetailsPage({
  className,
}: articleDetailsPageProps) {
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('articl-nf')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text title={t('comments')} className={cls.commentsTitle} />
        <CommentList isLoading={isLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
});
