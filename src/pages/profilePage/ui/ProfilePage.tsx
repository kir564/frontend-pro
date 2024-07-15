import { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, DynamicModuleLoader, ReducersList } from 'shared/lib';
import cls from './ProfilePage.module.scss';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileValidateError,
  getReadOnly,
  profileActions,
  profileReducer,
} from 'entities/profile';
import { useAppDispatch } from 'shared/lib/hooks';
import { ProfileCard } from 'entities/profile/ui';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './profilePageHeader/ProfilePageHeader';
import { CurrencyType } from 'entities/currency';
import { CountryType } from 'entities/country';
import { Text } from 'shared/ui';
import { VALIDATE_PROFILE_ERROR } from 'entities/profile/model/services/validateProfileData/validateProfileData';

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

export const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  const data = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getReadOnly);
  const validateErrors = useSelector(getProfileValidateError);

  const VALIDATE_ERROR_TRANSLATE = {
    [VALIDATE_PROFILE_ERROR.INCORRECT_AGE]: t('validate-error-age'),
    [VALIDATE_PROFILE_ERROR.INCORRECT_COUNTRY]: t('validate-error-country'),
    [VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA]: t('validate-error-data'),
    [VALIDATE_PROFILE_ERROR.NO_DATA]: t('validate-error-no-data'),
    [VALIDATE_PROFILE_ERROR.SERVER_ERROR]: t('validate-error-server'),
  };

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || '' }));
    },
    [dispatch],
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastName: value || '' }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value) || '' }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value } || ''));
    },
    [dispatch],
  );
  const onChangeUserName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value } || ''));
    },
    [dispatch],
  );
  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value } || ''));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (value?: CurrencyType) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch],
  );
  const onChangeCountry = useCallback(
    (value?: CountryType) => {
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.profilePage, {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length &&
          validateErrors.map((error) => (
            <Text
              key={error}
              variant={`error`}
              text={VALIDATE_ERROR_TRANSLATE[error]}
            />
          ))}
        <ProfileCard
          data={data}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUserName={onChangeUserName}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};
