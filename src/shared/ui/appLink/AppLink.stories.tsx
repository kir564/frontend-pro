import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    to: '/',
    children: 'Link',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: 'primary',
  },
};
export const PrimaryDark: Story = {
  args: {
    theme: 'primary',
  },
  decorators: [ThemeDecorator('dark')],
};
export const Secondary: Story = {
  args: {
    theme: 'secondary',
  },
};
export const SecondaryDark: Story = {
  args: {
    theme: 'secondary',
  },
  decorators: [ThemeDecorator('dark')],
};
