import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/ProfileSchema';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(
      fetchProfileData.fulfilled,
      (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
      },
    );
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.message;
    });
  },
});

export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } = profileSlice;
