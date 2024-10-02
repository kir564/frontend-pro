import { memo } from 'react';

import { classNames } from '@/shared/lib';
import cls from './ArticleListItemSkeleton.module.scss';
import { ArticleView } from '@/entities/article/model/types/article';
import { Card, Skeleton } from '@/shared/ui';

interface ArticleListItemSkeletonProps {
  className?: string;
  view?: ArticleView;
}

export const ArticleListItemSkeleton = memo(function ArticleListItemSkeleton({
  className,
  view = 'small',
}: ArticleListItemSkeletonProps) {
  if (view === 'big') {
    return (
      <div
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={150} height={16} className={cls.date} />
          </div>
          <Skeleton width="45%" height={24} className={cls.title} />
          <div className={cls.blocks}>
            <Skeleton width="100%" height={120} />
            <Skeleton width="100%" height={120} />
          </div>
          <Skeleton width={100} height={24} className={cls.footer} />
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} className={cls.img} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={120} height={16} className={cls.types} />
        </div>
        <Skeleton width={140} height={16} />
      </Card>
    </div>
  );
});
