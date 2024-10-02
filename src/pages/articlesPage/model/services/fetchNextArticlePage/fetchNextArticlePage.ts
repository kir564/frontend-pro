import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from '../../selectors/articlePageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageAction } from '../../slices/articlesPageSlice';

export const fetchNextArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/fetchNextArticlePage', async (_, thunkAPI) => {
  const hasMore = getArticlesPageHasMore(thunkAPI.getState());
  const isLoading = getArticlesPageIsLoading(thunkAPI.getState());
  const page = getArticlesPageNum(thunkAPI.getState());

  if (hasMore && !isLoading) {
    thunkAPI.dispatch(fetchArticlesList({ page: page + 1 }));
    thunkAPI.dispatch(articlesPageAction.setPage(page + 1));
  }
});
