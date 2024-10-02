import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IUser, UserSchema } from '../types/UserSchema';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants';

const initialState: UserSchema = {
  authData: undefined,
  _initAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
    initAuthUser: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

      if (user) {
        state.authData = JSON.parse(user);
      }
      state._initAuth = true;
    },
    removeAuthUser: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
