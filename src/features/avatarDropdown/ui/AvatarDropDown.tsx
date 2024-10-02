import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import { Dropdown } from '@/shared/ui/popups';
import { Avatar } from '@/shared/ui';
import { useSelector } from 'react-redux';
import {
  getUserAuthData,
  isAdmin,
  isManager,
  userActions,
} from '@/entities/user';
import { routePath } from '@/shared/config/router/routePath';
import { useAppDispatch } from '@/shared/lib/hooks';

interface AvatarDropDownProps {
  className?: string;
}

export const AvatarDropDown = memo(function AvatarDropDown({
  className,
}: AvatarDropDownProps) {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const isUserAdmin = useSelector(isAdmin);
  const isUserManager = useSelector(isManager);
  const dispatch = useAppDispatch();

  const isAdminPanelAvailable = isUserAdmin || isUserManager;

  const onLogOut = () => {
    // toggleModal();
    // setIsAuthModal(false);
    dispatch(userActions.removeAuthUser());
  };

  if (!authData) {
    return null;
  }

  const items = [
    ...(isAdminPanelAvailable
      ? [{ content: t('admin-panel'), href: `${routePath.admin_panel}` }]
      : []),
    {
      content: t('profile'),
      href: `${routePath.profile}/${authData.id}`,
    },
    {
      content: t('log-out'),
      onClick: onLogOut,
    },
  ];

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction={`bottomRight`}
      trigger={<Avatar src={authData.avatar} size={30} />}
      items={items}
    />
  );
});
