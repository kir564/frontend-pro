import type { Meta, StoryObj } from '@storybook/react';
import { ForbiddenPage } from './ForbiddenPage';
import { ThemeDecorator } from '@/shared/config/storybook/decorators';

const meta = {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},

} satisfies Meta<typeof ForbiddenPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator('app-dark-theme')],
};
