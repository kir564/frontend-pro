import { useContext } from 'react';
import {
  AppTheme,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from './ThemeContext';

interface IUseThemeContext {
  theme: AppTheme;
  toggleTheme: VoidFunction;
}

export const useThemeContext = (): IUseThemeContext => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme =
      theme === 'app-light-theme' ? 'app-dark-theme' : 'app-light-theme';
    setTheme(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
