import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ProfileCard.module.scss';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { Button, Input, Text } from 'shared/ui';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('profile')} />
        <Button className={cls.editBtn} theme="outline">
          {t('edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          className={cls.input}
          value={data?.first}
          placeholder={t('name')}
        />
        <Input
          className={cls.input}
          value={data?.lastName}
          placeholder={t('lastName')}
        />
      </div>
    </div>
  );
};
