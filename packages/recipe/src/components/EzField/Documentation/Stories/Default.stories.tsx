import {type Meta, type StoryObj} from '@storybook/react';
import EzField from '../../EzField';

const meta: Meta<typeof EzField> = {
  args: {
    helperText: 'Helper text.',
    label: 'Label',
    labelSize: 'normal',
    placeholder: 'Enter text here...',
    type: 'text',
  },
  argTypes: {
    disabled: {
      control: {type: 'boolean'},
      description: 'If true, the input is disabled.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    displayAsNoon: {
      control: {type: 'boolean'},
      description: 'If true, the time field will display the 12:00 PM label as "Noon"',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    end: {
      control: {type: 'text'},
      description: 'The end time of the time field. Required for type `time`.',
      type: {name: 'string', required: true},
      table: {type: {summary: 'string'}},
    },
    error: {
      control: {type: 'text'},
      description: 'The error text of invalid input.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
    filterDate: {
      action: 'changed',
      control: {type: null},
      description: 'Function called when filtering date ranges for `type="date"`.',
      table: {type: {summary: '(value: string) => boolean'}},
    },
    helperText: {
      control: {type: 'text'},
      description: 'The helper text of the input.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
    label: {
      control: {type: 'text'},
      description: 'The label of the input.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
    labelHidden: {
      control: {type: 'boolean'},
      description: 'If true, the input label is hidden.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    labelSize: {
      control: {type: 'select'},
      description: 'The size of the label.',
      options: ['small', 'normal'],
      table: {
        defaultValue: {summary: 'normal'},
        type: {summary: 'small | normal'},
      },
    },
    maxDate: {
      control: {type: 'text'},
      description: 'The maximum date of the date field range.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
    maxLength: {
      control: {type: 'number'},
      description: 'The max length of the input.',
      type: {name: 'number'},
      table: {type: {summary: 'number'}},
    },
    minDate: {
      control: {type: 'text'},
      description: 'The minumum date of the date field range.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
    onChange: {
      action: 'changed',
      control: {type: null},
      description: 'Callback fired when the state is changed.',
      table: {type: {summary: '(event: ChangeEvent<HTMLInputElement>) => void'}},
    },
    onSelectionChange: {
      action: 'selection changed',
      control: {type: null},
      description: 'Callback fired when the selection state is changed.',
      table: {type: {summary: '(key: Key) => any'}},
    },
    options: {
      control: {type: 'array'},
      description:
        'An array of options for dropdown fields. Required for types `autosuggest | select`.',
      table: {type: {summary: 'Choice[]'}},
      type: {name: 'other', value: 'Choice[]', required: true},
    },
    placeholder: {
      control: {type: 'text'},
      description: 'The placeholder text of the input.',
      type: {name: 'string'},
      table: {type: {summary: 'string'}},
    },
    size: {
      control: {type: 'select'},
      description: 'The size of the text area field.',
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: {summary: 'medium'},
        type: {summary: 'small | medium | large'},
      },
    },
    start: {
      control: {type: 'text'},
      description: 'The start time of the time field. Required for type `time`.',
      type: {name: 'string', required: true},
      table: {type: {summary: 'string'}},
    },
    step: {
      control: {type: 'select'},
      description: 'The step of the time field.',
      options: ['5', '10', '15', '20', '30', '60'],
      table: {
        defaultValue: {summary: '60'},
        type: {summary: '5 | 10 | 15 | 20 | 30 | 60'},
      },
    },
    touched: {
      control: {type: 'boolean'},
      description: 'If true, the input is touched.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    type: {
      control: {type: 'select'},
      description: 'The type of the input.',
      options: [
        'autosuggest',
        'date',
        'email',
        'number',
        'password',
        'select',
        'text',
        'textarea',
        'time',
      ],
      table: {
        defaultValue: {summary: 'text'},
        type: {
          summary:
            'autosuggest | date | email | number | password | select | text | textarea | time',
        },
      },
    },
    value: {
      control: {type: 'text'},
      description: 'The value of the input. Required for types `autosuggest | date | select`.',
      table: {type: {summary: 'any'}},
      type: {name: 'other', value: 'any', required: true},
    },
  },
  component: EzField,
  title: 'Input/EzField',
};

export default meta;
type Story = StoryObj<typeof EzField>;

export const Default: Story = {
  args: {
    filterDate: undefined,
    onChange: undefined,
    onSelectionChange: undefined,
  },
  parameters: {playroom: {code: '<EzField type="text" />'}},
};
