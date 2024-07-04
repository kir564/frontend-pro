import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema } from './StateSchema';

import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
// import { loginReducer } from 'features/authByUsername';
import { createReducerManager } from './reducerManager';
import { instanceApi } from 'shared/api/api';
import { NavigateFunction } from 'react-router-dom';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction,
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    // loginForm: loginReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: instanceApi,
            navigate,
          },
        },
        serializableCheck: false,
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
