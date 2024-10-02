import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import avatar from '@/shared/assets/tests/avatar.jpg';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      avatar,
    },
  },
};

export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    error: 'true',
  },
};
