import './styles/index.scss';

import { useThemeContext } from './providers/themeProvider';
import { classNames } from 'shared/lib';
import { AppRouter } from './providers/router/ui/AppRouter';
import { NavBar } from 'widgets/navBar';

export const App = () => {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <button onClick={() => toggleTheme()}>Toggle theme</button>
      <AppRouter />
    </div>
  );
};
