import type { Meta, StoryObj } from '@storybook/react';
import { AdminPanelPage } from './AdminPanelPage';
import { ThemeDecorator } from '@/shared/config/storybook/decorators';

const meta = {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},

} satisfies Meta<typeof AdminPanelPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator('app-dark-theme')],
};
