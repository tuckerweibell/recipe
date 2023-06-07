import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {capitalize} from '@mui/material';
import dedent from 'ts-dedent';
import EzButton from '../../EzButton';
import DefaultMeta, {Default} from './Default.stories';
import {EzButtonMuiProps, EzButtonProps} from '../../EzButton.types';

const meta: Meta<typeof EzButton> = {
  argTypes: DefaultMeta.argTypes,
  component: EzButton,
  title: 'Input/EzButton/Font Size',
};

export default meta;
type Story = StoryObj<typeof EzButton>;

const storyCode = (fontSize: EzButtonMuiProps['fontSize'], variant: EzButtonMuiProps['variant']) =>
  `<EzButton fontSize="${fontSize}" variant="${variant}">${capitalize(fontSize)}</EzButton>`;

export const FilledFontSizeSmall: Story = {
  args: {
    ...Default.args,
    children: 'Small',
    fontSize: 'small',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('small', 'filled')},
  },
};

export const FilledFontSizeMedium: Story = {
  args: {
    ...Default.args,
    children: 'Medium',
    fontSize: 'medium',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: dedent`
          <EzButton fontSize="medium">
            Medium
          </EzButton>
        `,
      },
    },
    playroom: {code: storyCode('medium', 'filled')},
  },
};

export const FilledFontSizeLarge: Story = {
  args: {
    ...Default.args,
    children: 'Large',
    fontSize: 'large',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('large', 'filled')},
  },
};

export const FilledFontSizeInherit: Story = {
  args: {
    ...Default.args,
    children: 'Inherit',
    fontSize: 'inherit',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div style={{fontSize: '20px'}}>
            <EzButton fontSize="inherit">
              Inherit
            </EzButton>
          </div>
        `,
      },
    },
    playroom: {
      code: dedent`
        <div style={{fontSize: '20px'}}>
          <EzButton fontSize="inherit">
            Inherit
          </EzButton>
        </div>
      `,
    },
  },
  render: (args: EzButtonMuiProps) => (
    <div style={{fontSize: '20px'}}>
      <EzButton {...args} fontSize="inherit">
        Inherit
      </EzButton>
    </div>
  ),
};

export const OutlinedFontSizeSmall: Story = {
  args: {
    ...Default.args,
    children: 'Small',
    fontSize: 'small',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('small', 'outlined')},
  },
};

export const OutlinedFontSizeMedium: Story = {
  args: {
    ...Default.args,
    children: 'Medium',
    fontSize: 'medium',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: dedent`
          <EzButton
            fontSize="medium"
            variant="outlined"
          >
            Medium
          </EzButton>
        `,
      },
    },
    playroom: {code: storyCode('medium', 'outlined')},
  },
};

export const OutlinedFontSizeLarge: Story = {
  args: {
    ...Default.args,
    children: 'Large',
    fontSize: 'large',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('large', 'outlined')},
  },
};

export const OutlinedFontSizeInherit: Story = {
  args: {
    ...Default.args,
    children: 'Inherit',
    fontSize: 'inherit',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div style={{fontSize: '20px'}}>
            <EzButton fontSize="inherit" variant="outlined">
              Inherit
            </EzButton>
          </div>
        `,
      },
    },
    playroom: {
      code: dedent`
        <div style={{fontSize: '20px'}}>
          <EzButton fontSize="inherit" variant="outlined">
            Inherit
          </EzButton>
        </div>
      `,
    },
  },
  render: (args: EzButtonMuiProps) => (
    <div style={{fontSize: '20px'}}>
      <EzButton {...args} fontSize="inherit">
        Inherit
      </EzButton>
    </div>
  ),
};

export const TextFontSizeSmall: Story = {
  args: {
    ...Default.args,
    children: 'Small',
    fontSize: 'small',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('small', 'text')},
  },
};

export const TextFontSizeMedium: Story = {
  args: {
    ...Default.args,
    children: 'Medium',
    fontSize: 'medium',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: dedent`
          <EzButton
            fontSize="medium"
            variant="text"
          >
            Medium
          </EzButton>
        `,
      },
    },
    playroom: {code: storyCode('medium', 'text')},
  },
};

export const TextFontSizeLarge: Story = {
  args: {
    ...Default.args,
    children: 'Large',
    fontSize: 'large',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('large', 'text')},
  },
};

export const TextFontSizeInherit: Story = {
  args: {
    ...Default.args,
    children: 'Inherit',
    fontSize: 'inherit',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div style={{fontSize: '20px'}}>
            <EzButton fontSize="inherit" variant="text">
              Inherit
            </EzButton>
          </div>
        `,
      },
    },
    playroom: {
      code: dedent`
        <div style={{fontSize: '20px'}}>
          <EzButton fontSize="inherit" variant="text">
            Inherit
          </EzButton>
        </div>
      `,
    },
  },
  render: (args: EzButtonMuiProps) => (
    <div style={{fontSize: '20px'}}>
      <EzButton {...args} fontSize="inherit">
        Inherit
      </EzButton>
    </div>
  ),
};
