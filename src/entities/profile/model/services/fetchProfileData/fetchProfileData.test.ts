import { fetchProfileData } from './fetchProfileData';
import { ProfileSchema } from 'entities/profile';
import { TestAsyncThunk } from 'shared/lib/tests';

describe('fetchProfileData', () => {
  test('success', async () => {
    const data: DeepPartial<ProfileSchema> = {
      data: { first: 'admin' },
    };

    const asyncThunk = new TestAsyncThunk(fetchProfileData);
    asyncThunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await asyncThunk.callThunk('1');

    expect(asyncThunk.api.get).toHaveBeenCalled();
    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });
  test('error', async () => {
    const error = { status: 403 };

    const asyncThunk = new TestAsyncThunk(fetchProfileData);
    asyncThunk.api.get.mockReturnValue(Promise.resolve(error));
    const result = await asyncThunk.callThunk('1');

    expect(asyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
