import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/decorators';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title article',
    text: 'Description text',
  },
};
export const PrimarySizeL: Story = {
  args: {
    title: 'Title article',
    text: 'Description text',
    size: 'l',
  },
};
export const OnlyTitle: Story = {
  args: {
    title: 'Title article',
  },
};
export const OnlyText: Story = {
  args: {
    text: 'Description text',
  },
};
export const PrimaryDark: Story = {
  args: {
    title: 'Title article',
    text: 'Description text',
  },
  decorators: [ThemeDecorator('app-dark-theme')],
};
export const OnlyTitleDark: Story = {
  args: {
    title: 'Title article',
  },
  decorators: [ThemeDecorator('app-dark-theme')],
};
export const OnlyTextDark: Story = {
  args: {
    text: 'Description text',
  },
  decorators: [ThemeDecorator('app-dark-theme')],
};
export const ErrorTitleDark: Story = {
  args: {
    title: 'Title article',
    variant: 'error',
  },
  decorators: [ThemeDecorator('app-dark-theme')],
};
export const ErrorTextDark: Story = {
  args: {
    text: 'Description text',
    variant: 'error',
  },
  decorators: [ThemeDecorator('app-dark-theme')],
};
