import type { Profile } from '../../types/ProfileSchema';

export const VALIDATE_PROFILE_ERROR = {
  INCORRECT_USER_DATA: 'INCORRECT_USER_DATA',
  INCORRECT_AGE: 'INCORRECT_AGE',
  INCORRECT_COUNTRY: 'INCORRECT_COUNTRY',
  NO_DATA: 'NO_DATA',
  SERVER_ERROR: 'SERVER_ERROR',
};

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [VALIDATE_PROFILE_ERROR.NO_DATA];
  }

  const errors = [];

  if (!profile.first || !profile.lastName) {
    errors.push(VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA);
  }

  if (!profile.age || !Number.isInteger(profile.age)) {
    errors.push(VALIDATE_PROFILE_ERROR.INCORRECT_AGE);
  }

  if (!profile.country) {
    errors.push(VALIDATE_PROFILE_ERROR.INCORRECT_COUNTRY);
  }

  return errors;
};
