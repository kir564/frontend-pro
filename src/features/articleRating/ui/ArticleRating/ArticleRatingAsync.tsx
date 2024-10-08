import { lazy } from 'react';

export const ArticleRatingAsync = lazy(
  () =>
    new Promise((resolve) => {
      resolve(
        // @ts-ignore
        import('./ArticleRating').then((module) => ({
          default: module.ArticleRating,
        })),
      );
    }),
);
