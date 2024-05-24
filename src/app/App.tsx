import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss';

import { AboutPage } from 'pages/aboutPage';
import { MainPage } from 'pages/mainPage';
import { useThemeContext } from './providers/themeProvider';
import { classNames } from 'shared/lib';

export const App = () => {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={() => toggleTheme()}>Toggle theme</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
