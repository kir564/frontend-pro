import { useThemeContext } from './providers/themeProvider';
import { classNames } from 'shared/lib';
import { AppRouter } from './providers/router/ui/AppRouter';
import { NavBar } from 'widgets/navBar';
import { SideBar } from 'widgets/sideBar';
import { ErrorBoundary } from './providers/errorBoundary';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from 'entities/user';

export const App = () => {
  const { theme } = useThemeContext();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthUser());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <div className="content-page">
        <SideBar />
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
      </div>
    </div>
  );
};
