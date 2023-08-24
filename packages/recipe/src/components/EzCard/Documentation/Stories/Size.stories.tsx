import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {EzCardSimpleExample} from '../EzCardExample';
import EzCard, {EzCardProps} from '../../EzCard';
import EzLayout from '../../../EzLayout';
import DefaultMeta, {Default} from './Default.stories';
import getJSXString from '../../../../utils/getJSXString';

const meta: Meta<typeof EzCard> = {
  argTypes: DefaultMeta.argTypes,
  component: EzCard,
  title: 'Surface/EzCard/Size',
};

export default meta;
type Story = StoryObj<typeof EzCard>;

const SizeCards = (args?: EzCardProps) => (
  <EzLayout>
    {EzCardSimpleExample(args)}
    {EzCardSimpleExample(args)}
    {EzCardSimpleExample(args)}
  </EzLayout>
);

export const Medium: Story = {
  args: {
    ...Default.args,
    size: 'medium',
    title: 'Card Heading',
  },
  parameters: {
    playroom: {code: getJSXString(SizeCards({size: 'medium'} as EzCardProps))},
  },
  render: (args: EzCardProps) => SizeCards(args),
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
    title: 'Card Heading',
  },
  parameters: {
    playroom: {code: getJSXString(SizeCards({size: 'small'} as EzCardProps))},
  },
  render: (args: EzCardProps) => SizeCards(args),
};
