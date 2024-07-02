import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, ReducersList } from 'shared/lib';
import cls from './LoginForm.module.scss';
import { Button, Input, Text } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { fetchLoginByUsername } from '../../model/services/fetchLoginByUsername/fetchLoginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError';
import { DynamicModuleLoader } from 'shared/lib';

export interface LoginFormProps {
  className?: string;
  isOpen?: boolean;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

export const LoginForm = memo(function LoginForm({
  className,
  isOpen,
}: LoginFormProps) {
  const { t } = useTranslation('login-form');
  const dispatch = useDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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

  const onLoginSubmit = useCallback(() => {
    dispatch(fetchLoginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
        <Button onClick={onLoginSubmit} disabled={isLoading}>
          {t('log-in')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});
