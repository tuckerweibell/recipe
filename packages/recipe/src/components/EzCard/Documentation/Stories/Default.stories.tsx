import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {faCoffee, faStar} from '@fortawesome/free-solid-svg-icons';
import EzCard, {EzCardProps} from '../../EzCard';
import {EzCardExample} from '../EzCardExample';
import EzIcon from '../../../EzIcon';
import getJSXString from '../../../../utils/getJSXString';

const icons = {
  faCoffee: <EzIcon icon={faCoffee} />,
  faStar: <EzIcon icon={faStar} />,
};

const meta: Meta<typeof EzCard> = {
  argTypes: {
    accent: {
      control: {type: 'select'},
      description: 'The accent type of the card.',
      options: ['info'],
      table: {type: {summary: 'string'}},
    },
    actions: {
      control: {type: 'node'},
      description: 'The actions of the card.',
      table: {type: {summary: 'ReactNode | ComponentType'}},
    },
    clickable: {
      control: {type: 'boolean'},
      description: 'If true, the card will be clickable.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    expandable: {
      control: {type: 'object'},
      description: 'Expandable card options.',
      table: {type: {summary: 'ExpandableCardFooter'}},
    },
    horizontal: {
      control: {type: 'boolean'},
      description: 'If true, the card sections will be laid out horizontally.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    imageMaxHeight: {
      control: {type: 'number'},
      description: 'The image max height of the card.',
      type: {name: 'other', value: 'MaxHeightProperty<string | number>'},
      table: {type: {summary: 'MaxHeightProperty<string | number>'}},
    },
    imageMaxWidth: {
      control: {type: 'number'},
      description: 'The image max width of the card.',
      type: {name: 'other', value: 'MaxWidthProperty<string | number>'},
      table: {type: {summary: 'MaxWidthProperty<string | number>'}},
    },
    imageSrc: {
      control: {type: 'select'},
      description: 'The image source of the card.',
      options: ['images/tacos.jpg'],
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
    imagePosition: {
      control: {type: 'select'},
      description: 'The image position of the card.',
      options: ['top', 'right', 'left'],
      type: {name: 'string'},
      table: {
        type: {summary: "top | right | left | responsive e.g. {base: 'top', medium: 'left'}"},
      },
    },
    isQuiet: {
      control: {type: 'boolean'},
      description: 'If true, the card will have muted/quiet styles.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    onClick: {
      action: 'clicked',
      control: {type: null},
      description: 'Callback fired when the card is clicked.',
      table: {type: {summary: 'MouseEventHandler<any> | undefined'}},
    },
    size: {
      control: {type: 'select'},
      defaultValue: 'medium',
      description: 'The size of the card.',
      options: ['small', 'medium'],
      table: {
        defaultValue: {summary: 'medium'},
        type: {summary: 'small | medium'},
      },
    },
    subtitle: {
      control: {type: 'text'},
      description: 'The subtitle of the card.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
    title: {
      control: {type: 'text'},
      description: 'The title of the card.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
    titleIcon: {
      control: {type: 'select'},
      description: 'Title icon element.',
      options: Object.keys(icons),
      mapping: icons,
      table: {type: {summary: 'ReactNode | ComponentType'}},
    },
    transparent: {
      control: {type: 'boolean'},
      description: 'If true, the card will have a transparent background.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    truncateHeading: {
      control: {type: 'boolean'},
      description:
        'If true, the card heading (title and subtitle) will be truncated with an ellipsis.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
  },
  component: EzCard,
  title: 'Surface/EzCard',
};

export default meta;
type Story = StoryObj<typeof EzCard>;

export const Default: Story = {
  args: {
    clickable: false,
    horizontal: false,
    isQuiet: false,
    onClick: undefined,
    transparent: false,
    truncateHeading: false,
  },
  parameters: {
    playroom: {code: getJSXString(EzCardExample())},
  },
  render: (args: EzCardProps) => EzCardExample(args),
};
