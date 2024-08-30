import { lazy } from 'react';

export const AdminPanelPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          // @ts-ignore
          import('./AdminPanelPage').then((module) => ({
            default: module.AdminPanelPage,
          })),
        );
      }, 1500);
    }),
);
// export const MainPageAsync = lazy(() => import('./MainPage'));
