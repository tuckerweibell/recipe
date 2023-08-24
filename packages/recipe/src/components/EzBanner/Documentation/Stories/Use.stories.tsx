import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzBanner from '../../EzBanner';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzBanner> = {
  title: 'Layout/EzBanner/Use',
  component: EzBanner,
  argTypes: DefaultMeta.argTypes,
};

export default meta;
type Story = StoryObj<typeof EzBanner>;

export const Marketing: Story = {
  args: Default.args,
  parameters: Default.parameters,
  play: Default.play,
};

export const EzOrdering: Story = {
  args: {
    ...Default.args,
    use: 'ezOrdering',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzBanner
          link={{
            label: 'Learn more',
            onClick: () => {},
          }}
          message="Linking to ezOrdering from your website lets you take catering orders online, without ezCater branding and at a lower cost per order."
          onDismiss={() => {}}
          title="More orders, lower commission."
          use="ezOrdering"
        />
      `,
    },
  },
  play: Default.play,
};
