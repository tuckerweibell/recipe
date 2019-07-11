import React from 'react';
import Container from './EzRadioButton.styles';

import RadioButtonIcon from './RadioButtonIcon';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  onChange?: React.ChangeEventHandler;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
};

const EzRadioButton: React.FC<Props> = ({label, checked, disabled, onChange, ...rest}) => (
  <Container>
    <input
      checked={checked}
      type="radio"
      disabled={disabled}
      onChange={onChange}
      aria-label={label}
      {...rest}
    />
    <RadioButtonIcon checked={checked} />
  </Container>
);

export default EzRadioButton;
