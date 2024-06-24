import { useThemeContext } from './providers/themeProvider';
import { classNames } from 'shared/lib';
import { AppRouter } from './providers/router/ui/AppRouter';
import { NavBar } from 'widgets/navBar';
import { SideBar } from 'widgets/sideBar';
import { ErrorBoundary } from './providers/errorBoundary';

export const App = () => {
  const { theme } = useThemeContext();

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
