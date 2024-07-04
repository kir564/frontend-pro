import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, DynamicModuleLoader, ReducersList } from 'shared/lib';
import cls from './ProfilePage.module.scss';
import { fetchProfileData, profileReducer } from 'entities/profile';
import { useAppDispatch } from 'shared/lib/hooks';
import { ProfileCard } from 'entities/profile/ui';

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

export const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.profilePage, {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};
