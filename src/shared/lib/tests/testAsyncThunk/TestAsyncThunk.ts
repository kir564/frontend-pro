import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';

type AsyncActionCreatorType<Returned, ThunkArg, RejectedValue> = (
  _: ThunkArg,
) => AsyncThunkAction<Returned, ThunkArg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Returned, ThunkArg, RejectedValue> {
  dispatch: Dispatch;
  getState: () => StateSchema;
  asyncActionCreator: AsyncActionCreatorType<Returned, ThunkArg, RejectedValue>;

  constructor(
    asyncActionCreator: AsyncActionCreatorType<
      Returned,
      ThunkArg,
      RejectedValue
    >,
  ) {
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.asyncActionCreator = asyncActionCreator;
  }

  async callThunk(arg: ThunkArg) {
    const action = this.asyncActionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
