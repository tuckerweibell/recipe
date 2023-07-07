import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {userEvent, within} from '@storybook/testing-library';
import {expect} from '@storybook/jest';
import {Coffee, WaterGlass, WineGlass} from '@ezcater/icons';
import dedent from 'ts-dedent';
import EzCheckbox from '../../EzCheckbox';
import EzFormControlLabel from '../../../EzFormControlLabel';
import EzIcon from '../../../EzIcon';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzCheckbox> = {
  argTypes: DefaultMeta.argTypes,
  component: EzCheckbox,
  title: 'Input/EzCheckbox/Label',
};

export default meta;
type Story = StoryObj<typeof EzCheckbox>;

export const Label: Story = {
  args: {
    ...Default.args,
    defaultChecked: true,
    name: 'label',
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzFormControlLabel
          control={<EzCheckbox defaultChecked name="label" />}
          label="Label"
          value="label"
        />
      `,
    },
  },
  render: args => (
    <EzFormControlLabel control={<EzCheckbox {...args} />} label="Label" value="label" />
  ),
  play: ({canvasElement}) => {
    const canvas = within(canvasElement);
    expect(canvas.getAllByLabelText('Label')[0]).toBeChecked();
    userEvent.click(canvas.getAllByRole('checkbox')[0]);
    expect(canvas.getAllByLabelText('Label')[0]).not.toBeChecked();
    userEvent.click(canvas.getAllByRole('checkbox')[0]);
  },
};

const LabelWithIconsJSX = dedent`
  <EzFormControlLabel
    control={<EzCheckbox defaultChecked name="label-with-icons" />}
    label="Label with icons"
    labelIcons={[
      <EzIcon key="coffee" icon={Coffee} size="small" />,
      <EzIcon key="water" icon={WaterGlass} size="small" />,
      <EzIcon key="wine" icon={WineGlass} size="small" />,
    ]}
    value="label-with-icons"
  />
`;

export const LabelWithIcons: Story = {
  args: {
    ...Default.args,
    defaultChecked: true,
    name: 'label-with-icons',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          import {Coffee, WaterGlass, WineGlass} from '@ezcater/icons';

          ${LabelWithIconsJSX}
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          const {Coffee, WaterGlass, WineGlass} = require('@ezcater/icons');

          return (
            ${LabelWithIconsJSX}
          );
        })()}
      `,
    },
  },
  render: args => (
    <EzFormControlLabel
      control={<EzCheckbox {...args} />}
      label="Label with icons"
      labelIcons={[
        <EzIcon key="coffee" icon={Coffee} size="small" />,
        <EzIcon key="water" icon={WaterGlass} size="small" />,
        <EzIcon key="wine" icon={WineGlass} size="small" />,
      ]}
      value="label-with-icons"
    />
  ),
};
