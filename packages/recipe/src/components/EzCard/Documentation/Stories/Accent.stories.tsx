import {type Meta, type StoryObj} from '@storybook/react';
import EzCard, {EzCardProps} from '../../EzCard';
import {EzCardSimpleExample} from '../EzCardExample';
import DefaultMeta, {Default} from './Default.stories';
import getJSXString from '../../../../utils/getJSXString';

const meta: Meta<typeof EzCard> = {
  argTypes: DefaultMeta.argTypes,
  component: EzCard,
  title: 'Surface/EzCard/Accent',
};

export default meta;
type Story = StoryObj<typeof EzCard>;

export const Info: Story = {
  args: {
    ...Default.args,
    accent: 'info',
  },
  parameters: {
    playroom: {code: getJSXString(EzCardSimpleExample({accent: 'info'} as EzCardProps))},
  },
  render: (args: EzCardProps) => EzCardSimpleExample(args),
};
