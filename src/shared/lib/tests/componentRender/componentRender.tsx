import { ReactNode } from 'react';

import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTest';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';

interface IOption {
  routes?: string[];
  initialState?: DeepPartial<StateSchema>;
}
export const componentRender = (component: ReactNode, option: IOption = {}) => {
  return render(
    <MemoryRouter initialEntries={option.routes}>
      <StoreProvider initialState={option.initialState as StateSchema}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
