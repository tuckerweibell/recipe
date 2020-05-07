import React from 'react';
import {css} from '@emotion/core';
import EzCheckbox from '../EzCheckbox';
import styled from '../../themes/styled';
import EzRadioButton from '../EzRadioButton';

const Options = styled.div`
  > label + label {
    margin-top: ${({theme}) => theme.spacing.xs};
  }
`;

const Label = styled.label<any>`
  display: flex;
  margin-top: ${({theme}) => theme.spacing.xs};

  > * {
    margin-right: ${({theme}) => theme.spacing.xs};
  }

  ${({isDisabled}) =>
    isDisabled &&
    css`
      cursor: default;
      opacity: 0.45;
      pointer-events: none;
    `}
`;

export default props => {
  const {type, name: fieldName, value: selected = [], options, onChange, onFocus, onBlur} = props;

  const multiple = type === 'checkbox';
  const name = multiple ? `${fieldName}[]` : fieldName;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {value, checked} = e.currentTarget;

    const newSelection = multiple
      ? checked
        ? [value].concat(selected)
        : selected.filter(s => s !== value)
      : value;

    onChange({
      ...e,
      target: {
        ...props,
        checked,
        value: newSelection,
      },
    });
  }

  return (
    <Options>
      {options.map((choice, i) => {
        const {label, disabled, value} = choice;
        const inputProps = {
          checked:
            'value' in props
              ? multiple
                ? selected.indexOf(value) >= 0
                : value === selected
              : undefined,
          disabled,
          label,
          name,
          onChange: handleChange,
          onFocus,
          onBlur,
          type,
          value,
        };
        const input = React.createElement(multiple ? EzCheckbox : EzRadioButton, inputProps);

        return (
          <Label key={i} isDisabled={disabled}>
            {input}
            {label}
          </Label>
        );
      })}
    </Options>
  );
};
