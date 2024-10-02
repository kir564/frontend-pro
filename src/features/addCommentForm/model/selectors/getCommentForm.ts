import { StateSchema } from '@/app/providers/storeProvider';

export const getCommentFormText = (state: StateSchema) =>
  state.addCommentForm?.text || '';

export const getCommentFormError = (state: StateSchema) =>
  state.addCommentForm?.error;
