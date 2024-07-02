import { IReduxStoreWithManager } from 'app/providers/storeProvider';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey } from 'app/providers/storeProvider/config/StateSchema';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

export type ReducerListEntry = [StateSchemaKey, Reducer];

export interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  reducers,
  children,
  removeAfterUnmount,
}) => {
  const store = useStore() as IReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
