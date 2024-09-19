import { memo } from 'react';

import { classNames } from 'shared/lib';
import cls from './CommentCard.module.scss';
import type { Comment } from '../../model/types/comment';
import { AppLink, Avatar, Skeleton, Text } from 'shared/ui';
import { routePath } from 'shared/config/router/routePath';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(function CommentCard({
  className,
  comment,
  isLoading,
}: CommentCardProps) {
  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton height={20} width={20} border="50%" />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton className={cls.text} height={40} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.commentCard, {}, [className])}>
      <AppLink
        to={`${routePath.profile}/${comment?.user.id}`}
        className={cls.header}
      >
        {comment?.user.avatar && (
          <Avatar size={20} src={comment?.user.avatar} />
        )}
        <Text text={comment?.user.username} />
      </AppLink>
      <Text className={cls.text} text={comment?.text} />
    </div>
  );
});
