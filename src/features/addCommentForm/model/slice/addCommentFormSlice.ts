import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

export const initialState: AddCommentFormSchema = {
  text: '',
  error: undefined,
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchLoginByUsername.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = '';
  //     })
  //     .addCase(fetchLoginByUsername.fulfilled, (state) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(fetchLoginByUsername.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload?.message;
  //     });
  // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;

export const { reducer: addCommentFormReducer } = addCommentFormSlice;
