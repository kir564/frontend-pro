import { createContext } from 'react';

export type AppTheme = 'light' | 'dark';

export interface IThemeContext {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
}

type ThemeContextType = IThemeContext | null;

export const ThemeContext = createContext<ThemeContextType>(null);

export const LOCAL_STORAGE_THEME_KEY = 'theme';
