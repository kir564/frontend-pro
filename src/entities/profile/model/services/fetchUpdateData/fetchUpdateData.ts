import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import axios, { AxiosError } from 'axios';
import { Profile } from '../../types/ProfileSchema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { profileActions } from '../../slice/profileSlice';

interface IError {
  message: string;
  // другие поля ошибки, если есть
}

export const fetchUpdateData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<IError>
>('profile/fetchUpdateData', async (_, thunkAPI) => {
  try {
    const formData = getProfileForm(thunkAPI.getState());

    const response = await thunkAPI.extra.api.put<Profile>('/profile', {
      ...formData,
    });

    thunkAPI.dispatch(profileActions.setReadOnly(true));

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
