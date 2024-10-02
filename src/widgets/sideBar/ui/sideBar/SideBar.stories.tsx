import type { Meta, StoryObj } from '@storybook/react';
import { SideBar } from './SideBar';
import {
  StoreDecorator,
  ThemeDecorator,
} from '@/shared/config/storybook/decorators';
// import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'widget/SideBar',
  component: SideBar,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [],
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator()],
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator('app-dark-theme'), StoreDecorator()],
};
export const LightAuth: Story = {
  args: {},
  decorators: [StoreDecorator({ user: { authData: {} } })],
};
export const DarkAuth: Story = {
  args: {},
  decorators: [
    ThemeDecorator('app-dark-theme'),
    StoreDecorator({ user: { authData: {} } }),
  ],
};
