import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import type { ArticleDetailsSchema } from 'entities/article';
import { CounterSchema } from 'entities/counter';
import type { ProfileSchema } from 'entities/profile';
import type { UserSchema } from 'entities/user';
import type { AddCommentFormSchema } from 'features/addCommentForm';
import type { LoginSchema } from 'features/authByUsername';
import type { ScrollSaveSchema } from 'features/scrollSave';
import type { ArticleDetailPageSchema } from 'pages/articleDetailsPage';
import type { ArticlesPageSchema } from 'pages/articlesPage/model/types/ArticlesPageSchema';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scrollSave: ScrollSaveSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (_: StateSchema, __: AnyAction) => CombinedState<StateSchema>;
  add: (_: StateSchemaKey, __: Reducer) => void;
  remove: (_: StateSchemaKey) => void;
}

export interface IReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: IReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
