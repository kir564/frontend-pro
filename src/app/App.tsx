import './styles/index.scss';

import { useThemeContext } from './providers/themeProvider';
import { classNames } from 'shared/lib';
import { AppRouter } from './providers/router/ui/AppRouter';
import { NavBar } from 'widgets/navBar';
import { SideBar } from 'widgets/sideBar';

export const App = () => {
  const { theme } = useThemeContext();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};
