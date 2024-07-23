import { memo } from 'react';

import { classNames } from 'shared/lib';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../commentCard/CommentCard';
import { Text } from 'shared/ui';

import { useTranslation } from 'react-i18next';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(function CommentList({
  className,
  comments,
  isLoading,
}: CommentListProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.commentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            className={cls.comment}
            comment={comment}
            key={comment.id}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={t('no-com')} />
      )}
    </div>
  );
});
