import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return username', () => {
    const username: string = 'admin';
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username,
      },
    };

    expect(getLoginUsername(state as StateSchema)).toEqual(username);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
