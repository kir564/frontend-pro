import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItem } from './ArticleListItem';
import { article } from '../../__mocks__/data';

const meta = {
  title: 'entities/ArticleListItem',
  component: ArticleListItem,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    article,
  },
};

export const Big: Story = {
  args: {
    view: 'big',
    article,
  },
};
