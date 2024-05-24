import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          // @ts-ignore
          import('./MainPage').then((module) => ({
            default: module.MainPage,
          }))
        );
      }, 1500);
    })
);
// export const MainPageAsync = lazy(() => import('./MainPage'));
