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
    let newTheme: AppTheme;

    switch (theme) {
      case 'app-light-theme':
        newTheme = 'app-dark-theme';
        break;

      case 'app-dark-theme':
        newTheme = 'app-orange-theme';
        break;

      case 'app-orange-theme':
        newTheme = 'app-light-theme';
        break;

      default:
        newTheme = 'app-light-theme';
        break;
    }

    setTheme?.(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || 'app-light-theme',
    toggleTheme,
  };
};
