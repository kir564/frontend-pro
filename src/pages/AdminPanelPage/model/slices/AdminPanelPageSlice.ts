import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdminPanelPageSchema } from '../types/AdminPanelPageSchema';

const initialState: AdminPanelPageSchema = {
  // isLoading: false,
  // error: undefined,
  // data: undefined,
};

export const AdminPanelPageSlice = createSlice({
  name: 'AdminPanelPage',
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

export const { actions: AdminPanelPageActions } = AdminPanelPageSlice;
export const { reducer: AdminPanelPageReducer } = AdminPanelPageSlice;
