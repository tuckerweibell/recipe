import React, {useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzField from '../../EzField';
import {Props as EzFieldProps} from '../../EzField.types';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzField> = {
  argTypes: DefaultMeta.argTypes,
  component: EzField,
  title: 'Input/EzField/Password',
};

export default meta;
type Story = StoryObj<typeof EzField>;

const PasswordJSX = dedent`
  const [password, setPassword] = React.useState('secret-password');

  return (
    <EzField
      label="Password"
      onChange={event => setPassword(event.target.value)}
      type="password"
      value={password}
    />
  );
`;

export const Password: Story = {
  args: {
    ...Default.args,
    label: 'Password',
    type: 'password',
    value: undefined,
  },
  parameters: {
    docs: {source: {code: PasswordJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${PasswordJSX}
        })()}
      `,
    },
  },
  render: function PasswordRender(args: EzFieldProps) {
    const [password, setPassword] = useState('secret-password');

    return (
      <form>
        <input autoComplete="username" type="text" hidden />
        <EzField
          {...args}
          autoComplete="new-password"
          onChange={event => setPassword(event.target.value)}
          value={password}
        />
      </form>
    );
  },
};
