import type { Preview } from '@storybook/react';
import {
  ThemeDecorator,
  I18nDecorator,
} from '../../src/shared/config/storybook/decorators';
import '../../src/app/styles/index.scss';

// import React from 'react';

// import { BrowserRouter } from 'react-router-dom';

import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-remix-react-router';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    reactRouter: reactRouterParameters({}),
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
  decorators: [
    ThemeDecorator('app-light-theme'),
    I18nDecorator,
    // (Story) => (
    //   <BrowserRouter>
    //     <Story />
    //   </BrowserRouter>
    // ),
    withRouter,
  ],
};

export default preview;
