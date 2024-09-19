import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import type { Article } from 'entities/article';
import {
  getArticlesPageLimit,
  // getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/articlePageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

export interface FetchArticlesListProps {
  page: number;
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async ({ page = 1 }, thunkAPI) => {
  const limit = getArticlesPageLimit(thunkAPI.getState());
  const sort = getArticlesPageSort(thunkAPI.getState());
  const order = getArticlesPageOrder(thunkAPI.getState());
  const search = getArticlesPageSearch(thunkAPI.getState());
  const type = getArticlesPageType(thunkAPI.getState());

  try {
    addQueryParams({ search, order, sort, type });
    const response = await thunkAPI.extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
        _order: order,
        _sort: sort,
        q: search,
        type: type === 'ALL' ? undefined : type,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    console.log(error);

    return thunkAPI.rejectWithValue('error fetchArticlesList');
  }
});
