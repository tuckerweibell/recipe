import React from 'react';
import Container from './EzRadioButton.styles';

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
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path d="M8 .5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15z" stroke="#CED4D9" />
        <path d="M8 4a4 4 0 1 1 0 8 4 4 0 1 1 0-8z" />
      </g>
    </svg>
  </Container>
);

export default EzRadioButton;
