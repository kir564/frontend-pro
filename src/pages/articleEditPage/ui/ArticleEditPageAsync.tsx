import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          // @ts-ignore
          import('./ArticleEditPage').then((module) => ({
            default: module.ArticleEditPage,
          })),
        );
      }, 1500);
    }),
);
// export const MainPageAsync = lazy(() => import('./MainPage'));
