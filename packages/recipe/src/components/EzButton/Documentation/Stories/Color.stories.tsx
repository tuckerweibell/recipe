import {type Meta, type StoryObj} from '@storybook/react';
import {capitalize} from '@mui/material';
import dedent from 'ts-dedent';
import EzButton from '../../EzButton';
import DefaultMeta, {Default} from './Default.stories';
import {EzButtonMuiProps, EzButtonProps} from '../../EzButton.types';
import {EzThemeColors} from '../../../../themes';

const meta: Meta<typeof EzButton> = {
  argTypes: DefaultMeta.argTypes,
  component: EzButton,
  title: 'Input/EzButton/Color',
};

export default meta;
type Story = StoryObj<typeof EzButton>;

const storyCode = (color: EzThemeColors, variant: EzButtonMuiProps['variant']) =>
  dedent`
    <EzButton
      color="${color}"
      variant="${variant}"
    >
      ${capitalize(color)}
    </EzButton>
  `;

export const FilledPrimaryColor: Story = {
  args: {
    ...Default.args,
    children: 'Primary',
    color: 'primary',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
        <EzButton color="primary">
          Primary
        </EzButton>
      `,
      },
    },
    playroom: {code: storyCode('primary', 'filled')},
  },
};

export const FilledSecondaryColor: Story = {
  args: {
    ...Default.args,
    children: 'Secondary',
    color: 'secondary',
  },
  parameters: {
    playroom: {code: storyCode('secondary', 'filled')},
  },
};

export const FilledNeutralColor: Story = {
  args: {
    ...Default.args,
    children: 'Neutral',
    color: 'neutral',
  },
  parameters: {
    playroom: {code: storyCode('neutral', 'filled')},
  },
};

export const FilledErrorColor: Story = {
  args: {
    ...Default.args,
    children: 'Error',
    color: 'error',
  },
  parameters: {
    playroom: {code: storyCode('error', 'filled')},
  },
};

export const FilledWarningColor: Story = {
  args: {
    ...Default.args,
    children: 'Warning',
    color: 'warning',
  },
  parameters: {
    playroom: {code: storyCode('warning', 'filled')},
  },
};

export const FilledInfoColor: Story = {
  args: {
    ...Default.args,
    children: 'Info',
    color: 'info',
  },
  parameters: {
    playroom: {code: storyCode('info', 'filled')},
  },
};

export const FilledSuccessColor: Story = {
  args: {
    ...Default.args,
    children: 'Success',
    color: 'success',
  },
  parameters: {
    playroom: {code: storyCode('success', 'filled')},
  },
};

export const FilledCommonColor: Story = {
  args: {
    ...Default.args,
    children: 'common.red100',
    color: 'common.red100',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzButton
          color="common.red100"
          variant="filled"
        >
        common.red100
        </EzButton>
      `,
    },
  },
};

export const OutlinedPrimaryColor: Story = {
  args: {
    ...Default.args,
    children: 'Primary',
    color: 'primary',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: dedent`
        <EzButton
          color="primary"
          variant="outlined"
        >
          Primary
        </EzButton>
      `,
      },
    },
    playroom: {code: storyCode('primary', 'outlined')},
  },
};

export const OutlinedSecondaryColor: Story = {
  args: {
    ...Default.args,
    children: 'Secondary',
    color: 'secondary',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('secondary', 'outlined')},
  },
};

export const OutlinedNeutralColor: Story = {
  args: {
    ...Default.args,
    children: 'Neutral',
    color: 'neutral',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('neutral', 'outlined')},
  },
};

export const OutlinedErrorColor: Story = {
  args: {
    ...Default.args,
    children: 'Error',
    color: 'error',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('error', 'outlined')},
  },
};

export const OutlinedWarningColor: Story = {
  args: {
    ...Default.args,
    children: 'Warning',
    color: 'warning',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('warning', 'outlined')},
  },
};

export const OutlinedInfoColor: Story = {
  args: {
    ...Default.args,
    children: 'Info',
    color: 'info',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('info', 'outlined')},
  },
};

export const OutlinedSuccessColor: Story = {
  args: {
    ...Default.args,
    children: 'Success',
    color: 'success',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('success', 'outlined')},
  },
};

export const OutlinedCommonColor: Story = {
  args: {
    ...Default.args,
    children: 'common.red100',
    color: 'common.red100',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    playroom: {
      code: dedent`
        <EzButton
          color="common.red100"
          variant="outlined"
        >
        common.red100
        </EzButton>
      `,
    },
  },
};

export const TextPrimaryColor: Story = {
  args: {
    ...Default.args,
    children: 'Primary',
    color: 'primary',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: dedent`
        <EzButton
          color="primary"
          variant="text"
        >
          Primary
        </EzButton>
      `,
      },
    },
    playroom: {code: storyCode('primary', 'text')},
  },
};

export const TextSecondaryColor: Story = {
  args: {
    ...Default.args,
    children: 'Secondary',
    color: 'secondary',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('secondary', 'text')},
  },
};

export const TextNeutralColor: Story = {
  args: {
    ...Default.args,
    children: 'Neutral',
    color: 'neutral',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('neutral', 'text')},
  },
};

export const TextErrorColor: Story = {
  args: {
    ...Default.args,
    children: 'Error',
    color: 'error',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('error', 'text')},
  },
};

export const TextWarningColor: Story = {
  args: {
    ...Default.args,
    children: 'Warning',
    color: 'warning',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('warning', 'text')},
  },
};

export const TextInfoColor: Story = {
  args: {
    ...Default.args,
    children: 'Info',
    color: 'info',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('info', 'text')},
  },
};

export const TextSuccessColor: Story = {
  args: {
    ...Default.args,
    children: 'Success',
    color: 'success',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('success', 'text')},
  },
};

export const TextCommonColor: Story = {
  args: {
    ...Default.args,
    children: 'common.red100',
    color: 'common.red100',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    playroom: {
      code: dedent`
        <EzButton
          color="common.red100"
          variant="text"
        >
        common.red100
        </EzButton>
      `,
    },
  },
};
