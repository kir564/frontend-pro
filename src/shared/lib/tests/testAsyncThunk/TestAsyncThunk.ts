import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/storeProvider';
import axios, { AxiosStatic } from 'axios';

type AsyncActionCreatorType<Returned, ThunkArg, RejectedValue> = (
  _: ThunkArg,
) => AsyncThunkAction<Returned, ThunkArg, { rejectValue: RejectedValue }>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Returned, ThunkArg, RejectedValue> {
  dispatch: Dispatch;
  getState: () => StateSchema;
  asyncActionCreator: AsyncActionCreatorType<Returned, ThunkArg, RejectedValue>;
  navigate: jest.MockedFn<any>;
  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor(
    asyncActionCreator: AsyncActionCreatorType<
      Returned,
      ThunkArg,
      RejectedValue
    >,
    state: DeepPartial<StateSchema> = {},
  ) {
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
    this.asyncActionCreator = asyncActionCreator;
    this.navigate = jest.fn();
    this.api = mockedAxios;
  }

  async callThunk(arg: ThunkArg) {
    const action = this.asyncActionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });

    return result;
  }
}
