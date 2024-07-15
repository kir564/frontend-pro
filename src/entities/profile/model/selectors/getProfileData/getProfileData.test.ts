import { StateSchema } from 'app/providers/storeProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          first: 'admin',
        },
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual({ first: 'admin' });
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
