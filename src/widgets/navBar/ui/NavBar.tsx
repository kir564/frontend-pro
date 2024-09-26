import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './NavBar.module.scss';
import { AppLink, Button, Text } from 'shared/ui';
import { LoginModal } from 'features/authByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/user';
import { routePath } from 'shared/config/router/routePath';
import { NotificationButton } from 'features/notificationButton';
import { AvatarDropDown } from 'features/avatarDropdown';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = memo(function NavBar({
  className,
}: NavBarProps) {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);

  const [isAuthModal, setIsAuthModal] = useState(false);

  const closeAuthModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  if (authData) {
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
          <NotificationButton />
          <AvatarDropDown />
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
