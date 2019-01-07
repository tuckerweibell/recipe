import React from 'react';
import styled from '../../themes/styled';

const Label = styled.label`
  display: block;
  margin-top: ${({theme}) => theme.spacing.sm};

  input {
    margin-right: ${({theme}) => theme.spacing.xs};
  }
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
        selected: newSelection,
      },
    });
  }

  return (
    <>
      {options.map((choice, i) => {
        const {label, disabled, value} = choice;
        const input = React.createElement('input', {
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
        });

        return (
          <Label key={i}>
            {input}
            {label}
          </Label>
        );
      })}
    </>
  );
};
