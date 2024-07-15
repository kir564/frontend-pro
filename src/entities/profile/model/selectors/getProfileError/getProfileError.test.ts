import { StateSchema } from 'app/providers/storeProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: '123',
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual(state.profile?.error);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
