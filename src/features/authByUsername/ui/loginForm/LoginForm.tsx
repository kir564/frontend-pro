import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './LoginForm.module.scss';
import { Button, Input, Text } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { fetchLoginByUsername } from '../../model/services/fetchLoginByUsername/fetchLoginByUsername';

interface LoginFormProps {
  className?: string;
  isOpen?: boolean;
}

export const LoginForm = memo(function LoginForm({
  className,
  isOpen,
}: LoginFormProps) {
  const { t } = useTranslation('login-form');
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(fetchLoginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={`${t('title')}:`} />
      {error && <Text text={error} variant={`error`} />}
      <Input
        autoFocus={isOpen}
        className={cls.input}
        placeholder={t('username')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={cls.input}
        placeholder={t('password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button onClick={onLoginClick} disabled={isLoading}>
        {t('log-in')}
      </Button>
    </div>
  );
});
