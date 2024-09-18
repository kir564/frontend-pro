import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './NavBar.module.scss';
import { AppLink, Avatar, Button, Text } from 'shared/ui';
import { LoginModal } from 'features/authByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserAuthData,
  isAdmin,
  isManager,
  userActions,
} from 'entities/user';
import { routePath } from 'shared/config/router/routePath';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = memo(function NavBar({
  className,
}: NavBarProps) {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const isUserAdmin = useSelector(isAdmin);
  const isUserManager = useSelector(isManager);

  const [isAuthModal, setIsAuthModal] = useState(false);

  const closeAuthModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  const onLogOut = () => {
    // toggleModal();
    setIsAuthModal(false);
    dispatch(userActions.removeAuthUser());
  };

  const isAdminPanelAvailable = isUserAdmin || isUserManager;

  if (authData) {
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
      <header className={classNames(cls.navBar, {}, [className])}>
        <LoginModal
          isOpen={isAuthModal && !authData}
          onClose={closeAuthModal}
          lazy
        />
        <Text variant={`inverted`} className={cls.logo} title={t('logo')} />
        <AppLink theme="secondary" to={routePath.article_create}>
          {t('create-article')}
        </AppLink>
        <div className={cls.links}>
          <Dropdown
            direction={`bottomRight`}
            trigger={<Avatar src={authData.avatar} size={30} />}
            items={items}
          />
        </div>
      </header>
    );
  }

  return (
    <header className={classNames(cls.navBar, {}, [className])}>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={closeAuthModal} lazy />
      )}
      <Text variant={`inverted`} className={cls.logo} title={t('logo')} />
      <div className={cls.links}>
        <Button theme="cleanInverted" onClick={closeAuthModal}>
          {t('log-in')}
        </Button>
      </div>
    </header>
  );
});
