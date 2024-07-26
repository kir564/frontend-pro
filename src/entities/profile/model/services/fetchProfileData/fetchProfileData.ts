import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import axios, { AxiosError } from 'axios';
import { Profile } from '../../types/ProfileSchema';

interface IError {
  message: string;
  // другие поля ошибки, если есть
}

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<IError>
>('profile/fetchProfileData', async (profileId, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.get<Profile>(
      `/profile/${profileId}`,
    );

    if (!response.data) {
      throw new Error();
    }

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
