import React, {forwardRef} from 'react';
import {EzRadioMui} from './Implementations';
import {EzRadioProps, Ref} from './EzRadio.types';

const EzRadio = forwardRef<Ref, EzRadioProps>(
  ({ariaLabel, checked, color, disabled, name, onChange, size, value, variant}, ref) => {
    return (
      <EzRadioMui
        ref={ref}
        ariaLabel={ariaLabel}
        checked={checked}
        color={color}
        disabled={disabled}
        name={name}
        onChange={onChange}
        size={size}
        value={value}
        variant={variant}
      />
    );
  }
);

EzRadio.displayName = 'EzRadio';

EzRadio.defaultProps = {
  color: 'primary',
  disabled: false,
  name: 'radio-button',
  size: 'medium',
  variant: 'outlined',
};

export default EzRadio;
