import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzAlert from '../../EzAlert';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzAlert> = {
  title: 'Feedback/EzAlert/Use',
  component: EzAlert,
  argTypes: {
    ...DefaultMeta.argTypes,
  },
};

export default meta;
type Story = StoryObj<typeof EzAlert>;

export const Success: Story = {
  args: {
    ...Default.args,
    headline: 'Success or positive messages',
    tagline: 'Should be used sparingly.',
    use: 'success',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzAlert
          headline="Success or positive messages"
          tagline="Should be used sparingly."
          use="success"
        />`,
    },
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    headline: 'Errors or serious warnings',
    tagline: 'You need to fix something.',
    use: 'error',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzAlert
          headline="Errors or serious warnings"
          tagline="You need to fix something."
          use="error"
        />`,
    },
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    headline: 'Warning tips for customers',
    tagline: 'Proceed with caution.',
    use: 'warning',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzAlert
          headline="Warning tips for customers"
          tagline="Proceed with caution."
          use="warning"
        />`,
    },
  },
};

export const Info: Story = {
  args: {
    ...Default.args,
    headline: 'Informational tips for customers',
    tagline: 'Here is something you should know.',
    use: 'info',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzAlert
          headline="Informational tips for customers"
          tagline="Here is something you should know."
          use="info"
        />`,
    },
  },
};

export const Tip: Story = {
  args: {
    ...Default.args,
    headline: 'Tips for customers',
    tagline: 'Helpful tips for you to remember.',
    use: 'tip',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzAlert
          headline="Tips for customers"
          tagline="Helpful tips for you to remember."
          use="tip"
        />`,
    },
  },
};

export const Marketing: Story = {
  args: {
    ...Default.args,
    headline: 'Marketing messages',
    tagline: 'Learn more about our products.',
    use: 'marketing',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzAlert
          headline="Marketing messages"
          tagline="Learn more about our products."
          use="marketing"
        />`,
    },
  },
};
