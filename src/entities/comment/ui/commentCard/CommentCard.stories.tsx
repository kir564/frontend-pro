import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

import avatar from '@/shared/assets/tests/avatar.jpg';

const meta = {
  title: 'entities/CommentCard',
  component: CommentCard,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    comment: {
      id: '1',
      text: 'some comment',
      user: {
        id: '1',
        username: 'admin',
        avatar,
      },
    },
  },
};
export const isLoading: Story = {
  args: {
    isLoading: true,
  },
};
