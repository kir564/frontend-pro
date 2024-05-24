import { FC, useMemo, useState } from 'react';
import {
  IThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from './ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

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
