import { FC, Suspense } from 'react';

import { classNames } from 'shared/lib';
import cls from './LoginModal.module.scss';
import { Loader, Modal } from 'shared/ui';
import { LoginFormAsync } from '../loginForm/LoginFormAsync';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const LoginModal: FC<LoginModalProps> = ({
  className,
  isOpen,
  onClose,
  lazy,
}) => {
  return (
    <div className={classNames(cls.loginModal, {}, [className])}>
      <Modal isOpen={isOpen} onClose={onClose} lazy={lazy}>
        <Suspense fallback={<Loader />}>
          <LoginFormAsync isOpen={isOpen} />
        </Suspense>
      </Modal>
    </div>
  );
};
