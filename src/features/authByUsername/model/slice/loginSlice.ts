import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { fetchLoginByUsername } from '../services/fetchLoginByUsername/fetchLoginByUsername';

export const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginByUsername.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchLoginByUsername.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchLoginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message;
      });
  },
});

export const { actions: loginActions } = loginSlice;

export const { reducer: loginReducer } = loginSlice;
