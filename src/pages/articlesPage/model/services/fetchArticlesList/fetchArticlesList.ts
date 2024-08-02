import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from 'entities/article';
import { getArticlesPageLimit } from '../../selectors/articlePageSelectors';

export interface FetchArticlesListProps {
  page: number;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async ({ page = 1 }, thunkAPI) => {
  const limit = getArticlesPageLimit(thunkAPI.getState());

  try {
    const response = await thunkAPI.extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
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
