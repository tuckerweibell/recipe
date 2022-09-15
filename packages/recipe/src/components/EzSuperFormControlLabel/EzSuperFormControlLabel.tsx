import React, {forwardRef} from 'react';
import {EzSuperFormControlLabelMui} from './Implementations';
import {EzSuperFormControlLabelProps, Ref} from './EzSuperFormControlLabel.types';

const EzSuperFormControlLabel = forwardRef<Ref, EzSuperFormControlLabelProps>(
  ({control, disabled, icon, label, value}, ref) => (
    <EzSuperFormControlLabelMui
      control={control}
      disabled={disabled}
      icon={icon}
      label={label}
      value={value}
      ref={ref}
    />
  )
);

EzSuperFormControlLabel.displayName = 'EzSuperFormControlLabel';

EzSuperFormControlLabel.defaultProps = {
  disabled: false,
};

export default EzSuperFormControlLabel;
