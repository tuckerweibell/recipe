import React from 'react';
import EzTooltip from '../src/components/EzTooltip';

export default {
  component: EzTooltip,
  title: 'Figma/EzTooltip',
  parameters: {
    theme: 'fulfillment',
  },
  args: {
    children: <span>Some text</span>,
    message: 'Tooltip text',
  },
  argTypes: {
    onShowTooltip: {action: 'tooltip shown!'},
  },
};

export const Primary = {};
