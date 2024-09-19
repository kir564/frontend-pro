import { EntityState } from '@reduxjs/toolkit';
import type { Comment } from 'entities/comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}
