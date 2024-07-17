import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, DynamicModuleLoader, ReducersList } from 'shared/lib';
import cls from './ProfilePage.module.scss';
import { fetchProfileData, profileReducer } from 'entities/profile';
import { useAppDispatch } from 'shared/lib/hooks';
import { ProfilePageHeader } from './profilePageHeader/ProfilePageHeader';
import { EditableProfileCard } from 'widgets/editableProfileCard';
import { ProfileErrorsValidate } from './profileErrorsValidate/ProfileErrorsValidate';

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

export const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.profilePage, {}, [className])}>
        <ProfilePageHeader />
        <ProfileErrorsValidate />
        <EditableProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};
