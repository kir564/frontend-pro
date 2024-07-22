import { ReducersMapObject } from '@reduxjs/toolkit';
import type { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { articleDetailsReducer } from 'entities/article/model/slice/articleDetailsSlice';
import { ReducersList } from 'shared/lib/components/dynamicModuleLoader/DynamicModuleLoader';
// import { loginReducer } from 'features/authByUsername/model/slice/loginSlice';

// const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
//   loginForm: loginReducer,
// };

const defaultAsyncReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (
  state?: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
): Decorator => {
  // eslint-disable-next-line react/display-name
  return (Story) => {
    return (
      <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={
          {
            ...defaultAsyncReducers,
            ...asyncReducers,
          } as ReducersMapObject<StateSchema>
        }
      >
        <Story />
      </StoreProvider>
    );
  };
};
