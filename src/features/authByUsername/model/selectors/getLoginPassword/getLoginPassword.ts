import { StateSchema } from 'app/providers/storeProvider';
import { initialState } from '../../slice/loginSlice';

export const getLoginPassword = (state: StateSchema) =>
  state?.loginForm?.password || initialState.password;
