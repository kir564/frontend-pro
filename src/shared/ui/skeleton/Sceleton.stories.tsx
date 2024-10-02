import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from '@/shared/config/storybook/decorators';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    height: 100,
    width: 400,
  },
};
export const NormalDark: Story = {
  args: {
    height: 100,
    width: 400,
  },
  decorators: [ThemeDecorator('app-dark-theme')],
};
export const NormalOrange: Story = {
  args: {
    height: 100,
    width: 400,
  },
  decorators: [ThemeDecorator('app-orange-theme')],
};
export const Circle: Story = {
  args: {
    height: 100,
    width: 100,
    border: '50%',
  },
};
export const CircleDark: Story = {
  args: {
    height: 100,
    width: 100,
    border: '50%',
  },
  decorators: [ThemeDecorator('app-dark-theme')],
};
export const CircleOrange: Story = {
  args: {
    height: 100,
    width: 100,
    border: '50%',
  },
  decorators: [ThemeDecorator('app-orange-theme')],
};
