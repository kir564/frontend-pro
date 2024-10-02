import type { Meta, StoryObj } from '@storybook/react';
import { ProfilePage } from './ProfilePage';
import { ThemeDecorator } from '@/shared/config/storybook/decorators';
import { StoreDecorator } from '@/shared/config/storybook/decorators';
import avatar from '@/shared/assets/tests/avatar.jpg';
import { profileReducer } from '@/entities/profile';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    // layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [
    StoreDecorator(
      { profile: { readonly: true, form: { avatar } } },
      { profile: profileReducer },
    ),
  ],
};
export const PrimaryEdit: Story = {
  args: {},
  decorators: [
    StoreDecorator(
      { profile: { readonly: false, form: { avatar } } },
      { profile: profileReducer },
    ),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator('app-dark-theme'),
    StoreDecorator(
      { profile: { readonly: true, form: { avatar } } },
      { profile: profileReducer },
    ),
  ],
};
export const DarkEdit: Story = {
  args: {},
  decorators: [
    ThemeDecorator('app-dark-theme'),
    StoreDecorator(
      { profile: { readonly: false, form: { avatar } } },
      { profile: profileReducer },
    ),
  ],
};
