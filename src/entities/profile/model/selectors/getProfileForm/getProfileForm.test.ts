import { StateSchema } from 'app/providers/storeProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should return form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          first: 'admin',
        },
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(state.profile?.form);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
