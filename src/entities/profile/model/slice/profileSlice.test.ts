import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema } from '../types/ProfileSchema';
import { fetchUpdateData } from '../services/fetchUpdateData/fetchUpdateData';

describe('profileSlice', () => {
  test('should set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadOnly(true)),
    ).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      validateErrors: ['validate-error'],
      form: {
        first: 'name edit',
      },
      data: {
        first: 'name',
      },
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      form: {
        first: 'name',
      },
      data: {
        first: 'name',
      },
    });
  });
  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        first: 'name',
      },
      data: {
        first: 'name',
      },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ first: 'name edit' }),
      ),
    ).toEqual({
      form: {
        first: 'name edit',
      },
      data: {
        first: 'name',
      },
    });
  });
  test('test update pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: ['error'],
    };

    expect(
      profileReducer(state as ProfileSchema, fetchUpdateData.pending),
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });
  test('test update fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      data: {
        first: 'admin',
      },
      form: {
        first: 'admin',
      },
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        fetchUpdateData.fulfilled(
          {
            first: 'admin edit',
          },
          '',
        ),
      ),
    ).toEqual({
      isLoading: false,
      data: {
        first: 'admin edit',
      },
      form: {
        first: 'admin edit',
      },
    });
  });
});
