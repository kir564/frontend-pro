import { loginActions, loginReducer } from './loginSlice';
import type { LoginSchema } from '../types/LoginSchema';

describe('loginSlice', () => {
  test('should set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '',
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('admin')),
    ).toEqual({ username: 'admin' });
  });
  test('should set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '',
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('qwerty')),
    ).toEqual({ password: 'qwerty' });
  });

  test('should not work with empty state', () => {
    const state: DeepPartial<LoginSchema | undefined> = undefined;
    expect(
      loginReducer(
        state as LoginSchema | undefined,
        loginActions.setUsername('admin'),
      ),
    ).not.toEqual({ username: 'admin' });
  });
});
