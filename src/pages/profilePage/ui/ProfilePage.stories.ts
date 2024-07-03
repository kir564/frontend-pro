import type { Meta, StoryObj } from '@storybook/react';
import { ProfilePage } from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { StoreDecorator } from 'shared/config/storybook/decorators';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    // layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [StoreDecorator()],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator('app-dark-theme'), StoreDecorator()],
};
