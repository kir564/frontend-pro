import { FC, useMemo, useState } from 'react';
import {
  AppTheme,
  IThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from '../lib/ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as AppTheme) || 'light';

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<AppTheme>(defaultTheme);

  const defaultThemeValue = useMemo<IThemeContext>(
    () => ({
      setTheme,
      theme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultThemeValue}>
      {children}
    </ThemeContext.Provider>
  );
};
