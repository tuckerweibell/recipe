import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import dedent from 'ts-dedent';
import EzButton from '../../EzButton';
import EzIcon from '../../../EzIcon';
import DefaultMeta, {Default} from './Default.stories';
import {EzButtonProps} from '../../EzButton.types';

const meta: Meta<typeof EzButton> = {
  argTypes: DefaultMeta.argTypes,
  component: EzButton,
  title: 'Input/EzButton/Legacy',
};

export default meta;
type Story = StoryObj<typeof EzButton>;

export const LegacyPrimary: Story = {
  args: {
    ...Default.args,
    children: 'Primary',
    legacy: true,
    use: 'primary',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: '<EzButton legacy use="primary">Primary</EzButton>',
      },
    },
    playroom: {
      code: dedent`
        <EzButton legacy use="primary">
          Primary
        </EzButton>
      `,
    },
  },
};

export const LegacySecondary: Story = {
  args: {
    ...Default.args,
    children: 'Secondary',
    legacy: true,
    use: 'secondary',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: '<EzButton legacy use="secondary">Secondary</EzButton>',
      },
    },
    playroom: {
      code: dedent`
        <EzButton legacy use="secondary">
          Secondary
        </EzButton>
      `,
    },
  },
};

export const LegacyTertiary: Story = {
  args: {
    ...Default.args,
    children: 'Tertiary',
    legacy: true,
    use: 'tertiary',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: '<EzButton legacy use="tertiary">Tertiary</EzButton>',
      },
    },
    playroom: {
      code: dedent`
        <EzButton legacy use="tertiary">
          Tertiary
        </EzButton>
      `,
    },
  },
};

export const LegacyTertiaryWithIcon: Story = {
  args: {
    ...Default.args,
    children: 'Tertiary with icon',
    icon: <EzIcon icon={faStar} />,
    legacy: true,
    use: 'tertiary',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: dedent`
          <EzButton legacy icon={<EzIcon icon={faStar} />} use="tertiary">
            Tertiary with icon
          </EzButton>'
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          const {faStar} = require('@fortawesome/free-solid-svg-icons/faStar');
      
          return (
            <EzButton legacy icon={<EzIcon icon={faStar} />} use="tertiary">
              Tertiary with icon
            </EzButton>
          );
        })()}
      `,
    },
  },
};

export const LegacyDestructive: Story = {
  args: {
    ...Default.args,
    children: 'Destructive',
    destructive: true,
    legacy: true,
    use: 'primary',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: '<EzButton destructive legacy use="primary">Destructive</EzButton>',
      },
    },
    playroom: {
      code: '<EzButton destructive legacy use="primary">Destructive</EzButton>',
    },
  },
};

export const LegacyDisabled: Story = {
  args: {
    ...Default.args,
    children: 'Disabled',
    disabled: true,
    legacy: true,
    use: 'primary',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: '<EzButton disabled legacy use="primary">Disabled</EzButton>',
      },
    },
    playroom: {
      code: '<EzButton disabled legacy use="primary">Disabled</EzButton>',
    },
  },
};

export const LegacyDisabledWithTooltip: Story = {
  args: {
    ...Default.args,
    children: 'Disabled with tooltip',
    disabled: true,
    disabledMessage: 'Disabled message',
    legacy: true,
    use: 'primary',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: dedent`
          <EzButton disabled disabledMessage="Disabled message" legacy use="primary">
            Disabled with tooltip
          </EzButton>
        `,
      },
    },
    playroom: {
      code: dedent`
        <EzButton disabled disabledMessage="Disabled message" legacy use="primary">
          Disabled with tooltip
        </EzButton>
      `,
    },
  },
};

export const LegacyLoading: Story = {
  args: {
    ...Default.args,
    children: 'Loading',
    legacy: true,
    loading: true,
    use: 'primary',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: '<EzButton legacy loading use="primary">Loading</EzButton>',
      },
    },
    playroom: {
      code: '<EzButton legacy loading use="primary">Loading</EzButton>',
    },
  },
};
