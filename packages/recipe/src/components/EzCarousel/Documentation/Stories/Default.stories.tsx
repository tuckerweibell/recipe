import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzCarousel from '../../EzCarousel';
import {EzCarouselExample, EzCarouselExampleJSX} from '../EzCarouselExample';
import {EzCarouselProps} from '../../EzCarousel.types';

const meta: Meta<typeof EzCarousel> = {
  argTypes: {
    description: {
      control: {type: 'text'},
      description: 'The description of the carousel.',
      type: {name: 'string', required: true},
      table: {type: {summary: 'string'}},
    },
    link: {
      control: {type: 'node'},
      description: 'The link or action of the carousel.',
      table: {type: {summary: 'ReactElement'}},
      type: {name: 'string'},
    },
    onPageChange: {
      action: 'page changed',
      control: {type: null},
      description: 'Callback fired when the carousel page is changed.',
      table: {type: {summary: '(previous: number, current: number) => void'}},
    },
    title: {
      control: {type: 'text'},
      description: 'The title of the carousel.',
      type: {name: 'string', required: true},
      table: {type: {summary: 'string'}},
    },
  },
  component: EzCarousel,
  title: 'Navigation/EzCarousel',
};

export default meta;
type Story = StoryObj<typeof EzCarousel>;

export const Default: Story = {
  args: {
    link: undefined,
    onPageChange: undefined,
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          ${EzCarouselExampleJSX()}
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          ${EzCarouselExampleJSX()}
        })()}
      `,
    },
  },
  render: (args: EzCarouselProps) => EzCarouselExample(args),
};
