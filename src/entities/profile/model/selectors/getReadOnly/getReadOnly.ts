import { StateSchema } from 'app/providers/storeProvider';

export const getReadOnly = (state: StateSchema) => state.profile?.readonly;
