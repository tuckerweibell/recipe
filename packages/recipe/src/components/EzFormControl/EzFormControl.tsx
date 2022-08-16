import React, {forwardRef} from 'react';
import {EzFormControlMui} from './Implementations';
import {EzFormControlProps, Ref} from './EzFormControl.types';

const EzFormControl = forwardRef<Ref, EzFormControlProps>(({children}, ref) => (
  <EzFormControlMui ref={ref}>{children}</EzFormControlMui>
));

EzFormControl.displayName = 'EzFormControl';

export default EzFormControl;
