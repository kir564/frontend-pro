import { createContext } from 'react';

export type AppTheme = 'light' | 'dark';

export interface IThemeContext {
  theme?: AppTheme;
  setTheme?: (_: AppTheme) => void;
}

export const ThemeContext = createContext<IThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
