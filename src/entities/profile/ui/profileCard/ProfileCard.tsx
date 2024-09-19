import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ProfileCard.module.scss';

import { Avatar, Input, Loader, Text } from 'shared/ui';
import type { Profile } from '../../model/types/ProfileSchema';
import { CurrencySelect } from 'entities/currency';
import { CountrySelect } from 'entities/country';
import type { CurrencyType } from 'entities/currency';
import type { CountryType } from 'entities/country';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstName?: (_?: string) => void;
  onChangeLastName?: (_?: string) => void;
  onChangeAge?: (_?: string) => void;
  onChangeCity?: (_?: string) => void;
  onChangeUserName?: (_?: string) => void;
  onChangeAvatar?: (_?: string) => void;
  onChangeCurrency?: (_?: CurrencyType) => void;
  onChangeCountry?: (_?: CountryType) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeLastName,
  onChangeFirstName,
  onChangeAge,
  onChangeCity,
  onChangeUserName,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div
        className={classNames(cls.profileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          variant={`error`}
          title={t('title-err')}
          text={t('text-err')}
          align={`center`}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      {data?.avatar && <Avatar src={data.avatar} />}
      <div className={cls.data}>
        <Input
          data-testid={`ProfileCard.firstName`}
          readonly={readonly}
          className={cls.input}
          value={data?.first}
          placeholder={t('name')}
          onChange={onChangeFirstName}
        />
        <Input
          data-testid={`ProfileCard.lastName`}
          readonly={readonly}
          className={cls.input}
          value={data?.lastName}
          placeholder={t('lastName')}
          onChange={onChangeLastName}
        />
        <Input
          readonly={readonly}
          className={cls.input}
          value={data?.age}
          placeholder={t('age')}
          onChange={onChangeAge}
        />
        <Input
          readonly={readonly}
          className={cls.input}
          value={data?.city}
          placeholder={t('city')}
          onChange={onChangeCity}
        />
        <Input
          readonly={readonly}
          className={cls.input}
          value={data?.username}
          placeholder={t('username')}
          onChange={onChangeUserName}
        />
        <Input
          readonly={readonly}
          className={cls.input}
          value={data?.avatar}
          placeholder={`http://avatar...`}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          readonly={readonly}
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          readonly={readonly}
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  );
};
