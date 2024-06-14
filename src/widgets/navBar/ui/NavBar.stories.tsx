import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'widget/NavBar',
  component: NavBar,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator('dark')],
};
