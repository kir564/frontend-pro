import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('should return logimForm error', () => {
    const error: string = 'something error!';
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error,
      },
    };

    expect(getLoginError(state as StateSchema)).toEqual(error);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
