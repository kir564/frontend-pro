import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Modal } from './Modal';
import { ThemeDecorator } from '@/shared/config/storybook/decorators';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },

  // tags: ['autodocs'],

  argTypes: {},
  decorators: [
    (Story) => (
      <div id="root">
        <Story />
      </div>
    ),
  ],

  // args: { onClick: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias ab harum dignissimos sint nemo perferendis voluptatem reprehenderit iure. Odio sint, assumenda nostrum tenetur sapiente vitae, laudantium consequatur minus sed totam voluptatum neque? Suscipit amet ipsam, ea voluptas minima aliquam labore? Nam tempore quis quod exercitationem? Ipsam soluta accusamus laudantium sit debitis consectetur? Voluptates, voluptate nihil. Unde ratione quam beatae ut quia possimus vitae alias quidem deleniti, amet asperiores non? Quasi, eveniet sit! Quo voluptatem vero facilis corrupti iure commodi! Quae totam ut voluptas facere iure cupiditate officiis. Quos cumque vel ipsam officia iste ullam libero odio natus obcaecati alias.`,
  },
};
export const Dark: Story = {
  args: {
    isOpen: true,
    children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias ab harum dignissimos sint nemo perferendis voluptatem reprehenderit iure. Odio sint, assumenda nostrum tenetur sapiente vitae, laudantium consequatur minus sed totam voluptatum neque? Suscipit amet ipsam, ea voluptas minima aliquam labore? Nam tempore quis quod exercitationem? Ipsam soluta accusamus laudantium sit debitis consectetur? Voluptates, voluptate nihil. Unde ratione quam beatae ut quia possimus vitae alias quidem deleniti, amet asperiores non? Quasi, eveniet sit! Quo voluptatem vero facilis corrupti iure commodi! Quae totam ut voluptas facere iure cupiditate officiis. Quos cumque vel ipsam officia iste ullam libero odio natus obcaecati alias.`,
  },
  decorators: [ThemeDecorator('app-dark-theme')],
};
