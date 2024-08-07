import { ReducersMapObject } from '@reduxjs/toolkit';
import type { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { ReducersList } from 'shared/lib/components/dynamicModuleLoader/DynamicModuleLoader';
// import { loginReducer } from 'features/authByUsername/model/slice/loginSlice';

// const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
//   loginForm: loginReducer,
// };

export const StoreDecorator = (
  state?: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
): Decorator => {
  // eslint-disable-next-line react/display-name
  return (Story) => {
    return (
      <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={asyncReducers as ReducersMapObject<StateSchema>}
      >
        <Story />
      </StoreProvider>
    );
  };
};
