import {type Meta, type StoryObj} from '@storybook/react';
import {EzCardExample} from '../EzCardExample';
import EzCard, {EzCardProps} from '../../EzCard';
import DefaultMeta, {Default} from './Default.stories';
import getJSXString from '../../../../utils/getJSXString';

const meta: Meta<typeof EzCard> = {
  argTypes: DefaultMeta.argTypes,
  component: EzCard,
  title: 'Surface/EzCard/Appearance',
};

export default meta;
type Story = StoryObj<typeof EzCard>;

export const Quiet: Story = {
  args: {
    ...Default.args,
    isQuiet: true,
  },
  parameters: {
    playroom: {code: getJSXString(EzCardExample({isQuiet: true} as EzCardProps))},
  },
  render: (args: EzCardProps) => EzCardExample(args),
};

export const Transparent: Story = {
  args: {
    ...Default.args,
    transparent: true,
  },
  parameters: {
    playroom: {code: getJSXString(EzCardExample({transparent: true} as EzCardProps))},
  },
  render: (args: EzCardProps) => EzCardExample(args),
};
