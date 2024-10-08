import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesPage } from './ArticlesPage';
import { StoreDecorator } from '@/shared/config/storybook/decorators';

const meta = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [StoreDecorator()],
};
