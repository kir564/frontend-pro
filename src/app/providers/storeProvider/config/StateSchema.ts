import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/article';
import { CounterSchema } from 'entities/counter';
import { ProfileSchema } from 'entities/profile';
import { UserSchema } from 'entities/user';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { LoginSchema } from 'features/authByUsername';
import { ScrollSaveSchema } from 'features/scrollSave';
import {
  ArticleDetailPageSchema,
  ArticleDetailsCommentsSchema,
  ArticleDetailsPageRecommendationSchema,
} from 'pages/articleDetailsPage';
import { ArticlesPageSchema } from 'pages/articlesPage/model/types/ArticlesPageSchema';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scrollSave: ScrollSaveSchema;

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
