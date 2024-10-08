import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { RatingCard } from '@/entities/rating';
import {
  useGetArticleRatingQuery,
  useRateArticleMutation,
} from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/user';
import { useSelector } from 'react-redux';

interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

export const ArticleRating = memo(function ArticleRating({
  className,
  articleId,
}: ArticleRatingProps) {
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRatingQuery({
    articleId,
    userId: userData?.id ?? '',
  });

  const [rateArticleMutation] = useRateArticleMutation({});

  const handleRateArticle = useCallback(
    (rate: number, feedback?: string) => {
      rateArticleMutation({
        articleId,
        userId: userData?.id ?? '',
        rate,
        feedback,
      });
    },
    [articleId, rateArticleMutation, userData?.id],
  );

  const onAccept = useCallback(
    (rate: number, feedback: string) => {
      handleRateArticle(rate, feedback);
    },
    [handleRateArticle],
  );

  const onCancel = useCallback(
    (rate: number) => {
      handleRateArticle(rate);
    },
    [handleRateArticle],
  );

  if (isLoading) {
    return null;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      rate={rating?.rate}
      className={className}
      title={`Оцените статью`}
      feedbackTitle={`Оставьте свой отзыв о статье, это поможет улучшить качество`}
      hasFeedback
      onAccept={onAccept}
      onCancel={onCancel}
    />
  );
});
