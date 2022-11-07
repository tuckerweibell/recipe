import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {within, userEvent} from '@storybook/testing-library';
import {faCoffee, faStar} from '@fortawesome/free-solid-svg-icons';
import {expect} from '@storybook/jest';
import dedent from 'ts-dedent';
import EzChip from '../EzChip';
import EzIcon from '../../EzIcon';
import EzChipDocumentation from './EzChipDocumentation.mdx';

const icons = {
  faCoffee: <EzIcon icon={faCoffee} />,
  faStar: <EzIcon icon={faStar} />,
};

export default {
  component: EzChip,
  title: 'Data Display/EzChip',
  argTypes: {
    label: {
      control: 'text',
      table: {type: {summary: 'node'}},
    },
    color: {
      options: [
        'default',
        'primary',
        'secondary',
        'alert',
        'error',
        'info',
        'success',
        'warning',
        'common.yellow100',
        'common.alert90',
        'common.blue90',
      ],
      table: {type: {summary: 'EzThemeColors'}},
    },
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        labels: {
          faCoffee: 'Coffee',
          faStar: 'Star',
        },
      },
      table: {type: {summary: 'element'}},
    },
    className: {table: {disable: true}},
    onClick: {
      action: 'clicked',
      control: false,
      table: {type: {summary: 'func'}},
    },
    onDelete: {
      action: 'deleted',
      control: false,
      table: {type: {summary: 'func'}},
    },
    variant: {
      options: [
        'filled',
        'outlined',
        'alert',
        'attention',
        'error',
        'informational',
        'neutral',
        'success',
        'warning',
      ],
    },
  },
  parameters: {
    docs: {
      page: EzChipDocumentation,
    },
  },
} as ComponentMeta<typeof EzChip>;

const Template: ComponentStory<typeof EzChip> = args => <EzChip {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Filled',
  icon: undefined,
  onClick: undefined,
  onDelete: undefined,
};
Basic.parameters = {
  docs: {
    source: {
      code: dedent`
        <EzChip label="Filled" />
        <EzChip label="Outlined" variant="outlined" color="common.black" />
    `,
      language: 'jsx',
    },
  },
};

export const Status = Template.bind({});
Status.args = {
  ...Basic.args,
  label: 'Neutral',
  variant: 'neutral',
};
Status.parameters = {
  docs: {
    source: {
      code: dedent`
        <EzChip label="Neutral" variant="neutral" />
        <EzChip label="Success/Complete" variant="success" />
        <EzChip label="Informational" variant="informational" />
        <EzChip label="Needs Attention" variant="attention" />
        <EzChip label="Warning/Concern" variant="warning" />
        <EzChip label="Error/Destructive" variant="error" />
        <EzChip label="Alert/Reconfirm" variant="alert" />
    `,
      language: 'jsx',
    },
  },
};

export const Clickable = Template.bind({});
Clickable.args = {
  label: 'Clickable',
  onDelete: undefined,
};
Clickable.play = async ({args, canvasElement}) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(args.onClick).toHaveBeenCalled();
};
Clickable.parameters = {
  docs: {
    source: {
      code: `<EzChip label="Clickable" onClick={() => {}} />`,
      language: 'jsx',
    },
  },
};

export const Deletable = Template.bind({});
Deletable.args = {
  label: 'Deletable',
  onClick: undefined,
};
Deletable.play = async ({args, canvasElement}) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId('DeleteIcon'));
  await expect(args.onDelete).toHaveBeenCalled();
};
Deletable.parameters = {
  docs: {
    source: {
      code: dedent`
        <EzChip label="Deletable" onDelete={() => {}} />

        <EzChip label="Clickable and Deletable" onClick={() => {}} onDelete={() => {}} />
      `,
      language: 'jsx',
    },
  },
};

export const Colors = Template.bind({});
Colors.args = {
  ...Basic.args,
  label: 'Primary Color',
  color: 'primary',
};
Colors.parameters = {
  docs: {
    source: {
      code: dedent`
        <EzChip label="Primary Color" color="primary" />
        <EzChip label="Secondary Color" color="secondary" />
        <EzChip label="common.neutral130" color="common.neutral130" />
        <EzChip label="Outlined Error Color" color="error" variant="outlined" />
        <EzChip label="Outlined common.purple100" color="common.purple100" variant="outlined" />
      `,
      language: 'jsx',
    },
  },
};

export const Sizes = Template.bind({});
Sizes.args = {
  ...Basic.args,
  label: 'Small',
  size: 'small',
};
Sizes.parameters = {
  docs: {
    source: {
      code: dedent`
        <EzChip label="Small" size="small" />
        <EzChip label="Medium" size="medium" />
      `,
      language: 'jsx',
    },
  },
};

export const Icons = Template.bind({});
Icons.args = {
  ...Basic.args,
  label: 'Icon',
  icon: <EzIcon icon={faStar} />,
};
Icons.parameters = {
  docs: {
    source: {
      code: dedent`
        <EzChip label="Icon" icon={<EzIcon icon={faStar} />} />
        
        <EzChip
          label="Inherited Icon Size"
          icon={
            <div style={{fontSize: '10px', display: 'flex'}}>
              <EzIcon icon={faCoffee} size="inherit" />
            </div>
          }
        />
      `,
      language: 'jsx',
    },
  },
};
