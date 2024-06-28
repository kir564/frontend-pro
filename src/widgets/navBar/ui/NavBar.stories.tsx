import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';
import {
  StoreDecorator,
  ThemeDecorator,
} from 'shared/config/storybook/decorators';
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
  decorators: [StoreDecorator({})],
};
export const LightIsAuth: Story = {
  args: {},
  decorators: [StoreDecorator({ user: { authData: { username: 'admin' } } })],
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator('app-dark-theme'), StoreDecorator({})],
};
export const DarkIsAuth: Story = {
  args: {},
  decorators: [
    ThemeDecorator('app-dark-theme'),
    StoreDecorator({ user: { authData: { username: 'admin' } } }),
  ],
};
