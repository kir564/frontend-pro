import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/decorators';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},

  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Clean: Story = {
  args: {
    children: 'Text',
    theme: 'clean',
  },
};

export const CleanInverted: Story = {
  args: {
    children: 'Text',
    theme: 'cleanInverted',
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
  },
};

export const Outline_l: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    size: 'l',
  },
};

export const Outline_xl: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    size: 'xl',
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
  },
  decorators: [ThemeDecorator('app-dark-theme')],
};

export const Background: Story = {
  args: {
    children: 'Text',
    theme: 'background',
  },
};
export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: 'backgroundInverted',
  },
};

export const Square: Story = {
  args: {
    children: '<',
    square: true,
    size: 'm',
    theme: 'background',
  },
};

export const Square_l: Story = {
  args: {
    children: '<',
    square: true,
    size: 'l',
    theme: 'background',
  },
};

export const Square_xl: Story = {
  args: {
    children: '<',
    square: true,
    size: 'xl',
    theme: 'background',
  },
};
