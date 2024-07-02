import { StateSchema } from 'app/providers/storeProvider';
import { initialState } from '../slice/loginSlice';

export const getLoginError = (state: StateSchema) =>
  state?.loginForm?.error || initialState.error;
