import type { Meta, StoryObj } from '@storybook/react';
import { AboutPage } from './AboutPage';
import { ThemeDecorator } from 'shared/config/storybook/decorators';

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  parameters: {
    // layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator('dark')],
};
