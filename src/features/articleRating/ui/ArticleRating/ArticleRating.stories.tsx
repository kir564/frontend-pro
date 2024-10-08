import type { Meta, StoryObj } from '@storybook/react';
import { ArticleRating } from './ArticleRating';
import { ThemeDecorator } from '@/shared/config/storybook/decorators';

const meta = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//   args: {},
// };

// export const Dark: Story = {
//   args: {},
//   decorators: [ThemeDecorator('app-dark-theme')],
// };
