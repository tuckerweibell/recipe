import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzAlert from '../../EzAlert';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzAlert> = {
  argTypes: DefaultMeta.argTypes,
  component: EzAlert,
  title: 'Feedback/EzAlert/Directional',
};

export default meta;
type Story = StoryObj<typeof EzAlert>;

export const Bottom: Story = {
  args: {
    ...Default.args,
    arrow: 'bottom',
    headline: 'Watch out!',
    tagline: "I'm above some content.",
    use: 'warning',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzAlert
          arrow="bottom"
          headline="Watch out!"
          tagline="I'm above some content."
          use="warning"
        />`,
    },
  },
};

export const Top: Story = {
  args: {
    ...Default.args,
    arrow: 'top',
    headline: 'Great job!',
    tagline: 'We got below more content.',
    use: 'success',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzAlert
          arrow="top"
          headline="Great job!"
          tagline="We got below more content."
          use="success"
        />`,
    },
  },
};
