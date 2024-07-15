import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Profile } from '../../types/ProfileSchema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { profileActions } from '../../slice/profileSlice';
import {
  VALIDATE_PROFILE_ERROR,
  validateProfileData,
} from '../validateProfileData/validateProfileData';

export const fetchUpdateData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string[]>
>('profile/fetchUpdateData', async (_, thunkAPI) => {
  const formData = getProfileForm(thunkAPI.getState());

  const errors = validateProfileData(formData);

  if (errors.length) {
    return thunkAPI.rejectWithValue(errors);
  }

  try {
    const response = await thunkAPI.extra.api.put<Profile>('/profile', {
      ...formData,
    });

    if (!response.data) {
      throw new Error();
    }

    thunkAPI.dispatch(profileActions.setReadOnly(true));

    return response.data;
  } catch (error) {
    console.log(error);

    return thunkAPI.rejectWithValue([VALIDATE_PROFILE_ERROR.SERVER_ERROR]);
  }
});
