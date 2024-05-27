import { Link } from 'react-router-dom';
import './styles/index.scss';

import { useThemeContext } from './providers/themeProvider';
import { classNames } from 'shared/lib';
import { AppRouter } from './providers/router/ui/AppRouter';

export const App = () => {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={() => toggleTheme()}>Toggle theme</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <AppRouter />
    </div>
  );
};
