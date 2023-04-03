import React, {forwardRef} from 'react';
import {EzCheckboxMui} from './Implementations';
import {EzCheckboxProps, Ref} from './EzCheckbox.types';

const EzCheckbox = forwardRef<Ref, EzCheckboxProps>((props, ref) => {
  const {
    ariaLabel,
    checked,
    color,
    defaultChecked,
    disabled,
    indeterminate,
    name,
    onBlur,
    onChange,
    onFocus,
    size,
    value,
    variant,
  } = props;
  return (
    <EzCheckboxMui
      ref={ref}
      ariaLabel={ariaLabel}
      checked={checked}
      color={color}
      defaultChecked={defaultChecked}
      disabled={disabled}
      indeterminate={indeterminate}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      size={size}
      value={value}
      variant={variant}
    />
  );
});

EzCheckbox.displayName = 'EzCheckbox';

EzCheckbox.defaultProps = {
  color: 'primary',
  disabled: false,
  size: 'medium',
  variant: 'outlined',
};

export default EzCheckbox;
