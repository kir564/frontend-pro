import { FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './LoginModal.module.scss';
import { Modal } from 'shared/ui';
import { LoginForm } from '../loginForm/LoginForm';

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
        <LoginForm isOpen={isOpen} />
      </Modal>
    </div>
  );
};
