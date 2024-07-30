import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          // @ts-ignore
          import('./ArticlesPage').then((module) => ({
            default: module.ArticlesPage,
          })),
        );
      }, 400);
    }),
);
