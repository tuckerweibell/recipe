import React from 'react';
import {StyledOptions, Label} from './EzChoice.styles';
import EzCheckbox from '../EzCheckbox';
import EzRadioButton from '../EzRadioButton';
import EzLayout from '../EzLayout';

const Options = ({bordered, children}) => {
  if (!bordered) return <StyledOptions>{children}</StyledOptions>;

  return <EzLayout layout="basic">{children}</EzLayout>;
};

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
    <Options bordered={props.bordered}>
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
          <Label key={i} bordered={props.bordered} isDisabled={disabled}>
            {input}
            {label}
          </Label>
        );
      })}
    </Options>
  );
};
