import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>('articleDetails/fetchArticleById', async (id, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.get<Article>(`/articles/${id}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    console.log(error);

    return thunkAPI.rejectWithValue('error fetchArticleById');
  }
});
