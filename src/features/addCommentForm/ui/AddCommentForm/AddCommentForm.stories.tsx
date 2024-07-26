import type { Meta, StoryObj } from '@storybook/react';
import { AddCommentForm } from './AddCommentForm';
import { StoreDecorator } from 'shared/config/storybook/decorators';

const meta = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [StoreDecorator()],
};
