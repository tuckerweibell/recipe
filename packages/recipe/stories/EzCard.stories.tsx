import React from 'react';
import * as icons from '@ezcater/icons';
import EzButton from '../src/components/EzButton';
import {EzCard, EzCardSection} from '../src/components/EzCard';
import EzIcon from '../src/components/EzIcon';

export default {
  component: EzCard,
  title: 'Figma/EzCard',
  parameters: {
    theme: 'fulfillment',
  },
  args: {
    title: 'Card Title',
    actions: <EzButton>Click me</EzButton>,
    titleIcon: <EzIcon icon={icons.Coffee} size="inherit" />,
    children: [
      <EzCardSection key="1">Section 1</EzCardSection>,
      <EzCardSection key="2">Section 2</EzCardSection>,
    ],
  },
  argTypes: {
    titleIcon: {
      options: Object.keys(icons).sort(),
      mapping: Object.keys(icons).reduce((acc, next) => {
        acc[next] = <EzIcon key={next} icon={icons[next]} size="inherit" />;
        return acc;
      }, {}),
      control: {
        type: 'select',
      },
    },
    imagePosition: {
      control: {
        type: 'select',
        options: ['top', 'left', 'right'],
      },
    },
    accent: {
      control: {
        type: 'select',
        options: ['info'],
      },
    },
    expandable: {
      control: {
        type: 'select',
        options: {
          'not expandable': undefined,
          expandable: {
            expandLabel: 'Expand',
            collapseLabel: 'Collapse',
            onClick: {action: 'expand'},
            isExpanded: true, // TODO: works now, but make this work better later
          },
        },
      },
    },
  },
};

export const Primary = {};
