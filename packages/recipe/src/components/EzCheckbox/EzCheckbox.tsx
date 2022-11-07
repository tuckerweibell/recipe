import React, {forwardRef} from 'react';
import {EzCheckboxMui, EzCheckboxLegacy} from './Implementations';
import {EzCheckboxProps, Ref} from './EzCheckbox.types';

const EzCheckbox = forwardRef<Ref, EzCheckboxProps>((props, ref) => {
  if (props.legacy === true) {
    const {legacy, ...remainingProps} = props;
    return <EzCheckboxLegacy ref={ref} {...remainingProps} />;
  }

  const {
    ariaLabel,
    checked,
    color,
    defaultChecked,
    disabled,
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
  ariaLabel: 'checkbox',
  color: 'primary',
  disabled: false,
  legacy: false, // legacy, deprecated
  size: 'medium',
  variant: 'outlined',
};

export default EzCheckbox;
