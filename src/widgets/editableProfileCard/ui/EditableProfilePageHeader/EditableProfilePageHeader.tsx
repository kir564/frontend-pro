import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './EditableProfilePageHeader.module.scss';
import { Button, Text } from 'shared/ui';
import { useSelector } from 'react-redux';
import {
  fetchUpdateData,
  getProfileData,
  getReadOnly,
  profileActions,
} from 'entities/profile';
import { useAppDispatch } from 'shared/lib/hooks';
import { getUserAuthData } from 'entities/user';

interface ProfilePageHeaderProps {
  className?: string;
}

export const EditableProfilePageHeader: FC<ProfilePageHeaderProps> = ({
  className,
}) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  // const formData = useSelector(getProfileForm);

  const readonly = useSelector(getReadOnly);
  const user = useSelector(getUserAuthData);
  const profile = useSelector(getProfileData);

  const isCurrentUserProfile = user?.id === profile?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    if (profile?.id) {
      dispatch(fetchUpdateData());
    }
  }, [dispatch, profile?.id]);

  if (!isCurrentUserProfile) {
    return (
      <div className={classNames(cls.profilePageHeader, {}, [className])}>
        <Text title={t('profile')} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('profile')} />
      {readonly ? (
        <Button
          className={cls.editBtn}
          theme="outline"
          onClick={onEdit}
          data-testid={`EditableProfilePageHeader.EditButton`}
        >
          {t('edit')}
        </Button>
      ) : (
        <>
          <Button
            className={cls.editBtn}
            theme="outline_red"
            onClick={onCancelEdit}
            data-testid={`EditableProfilePageHeader.CancelButton`}
          >
            {t('cancel')}
          </Button>
          <Button
            data-testid={`EditableProfilePageHeader.SaveButton`}
            className={cls.saveBtn}
            theme="outline"
            onClick={onSave}
          >
            {t('save')}
          </Button>
        </>
      )}
    </div>
  );
};
