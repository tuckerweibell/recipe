import {type Meta, type StoryObj} from '@storybook/react';
import EzCard, {EzCardProps} from '../../EzCard';
import {EzCardSimpleExample} from '../EzCardExample';
import DefaultMeta, {Default} from './Default.stories';
import getJSXString from '../../../../utils/getJSXString';

const meta: Meta<typeof EzCard> = {
  argTypes: DefaultMeta.argTypes,
  component: EzCard,
  title: 'Surface/EzCard/Appearance',
};

export default meta;
type Story = StoryObj<typeof EzCard>;

export const Truncate: Story = {
  args: {
    ...Default.args,
    subtitle:
      'A very long subtitle that is super long and definitely will not fit, zero one two three four five six seven eight nine ten, zero one two three four five six seven eight nine ten, zero one two three four five six seven eight nine ten, zero one two three four five six seven eight nine ten',
    title:
      'A very long title that is super long and definitely will not fit, zero one two three four five six seven eight nine ten, zero one two three four five six seven eight nine ten, zero one two three four five six seven eight nine ten, zero one two three four five six seven eight nine ten',
    truncateHeading: true,
  },
  parameters: {
    playroom: {code: getJSXString(EzCardSimpleExample({truncateHeading: true} as EzCardProps))},
  },
  render: (args: EzCardProps) => EzCardSimpleExample(args),
};
