import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import type { Comment } from 'entities/comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (articleId, thunkAPI) => {
  if (!articleId) {
    return thunkAPI.rejectWithValue('error fetchCommentsByArticleId');
  }
  try {
    const response = await thunkAPI.extra.api.get<Comment[]>(`/comments`, {
      params: {
        articleId,
        _expand: 'user',
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    console.log(error);

    return thunkAPI.rejectWithValue('error fetchCommentsByArticleId');
  }
});
