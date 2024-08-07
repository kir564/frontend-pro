import { StateSchema } from 'app/providers/storeProvider';

export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.view || 'small';

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading;

export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPage?.error;

export const getArticlesPageNum = (state: StateSchema) =>
  state.articlesPage?.page || 1;

export const getArticlesPageLimit = (state: StateSchema) =>
  state.articlesPage?.limit || 9;

export const getArticlesPageHasMore = (state: StateSchema) =>
  state.articlesPage?.hasMore;

export const getArticlesPageInitialled = (state: StateSchema) =>
  state.articlesPage?._initialled;

export const getArticlesPageOrder = (state: StateSchema) =>
  state.articlesPage?.order || 'asc';

export const getArticlesPageSort = (state: StateSchema) =>
  state.articlesPage?.sort || 'createdAt';

export const getArticlesPageSearch = (state: StateSchema) =>
  state.articlesPage?.search || '';

export const getArticlesPageType = (state: StateSchema) =>
  state.articlesPage?.type || 'ALL';
