import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import dedent from 'ts-dedent';
import EzButton from '../../EzButton';
import EzIcon from '../../../EzIcon';
import DefaultMeta, {Default} from './Default.stories';
import {EzButtonMuiProps, EzButtonProps} from '../../EzButton.types';

const meta: Meta<typeof EzButton> = {
  argTypes: DefaultMeta.argTypes,
  component: EzButton,
  title: 'Input/EzButton/Icon',
};

export default meta;
type Story = StoryObj<typeof EzButton>;

const startIconStoryCode = (variant: EzButtonMuiProps['variant']) => dedent`
  import {faStar} from '@fortawesome/free-solid-svg-icons';

  <EzButton startIcon={<EzIcon icon={faStar} />} variant="${variant}">Start icon</EzButton>  
`;

const endIconStoryCode = (variant: EzButtonMuiProps['variant']) => dedent`
  <EzButton endIcon={<EzIcon icon={faStar} />} variant="${variant}">End icon</EzButton>  
`;

const startIconPlayroomCode = (variant: EzButtonMuiProps['variant']) => dedent`
  {(() => {
    const {faStar} = require('@fortawesome/free-solid-svg-icons/faStar');

    return <EzButton startIcon={<EzIcon icon={faStar} />} variant="${variant}">Start icon</EzButton>;
  })()}  
`;

const endIconPlayroomCode = (variant: EzButtonMuiProps['variant']) => dedent`
  {(() => {
    const {faStar} = require('@fortawesome/free-solid-svg-icons/faStar');

    return <EzButton endIcon={<EzIcon icon={faStar} />} variant="${variant}">End icon</EzButton>;
  })()}  
`;

export const FilledStartIcon: Story = {
  args: {
    ...Default.args,
    startIcon: <EzIcon icon={faStar} />,
    children: 'Start icon',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: dedent`
          import {faStar} from '@fortawesome/free-solid-svg-icons';
        
        <EzButton startIcon={<EzIcon icon={faStar} />}>Start icon</EzButton>  
        `,
      },
    },
    playroom: {code: startIconPlayroomCode('filled')},
  },
};

export const FilledEndIcon: Story = {
  args: {
    ...Default.args,
    endIcon: <EzIcon icon={faStar} />,
    children: 'End icon',
  } as EzButtonProps,
  parameters: {
    docs: {source: {code: '<EzButton endIcon={<EzIcon icon={faStar} />}>End icon</EzButton>'}},
    playroom: {code: endIconPlayroomCode('filled')},
  },
};

export const OutlinedStartIcon: Story = {
  args: {
    ...Default.args,
    startIcon: <EzIcon icon={faStar} />,
    children: 'Start icon',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    docs: {source: {code: startIconStoryCode('outlined')}},
    playroom: {code: startIconPlayroomCode('outlined')},
  },
};

export const OutlinedEndIcon: Story = {
  args: {
    ...Default.args,
    endIcon: <EzIcon icon={faStar} />,
    children: 'End icon',
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    docs: {source: {code: endIconStoryCode('outlined')}},
    playroom: {code: endIconPlayroomCode('outlined')},
  },
};

export const TextStartIcon: Story = {
  args: {
    ...Default.args,
    startIcon: <EzIcon icon={faStar} />,
    children: 'Start icon',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    docs: {source: {code: startIconStoryCode('text')}},
    playroom: {code: startIconPlayroomCode('text')},
  },
};

export const TextEndIcon: Story = {
  args: {
    ...Default.args,
    endIcon: <EzIcon icon={faStar} />,
    children: 'End icon',
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    docs: {source: {code: endIconStoryCode('text')}},
    playroom: {code: endIconPlayroomCode('text')},
  },
};

export const InheritedIconSize: Story = {
  args: {
    ...Default.args,
    startIcon: (
      <div style={{fontSize: '10px', display: 'flex'}}>
        <EzIcon icon={faStar} size="inherit" />
      </div>
    ),
    children: 'Inherited icon size',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: dedent`
          import {faStar} from '@fortawesome/free-solid-svg-icons';

          <EzButton
            startIcon={
              <div style={{fontSize: '10px', display: 'flex'}}>
                <EzIcon icon={faStar} size="inherit" />
              </div>
            }
          >
            Inherited icon size
          </EzButton>
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          const {faStar} = require('@fortawesome/free-solid-svg-icons/faStar');

          return (
            <EzButton
              startIcon={
                <div style={{fontSize: '10px', display: 'flex'}}>
                  <EzIcon icon={faStar} size="inherit" />
                </div>
              }
            >
              Inherited icon size
            </EzButton>
          );
        })()}
      `,
    },
  },
};
