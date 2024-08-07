import { ReducersMapObject } from '@reduxjs/toolkit';
import type { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { articleDetailsReducer } from 'entities/article';
import { addCommentFormReducer } from 'features/addCommentForm';
import { articleDetailsPageReducer } from 'pages/articleDetailsPage/model/slice';
import { articlesPageReducer } from 'pages/articlesPage';
import { ReducersList } from 'shared/lib/components/dynamicModuleLoader/DynamicModuleLoader';
// import { loginReducer } from 'features/authByUsername/model/slice/loginSlice';

// const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
//   loginForm: loginReducer,
// };

const defaultAsyncReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
  articlesPage: articlesPageReducer,
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
