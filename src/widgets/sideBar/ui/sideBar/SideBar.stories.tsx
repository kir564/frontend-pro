import type { Meta, StoryObj } from '@storybook/react';
import { SideBar } from './SideBar';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'widget/SideBar',
  component: SideBar,
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
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator('app-dark-theme')],
};
