import type { Preview } from '@storybook/react';
import {
  ThemeDecorator,
  I18nDecorator,
} from '../../src/shared/config/storybook/decorators';
import '../../src/app/styles/index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'ru', title: 'Русский' },
        ],
        showName: true,
      },
    },
  },
  decorators: [ThemeDecorator('app-light-theme'), I18nDecorator],
};

export default preview;
