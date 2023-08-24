import React, {useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzField from '../../EzField';
import {Props as EzFieldProps} from '../../EzField.types';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzField> = {
  argTypes: DefaultMeta.argTypes,
  component: EzField,
  title: 'Input/EzField/Email',
};

export default meta;
type Story = StoryObj<typeof EzField>;

const EmailJSX = dedent`
  const [email, setEmail] = React.useState('eat@ezcater.com');

  return (
    <EzField
      label="Email"
      onChange={event => setEmail(event.target.value)}
      type="email"
      value={email}
    />
  );
`;

export const Email: Story = {
  args: {
    ...Default.args,
    label: 'Email',
    type: 'email',
    value: undefined,
  },
  parameters: {
    docs: {source: {code: EmailJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${EmailJSX}
        })()}
      `,
    },
  },
  render: function EmailRender(args: EzFieldProps) {
    const [email, setEmail] = useState('eat@ezcater.com');

    return <EzField {...args} onChange={event => setEmail(event.target.value)} value={email} />;
  },
};
