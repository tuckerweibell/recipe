import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {faCoffee, faStar} from '@fortawesome/free-solid-svg-icons';
import {EzCard} from '../../../EzCard';
import {EzTableExample, EzTableExampleJSX} from '../EzTableExample';
import {EzTableProps} from '../../EzTable.types';
import EzButton from '../../../EzButton';
import EzIcon from '../../../EzIcon';
import EzTable from '../../EzTable';

const ICONS = {
  faCoffee: <EzIcon icon={faCoffee} />,
  faStar: <EzIcon icon={faStar} />,
};

const meta: Meta<typeof EzTable> = {
  argTypes: {
    actions: {
      control: {type: 'node'},
      description: 'The actions of the table. Must be used with table header.',
      table: {type: {summary: 'ReactNode'}},
    },
    alignY: {
      control: {type: 'select'},
      description: 'The vertical alignment of the table.',
      options: ['center', 'top'],
      table: {
        defaultValue: {summary: 'center'},
        type: {summary: 'center | top'},
      },
    },
    ariaLabel: {
      control: {type: 'text'},
      description: 'The aria label of the table.',
      table: {type: {summary: 'string'}},
      type: {name: 'string'},
    },
    columns: {
      control: {type: 'array'},
      description: 'Array of columns for the table.',
      table: {
        type: {
          summary: `
            Column[
              allowWrap?: boolean;
              component?: ReactNode | ComponentType;
              defaultSort?: 'asc' | 'desc';
              heading: string;
              icon?: ReactNode | ComponentType;
              key?: string;
              numeric?: boolean;
              numericPadded?: boolean;
              sortable?: boolean;
              width?: number;
            ]
          `,
        },
      },
      type: {name: 'other', value: 'Column[]', required: true},
    },
    fullWidth: {
      control: {type: 'boolean'},
      description: 'If true, the table will be full width.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    items: {
      control: {type: 'array'},
      description: 'Array of items for the table.',
      table: {type: {summary: 'any[]'}},
      type: {name: 'other', value: 'Column[]', required: true},
    },
    onSortClick: {
      control: {type: 'func'},
      description: 'The callback function called when a column header is pressed.',
      table: {
        type: {
          summary: `(
            event: MouseEvent<HTMLElement>,
            options: OnSortClickOptions: {
              column: Column;
              direction: 'asc' | 'desc';
            }
          ) => void`,
        },
      },
    },
    pagination: {
      control: {type: 'object'},
      description: 'The pagination options for the table.',
      table: {
        type: {
          summary: `
            Pagination: {
              currentPage: number;
              onNextPageClick: MouseEventHandler;
              onPrevPageClick: MouseEventHandler;
              onRowsPerPageChange: onRowsPerPageChange;
              rowsPerPage: number;
              rowsPerPageOptions: number[];
              totalFilteredRows?: number;
              totalRows: number;
            }
          `,
        },
      },
    },
    selection: {
      control: {type: 'object'},
      description: 'The selection options for the table.',
      table: {
        type: {
          summary: `
            Selection: {
              disableMultiPageSelection?: boolean;
              isRowSelected: (item: any) => boolean;
              onBulkSelectClick: MouseEventHandler;
              onRowSelectClick: (event: MouseEvent<HTMLInputElement>, value: any) => void;
              onSelectAllClick?: MouseEventHandler;
              onSelectNoneClick?: MouseEventHandler;
              totalRowsSelected: number;
            }
          `,
        },
      },
    },
    showCardWithoutHeading: {
      control: {type: 'boolean'},
      description:
        'If true, the table will render without a heading. Must be used along with `ariaLabel`.',
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
    subtitle: {
      control: {type: 'text'},
      description: 'The subtitle of the table.',
      table: {type: {summary: 'string'}},
    },
    title: {
      control: {type: 'text'},
      description: 'The title of the table.',
      table: {type: {summary: 'string'}},
    },
    titleIcon: {
      control: {type: 'select'},
      description: 'The title icon of the table.',
      mapping: ICONS,
      options: Object.keys(ICONS),
      table: {type: {summary: 'ReactNode'}},
    },
    transparent: {
      control: {type: 'boolean'},
      description: "If true, the table will inherit the parent element's background color.",
      table: {
        defaultValue: {summary: false},
        type: {summary: 'boolean'},
      },
    },
  },
  component: EzTable,
  title: 'Data Display/EzTable',
};

export default meta;
type Story = StoryObj<typeof EzTable>;

const defaultArgs = {
  actions: <EzButton>Add store</EzButton>,
  alignY: 'center',
  onSortClick: undefined,
  subtitle: 'Compared to the same period last year',
  title: 'All stores',
  titleIcon: <EzIcon icon={faCoffee} size="large" />,
} as EzTableProps;

const defaultJSX = EzTableExampleJSX(['store', 'total', 'average', 'actions'], defaultArgs);

export const Default: Story = {
  args: defaultArgs,
  parameters: {
    docs: {source: {code: defaultJSX}},
    playroom: {code: defaultJSX},
  },
  render: (args: EzTableProps) => (
    <EzCard>{EzTableExample(['store', 'total', 'average', 'actions'], args)}</EzCard>
  ),
};
