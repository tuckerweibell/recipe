import React, {forwardRef} from 'react';
import {EzFormControlMui} from './Implementations';
import {EzFormControlProps, Ref} from './EzFormControl.types';

const EzFormControl = forwardRef<Ref, EzFormControlProps>(
  ({children, error, fullWidth = false}, ref) => (
    <EzFormControlMui ref={ref} error={error} fullWidth={fullWidth}>
      {children}
    </EzFormControlMui>
  )
);

EzFormControl.displayName = 'EzFormControl';

export default EzFormControl;
