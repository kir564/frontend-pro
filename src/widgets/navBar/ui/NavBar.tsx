import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './NavBar.module.scss';
import { Button } from 'shared/ui';
import { LoginModal } from 'features/authByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/user';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation();
  const { authData } = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const toggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  const onLogOut = () => {
    toggleModal();
    dispatch(userActions.removeAuthUser());
  };

  if (authData) {
    return (
      <div className={classNames(cls.navBar, {}, [className])}>
        <div className={cls.links}>
          <Button theme="cleanInverted" onClick={onLogOut}>
            {t('log-out')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.navBar, {}, [className])}>
      <LoginModal isOpen={isAuthModal} onClose={toggleModal} lazy />
      <div className={cls.links}>
        <Button theme="cleanInverted" onClick={toggleModal}>
          {t('log-in')}
        </Button>
      </div>
    </div>
  );
};
