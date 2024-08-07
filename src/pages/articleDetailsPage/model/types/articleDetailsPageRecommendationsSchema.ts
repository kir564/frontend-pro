import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/article';

export interface ArticleDetailsPageRecommendationSchema
  extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
}
