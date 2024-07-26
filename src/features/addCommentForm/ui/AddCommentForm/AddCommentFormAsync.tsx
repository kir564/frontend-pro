import { lazy, FC } from 'react';

import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync: FC<AddCommentFormProps> = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          // @ts-ignore
          import('./AddCommentForm').then((module) => ({
            default: module.AddCommentForm,
          })),
        );
      }, 1500);
    }),
);
