import type { Decorator } from '@storybook/react';
import { AppTheme } from 'app/providers/themeProvider/lib/ThemeContext';

export const ThemeDecorator =
  (theme: AppTheme): Decorator =>
  (Story) => (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
