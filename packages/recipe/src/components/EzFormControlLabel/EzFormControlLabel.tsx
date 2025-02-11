import React, {forwardRef} from 'react';
import {EzFormControlLabelMui} from './Implementations';
import type {EzFormControlLabelProps, Ref} from './EzFormControlLabel.types';
import {isSuperFormControlLabel} from './utils';

const EzFormControlLabel = forwardRef<Ref, EzFormControlLabelProps>((props, ref) => {
  if (isSuperFormControlLabel(props)) {
    const {checked, control, disabled, icon, label, value} = props;
    return (
      <EzFormControlLabelMui
        ref={ref}
        checked={checked}
        control={control}
        disabled={disabled}
        icon={icon}
        label={label}
        value={value}
      />
    );
  }

  const {checked, control, disabled, helperText, label, labelIcons, value} = props;
  return (
    <EzFormControlLabelMui
      ref={ref}
      checked={checked}
      control={control}
      disabled={disabled}
      helperText={helperText}
      label={label}
      labelIcons={labelIcons}
      value={value}
    />
  );
});

EzFormControlLabel.displayName = 'EzFormControlLabel';

EzFormControlLabel.defaultProps = {
  disabled: false,
};

export default EzFormControlLabel;
