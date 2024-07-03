import { createAsyncThunk } from '@reduxjs/toolkit';
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
  { rejectValue: IError }
>('login/fetchLoginByUsername', async (authData, thunkAPI) => {
  try {
    const response = await axios.post<IUser>(
      'http://localhost:8000/login',
      authData,
    );

    if (!response.data) {
      throw new Error('нет данных');
    }

    // const data = Object.fromEntries(
    //   Object.entries(response.data).filter(([key]) => key !== 'password'),
    // );

    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthUser(response.data));

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
