import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, DynamicModuleLoader, ReducersList } from 'shared/lib';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from 'entities/article';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Text } from 'shared/ui';
import { CommentList } from 'entities/comment';

import { articleDetailsCommentsReducer } from '../model/slice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../model/selectors/comments';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { routePath } from 'shared/config/router/routePath';
// import { getArticleDetailsError } from 'entities/article';

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
  // const errorArticleDetails = useSelector(getArticleDetailsError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const text = useSelector(getCommentFormText);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  const onBackToList = useCallback(() => {
    navigate(routePath.articles);
  }, [navigate]);

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
        <Button
          className={cls.backBtn}
          onClick={onBackToList}
        >{`<< ${t('back')}`}</Button>
        <ArticleDetails id={id} />
        <Text title={t('comments')} className={cls.commentsTitle} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={isLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
});
