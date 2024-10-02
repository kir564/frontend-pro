import type { Meta, StoryObj } from '@storybook/react';
import { MainPage } from './MainPage';
import { ThemeDecorator } from '@/shared/config/storybook/decorators';

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  parameters: {
    // layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator('app-dark-theme')],
};
