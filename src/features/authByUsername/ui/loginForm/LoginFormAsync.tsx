import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          // @ts-ignore
          import('./LoginForm').then((module) => ({
            default: module.LoginForm,
          })),
        );
      }, 1500);
    }),
);

// export const LoginFormAsync = lazy(() => import('./LoginForm'));
