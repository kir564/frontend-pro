import type { Decorator } from '@storybook/react';
import { ThemeProvider } from 'app/providers/themeProvider';
import { AppTheme } from 'app/providers/themeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: AppTheme): Decorator => {
  // eslint-disable-next-line react/display-name
  return (Story) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
