import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleRatingSchema } from '../types/ArticleRatingSchema';

const initialState: ArticleRatingSchema = {
  // isLoading: false,
  // error: undefined,
  // data: undefined,
};

export const articleRatingSlice = createSlice({
  name: 'articleRating',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBy.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = '';
  //     })
  //     .addCase(
  //       fetchBy.fulfilled,
  //       (state, action: PayloadAction<>) => {
  //         state.isLoading = false;
  //         state.data = action.payload;
  //       },
  //     )
  //     .addCase(fetchBy.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { actions: articleRatingActions } = articleRatingSlice;
export const { reducer: articleRatingReducer } = articleRatingSlice;
