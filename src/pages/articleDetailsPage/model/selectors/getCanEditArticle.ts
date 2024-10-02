import { getUserAuthData } from '@/entities/user';
import { getArticleDetailsData } from '@/entities/article';
import { createSelector } from '@reduxjs/toolkit';

export const getCanArticleEdit = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (article, user) => {
    if (!article || !user) {
      return false;
    }

    return article.user.id === user.id;
  },
);
