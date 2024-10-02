import { StateSchema } from '@/app/providers/storeProvider';
import { getProfileValidateError } from './getProfileValidateError';

describe('getProfileIsLoading', () => {
  test('should return validate errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: ['err-1', 'err-2'],
      },
    };
    expect(getProfileValidateError(state as StateSchema)).toEqual(
      state.profile?.validateErrors,
    );
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileValidateError(state as StateSchema)).toEqual(undefined);
  });
});
