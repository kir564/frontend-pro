import type { Decorator } from '@storybook/react';
import { AppTheme } from 'app/providers/themeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: AppTheme): Decorator => {
  // eslint-disable-next-line react/display-name
  return (Story) => (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};
