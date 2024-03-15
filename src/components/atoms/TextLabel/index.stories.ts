import type { Meta, StoryObj } from '@storybook/react';

import TextLabel from './Index';

const meta = {
  title: 'Atoms/Label',
  component: TextLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'label' },
    color: { control: 'color', description: 'font color' },
  },
} satisfies Meta<typeof TextLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '리액트 공부하기',
    color: 'red',
  },
};
