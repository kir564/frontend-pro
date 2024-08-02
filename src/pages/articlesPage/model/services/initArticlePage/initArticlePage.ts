import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { getArticlesPageInitialled } from '../../selectors/articlePageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageAction } from '../../slices/articlesPageSlice';

export const initArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/initArticlePage', async (_, thunkAPI) => {
  const initialled = getArticlesPageInitialled(thunkAPI.getState());

  if (!initialled) {
    thunkAPI.dispatch(articlesPageAction.initState());
    thunkAPI.dispatch(fetchArticlesList({ page: 1 }));
  }
});
