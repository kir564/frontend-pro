import { DeepPartial } from '@reduxjs/toolkit';
import type { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>): Decorator => {
  // eslint-disable-next-line react/display-name
  return (Story) => {
    return (
      <StoreProvider initialState={state as StateSchema}>
        <Story />
      </StoreProvider>
    );
  };
};
