import { FC, useCallback } from 'react';

import { ProfileCard } from 'entities/profile/ui';
import { useSelector } from 'react-redux';
import {
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getReadOnly,
  profileActions,
} from 'entities/profile';
import { useAppDispatch } from 'shared/lib/hooks';
import { CurrencyType } from 'entities/currency';
import { CountryType } from 'entities/country';
import { EditableProfilePageHeader } from '../EditableProfilePageHeader/EditableProfilePageHeader';
import { EditableProfileErrorsValidate } from '../EditableProfileErrorsValidate/EditableProfileErrorsValidate';

interface EditableProfileCardProps {
  className?: string;
}

export const EditableProfileCard: FC<EditableProfileCardProps> = ({}) => {
  const dispatch = useAppDispatch();

  const data = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getReadOnly);

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
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch],
  );
  const onChangeUserName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch],
  );
  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
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
    <>
      <EditableProfilePageHeader />
      <EditableProfileErrorsValidate />
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
    </>
  );
};
