import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';
import { StoreDecorator } from '@/shared/config/storybook/decorators';
import { loginReducer } from '@/features/authByUsername/model/slice/loginSlice';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [
    StoreDecorator(
      {
        loginForm: {
          isLoading: false,
          username: '',
          password: '',
        },
      },
      { loginForm: loginReducer },
    ),
  ],
};
export const Error: Story = {
  args: {},
  decorators: [
    StoreDecorator(
      {
        loginForm: {
          isLoading: false,
          username: '',
          password: '',
          error: 'error for example',
        },
      },
      { loginForm: loginReducer },
    ),
  ],
};
// export const Loading: Story = {
//   args: {},
//   decorators: [
//     StoreDecorator({
//       loginForm: {
//         isLoading: true,
//         username: '',
//         password: '',
//       },
//     }),
//   ],
// };
