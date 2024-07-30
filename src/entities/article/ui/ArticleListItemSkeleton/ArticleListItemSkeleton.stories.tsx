import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';

const meta = {
  title: 'entities/ArticleListItemSkeleton',
  component: ArticleListItemSkeleton,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof ArticleListItemSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {},
};

export const Big: Story = {
  args: {
    view: 'big',
  },
};
