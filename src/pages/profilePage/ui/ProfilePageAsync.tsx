import { lazy } from 'react';

export const ProfilePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          // @ts-ignore
          import('./ProfilePage').then((module) => ({
            default: module.ProfilePage,
          })),
        );
      }, 1500);
    }),
);
