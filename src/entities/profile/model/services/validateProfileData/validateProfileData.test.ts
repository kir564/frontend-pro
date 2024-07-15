import { Profile } from '../../types/ProfileSchema';
import {
  VALIDATE_PROFILE_ERROR,
  validateProfileData,
} from './validateProfileData';

describe('validateProfileData', () => {
  const data: Profile = {
    first: 'John',
    lastName: 'Smith',
    age: 23,
    currency: 'RUB',
    country: 'Russia',
    city: 'Moscow',
    username: 'admin',
  };
  test('success', () => {
    expect(validateProfileData(data)).toEqual([]);
  });

  test('without first and last name', () => {
    expect(validateProfileData({ ...data, first: '', lastName: '' })).toEqual([
      VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA,
    ]);
  });
  test('incorrect age', () => {
    expect(validateProfileData({ ...data, age: undefined })).toEqual([
      VALIDATE_PROFILE_ERROR.INCORRECT_AGE,
    ]);
  });
  test('incorrect country', () => {
    expect(validateProfileData({ ...data, country: undefined })).toEqual([
      VALIDATE_PROFILE_ERROR.INCORRECT_COUNTRY,
    ]);
  });
  test('incorrect all', () => {
    expect(validateProfileData({})).toEqual([
      VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA,
      VALIDATE_PROFILE_ERROR.INCORRECT_AGE,
      VALIDATE_PROFILE_ERROR.INCORRECT_COUNTRY,
    ]);
  });
});
