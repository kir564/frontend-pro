import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForStorybook';
import { Suspense, useEffect } from 'react';
import type { Decorator } from '@storybook/react';

i18n.on('languageChanged', (locale) => {
  const direction = i18n.dir(locale);
  document.dir = direction;
});

export const i18nDecorator: Decorator = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback="">
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
