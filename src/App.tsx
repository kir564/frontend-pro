import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss';

import { AboutPageAsync } from './pages/aboutPage/AboutPageAsync';
import { MainPageAsync } from './pages/mainPage/MainPageAsync';
import { useThemeContext } from './theme/useThemeContext';
import { classNames } from './helpers/classNames/classNames';

export const App = () => {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={() => toggleTheme()}>Toggle theme</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
