import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { getArticlesPageInitialled } from '../../selectors/articlePageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageAction } from '../../slices/articlesPageSlice';
import { ArticleSortField, ArticleType } from 'entities/article';
import { SortOrder } from 'shared/types';

export const initArticlePage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlesPage/initArticlePage', async (searchParams, thunkAPI) => {
  const initialled = getArticlesPageInitialled(thunkAPI.getState());

  if (!initialled) {
    const sortFromUrl = searchParams.get('sort') as ArticleSortField;
    const orderFromUrl = searchParams.get('order') as SortOrder;
    const searchFromUrl = searchParams.get('search');
    const typeFromUrl = searchParams.get('type') as ArticleType;

    if (sortFromUrl) {
      thunkAPI.dispatch(articlesPageAction.setSort(sortFromUrl));
    }

    if (orderFromUrl) {
      thunkAPI.dispatch(articlesPageAction.setOrder(orderFromUrl));
    }

    if (searchFromUrl) {
      thunkAPI.dispatch(articlesPageAction.setSearch(searchFromUrl));
    }

    if (typeFromUrl) {
      thunkAPI.dispatch(articlesPageAction.setType(typeFromUrl));
    }

    thunkAPI.dispatch(articlesPageAction.initState());
    thunkAPI.dispatch(fetchArticlesList({ page: 1 }));
  }
});
