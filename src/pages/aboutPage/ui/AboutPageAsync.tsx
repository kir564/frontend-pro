import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          // @ts-ignore
          import('./AboutPage').then((module) => ({
            default: module.AboutPage,
          }))
        );
      }, 1500);
    })
);
// export const AboutPageAsync = lazy(() => import('./AboutPage'));
