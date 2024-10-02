import { CommentList } from '@/entities/comment';
import { AddCommentForm } from '@/features/addCommentForm';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsComments.module.scss';

import { classNames } from '@/shared/lib';
import { Text } from '@/shared/ui';
import { useSelector } from 'react-redux';
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}

export const ArticleDetailsComments = memo(function ArticleDetailsComments({
  className,
  id,
}: ArticleDetailsCommentsProps) {
  const { t } = useTranslation('article');
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const dispatch = useAppDispatch();

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <div className={classNames('', {}, [className])}>
      <Text title={t('comments')} className={cls.commentsTitle} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={isLoading} comments={comments} />
    </div>
  );
});
