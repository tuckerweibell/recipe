import React, {useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzField from '../../EzField';
import {Props as EzFieldProps} from '../../EzField.types';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzField> = {
  argTypes: DefaultMeta.argTypes,
  component: EzField,
  title: 'Input/EzField/Custom',
};

export default meta;
type Story = StoryObj<typeof EzField>;

const CustomJSX = dedent`
  const [inputValue, setInputValue] = React.useState('Big Bird');

  const CustomComponent = ({value, onChange, className}) => (
    <input className={className} value={value} onChange={onChange} />
  );

  return (
    <EzField
      label="First name"
      onChange={event => setInputValue(event.target.value)}
      type={CustomComponent}
      value={inputValue}
    />
  );
`;

export const Custom: Story = {
  args: {
    ...Default.args,
    label: 'First name',
  },
  parameters: {
    docs: {source: {code: CustomJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${CustomJSX}
        })()}
      `,
    },
  },
  render: function CustomRender(args: EzFieldProps) {
    const [inputValue, setInputValue] = useState('Big Bird');

    const CustomComponent = ({value, onChange, className}) => (
      <input className={className} onChange={onChange} value={value} />
    );

    return (
      <EzField
        {...args}
        onChange={event => setInputValue(event.target.value)}
        type={CustomComponent}
        value={inputValue}
      />
    );
  },
};
