import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView;
  page: number;
  limit?: number;
  hasMore: boolean;
  _initialled: boolean;
}
