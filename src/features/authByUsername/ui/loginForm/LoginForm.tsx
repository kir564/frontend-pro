import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './LoginForm.module.scss';
import { Button, Input } from 'shared/ui';

interface LoginFormProps {
  className?: string;
  isOpen?: boolean;
}

export const LoginForm: FC<LoginFormProps> = ({ className, isOpen }) => {
  const { t } = useTranslation('login-form');

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        autoFocus={isOpen}
        className={cls.input}
        placeholder={t('username')}
      />
      <Input className={cls.input} placeholder={t('password')} />
      <Button>{t('log-in')}</Button>
    </div>
  );
};
