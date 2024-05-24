import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface IThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

type ThemeContextType = IThemeContext | null;

export const ThemeContext = createContext<ThemeContextType>(null);

export const LOCAL_STORAGE_THEME_KEY = 'theme';
