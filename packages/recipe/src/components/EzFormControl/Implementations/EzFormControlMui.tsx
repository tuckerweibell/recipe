import React, {forwardRef} from 'react';
import FormControl from '@mui/material/FormControl';
import {EzFormControlProps, Ref} from '../EzFormControl.types';

const EzFormControlMui = forwardRef<Ref, EzFormControlProps>(({children, ...props}, ref) => (
  <FormControl {...props} ref={ref}>
    {children}
  </FormControl>
));

EzFormControlMui.displayName = 'EzFormControlMui';

export default EzFormControlMui;
