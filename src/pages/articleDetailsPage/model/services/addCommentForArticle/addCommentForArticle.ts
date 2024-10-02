import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import type { Comment } from '@/entities/comment';
import { getUserAuthData } from '@/entities/user';
import { getArticleDetailsData } from '@/entities/article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkAPI) => {
  const userData = getUserAuthData(thunkAPI.getState());
  const articleData = getArticleDetailsData(thunkAPI.getState());

  if (!userData || !articleData || !text) {
    return thunkAPI.rejectWithValue('error addCommentForArticle: no data');
  }

  try {
    const response = await thunkAPI.extra.api.post<Comment>(`/comments`, {
      text,
      userId: userData?.id,
      articleId: articleData?.id,
    });

    if (!response.data) {
      throw new Error();
    }

    thunkAPI.dispatch(fetchCommentsByArticleId(articleData.id));

    return response.data;
  } catch (error) {
    console.log(error);

    return thunkAPI.rejectWithValue('error addCommentForArticle');
  }
});
