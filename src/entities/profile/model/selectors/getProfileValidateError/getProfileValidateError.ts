import { StateSchema } from '@/app/providers/storeProvider';

export const getProfileValidateError = (state: StateSchema) =>
  state.profile?.validateErrors;
