import React, {useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzField from '../../EzField';
import {Props as EzFieldProps} from '../../EzField.types';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzField> = {
  argTypes: DefaultMeta.argTypes,
  component: EzField,
  title: 'Input/EzField/Numeric',
};

export default meta;
type Story = StoryObj<typeof EzField>;

const NumericJSX = dedent`
  const [count, setCount] = React.useState(3);

  return (
    <EzField
      label="Count"
      onChange={event => setCount(event.target.value)}
      type="number"
      value={count}
    />
  );
`;

export const Numeric: Story = {
  args: {
    ...Default.args,
    label: 'Count',
    type: 'number',
    value: undefined,
  },
  parameters: {
    docs: {source: {code: NumericJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${NumericJSX}
        })()}
      `,
    },
  },
  render: function NumericRender(args: EzFieldProps) {
    const [count, setCount] = useState(3);

    return (
      <EzField
        {...args}
        onChange={event => setCount(Number(event.target.value))}
        value={String(count)}
      />
    );
  },
};
