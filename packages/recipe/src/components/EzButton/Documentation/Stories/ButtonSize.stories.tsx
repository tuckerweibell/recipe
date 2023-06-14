import {type Meta, type StoryObj} from '@storybook/react';
import {capitalize} from '@mui/material';
import dedent from 'ts-dedent';
import EzButton from '../../EzButton';
import DefaultMeta, {Default} from './Default.stories';
import {EzButtonMuiProps, EzButtonProps} from '../../EzButton.types';

const meta: Meta<typeof EzButton> = {
  argTypes: DefaultMeta.argTypes,
  component: EzButton,
  title: 'Input/EzButton/Button Size',
};

export default meta;
type Story = StoryObj<typeof EzButton>;

const playroomCode = (
  size: EzButtonMuiProps['size'],
  variant: EzButtonMuiProps['variant']
) => dedent`
  <EzButton size="${size}" variant="${variant}">
    ${capitalize(size)}
  </EzButton>
`;

export const FilledButtonSizeSmall: Story = {
  args: {
    ...Default.args,
    children: 'Small',
    size: 'small',
  } as EzButtonProps,
  parameters: {
    playroom: {code: playroomCode('small', 'filled')},
  },
};

export const FilledButtonSizeMedium: Story = {
  args: {
    ...Default.args,
    children: 'Medium',
    size: 'medium',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: dedent`
          <EzButton size="medium">
            Medium
          </EzButton>
        `,
      },
    },
    playroom: {code: playroomCode('medium', 'filled')},
  },
};

export const FilledButtonSizeLarge: Story = {
  args: {
    ...Default.args,
    children: 'Large',
    size: 'large',
  } as EzButtonProps,
  parameters: {
    playroom: {code: playroomCode('large', 'filled')},
  },
};

export const OutlinedButtonSizeSmall: Story = {
  args: {
    ...Default.args,
    children: 'Small',
    size: 'small',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    playroom: {code: playroomCode('small', 'outlined')},
  },
};

export const OutlinedButtonSizeMedium: Story = {
  args: {
    ...Default.args,
    children: 'Medium',
    size: 'medium',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: dedent`
          <EzButton
            size="medium"
            variant="outlined"
          >
            Medium
          </EzButton>
        `,
      },
    },
    playroom: {code: playroomCode('medium', 'outlined')},
  },
};

export const OutlinedButtonSizeLarge: Story = {
  args: {
    ...Default.args,
    children: 'Large',
    size: 'large',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    playroom: {code: playroomCode('large', 'outlined')},
  },
};

export const TextButtonSizeSmall: Story = {
  args: {
    ...Default.args,
    children: 'Small',
    size: 'small',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    playroom: {code: playroomCode('small', 'text')},
  },
};

export const TextButtonSizeMedium: Story = {
  args: {
    ...Default.args,
    children: 'Medium',
    size: 'medium',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: dedent`
          <EzButton
            size="medium"
            variant="text"
          >
            Medium
          </EzButton>
        `,
      },
    },
    playroom: {code: playroomCode('medium', 'text')},
  },
};

export const TextButtonSizeLarge: Story = {
  args: {
    ...Default.args,
    children: 'Large',
    size: 'large',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    playroom: {code: playroomCode('large', 'text')},
  },
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    children: 'Full width',
    fullWidth: true,
  } as EzButtonProps,
  parameters: {
    playroom: {
      code: dedent`
        <EzButton fullWidth>
          Full width
        </EzButton>
      `,
    },
  },
};
