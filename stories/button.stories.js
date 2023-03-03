import React from 'react';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
};

const TemplateWithText = (args) => <Button {...args}>Hello Button</Button>;

const TemplateWithEmoji = (args) => (
  <Button {...args}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const withText = TemplateWithText.bind({});

withText.args = {};

export const withSomeEmoji = TemplateWithEmoji.bind({});

withSomeEmoji.args = {};

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

const Input = (args) => (
  <input
    type="text"
    value={args.task.title}
    readOnly
    placeholder="Input title"
    style={{ textOverflow: 'ellipsis' }}
    {...args}
  />
);

export const LongTitle = Input.bind({});
LongTitle.args = {
  task: {
    title: longTitleString,
  },
};
