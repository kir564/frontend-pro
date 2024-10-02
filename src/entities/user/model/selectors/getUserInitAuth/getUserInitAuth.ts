import { StateSchema } from '@/app/providers/storeProvider';

export const getUserInitAuth = (state: StateSchema) => state.user._initAuth;
