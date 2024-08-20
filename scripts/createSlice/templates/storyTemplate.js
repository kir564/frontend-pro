module.exports = (layer, componentName) => {
  return `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';
import { ThemeDecorator } from 'shared/config/storybook/decorators';

const meta = {
  title: '${layer}/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},

} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator('app-dark-theme')],
};
`;
};
