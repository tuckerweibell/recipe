import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzAlert from '../../EzAlert';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzAlert> = {
  argTypes: DefaultMeta.argTypes,
  component: EzAlert,
  title: 'Feedback/EzAlert/No Tagline',
};

export default meta;
type Story = StoryObj<typeof EzAlert>;

export const NoTagline: Story = {
  args: {
    ...Default.args,
    headline: "I'm just a headline",
    tagline: undefined,
    use: 'info',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzAlert
          headline="I'm just a headline"
          use="info"
        />`,
    },
  },
};
