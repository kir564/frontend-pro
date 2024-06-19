import { ReactNode } from 'react';

import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTest';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

interface IOption {
  routes?: string[];
}
export const componentRender = (component: ReactNode, option: IOption = {}) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <MemoryRouter initialEntries={option.routes}>{component}</MemoryRouter>
    </I18nextProvider>,
  );
};
