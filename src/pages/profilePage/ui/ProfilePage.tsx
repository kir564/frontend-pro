import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, DynamicModuleLoader, ReducersList } from 'shared/lib';
import cls from './ProfilePage.module.scss';
import { fetchProfileData, profileReducer } from 'entities/profile';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { ProfilePageHeader } from './profilePageHeader/ProfilePageHeader';
import { EditableProfileCard } from 'widgets/editableProfileCard';
import { ProfileErrorsValidate } from './profileErrorsValidate/ProfileErrorsValidate';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/page/Page';

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

export const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <Page className={classNames(cls.profilePage, {}, [className])}>
        <ProfilePageHeader />
        <ProfileErrorsValidate />
        <EditableProfileCard />
      </Page>
    </DynamicModuleLoader>
  );
};
