import { fetchUpdateData } from './fetchUpdateData';
import type { Profile } from 'entities/profile';
import { TestAsyncThunk } from 'shared/lib/tests';
import { VALIDATE_PROFILE_ERROR } from '../validateProfileData/validateProfileData';

describe('fetchProfileData', () => {
  const data: Profile = {
    first: 'John',
    lastName: 'Smith',
    age: 23,
    currency: 'RUB',
    country: 'Russia',
    city: 'Moscow',
    username: 'admin',
  };
  test('success', async () => {
    const asyncThunk = new TestAsyncThunk(fetchUpdateData, {
      profile: {
        form: data,
      },
    });

    asyncThunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await asyncThunk.callThunk();

    expect(asyncThunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });
  test('error', async () => {
    const error = { status: 403 };

    const asyncThunk = new TestAsyncThunk(fetchUpdateData, {
      profile: {
        form: data,
      },
    });

    asyncThunk.api.put.mockReturnValue(Promise.resolve(error));
    const result = await asyncThunk.callThunk();

    expect(asyncThunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
  test('validate error ', async () => {
    const asyncThunk = new TestAsyncThunk(fetchUpdateData, {
      profile: {
        form: { ...data, first: '' },
      },
    });

    const result = await asyncThunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA,
    ]);
  });
});
