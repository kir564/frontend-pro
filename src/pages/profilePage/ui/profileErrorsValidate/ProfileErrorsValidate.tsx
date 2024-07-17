import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui';
import { VALIDATE_PROFILE_ERROR } from 'entities/profile/model/services/validateProfileData/validateProfileData';
import { useSelector } from 'react-redux';
import { getProfileValidateError } from 'entities/profile';

interface ProfileErrorsValidateProps {
  className?: string;
}

export const ProfileErrorsValidate: FC<ProfileErrorsValidateProps> = ({}) => {
  const { t } = useTranslation('profile');
  const validateErrors = useSelector(getProfileValidateError);

  const VALIDATE_ERROR_TRANSLATE = {
    [VALIDATE_PROFILE_ERROR.INCORRECT_AGE]: t('validate-error-age'),
    [VALIDATE_PROFILE_ERROR.INCORRECT_COUNTRY]: t('validate-error-country'),
    [VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA]: t('validate-error-data'),
    [VALIDATE_PROFILE_ERROR.NO_DATA]: t('validate-error-no-data'),
    [VALIDATE_PROFILE_ERROR.SERVER_ERROR]: t('validate-error-server'),
  };

  if (!validateErrors?.length) {
    return null;
  }

  return (
    <>
      {validateErrors?.map((error) => (
        <Text
          key={error}
          variant={`error`}
          text={VALIDATE_ERROR_TRANSLATE[error]}
        />
      ))}
    </>
  );
};
