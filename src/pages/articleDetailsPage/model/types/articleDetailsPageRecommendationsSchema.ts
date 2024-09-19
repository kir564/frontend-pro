import { EntityState } from '@reduxjs/toolkit';
import type { Article } from 'entities/article';

export interface ArticleDetailsPageRecommendationSchema
  extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
}
