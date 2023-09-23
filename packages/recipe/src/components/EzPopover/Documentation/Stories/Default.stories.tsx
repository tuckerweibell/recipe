import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzPopover, {EzPopoverProps} from '../../EzPopover';
import {EzPopoverExample, EzPopoverExampleJSX} from '../EzPopoverExample';

const meta: Meta<typeof EzPopover> = {
  argTypes: {
    matchWidth: {
      control: {type: 'boolean'},
      description: 'If true, the popover will match the width of the target element.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    onClose: {
      action: 'closed',
      control: {type: 'function'},
      description: 'Callback fired when the popover is closed.',
      table: {type: {summary: '() => void'}},
    },
    placement: {
      control: {type: 'select'},
      description: 'The location of the arrow.',
      options: [
        'auto',
        'auto-start',
        'auto-end',
        'top',
        'bottom',
        'right',
        'left',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'right-start',
        'right-end',
        'left-start',
        'left-end',
      ],
      table: {
        defaultValue: {summary: 'bottom'},
        type: {
          summary:
            'auto | auto-start | auto-end | top | bottom | right | left | top-start | top-end | bottom-start | bottom-end | right-start | right-end | left-start | left-end',
        },
      },
    },
    shouldCloseOnBlur: {
      control: {type: 'boolean'},
      description:
        'If true, popper will call `onClose` when the user clicks away from the popover.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    showArrow: {
      control: {type: 'boolean'},
      description: 'If true, popper will show an arrow pointing to the referenced element.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    targetRef: {
      control: {type: 'object'},
      description: 'The reference to the element that the popover should position next to.',
      table: {type: {summary: 'RefObject<HTMLElement>'}},
      type: {name: 'other', value: 'RefObject<HTMLElement>', required: true},
    },
  },
  component: EzPopover,
  title: 'Feedback/EzPopover',
};

export default meta;
type Story = StoryObj<typeof EzPopover>;

export const Default: Story = {
  args: {
    matchWidth: false,
    placement: 'bottom',
    shouldCloseOnBlur: false,
    showArrow: false,
  },
  parameters: {
    docs: {source: {code: EzPopoverExampleJSX()}},
    layout: 'centered',
    playroom: {
      code: dedent`
        {(() => {
          ${EzPopoverExampleJSX()}
        })()}
      `,
    },
  },
  render: (args: EzPopoverProps) => EzPopoverExample(args),
};
