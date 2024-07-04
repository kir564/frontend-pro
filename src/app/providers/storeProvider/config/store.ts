import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';

import { StateSchema, ThunkExtraArg } from './StateSchema';

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

  const extra: ThunkExtraArg = {
    api: instanceApi,
    navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extra,
        },
        serializableCheck: false,
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
