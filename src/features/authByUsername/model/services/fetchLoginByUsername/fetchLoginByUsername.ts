import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import axios, { AxiosError } from 'axios';

import { IUser, userActions } from 'entities/user';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants';

export interface IAuthData {
  username: string;
  password: string;
}

interface IError {
  message: string;
  // другие поля ошибки, если есть
}

export const fetchLoginByUsername = createAsyncThunk<
  IUser,
  IAuthData,
  ThunkConfig<IError>
>('login/fetchLoginByUsername', async (authData, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.post<IUser>('/login', authData);

    if (!response.data) {
      throw new Error('нет данных');
    }

    // const data = Object.fromEntries(
    //   Object.entries(response.data).filter(([key]) => key !== 'password'),
    // );

    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthUser(response.data));

    thunkAPI.extra.navigate?.('/about');

    return response.data;
  } catch (error) {
    const e = error as AxiosError;

    if (axios.isAxiosError(e) && e.response) {
      return thunkAPI.rejectWithValue(e.response.data);
    } else {
      return thunkAPI.rejectWithValue({ message: 'Неизвестная ошибка' });
    }

    // return thunkAPI.rejectWithValue(e.response.data);
  }
});
