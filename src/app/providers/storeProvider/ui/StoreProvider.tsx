import { FC } from 'react';

import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
  initialState?: StateSchema;
  asyncReducers?: ReducersMapObject<StateSchema>;
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const navigate = useNavigate();
  const store = createReduxStore(initialState, asyncReducers, navigate);

  return <Provider store={store}>{children}</Provider>;
};
