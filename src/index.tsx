import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { App } from './app/App';
import { ThemeProvider } from 'app/providers/themeProvider';
import { StoreProvider } from 'app/providers/storeProvider';

import './shared/config/i18n/i18n';
import 'app/styles/index.scss';

render(
  <StoreProvider>
    <BrowserRouter>
      <ThemeProvider>
        <Suspense fallback="">
          <App />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);
