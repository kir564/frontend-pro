import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ProfilePageHeader.module.scss';
import { Button, Text } from 'shared/ui';
import { useSelector } from 'react-redux';
import {
  fetchUpdateData,
  getProfileForm,
  getReadOnly,
  Profile,
  profileActions,
} from 'entities/profile';
import { useAppDispatch } from 'shared/lib/hooks';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({
  className,
}) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  // const formData = useSelector(getProfileForm);

  const readonly = useSelector(getReadOnly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(fetchUpdateData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('profile')} />
      {readonly ? (
        <Button className={cls.editBtn} theme="outline" onClick={onEdit}>
          {t('edit')}
        </Button>
      ) : (
        <>
          <Button
            className={cls.editBtn}
            theme="outline_red"
            onClick={onCancelEdit}
          >
            {t('cancel')}
          </Button>
          <Button className={cls.saveBtn} theme="outline" onClick={onSave}>
            {t('save')}
          </Button>
        </>
      )}
    </div>
  );
};
