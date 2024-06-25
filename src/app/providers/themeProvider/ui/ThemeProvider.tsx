import { FC, useMemo, useState } from 'react';
import {
  AppTheme,
  IThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from '../lib/ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as AppTheme) ||
  'app-light-theme';

interface IThemeProvider {
  initialTheme?: AppTheme;
}

export const ThemeProvider: FC<IThemeProvider> = ({
  children,
  initialTheme,
}) => {
  const [theme, setTheme] = useState<AppTheme>(initialTheme || defaultTheme);

  const defaultThemeValue = useMemo<IThemeContext>(
    () => ({
      setTheme,
      theme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultThemeValue}>
      {children}
    </ThemeContext.Provider>
  );
};
