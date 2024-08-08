import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './NavBar.module.scss';
import { AppLink, Button, Text } from 'shared/ui';
import { LoginModal } from 'features/authByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/user';
import { routeConfig } from 'app/providers/router/config/routeConfig';
import { routePath } from 'shared/config/router/routePath';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = memo(function NavBar({
  className,
}: NavBarProps) {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const closeAuthModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  const onLogOut = () => {
    // toggleModal();
    setIsAuthModal(false);
    dispatch(userActions.removeAuthUser());
  };

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
          <Button theme="cleanInverted" onClick={onLogOut}>
            {t('log-out')}
          </Button>
        </div>
      </header>
    );
  }

  return (
    <header className={classNames(cls.navBar, {}, [className])}>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={closeAuthModal} lazy />
      )}
      <div className={cls.links}>
        <Button theme="cleanInverted" onClick={closeAuthModal}>
          {t('log-in')}
        </Button>
      </div>
    </header>
  );
});
