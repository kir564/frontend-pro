import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationSchema } from '../types/NotificationSchema';

const initialState: NotificationSchema = {
  // isLoading: false,
  // error: undefined,
  // data: undefined,
};

export const notificationSlice = createSlice({
  name: 'notification',
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

export const { actions: notificationActions } = notificationSlice;
export const { reducer: notificationReducer } = notificationSlice;
