import React, {forwardRef} from 'react';
import {EzFormControlLabelMui} from './Implementations';
import type {EzFormControlLabelProps, Ref} from './EzFormControlLabel.types';

const EzFormControlLabel = forwardRef<Ref, EzFormControlLabelProps>(
  ({control, disabled, helperText, icon, label, labelIcons, value}, ref) => (
    <EzFormControlLabelMui
      ref={ref}
      control={control}
      disabled={disabled}
      helperText={helperText}
      icon={icon}
      label={label}
      labelIcons={labelIcons}
      value={value}
    />
  )
);

EzFormControlLabel.displayName = 'EzFormControlLabel';

EzFormControlLabel.defaultProps = {
  disabled: false,
};

export default EzFormControlLabel;
