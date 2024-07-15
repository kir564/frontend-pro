import { StateSchema } from 'app/providers/storeProvider';
import { getReadOnly } from './getReadOnly';

describe('getReadOnly', () => {
  test('should return readonly', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getReadOnly(state as StateSchema)).toEqual(state.profile?.readonly);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getReadOnly(state as StateSchema)).toEqual(undefined);
  });
});
