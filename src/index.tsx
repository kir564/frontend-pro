import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { App } from './app/App';
import { ThemeProvider } from '@/app/providers/themeProvider';
import { StoreProvider } from '@/app/providers/storeProvider';

import './shared/config/i18n/i18n';
import '@/app/styles/index.scss';

render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <Suspense fallback="">
          <App />
        </Suspense>
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
