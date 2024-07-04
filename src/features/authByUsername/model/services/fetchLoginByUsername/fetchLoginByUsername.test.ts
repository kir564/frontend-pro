// import axios from 'axios';
import { fetchLoginByUsername } from './fetchLoginByUsername';
// import { Dispatch } from '@reduxjs/toolkit';
// import { StateSchema } from 'app/providers/storeProvider';
import { userActions } from 'entities/user';
import { TestAsyncThunk } from 'shared/lib/tests';

// jest.mock('axios');
// const mockedAxios = jest.mocked(axios, true);
describe('fetchLoginByUsername', () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });
  test('login access', async () => {
    const data = { username: 'admin', password: 'qwerty', id: '1' };

    const asyncThunk = new TestAsyncThunk(fetchLoginByUsername);
    asyncThunk.api.post.mockReturnValue(Promise.resolve({ data }));
    const result = await asyncThunk.callThunk(data);

    // const action = fetchLoginByUsername(data);
    // const result = await action(dispatch, getState, undefined);

    expect(asyncThunk.api.post).toHaveBeenCalled();
    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3);
    expect(asyncThunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthUser(data),
    );
    expect(result.meta.requestStatus).toBe('fulfilled');
  });
  test('login error', async () => {
    const data = { username: 'admin', password: 'qwerty', id: '1' };
    const error = { status: 403 };

    // const action = fetchLoginByUsername(data);
    // const result = await action(dispatch, getState, undefined);
    // console.log('result: ', result);

    const asyncThunk = new TestAsyncThunk(fetchLoginByUsername);
    asyncThunk.api.post.mockReturnValue(Promise.resolve(error));
    const result = await asyncThunk.callThunk(data);

    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(asyncThunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
