import { StateSchema } from 'app/providers/storeProvider';
import { initialState } from '../slice/loginSlice';

export const getLoginIsLoading = (state: StateSchema) =>
  state?.loginForm?.isLoading || initialState.isLoading;
