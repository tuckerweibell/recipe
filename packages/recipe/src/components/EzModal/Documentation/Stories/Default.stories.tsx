import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzModal, {EzModalProps} from '../../EzModal';

import {EzModalExample, EzModalExampleJSX} from '../EzModalExample';

const meta: Meta<typeof EzModal> = {
  argTypes: {
    destructive: {
      control: {type: 'boolean'},
      description: 'If true, the modal uses a destructive button.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    dismissLabel: {
      control: {type: 'text'},
      description: 'The label of the dismiss button in the modal. Required when using `onDismiss`.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
    headerText: {
      control: {type: 'text'},
      description: 'The header text of the modal.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
    isOpen: {
      control: {type: 'boolean'},
      description: 'If true, the modal is open.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
      type: {name: 'boolean', required: true},
    },
    isSubmitting: {
      control: {type: 'boolean'},
      description: 'If true, the modal will render a loading submit button.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    onDismiss: {
      action: 'dismissed',
      control: {type: null},
      description: 'Callback fired when the modal is dismissed. Use with `dismissLabel`.',
      table: {type: {summary: '(event?: MouseEvent<HTMLButtonElement>) => void'}},
    },
    onSubmit: {
      action: 'submitted',
      control: {type: null},
      description: 'Callback fired when the modal is submitted. Use with `submitLabel`.',
      table: {type: {summary: '(event?: MouseEvent<HTMLButtonElement>) => void'}},
    },
    submitLabel: {
      control: {type: 'text'},
      description: 'The label of the submit button in the modal. Required when using `onSubmit`.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
  },
  component: EzModal,
  title: 'Feedback/EzModal',
};

export default meta;
type Story = StoryObj<typeof EzModal>;

export const Default: Story = {
  args: {
    headerText: 'Submit your order',
  },
  parameters: {
    playroom: {
      code: dedent`
        {(() => {
          ${EzModalExampleJSX('headerText="Submit your order"')}
        })()}
      `,
    },
  },
  render: (args: EzModalProps) => EzModalExample(args),
};
